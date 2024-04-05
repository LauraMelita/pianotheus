import { API } from '../../utils/constants';

// ============================================================
// OMDB
// ============================================================

export const omdbUrl = (imdbId) =>
  `${API.OMDB}/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${imdbId}`;

// ============================================================
// TMDB
// ============================================================
// For series, the URL is slightly different, and the API expects the TMDB ID, instead of the IMDB ID. Same applies for TMDB screenshots.

export const tmdbMovieUrl = (imdbId) =>
  `${API.THEMOVIEDB}/3/movie/${imdbId}?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`;

export const tmdbSeriesUrl = (tmdbId) =>
  `${API.THEMOVIEDB}/3/tv/${tmdbId}?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`;

// ============================================================
// TMDB SCREENSHOTS
// ============================================================

export const tmdbMovieScreenshotsUrl = (imdbId) =>
  `${API.THEMOVIEDB}/3/movie/${imdbId}/images?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`;

export const tmdbSeriesScreenshotsUrl = (tmdbId) =>
  `${API.THEMOVIEDB}/3/tv/${tmdbId}/images?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}`;

// ============================================================
// RAWG
// ============================================================

export const rawgUrl = (rawgSlug) =>
  `${API.RAWG}/games/${rawgSlug}?key=${process.env.REACT_APP_RAWG_API_KEY}`;

// ============================================================
// RAWG SCREENSHOTS
// ============================================================

export const rawgScreenshotsUrl = (rawgSlug) =>
  `${API.RAWG}/games/${rawgSlug}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`;
