export const siteConfig = {
  collections: [
    { name: 'movies', orderBy: 'title', path: '/movies', params: 'title' },
    { name: 'tv-shows', orderBy: 'title', path: '/tv-shows', params: 'title' },
    {
      name: 'video-games',
      orderBy: 'title',
      path: '/video-games',
      params: 'title',
    },
    {
      name: 'classical',
      orderBy: 'composer',
      path: '/classical',
      params: 'composer',
    },
  ],

  navigation: {
    links: [
      { path: '/', navLink: 'Home', icon: 'home' },
      { path: '/movies', navLink: 'Movies', icon: 'cinema' },
      { path: '/tv-shows', navLink: 'TV Shows', icon: 'tv' },
      { path: '/video-games', navLink: 'Video Games', icon: 'video-games' },
      { path: '/classical', navLink: 'Classical Music', icon: 'classical' },
    ],
  },

  home: {
    categories: [
      {
        category: 'Movies',
        backgroundImage: 'movies_bg.webp',
        popOutImage: 'movies_popout.webp',
      },
      {
        category: 'TV Shows',
        backgroundImage: 'tv-shows_bg.webp',
        popOutImage: 'tv-shows_popout.webp',
      },
      {
        category: 'Video Games',
        backgroundImage: 'video-games_bg.webp',
        popOutImage: 'video-games_popout.webp',
      },
      {
        category: 'Classical',
        backgroundImage: 'classical_bg.webp',
        popOutImage: 'classical_popout.webp',
      },
    ],
  },
};
