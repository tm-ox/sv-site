export const load = () => {
	const learnModules = import.meta.glob('/src/routes/learn/*/info.md');
	const learnNavLinks = Object.keys(learnModules)
		.map((path) => {
			const href = path.replace('/src/routes', '').replace('/info.md', ''); // e.g., /learn/01
			const title = href.split('/').pop() ?? '';
			// Add a 'number' property for sorting
			return { title, href, number: parseInt(title, 10) };
		})
		.filter((item) => !isNaN(item.number)) // Numbered items
		.sort((a, b) => a.number - b.number) // Sort numerically
		.map(({ title, href }) => ({ title, href })); // Remove the temporary 'number' property
	// Add the main 'Learn' page link to the beginning of the list
	learnNavLinks.unshift({ title: 'Learn', href: '/learn' });

	return {
		nav: {
			links: [
				{ title: 'Home', href: '/' },
				{ title: 'About', href: '/about' },
				{ title: 'Blog', href: '/blog' },
				{ title: 'Learn', href: '/learn' }
			]
		},
		learnNav: {
			links: learnNavLinks
		}
	};
};
