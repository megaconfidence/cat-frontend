const ide = document.querySelector('.ide');
const signIn = document.querySelector('.sign-in');

function switchUI() {
	if (localStorage.getItem('name')) {
		signIn.classList.add('hidden');
		ide.classList.remove('hidden');
		(async () => await getScripts())();
	} else {
		signIn.classList.remove('hidden');
		ide.classList.add('hidden');
	}
}

async function handleSignIn(e) {
	e.preventDefault();
	const data = new FormData(e.target);
	const res = await fetch('/api/signin', {
		method: 'post',
		body: JSON.stringify(Object.fromEntries(data)),
	});

	localStorage.setItem('name', (await res.json()).name);
	switchUI();
}
document.querySelector('form').addEventListener('submit', handleSignIn);

document.querySelector('.sign-out').addEventListener('click', () => {
	localStorage.removeItem('name');
	switchUI();
});

async function upload() {
	const info = document.querySelector('.info');
	const scriptName = document.querySelector('.script-name').value;
	const script = editor.getValue();

	info.innerHTML = 'Uploading...';

	const res = await fetch(`/api/script/${scriptName}`, {
		method: 'put',
		headers: { 'Content-Type': 'application/json', 'X-Customer-Name': localStorage.getItem('name') },
		body: JSON.stringify({ script }),
	});

	info.innerHTML = await res.text();
	await getScripts();
}
document.querySelector('.upload-btn').addEventListener('click', upload);

async function getScripts() {
	const res = await fetch('/api/script', {
		method: 'get',
		headers: { 'X-Customer-Name': localStorage.getItem('name') },
	});
	scripts = (await res.json()).map((s) => `<li><a href="${location.origin + '/api/dispatch/' + s.id}" target="_blank">${s.id}</a></li>`);
	document.querySelector('.scripts-list').innerHTML = scripts.join('');
}

window.onload = switchUI;
