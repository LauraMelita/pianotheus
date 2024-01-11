import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { QUERY_KEYS } from './queryKeys';
import {
  createUserAccount,
  saveUserToDB,
  signInUser,
  getCurrentUser,
  signOutUser,
  getCollection,
  createDocument,
  downloadFile,
} from '../firebase/api';
import { getImdbData, getRawgData } from '../axios/api';

// ============================================================
// AUTH QUERIES
// ============================================================

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user) => createUserAccount(user),
  });
};

export const useSignInUser = () => {};

export const useSignOutUser = () => {};

// ============================================================
// USER QUERIES
// ============================================================

export const useGetCurrentUser = () => {};

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

// ============================================================
// DOCUMENT QUERIES
// ============================================================

export const useCreateDocument = (collection) => {
  return useMutation({
    mutationFn: (document) => createDocument(collection, document),
  });
};

// ============================================================
// FILE QUERIES
// ============================================================

export const useDownloadFile = (filePath, fileName, extension) => {
  return useQuery({
    queryKey: [QUERY_KEYS.DOWNLOAD_FILE, filePath, fileName, extension],
    enabled: false,
    queryFn: () => downloadFile(filePath, fileName, extension),
  });
};

// ============================================================
// AXIOS QUERIES
// ============================================================

export const useGetImdbData = (data, imdbId) => {
  return useQuery({
    queryKey: [QUERY_KEYS.IMDB_DATA, imdbId],
    enabled: data?.imdbId != null,
    queryFn: () => getImdbData(imdbId),
  });
};

export const useGetRawgData = (data, rawgId) => {
  return useQuery({
    queryKey: [QUERY_KEYS.RAWG_DATA, rawgId],
    enabled: data?.rawgId != null,
    queryFn: () => getRawgData(rawgId),
  });
};
