export const siteConfig = {
  firestoreCollections: [
    { name: 'movies', orderBy: 'title' },
    { name: 'tv_shows', orderBy: 'title' },
    { name: 'video_games', orderBy: 'title' },
    { name: 'classical', orderBy: 'composer' },
  ],
  navLinks: [
    { path: '/', navLink: 'Home' },
    { path: '/movies', navLink: 'Movies' },
    { path: '/tv_shows', navLink: 'TV Shows' },
    { path: '/video-games', navLink: 'Video Games' },
    { path: '/classical', navLink: 'Classical Music' },
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
