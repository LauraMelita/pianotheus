export const siteConfig = {
  firestoreCollections: [
    { name: 'movies', orderBy: 'title' },
    { name: 'tv-shows', orderBy: 'title' },
    { name: 'video-games', orderBy: 'title' },
    { name: 'classical', orderBy: 'composer' },
  ],
  navLinks: [
    { path: '/', navLink: 'Home' },
    { path: '/movies', navLink: 'Movies' },
    { path: '/tv-shows', navLink: 'TV Shows' },
    { path: '/video-games', navLink: 'Video Games' },
    { path: '/classical', navLink: 'Classical Music' },
  ],
  categories: [
    {
      category: 'Movies',
      backgroundImage: 'movies-bg.webp',
      popOutImage: 'movies-popout.webp',
    },
    {
      category: 'TV Shows',
      backgroundImage: 'tv-shows-bg.webp',
      popOutImage: 'tv-shows-popout.webp',
    },
    {
      category: 'Video Games',
      backgroundImage: 'video-games-bg.webp',
      popOutImage: 'video-games-popout.webp',
    },
    {
      category: 'Classical',
      backgroundImage: 'classical-bg.webp',
      popOutImage: 'classical-popout.webp',
    },
  ],
};
