import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useIntersection } from '@mantine/hooks';
import { AnimatePresence, motion } from 'framer-motion';

import FadeIn from '../../components/UI/animation/fadeIn/FadeIn';
import Separator from '../../components/UI/separator/Separator';
import Search from '../../features/search/Search';
import Filter from '../../features/filter/Filter';
import PosterCard from '../../components/UI/card/poster/PosterCard';

import { convertToPath } from '../../utils/formatting';

import './TitlesList.scss';

const TitlesList = ({ data }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [titlesPerPage, setTitlesPerPage] = useState(8);

  const { pathname } = useLocation();
  const observer = useRef();

  const { ref, entry } = useIntersection({
    root: observer.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) loadMore();
  }, [entry]);

  const totalTitles = data.length;
  const indexOfLastTitle = pageNumber * titlesPerPage; // 1 * 8
  const currentTitles = data.slice(0, indexOfLastTitle);
  const lastElement = currentTitles.length - 1;

  const searchAndFilter = (data) =>
    data.filter(
      ({ title, composer }) =>
        composer.includes(filter) &&
        title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const loadMore = () => {
    if (indexOfLastTitle >= totalTitles) return;
    setPageNumber((prevPage) => prevPage + 1);
  };

  const allItemsAreShown = indexOfLastTitle >= totalTitles;

  return (
    <>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder='Search by title'
      />

      <Filter
        className='filter'
        data={data}
        defaultValue='All Composers'
        ariaLabel='Filter by Composer'
        filterBy='composer'
        setFilter={setFilter}
      />

      <Separator type='border' orientation='horizontal' />

      <FadeIn>
        <motion.ul layout className='posters'>
          <AnimatePresence>
            {searchAndFilter(data)
              .slice(0, indexOfLastTitle)
              .map(
                (
                  { id, title, year, poster, composer, composerImg, scores },
                  index
                ) => {
                  // if (index === 7) <div key={id} ref={ref} />;
                  return (
                    <PosterCard
                      key={id}
                      path={`${pathname}/${convertToPath(title)}`}
                      title={title}
                      year={year}
                      poster={poster}
                      composer={composer}
                      composerImg={composerImg}
                      scores={scores}
                    />
                  );
                }
              )}
          </AnimatePresence>
        </motion.ul>
      </FadeIn>

      {!allItemsAreShown && <button onClick={loadMore}>Load More</button>}

      {searchAndFilter(data).length === 0 && <h3>No results found</h3>}
    </>
  );
};

export default TitlesList;
