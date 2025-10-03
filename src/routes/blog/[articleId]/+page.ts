import type { Load } from '@sveltejs/kit';

export const load: Load = async (event) => {
	const { articleId } = event.params;

	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10/${articleId}`);
	const responseData = await response.json();

	return {
		title: responseData.title,
		body: responseData.body
	};
};
