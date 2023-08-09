import { useInfiniteQuery } from '@tanstack/react-query';

import { db } from '../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

// reference: https://www.youtube.com/watch?v=R1FG54FY-18&t=174s&ab_channel=Joshtriedcoding

export const useFirebaseInfiniteQuery = (
  collectionName,
  orderCollectionBy,
  documentsPerPage
) => {
  const collectionRef = collection(db, collectionName);

  const fetchMovies = async (page) => {
    try {
      const collecionQuery = query(
        collectionRef,
        orderBy(orderCollectionBy, 'asc')
      );
      const data = await getDocs(collecionQuery);

      const movies = data.docs.map((document) => ({
        ...document.data(),
        id: document.id,
      }));
      return movies.slice(
        (page - 1) * documentsPerPage,
        page * documentsPerPage
      );
    } catch (error) {
      console.error(error);
    }
  };

  const {
    data: firebaseData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['query'],
    async ({ pageParam = 1 }) => {
      const response = await fetchMovies(pageParam);
      return response;
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
    }
  );

  const data = firebaseData?.pages.flatMap((page) => page);

  return { data, fetchNextPage, isFetchingNextPage };
};

// Render example:
{
  /* <>
{data?.map(({ id, title }) => (
  <li key={id}>
    <span>{title}</span>
  </li>
))}
<button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
  {isFetchingNextPage
    ? 'Loading more...'
    : (data?.length ?? 0) < DOCUMENTS_PER_PAGE
    ? 'Nothing more to load'
    : 'Load more'}
</button>
</> */
}
