import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=50');
	const articles = await response.json();

	return {
		articles: articles
	};
};
