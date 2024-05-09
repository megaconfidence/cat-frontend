export default {
	async fetch(request, env, context) {
		const url = new URL(request.url);
		if (url.pathname.startsWith('/api/')) {
			return await fetch(env.API_ORIGIN + url.pathname, request);
		}
		return env.ASSETS.fetch(request);
	},
};
