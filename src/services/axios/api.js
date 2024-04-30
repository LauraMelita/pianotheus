import axios from 'axios';

import {
  omdbUrl,
  tmdbMovieUrl,
  tmdbSeriesUrl,
  tmdbMovieScreenshotsUrl,
  tmdbMovieCreditsUrl,
  tmdbSeriesCreditsUrl,
  tmdbSeriesScreenshotsUrl,
  rawgUrl,
  rawgScreenshotsUrl,
} from './endpoints';
import {
  formatOmdbMovieData,
  formatOmdbSeriesData,
  formatTmdbMovieData,
  formatTmdSeriesData,
  formatTmdbScreenshotData,
  formatTmdbMovieCreditsData,
  formatTmdbSeriesCreditsData,
  formatRawgData,
  formatRawgScreenshotsData,
} from './formatting';

// ============================================================
// MOVIE
// ============================================================

export const fetchMovieData = async (imdbId, tmdbId) => {
  try {
    const [
      omdbResponse,
      tmdbResponse,
      tmdbCreditsResponse,
      tmdbScreenshotsResponse,
    ] = await Promise.all([
      axios.get(omdbUrl(imdbId)),
      axios.get(tmdbMovieUrl(imdbId)),
      axios.get(tmdbMovieCreditsUrl(tmdbId)),
      axios.get(tmdbMovieScreenshotsUrl(imdbId)),
    ]);

    if (
      !omdbResponse ||
      !tmdbResponse ||
      !tmdbCreditsResponse ||
      !tmdbScreenshotsResponse
    ) {
      throw Error;
    }

    const movieData = {
      ...formatOmdbMovieData(omdbResponse.data),
      ...formatTmdbMovieData(tmdbResponse.data),
      ...formatTmdbMovieCreditsData(tmdbCreditsResponse.data),
      ...formatTmdbScreenshotData(tmdbScreenshotsResponse.data),
    };

    return movieData;
  } catch (error) {
    throw new Error(`Failed to fetch IMDB data: ${error.message}`);
  }
};

// ============================================================
// TV SHOW
// ============================================================

export const fetchSeriesData = async (imdbId, tmdbId) => {
  try {
    const [
      omdbResponse,
      tmdbResponse,
      tmdbCreditsResponse,
      tmdbScreenshotsResponse,
    ] = await Promise.all([
      axios.get(omdbUrl(imdbId)),
      axios.get(tmdbSeriesUrl(tmdbId)),
      axios.get(tmdbSeriesCreditsUrl(tmdbId)),
      axios.get(tmdbSeriesScreenshotsUrl(tmdbId)),
    ]);

    if (
      !omdbResponse ||
      !tmdbResponse ||
      !tmdbCreditsResponse ||
      !tmdbScreenshotsResponse
    ) {
      throw Error;
    }

    const seriesData = {
      ...formatOmdbSeriesData(omdbResponse.data),
      ...formatTmdSeriesData(tmdbResponse.data),
      ...formatTmdbSeriesCreditsData(tmdbCreditsResponse.data),
      ...formatTmdbScreenshotData(tmdbScreenshotsResponse.data),
    };

    return seriesData;
  } catch (error) {
    throw new Error(`Failed to fetch IMDB data: ${error.message}`);
  }
};

// ============================================================
// VIDEO GAME
// ============================================================

export const fetchVideoGameData = async (rawgSlug) => {
  try {
    const [rawgResponse, rawgScreenshotsResponse] = await Promise.all([
      axios.get(rawgUrl(rawgSlug)),
      axios.get(rawgScreenshotsUrl(rawgSlug)),
    ]);

    if (!rawgResponse || !rawgScreenshotsResponse) {
      throw Error;
    }

    const videoGameData = {
      ...formatRawgData(rawgResponse.data),
      ...formatRawgScreenshotsData(rawgScreenshotsResponse.data),
    };

    return videoGameData;
  } catch (error) {
    throw new Error(`Failed to fetch RAWG data: ${error.message}`);
  }
};
