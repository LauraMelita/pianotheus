export const siteConfig = {
  collections: [
    {
      collection: 'movies',
      title: 'Movies',
      routeParam: 'title',
      searchKeys: ['title'],
      filterKeys: [
        { name: 'Composers', key: 'composer' },
        { name: 'Year', key: 'year' },
      ],
    },
    {
      collection: 'tv-shows',
      title: 'TV Shows',
      routeParam: 'title',
      searchKeys: ['title'],
      filterKeys: [{ name: 'Composers', key: 'composer' }],
    },
    {
      collection: 'video-games',
      title: 'Video Games',
      routeParam: 'title',
      searchKeys: ['title'],
      filterKeys: [
        { name: 'Composers', key: 'composer' },
        { name: 'Year', key: 'year' },
      ],
    },
    {
      collection: 'classical',
      title: 'Classical Music',
      routeParam: 'composer',
      searchKeys: ['composer'],
      filterKeys: [{ name: 'Epoch', key: 'epoch' }],
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
