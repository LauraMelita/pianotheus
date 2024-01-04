import React from 'react';
import { useQuery } from '@tanstack/react-query';

import Backdrop from '../../../components/UI/img/Backdrop';
import Badge from '../../../components/UI/badge/Badge';
import Poster from '../../../components/UI/img/Poster';
import Tags from '../../../components/UI/tags/Tags';
import PlatformIcons from './platforms/PlatformIcons';
import Trailer from '../../../components/UI/trailer/Trailer';
import Svg from '../../../components/UI/svg/Svg';
import CircularProgressBar from '../../../components/UI/progressBar/CircularProgressBar';

import { fetchRawgData } from '../../../services/api';
import { formatDate } from '../../../utils/formatting';

import './VideoGame.scss';

const VideoGame = ({ filteredData }) => {
  const { data: rawgData } = useQuery({
    queryKey: ['rawg', filteredData.rawgId],
    queryFn: () => fetchRawgData(filteredData.rawgId),
  });

  const {
    title,
    year,
    backdrop,
    mainPlatforms,
    poster,
    composer,
    composerImg,
    description_raw: description,
    released,
    playtime,
    genres,
    esbr,
    platforms,
    rating,
    developers,
    website,
    trailer,
  } = { ...filteredData, ...rawgData };

  return (
    <section className='full-width'>
      <Backdrop backdropImg={backdrop} />

      <div className='container'>
        <Badge width={150} height={150} image={composerImg} title={composer}>
          <span>{composer}</span>
        </Badge>

        <div className='rating'>
          <span>Metacritic</span>
          <CircularProgressBar value={rating} maxValue={5} />
        </div>

        {/* <button className='test'>Hello</button> */}

        <h3>
          {title} | {year}
        </h3>
        <span>{description}</span>
        <div>
          Average playtime: <span>{playtime}h</span>
        </div>
        <div>
          Release date: <span>{formatDate(released)}</span>
        </div>

        <ul className='developers'>
          <span>Developer:</span>
          {developers?.map((developer, index) => (
            <li key={index}>{developer.name}</li>
          ))}
        </ul>

        <a className='icon-btn' href={website} target='_blank' rel='noreferrer'>
          Official Website
          <Svg icon='external-link' />
        </a>

        <Tags className='genres' tags={genres} objectKey='name' />

        <PlatformIcons platformIcons={mainPlatforms} />

        <div className='esbr'>
          <span>{esbr.rating}</span>
          <br />
          <span>{esbr.descriptor}</span>
        </div>

        <Poster img={poster} title={title} />

        <ul>
          <span>Platforms:</span>
          {platforms?.map(({ platform }) => (
            <li key={platform.name}>{platform.name}</li>
          ))}
        </ul>

        <Trailer aspectRatio={16 / 9} title={title} trailerKey={trailer} />
      </div>
    </section>
  );
};

export default VideoGame;
