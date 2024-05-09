import * as monacoEditor from 'https://cdn.jsdelivr.net/npm/monaco-editor@0.48.0/+esm';

const editorContainer = document.querySelector('.editor-container');
const js =
	'import { meow } from "./platform_module.mjs"; \
\nexport default { \
\n	async fetch(request, env, ctx) { \
\n		 const html = `<!DOCTYPE html> \
\n		<body style="color: white;background: black;"> \
\n		  <h1>Hello, ${meow}</h1> \
\n		  <img style="width: 100vw" src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg" /> \
\n		</body>`; \
\n		return new Response(html, {headers: {"content-type": "text/html;charset=UTF-8"}}); \
\n	} \
\n};';

const editor = monacoEditor.editor.create(editorContainer, {
	value: js,
	language: 'javascript',
});

window.editor = editor;

// editor.onDidChangeModelContent((event) => {
// 	console.log(editor.getValue(), event);
// });
