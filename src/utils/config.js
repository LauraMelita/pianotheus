export const siteConfig = {
  collections: [
    {
      collection: 'movies',
      routeParam: 'title',
      searchKeys: ['title'],
      filterOptions: ['composer', 'year'],
    },
    {
      collection: 'tv-shows',
      routeParam: 'title',
      searchKeys: ['title'],
      filterOptions: ['composer', 'year'],
    },
    {
      collection: 'video-games',
      routeParam: 'title',
      searchKeys: ['title'],
      filterOptions: ['composer', 'year'],
    },
    {
      collection: 'classical',
      routeParam: 'composer',
      searchKeys: ['composer'],
      filterOptions: ['epoch'],
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
    titleMap: {
      '/': 'MIDI Piano Collection',
      '/register': 'Sign Up',
      '/sign-in': 'Sign In',
      '/movies': 'Movies',
      '/tv-shows': 'TV Shows',
      '/video-games': 'Video Games',
      '/classical': 'Classical Music',
    },
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
  infiniteScroll: {
    resultsPerPage: 10,
  },
};
