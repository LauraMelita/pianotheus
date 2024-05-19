import React from 'react';

import './Crew.scss';

const Crew = ({ directors, writers, creators }) => {
  if (creators)
    return (
      <div className='crew'>
        <ul className='creators'>
          <span className='role'>Creators</span>
          <div>
            {creators.map((creator, index) => (
              <li key={index}>
                <img src={creator.profileImage} alt={creator.name} />
                <span>{creator.name}</span>
              </li>
            ))}
          </div>
        </ul>
      </div>
    );

  if (writers || directors)
    return (
      <div className='crew'>
        <ul className='directors'>
          <span className='role'>Directors</span>
          <div>
            {directors.map((director, index) => (
              <li key={index}>
                <img src={director.profileImage} alt={director.name} />
                <span>{director.name}</span>
              </li>
            ))}
          </div>
        </ul>

        <ul className='writers'>
          <span className='role'>Writers</span>
          <div>
            {writers.map((writer, index) => (
              <li key={index}>
                <img src={writer.profileImage} alt={writer.name} />
                <span>{writer.name}</span>
              </li>
            ))}
          </div>
        </ul>
      </div>
    );
};

export default Crew;
