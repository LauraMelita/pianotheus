import React from 'react';

import { useGetImdbData } from '../../../services/reactQuery/queries';

import Backdrop from '../../../components/UI/image/Backdrop';
import Trailer from '../../../components/UI/trailer/Trailer';
import Svg from '../../../components/UI/svg/Svg';
import Separator from '../../../components/UI/separator/Separator';

import './MovieAndTvShow.scss';

const MovieAndTvShow = ({ data }) => {
  const { data: imdbData } = useGetImdbData(data, data.imdbId);

  return (
    <section className='full-width'>
      <Backdrop backdropImg={data.backdrop} />
      <div className='container'>
        <div className='movie-header'>
          <div className='left'>
            <div className='title-container'>
              <h4 className='title'>{data.title}</h4>
              <a
                className='imdb-link'
                href={`https://www.imdb.com/title/${data.imdbId}`}
                target='_blank'
                rel='noreferrer'
              >
                <Svg icon='imdb' />
              </a>
            </div>
            <ul className='general-info'>
              <li className='releaseYear'>{data.year}</li>
              <li className='content-rating'>{imdbData?.Rated}</li>
              <li className='runtime'>{imdbData?.Runtime}</li>
            </ul>
          </div>
          <div className='right'>
            <p>IMDb RATING</p>
            <div className='rating-container'>
              <Svg icon='imdb-star' />
              <h4 className='rating'>{imdbData?.imdbRating}</h4>
              <span className='number'>/10</span>
            </div>
          </div>
        </div>
        <div className='movie-body'>
          <div className='poster'>
            <img src={data.poster} alt={data.title} />
          </div>
          <Trailer
            aspectRatio={16 / 9}
            title={data.title}
            trailerKey={data.trailer}
          />
        </div>
        <div className='movie-footer'>
          <div className='text-container'>
            <p className='plot'>{imdbData?.Plot}</p>
            <Separator type='radial' orientation='horizontal' />
            <div className='director'>
              <span>Directors</span>
              <span>{imdbData?.Director}</span>
            </div>
            <Separator type='radial' orientation='horizontal' />
            <div className='stars'>
              <span>Stars</span>
              <span>{imdbData?.Actors}</span>
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
      </div>
    </section>
  );
};

export default MovieAndTvShow;
