function toString(value) {
	return value?.toString() || 'null';
}
function BuildTable(name, dataRows) {
	const container = (value) => `<div class="data-container"><h3>${name}</h3>${toString(value)}</div>`;
	if (!dataRows?.length) {
		return container('no data');
	}
	const columns = Object.keys(dataRows[0]);
	const makeColumnsHead = (values) => values.map((value) => `<th>${toString(value)}</th>`).join('');
	const makeColumnsData = (values) => values.map((value) => `<td>${toString(value)}</td>`).join('');
	const makeRow = (value) => `<tr>${toString(value)}</tr>`;
	const table = `<table class="data-table">${[
		makeRow(makeColumnsHead(columns)),
		dataRows.map((value) => makeRow(makeColumnsData(Object.values(value)))).join(''),
	].join('')}</table>`;
	return container(table);
}

async function init() {
	const content = document.querySelector('.content');
	const res = await fetch('/api/dispatch');
	const { name, data } = await res.json();
	const table = BuildTable(
		name,
		data.map((d) => ({ id: d.id, created_on: d.created_on, tags: d.tags })),
	);

	content.innerHTML = table;
}
(async () => await init())();
