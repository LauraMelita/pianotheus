import React from 'react';

import Backdrop from '../../../components/UI/image/Backdrop';
import Button from '../../../components/UI/button/Button';
import Badge from '../../../components/UI/badge/Badge';
import Tags from '../../../components/UI/tags/Tags';
import PlatformIcons from './platforms/PlatformIcons';
import Trailer from '../../../components/UI/trailer/Trailer';
import Svg from '../../../components/UI/svg/Svg';
import CircularProgressBar from '../../../components/UI/progressBar/CircularProgressBar';

import { useGetRawgData } from '../../../services/reactQuery/queries';
import { formatDate } from '../../../utils/formatting';

import Image from '../../../components/UI/image/Image';

import './VideoGame.scss';

const VideoGame = ({ filteredData }) => {
  const { data: rawgData } = useGetRawgData(filteredData, filteredData.rawgId);

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

  const Poster = ({ img, title }) => {
    return (
      <div className='poster'>
        <Image src={img} alt={`${title} poster`} />
      </div>
    );
  };

  return (
    <section className='full-width'>
      <Backdrop image={backdrop} />

      <div className='container'>
        <Badge image={composerImg} title={composer} width={150} height={150}>
          <span>{composer}</span>
        </Badge>

        <div className='rating'>
          <span>Metacritic</span>
          <CircularProgressBar value={rating} maxValue={5} />
        </div>

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

        <Button variant='icon' href={website} target='_blank' rel='noreferrer'>
          Official Website
          <Svg icon='external-link' variant='small' />
        </Button>

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
