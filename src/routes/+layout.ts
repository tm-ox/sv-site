export const load = () => {
	const links = [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' }
	];
	return {
		nav: {
			links
		}
	};
};
