export const API = {
  IMDB: 'https://imdb-api.projects.thetuhin.com',
  THEMOVIEDB: 'https://api.themoviedb.org',
  OMDB: 'https://www.omdbapi.com',
  RAWG: 'https://rawg.io/api',
};

export const MEDIA_URLS = {
  THEMOVIEDB_IMAGE_PATH: 'https://image.tmdb.org/t/p/original',
};

export const FILE_TYPES = {
  midi: {
    label: 'MIDI',
    extension: 'mid',
  },
  sheetMusic: {
    label: 'Sheet',
    extension: 'pdf',
  },
};

export const FORM = {
  MIN_TEXT_LENGTH: 2,
  MIN_PASSWORD_LENGTH: 6,
  MAX_MESSAGE_LENGTH: 1000,
  MAX_FILE_SIZE: 5000000,
  ACCEPTED_IMAGE_TYPES: ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'],
};

export const GLOBAL_STYLES = {
  TRANSPARENT_COLOR: 'var(--transparent-color)',
  BACKGROUND_COLOR: 'var(--layout-background-color)',
  NAVBAR_HEIGHT: 'var(--navbar-height)',
};
