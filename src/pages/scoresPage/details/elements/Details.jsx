import React from 'react';

import Image from '../../../../components/UI/image/Image';
import Button from '../../../../components/UI/button/Button';
import Svg from '../../../../components/UI/svg/Svg';
import Badge from '../../../../components/UI/badge/Badge';
import CircularProgressBar from '../../../../components/UI/progressBar/CircularProgressBar';

import {
  formatList,
  formatDate,
  convertMinutesToHoursAndMinutes,
} from '../../../../utils/formatting';

const Composer = ({ composer, composerImg, scores }) => {
  return (
    <Badge
      className='composer'
      title={composer}
      image={composerImg}
      width={50}
      height={50}
      borderRadius='50%'
    >
      <span>{composer}</span>
      <span style={{ fontSize: '8px' }}>•</span>
      <span>{scores.length} Score</span>
    </Badge>
  );
};

const Title = ({ title, originalTitle, year }) => {
  return (
    <div className='title'>
      <h4>{title}</h4>
      {originalTitle && <span>{originalTitle}</span>}
      {year && <span>{`(${year})`}</span>}
    </div>
  );
};

const Poster = ({ img, title }) => {
  return (
    <div className='poster'>
      <Image src={img} alt={`${title} poster`} />
    </div>
  );
};

const Genres = ({ genres }) => {
  return (
    <ul className='genres'>
      {genres.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};

const Rating = ({ value, maxValue, source }) => {
  return (
    <div className='rating'>
      <span>{source}</span>
      <CircularProgressBar
        value={value}
        maxValue={maxValue}
        width={70}
        height={70}
      />
    </div>
  );
};

const ContentRating = ({ rating }) => {
  return <span className='content-rating'>{rating}</span>;
};

const Date = ({ type, date }) => {
  return (
    <span>
      {type}: {formatDate(date)}
    </span>
  );
};

const Director = ({ director }) => {
  return <span>{director}</span>;
};

const Writer = ({ writer }) => {
  return <span>{writer}</span>;
};

const Actors = ({ actors }) => {
  return <span>{actors}</span>;
};

const Runtime = ({ runtime }) => {
  const { hours, minutes } = convertMinutesToHoursAndMinutes(runtime);
  const hasHours = hours !== 0;

  return (
    <div>
      {hasHours && <span>{hours} hours</span>}
      &nbsp;
      <span>{minutes} minutes</span>
    </div>
  );
};

const Tagline = ({ tagline }) => {
  return <span>{tagline}</span>;
};

const Country = ({ country }) => {
  return <span>{country}</span>;
};

const SpokenLanguages = ({ languages }) => {
  const isLanguagesArray = Array.isArray(languages);

  return (
    <span>
      Spoken Languages: {isLanguagesArray ? formatList(languages) : languages}
    </span>
  );
};

const ProductionCompanies = ({ companies }) => {
  return (
    <div className='production-companies'>
      {companies.map(({ name, logo }, index) => {
        return logo && <Image key={index} src={logo} alt={name} />;
      })}
    </div>
  );
};

const BoxOffice = ({ boxOffice }) => {
  return <span>{boxOffice}</span>;
};

const Awards = ({ awards }) => {
  return awards === 'N/A' ? null : <span>{awards}</span>;
};

const Website = ({ link }) => {
  return (
    link && (
      <Button href={link} target='_blank' rel='noreferrer'>
        Official Website
      </Button>
    )
  );
};

const SeasonsAndEpisodes = ({ seasons, episodes }) => {
  return (
    <span>
      Seasons: {seasons} | Episodes: {episodes}
    </span>
  );
};

const Playtime = ({ playtime }) => {
  return <span>Average playtime: {playtime}h</span>;
};

const Developers = ({ developers }) => {
  return <span>Developers: {formatList(developers)}</span>;
};

const Platforms = ({ platforms }) => {
  return <span>Platforms: {formatList(platforms)}</span>;
};

const Esrb = ({ rating, descriptor, icon }) => {
  return (
    <div className='esrb'>
      <Button
        href='https://www.esrb.org/ratings-guide/'
        target='_blank'
        rel='noreferrer'
      >
        <Image src={icon} alt={`esrb ${rating}`} />
      </Button>
      <div>
        <span>{rating}</span>
        <br />
        <span>{descriptor}</span>
      </div>
    </div>
  );
};

const PlatformIcons = ({ platformIcons }) => {
  return (
    <ul className='platform-icons'>
      {platformIcons?.map((icon, index) => (
        <Svg key={index} icon={icon} />
      ))}
    </ul>
  );
};

const Era = ({ era }) => {
  return <span>Era: {era}</span>;
};

const Birth = ({ date, place }) => {
  return (
    <div>
      <span>Born</span>
      <span>{date}</span>
      <span>{place}</span>
    </div>
  );
};

const Death = ({ date, place, age }) => {
  return (
    <div>
      <span>Died</span>
      <span>
        {date} {`(${age} years)`}
      </span>
      <span>{place}</span>
    </div>
  );
};

const Trivia = ({ trivia }) => {
  return (
    <div>
      <span>Did You Know?</span>
      <span>{trivia}</span>
    </div>
  );
};

export {
  Composer,
  Title,
  Poster,
  Genres,
  Rating,
  ContentRating,
  Date,
  Director,
  Writer,
  Actors,
  Runtime,
  Tagline,
  Country,
  SpokenLanguages,
  ProductionCompanies,
  BoxOffice,
  Awards,
  Website,
  SeasonsAndEpisodes,
  Playtime,
  Developers,
  Platforms,
  Esrb,
  PlatformIcons,
  Era,
  Birth,
  Death,
  Trivia,
};
