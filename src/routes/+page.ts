export const load = () => {
  const heroActions = [
          { title: 'Services', href: '/' },
          { title: 'Contact', href: '/' }
      ];

  return {
    meta: {
      title: 'Home',
      desc: 'Home page.'
    },
    hero: {
      title: 'HERO',
      dec: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ab atque doloremque, harum sed cupiditate unde dignissimos error tempore veniam doloribus ducimus, quas cumque omnis necessitatibus sapiente corrupti exercitationem placeat?',
      heroActions
    },
    section01: {
      title: 'Section'
    }
  };
};
