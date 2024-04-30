import { MEDIA_URLS } from '../../utils/constants';
import { formatDate } from '../../utils/formatting';

// ============================================================
// OMDB
// ============================================================

export const formatOmdbMovieData = (omdbData) => {
  return {
    year: omdbData.Year,
    rated: omdbData.Rated,
    plot: omdbData.Plot,
    awards: omdbData.Awards,
    country: omdbData.Country,
    language: omdbData.Language,
    imdbRating: omdbData.imdbRating,
    boxOffice: omdbData.BoxOffice,
  };
};

export const formatOmdbSeriesData = (omdbData) => {
  const runtime = Number(omdbData.Runtime.replace(' min', ''));

  return {
    year: omdbData.Year,
    rated: omdbData.Rated,
    runtime: Number.isNaN(runtime) ? null : runtime,
    actors: omdbData.Actors,
    awards: omdbData.Awards,
    country: omdbData.Country,
    language: omdbData.Language,
    imdbRating: omdbData.imdbRating,
  };
};

// ============================================================
// TMDB
// ============================================================

export const formatTmdbMovieData = (tmdbData) => {
  const backdrop = `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${tmdbData.backdrop_path}`;
  const poster = `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${tmdbData.poster_path}`;

  const genres = tmdbData.genres.map((genre) => genre.name);

  const productionCompanies = tmdbData.production_companies
    .filter((company) => company.logo_path) // Include only companies with logo_path
    .map((company) => ({
      logo: `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${company.logo_path}`,
      name: company.name,
    }));

  const spokenLanguages = tmdbData.spoken_languages.map(
    (language) => language.name
  );

  return {
    backdrop,
    poster,
    genres,
    tagline: tmdbData.tagline,
    released: tmdbData.release_date,
    runtime: tmdbData.runtime,
    website: tmdbData.homepage ? tmdbData.homepage : null,
    spokenLanguages,
    productionCompanies,
  };
};

export const formatTmdSeriesData = (tmdbData) => {
  const backdrop = `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${tmdbData.backdrop_path}`;
  const poster = `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${tmdbData.poster_path}`;

  const genres = tmdbData.genres.map((genre) => genre.name);

  const productionCompanies = tmdbData.production_companies.map(
    (productionCompany) =>
      productionCompany.logo_path && {
        logo: `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${productionCompany.logo_path}`,
        name: productionCompany.name,
      }
  );

  const spokenLanguages = tmdbData.spoken_languages.map(
    (language) => language.name
  );

  return {
    backdrop,
    poster,
    plot: tmdbData.overview,
    originalName: tmdbData.original_name,
    seasons: tmdbData.number_of_seasons,
    episodes: tmdbData.number_of_episodes,
    firstAirDate: tmdbData.first_air_date,
    genres,
    website: tmdbData.homepage,
    spokenLanguages,
    productionCompanies,
  };
};

// ============================================================
// TMDB SCREENSHOTS
// ============================================================

export const formatTmdbScreenshotData = (tmdbScreenshotsData) => {
  const screenshots = tmdbScreenshotsData.backdrops.map(
    (image) => `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${image.file_path}`
  );

  return {
    screenshots,
  };
};

// ============================================================
// TMDB CREDITS
// ============================================================

export const formatTmdbMovieCreditsData = (tmdbCreditsData) => {
  const actors = tmdbCreditsData.cast.slice(0, 10).map((actor) => ({
    name: actor.name,
    character: actor.character,
    profileImage: `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${actor.profile_path}`,
  }));

  const directors = tmdbCreditsData.crew
    .filter((crewMember) => crewMember.job === 'Director')
    .map((director) => ({
      name: director.name,
      profileImage: `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${director.profile_path}`,
    }));

  const uniqueWriters = {};

  tmdbCreditsData.crew
    .filter((crewMember) => crewMember.department === 'Writing')
    .forEach((writer) => {
      uniqueWriters[writer.name] = {
        name: writer.name,
        profileImage: `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${writer.profile_path}`,
      };
    });

  return { actors, directors, writers: Object.values(uniqueWriters) };
};

export const formatTmdbSeriesCreditsData = (tmdbCreditsData) => {
  const actors = tmdbCreditsData.cast.slice(0, 10).map((actor) => ({
    name: actor.name,
    character: actor.character,
    profileImage: `${MEDIA_URLS.THEMOVIEDB_IMAGE_PATH}${actor.profile_path}`,
  }));

  return { actors };
};

// ============================================================
// RAWG
// ============================================================

export const formatRawgData = (rawgData) => {
  const genres = rawgData.genres.map((genre) => genre.name);
  const developers = rawgData.developers.map((developer) => developer.name);
  const platforms = rawgData.platforms.map(({ platform }) => platform.name);

  return {
    rawgId: rawgData.id,
    description: rawgData.description_raw,
    released: formatDate(rawgData.released),
    playtime: rawgData.playtime,
    backdrop: rawgData.background_image,
    genres,
    platforms,
    rating: rawgData.rating,
    developers,
    website: rawgData.website,
  };
};

// ============================================================
// RAWG SCREENSHOTS
// ============================================================

export const formatRawgScreenshotsData = (rawgScreenshotsData) => {
  const screenshots = rawgScreenshotsData.results.map(
    (screenshot) => screenshot.image
  );

  return {
    screenshots,
  };
};
