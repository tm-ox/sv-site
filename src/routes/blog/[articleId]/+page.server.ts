// import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = async (event) => {
// 	const { articleId } = event.params;

// 	// Fetch all articles to find next/prev
// 	const allArticlesResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const allArticles = await allArticlesResponse.json();

// 	const currentIndex = allArticles.findIndex((article) => article.id.toString() === articleId);

// 	const currentArticle = allArticles[currentIndex];

// 	const prevArticleId = currentIndex > 0 ? allArticles[currentIndex - 1].id : null;
// 	const nextArticleId =
// 		currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1].id : null;

// 	return {
// 		article: {
// 			id: currentArticle.id,
// 			title: currentArticle.title,
// 			body: currentArticle.body
// 		},
// 		prevArticleId,
// 		nextArticleId
// 	};
// };
