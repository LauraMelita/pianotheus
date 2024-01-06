export const siteConfig = {
  collections: [
    {
      collection: 'movies',
      orderCollectionBy: 'title',
      collectionTitle: 'Movies',
      filterDocumentBy: 'title',
    },
    {
      collection: 'tv-shows',
      orderCollectionBy: 'title',
      collectionTitle: 'TV Shows',
      filterDocumentBy: 'title',
    },
    {
      collection: 'video-games',
      orderCollectionBy: 'title',
      collectionTitle: 'Video Games',
      filterDocumentBy: 'title',
    },
    {
      collection: 'classical',
      orderCollectionBy: 'composer',
      collectionTitle: 'Classical Music',
      filterDocumentBy: 'composer',
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
