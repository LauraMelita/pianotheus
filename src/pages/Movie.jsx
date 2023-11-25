import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';

import { MoviesContext } from '../context/MoviesContext';
import { useUpdateDocumentTitle } from '../hooks/useUpdateDocumentTitle';
import { convertToPath } from '../utils/helper';

import PageNotFound from './error/PageNotFound';
import ScoresList from '../components/ScoresList';

import Icons from '../assets/icons/icons.svg';
import './Movie.scss';

const Movie = () => {
  const [imdbData, setImdbData] = useState({});

  const { data, isLoading, error } = useContext(MoviesContext);
  const { title } = useParams();

  const movieDetails = data?.find(
    (movie) => convertToPath(movie.title) === title
  );

  useUpdateDocumentTitle(
    movieDetails,
    `${movieDetails?.title} (${movieDetails?.year})`
  );

  // Move into a hook and add a cleanup function
  useEffect(() => {
    if (!movieDetails) return;
    const fetchImdbData = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=ea2ed201&i=${movieDetails.imdbId}`
        );

        if (!response.ok) throw new Error('Could not fetch IMDb data.');

        const data = await response.json();
        setImdbData({
          actors: data.Actors,
          awards: data.Awards,
          country: data.Country,
          director: data.Director,
          genre: data.Genre,
          language: data.Language,
          plot: data.Plot,
          rated: data.Rated,
          ratings: data.Ratings,
          runtime: data.Runtime,
          writer: data.Writer,
          imdbRating: data.imdbRating,
          imdbVotes: data.imdbVotes,
          totalSeasons: data.totalSeasons,
        });
      } catch (error) {
        console.error(console.error);
      }
    };

    fetchImdbData();
  }, [movieDetails]);

  return (
    <main>
      {isLoading && <h3>Loading...</h3>}
      {movieDetails && !isLoading && !error && (
        <div className='movie-container'>
          <div className='movie-header'>
            <div className='left'>
              <div className='title-container'>
                <h3 className='title'>{movieDetails.title}</h3>
                <a
                  className='imdb-link'
                  href={`https://www.imdb.com/title/${movieDetails.imdbId}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <svg>
                    <use href={`${Icons}#icon-imdb`} />
                  </svg>
                </a>
              </div>
              <ul className='general-info'>
                <li className='releaseYear'>{movieDetails.year}</li>
                <li className='content-rating'>{imdbData.rated}</li>
                <li className='runtime'>{imdbData.runtime}</li>
              </ul>
            </div>
            <div className='right'>
              <p>IMDb RATING</p>
              <div className='rating-container'>
                <svg>
                  <use href={`${Icons}#icon-imdb-star`} />
                </svg>
                <span className='rating'>{imdbData.imdbRating}</span>
                <span className='number'>/10</span>
              </div>
            </div>
          </div>
          <div className='movie-body'>
            <div className='poster'>
              <img src={movieDetails.poster} alt={movieDetails.title} />
            </div>
            <div className='trailer'>
              <AspectRatio.Root ratio={16 / 9}>
                <iframe
                  title={movieDetails.title}
                  src={`https://www.youtube.com/embed/${movieDetails.trailer}`}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                />
              </AspectRatio.Root>
            </div>
          </div>
          <div className='movie-footer'>
            <div className='text-container'>
              <p className='plot'>{imdbData.plot}</p>
              <Separator.Root
                className='separator'
                orientation='horizontal'
                decorative
              />
              <div className='director'>
                <span>Directors</span>
                <span>{imdbData.director}</span>
              </div>
              <Separator.Root
                className='separator'
                orientation='horizontal'
                decorative
              />
              <div className='stars'>
                <span>Stars</span>
                <span>{imdbData.actors}</span>
              </div>
            </div>
            {/* <ul className='genres'>
              {imdbData.genre
                .replaceAll(',', '')
                .split(' ')
                .map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
            </ul> */}
          </div>
          <ScoresList data={movieDetails} />
        </div>
      )}
      {!isLoading && !movieDetails && <PageNotFound />}
    </main>
  );
};

export default Movie;
