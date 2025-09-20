export const load = () => {
  const heroActions = [
          { title: 'Services', href: '/' },
          { title: 'Signup', href: '#signup' }
      ];

  return {
    meta: {
      // title: 'Home',
      // desc: 'Home page.'
    },
    hero: {
      title: 'HERO',
      dec: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero ab atque doloremque, harum sed cupiditate unde dignissimos error tempore veniam doloribus ducimus, quas cumque omnis necessitatibus sapiente corrupti exercitationem placeat?',
      heroActions
    },
    signup: {
      title: 'Signup',
      id: 'signup'
    }
  };
};
