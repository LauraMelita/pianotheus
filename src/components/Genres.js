import React from 'react';

import Card from './Card';

import './../styles/components/Genres.scss';

const Genres = () => {
  const musicGenres = [
    {
      genre: 'Movies',
      path: '/movies/composers',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/314aa397077919.5ebccc4f73a13.jpg',
    },
    {
      genre: 'Series',
      path: '/series/composers',
      image:
        'https://render.fineartamerica.com/images/rendered/medium/poster/8/6/break/images/artworkimages/medium/2/six-feet-under-painting-paul-meijering.jpg',
    },
    {
      genre: 'Video Games',
      path: '/video-games/composers',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHl2i5iSyS9SCW53VaaXZlC5Y-XIanz-DAMnjDUgZsr5Vp35m7r0SBXtDVTu5p1oKy8QU&usqp=CAU',
    },
    {
      genre: 'Classical Music',
      path: '/classical/composers',
      image:
        'https://assets.classicfm.com/2021/50/tchaikovsky-1639562612-editorial-long-form-0.jpg',
    },
    {
      genre: 'Soul',
      path: '/soul/composers',
      image:
        'https://www.artmajeur.com/medias/standard/m/a/martin-street-art/artwork/14291903_t124-ray-charles-120x120cm.jpg',
    },
    {
      genre: 'Ragtime',
      path: '/ragtime/composers',
      image:
        'https://music.studiocline.com/wp-content/uploads/2020/05/Scott-Joplin-4.jpg',
    },
  ];
  return (
    <div className='genres-container'>
      <div className='genres'>
        {musicGenres.map(({ genre, path, image }, index) => (
          <li className='genre' key={index}>
            <Card feature={genre} path={path} image={image} />
            <span className='type'>{genre}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Genres;
