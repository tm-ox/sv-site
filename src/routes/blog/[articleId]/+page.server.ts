// import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async (event) => {
// 	const { articleId } = event.params;

// 	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`);
// 	const responseData = await response.json();

// 	return {
// 		title: responseData.title,
// 		body: responseData.body
// 	};
// };
