// import { redirect } from '@sveltejs/kit';

export async function load({ cookies, request }) {
	let theme = cookies.get('theme'); // Get theme from a cookie

	if (!theme) {
		// Fallback to system preference if no cookie exists
		const preferDark = request.headers.get('sec-ch-prefers-color-scheme')?.includes('dark');
		theme = preferDark ? 'dark' : 'light';
	}

	return {
		theme
	};
}
