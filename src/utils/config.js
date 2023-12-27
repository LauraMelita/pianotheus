export const siteConfig = {
  firestoreCollections: [
    { name: 'movies', orderBy: 'title' },
    { name: 'tv-shows', orderBy: 'title' },
    { name: 'video-games', orderBy: 'title' },
    { name: 'classical', orderBy: 'composer' },
  ],
  navLinks: [
    { path: '/', navLink: 'Home', icon: 'home' },
    { path: '/movies', navLink: 'Movies', icon: 'cinema' },
    { path: '/tv-shows', navLink: 'TV Shows', icon: 'tv' },
    { path: '/video-games', navLink: 'Video Games', icon: 'video-games' },
    { path: '/classical', navLink: 'Classical Music', icon: 'classical' },
  ],
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
};
