import {
  useQuery,
  useQueries,
  useMutation,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { useCollectionContext } from '../../context/CollectionContext.jsx';
import { siteConfig } from '../../utils/config.js';

import { QUERY_KEYS } from './queryKeys';
import {
  createUserAccount,
  signInUser,
  getCollection,
  createDocument,
  getDocument,
  getInfiniteCollection,
} from '../firebase/api';
import { sendEmail } from '../emailjs/api.js';

// ============================================================
// AUTH QUERIES
// ============================================================

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user) => createUserAccount(user),
  });
};

export const useSignInUser = () => {
  return useMutation({
    mutationFn: (user) => signInUser(user),
  });
};

// ============================================================
// COLLECTION QUERIES
// ============================================================

export const useGetCollection = (collection, orderBy) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_COLLECTION, collection, orderBy],
    queryFn: () => getCollection(collection, orderBy),
    staleTime: Infinity,
  });
};

export const useGetAllCollections = () => {
  const collectionQueries = useQueries({
    queries: siteConfig.collections.map(({ collection, routeParam }) => {
      return {
        queryKey: [QUERY_KEYS.GET_ALL_COLLECTIONS, collection, routeParam],
        queryFn: () => getCollection(collection, routeParam),
        staleTime: Infinity,
      };
    }),
  });

  const isLoading = collectionQueries.every(
    (collection) => collection.isLoading === true
  );

  const data = collectionQueries.flatMap((collection) => collection.data);

  return { data, isLoading };
};

export const useGetInfiniteCollection = (resultsPerPage) => {
  const { collection, routeParam: orderBy } = useCollectionContext();

  return useInfiniteQuery({
    queryKey: [
      QUERY_KEYS.GET_INFINITE_COLLECTION,
      collection,
      orderBy,
      resultsPerPage,
    ],
    queryFn: ({ pageParam }) =>
      getInfiniteCollection(
        {
          pageParam,
        },
        collection,
        orderBy,
        resultsPerPage
      ),
    getNextPageParam: (lastPage) => {
      // If there's no data, there are no more pages.
      if (!lastPage || lastPage.length === 0) return null;

      // If there are more pages, use the title/composer of the last document as the pagination cursor.
      const cursor =
        lastPage[lastPage.length - 1].category === 'classical'
          ? lastPage[lastPage.length - 1].composer
          : lastPage[lastPage.length - 1].title;

      return cursor;
    },
    staleTime: Infinity,
  });
};

export const useSearchCollection = (searchTerm) => {
  const {
    collection,
    routeParam: orderBy,
    searchKeys,
  } = useCollectionContext();

  return useQuery({
    queryKey: [QUERY_KEYS.SEARCH_COLLECTION, searchTerm],
    queryFn: () => getCollection(collection, orderBy),
    select: (data) =>
      data.filter((document) =>
        searchKeys.some((field) =>
          document[field].toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
    staleTime: Infinity,
    enabled: false,
  });
};

export const useGetCollectionFilters = () => {
  const {
    collection,
    routeParam: orderBy,
    filterKeys,
  } = useCollectionContext();

  return useQuery({
    queryKey: [QUERY_KEYS.GET_COLLECTION_FILTERS, collection],
    queryFn: () => getCollection(collection, orderBy),
    select: (data) => {
      const options = filterKeys.map(({ name, key }) => {
        const uniqueValues = [
          ...new Set(data.map((document) => document[key])),
        ].toSorted();

        return {
          filterName: name,
          filterKey: key,
          options: uniqueValues.map((value) => ({
            label: value,
            value: value.toLowerCase(),
          })),
        };
      });

      return options;
    },
    staleTime: Infinity,
  });
};

export const useFilterCollection = (selectedFilters) => {
  const { collection, routeParam: orderBy } = useCollectionContext();

  return useQuery({
    queryKey: [QUERY_KEYS.FILTER_COLLECTION, selectedFilters],
    queryFn: () => getCollection(collection, orderBy),
    select: (data) => {
      const filteredResults = data.filter((document) => {
        const matchesAllFilters = Object.keys(selectedFilters).every((key) => {
          const documentValue = document[key].toLowerCase();
          const filterValue = selectedFilters[key].toLowerCase();
          return documentValue.includes(filterValue);
        });

        return matchesAllFilters;
      });

      return filteredResults;
    },
    staleTime: Infinity,
    enabled: false,
  });
};

// export const useSearchFilterCollection = (searchParams) => {
//   const {
//     collection,
//     routeParam: orderBy,
//     searchKeys,
//   } = useCollectionContext();

//   return useQuery({
//     queryKey: [QUERY_KEYS.SEARCH_FILTER_COLLECTION, searchParams],
//     queryFn: () => getCollection(collection, orderBy),
//     select: (data) => {
//       const results = data.filter((document) =>
//         Object.entries(searchParams).every(([key, value]) => {
//           if (key === 'q') {
//             // If the key is 'q', check for matches in searchKeys
//             return searchKeys.some((searchKey) =>
//               document[searchKey].toLowerCase().includes(value.toLowerCase())
//             );
//           } else {
//             // For other keys, check the usual inclusion
//             return document[key].toLowerCase().includes(value.toLowerCase());
//           }
//         })
//       );

//       console.log(results);
//       return results;
//     },
//     staleTime: Infinity,
//     enabled: false,
//   });
// };

// ============================================================
// DOCUMENT QUERIES
// ============================================================

export const useCreateDocument = (collection) => {
  return useMutation({
    mutationFn: (document) => createDocument(collection, document),
  });
};

export const useGetDocument = (collection, query) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_DOCUMENT, collection, query],
    queryFn: () => getDocument(collection, query),
    staleTime: Infinity,
  });
};

// ============================================================
// DETAILS QUERIES
// ============================================================

export const useGetDetails = (collection, currentPath) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_DETAILS, collection, currentPath],
    queryFn: () =>
      getDocument(collection, {
        queryField: 'path',
        queryValue: currentPath,
      }),
    staleTime: Infinity,
  });
};

// ============================================================
// EMAILJS QUERIES
// ============================================================

export const useSendEmail = () => {
  return useMutation({
    mutationFn: (form) => sendEmail(form),
  });
};
