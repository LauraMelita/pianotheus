import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import { CollectionContext } from '../../context/CollectionContext';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

import Spinner from '../../components/UI/spinner/Spinner';
import Error from '../../components/error/Error';
import PageNotFound from '../error/PageNotFound';
import Svg from '../../components/UI/svg/Svg';
import Separator from '../../components/UI/separator/Separator';
import Scores from '../../features/scores/Scores';

import { convertToPath } from '../../utils/formatting';

import './Movie.scss';

const ItemDetails = ({ filterKey }) => {
  const { data, isLoading, error } = useContext(CollectionContext);
  const params = useParams();

  const titleOrComposer = params[filterKey]; // title or composer

  const itemDetails = data?.find(
    (item) => convertToPath(item[filterKey]) === titleOrComposer
  );

  useDocumentTitle(itemDetails, `${itemDetails?.[filterKey]}`);

  const renderSpinner = () => {
    if (isLoading) return <Spinner type='circle' />;
  };

  const renderError = () => {
    if (error) return <Error error={error} />;
  };

  const Movie = () => {
    const [imdbData, setImdbData] = useState({});

    useEffect(() => {
      if (!itemDetails) return;
      const fetchImdbData = async () => {
        try {
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=ea2ed201&i=${itemDetails.imdbId}`
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
          console.error(error);
        }
      };

      fetchImdbData();
    }, [itemDetails]);

    if (itemDetails?.category === 'movies') {
      return (
        <div className='movie-container'>
          <div className='movie-header'>
            <div className='left'>
              <div className='title-container'>
                <h4 className='title'>{itemDetails.title}</h4>
                <a
                  className='imdb-link'
                  href={`https://www.imdb.com/title/${itemDetails.imdbId}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Svg icon='imdb' />
                </a>
              </div>
              <ul className='general-info'>
                <li className='releaseYear'>{itemDetails.year}</li>
                <li className='content-rating'>{imdbData.rated}</li>
                <li className='runtime'>{imdbData.runtime}</li>
              </ul>
            </div>
            <div className='right'>
              <p>IMDb RATING</p>
              <div className='rating-container'>
                <Svg icon='imdb-star' />
                <h4 className='rating'>{imdbData.imdbRating}</h4>
                <span className='number'>/10</span>
              </div>
            </div>
          </div>
          <div className='movie-body'>
            <div className='poster'>
              <img src={itemDetails.poster} alt={itemDetails.title} />
            </div>
            <div className='trailer'>
              <AspectRatio.Root ratio={16 / 9}>
                <iframe
                  title={itemDetails.title}
                  src={`https://www.youtube.com/embed/${itemDetails.trailer}`}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                />
              </AspectRatio.Root>
            </div>
          </div>
          <div className='movie-footer'>
            <div className='text-container'>
              <p className='plot'>{imdbData.plot}</p>
              <Separator type='radial' orientation='horizontal' />
              <div className='director'>
                <span>Directors</span>
                <span>{imdbData.director}</span>
              </div>
              <Separator type='radial' orientation='horizontal' />
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
          <Scores data={itemDetails} />
        </div>
      );
    }
  };

  return (
    <main className='details'>
      {renderSpinner()}
      {renderError()}
      {<h3>{itemDetails[filterKey]}</h3>}
      {!isLoading && !itemDetails && <PageNotFound />}
      <Movie />
    </main>
  );
};

export default ItemDetails;
