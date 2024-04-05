import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  addDoc,
  where,
  query,
  limit,
  orderBy,
  startAfter,
  Timestamp,
} from 'firebase/firestore';
import { ref, uploadBytes, getBlob, getDownloadURL } from 'firebase/storage';

import { auth, db, storage } from '../firebase/config';

// ============================================================
// AUTH
// ============================================================

export const createUserAccount = async (user) => {
  try {
    // Create a new user
    const newAccount = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    if (!newAccount) throw Error;

    const { username, avatar } = user;
    const { uid, email } = newAccount.user;

    // Upload user file to storage and get URL
    const uploadPath = 'auth/users/';
    const fileName = `${username}_avatar`;

    const userImage = await uploadFile(uploadPath, fileName, avatar);

    // Update new user in firebase auth
    await updateProfile(newAccount.user, {
      displayName: username,
      photoURL: userImage ? userImage.url : null,
    });

    // Create a new user in firestore collection
    const userDocument = {
      id: uid,
      username,
      email,
      avatar: userImage ? userImage.url : null,
    };

    await createDocument('users', userDocument);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signInUser = async (user) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    const signedInUser = userCredentials.user;

    if (!signedInUser) throw Error;

    return signedInUser;
  } catch (error) {
    switch (error.code) {
      case 'auth/invalid-login-credentials':
        throw new Error('Incorrect email or password');
      default:
        throw new Error('An error has occurred, please try again later.');
    }
  }
};

export const getCurrentUser = (handleAuthStateChange) => {
  return onAuthStateChanged(auth, handleAuthStateChange);
};

export const getUserById = async () => {
  try {
    const id = auth.currentUser?.uid;

    if (!id) throw Error;

    const currentUser = await getDocument('users', {
      queryField: 'id',
      queryValue: id,
    });

    if (!currentUser) throw Error;

    return currentUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signOutUser = async () => {
  return await signOut(auth);
};

// ============================================================
// COLLECTIONS
// ============================================================

export const getCollection = async (collectionName, orderCollectionBy) => {
  const collectionRef = collection(db, collectionName);
  const collectionQuery = query(
    collectionRef,
    orderBy(orderCollectionBy, 'asc')
  );

  try {
    const data = await getDocs(collectionQuery);

    const documents = data.docs.map((document) => ({
      ...document.data(),
      id: document.id,
    }));

    if (!documents) throw Error;

    return documents;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createCollection = async (
  collectionName,
  documentsArray,
  uniqueField
) => {
  try {
    const collectionRef = collection(db, collectionName);
    const docIds = [];

    for (const data of documentsArray) {
      const existingDocsQuery = query(
        collectionRef,
        where(uniqueField, '==', data[uniqueField])
      );
      const existingDocsSnapshot = await getDocs(existingDocsQuery);

      if (existingDocsSnapshot.size === 0) {
        const docRef = await addDoc(collectionRef, data);
        docIds.push(docRef.id);
        console.log('Document written with ID:', docRef.id);
      } else {
        console.log(
          'Document with duplicate unique field found, skipping:',
          data
        );
      }
    }

    return docIds;
  } catch (error) {
    console.error('Error adding documents:', error.message);
    throw error;
  }
};

export const getInfiniteCollection = async (
  {
    pageParam, // automatically passed by useInfiniteQuery
  },
  collectionName,
  orderCollectionBy,
  resultsPerPage
) => {
  const collectionRef = collection(db, collectionName);
  const baseQuery = [
    collectionRef,
    orderBy(orderCollectionBy),
    limit(resultsPerPage),
  ];

  // Firestore's startAfter() method is designed to work with pagination.
  // Each call to startAfter() specifies the starting point for the next batch of documents.
  // If pageParam exists, it's used as the cursor for startAfter(pageParam).
  // If it doesn't exist, the query starts from the beginning.
  const firestoreQuery = query(
    ...(pageParam ? [...baseQuery, startAfter(pageParam)] : baseQuery)
  );

  try {
    const documentSnapshots = await getDocs(firestoreQuery);
    const documents = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (!documents) throw Error;

    return documents;
  } catch (error) {
    throw new Error(error.message);
  }
};

// ============================================================
// DOCUMENTS
// ============================================================

export const getDocument = async (
  collectionName,
  { queryField, queryOperator = '==', queryValue }
) => {
  const documentRef = collection(db, collectionName);
  const queryRef = query(
    documentRef,
    where(queryField, queryOperator, queryValue)
  );

  try {
    const querySnapshot = await getDocs(queryRef);

    if (querySnapshot.docs.length === 0) {
      throw new Error('not-found');
    }

    const documentData = querySnapshot.docs[0].data();
    const documentID = querySnapshot.docs[0].id;

    const document = { id: documentID, ...documentData };

    return document;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateDocument = async (collectionName, documentID, newData) => {
  try {
    const lastUpdated = Timestamp.now();
    const data = { ...newData, lastUpdated };

    const documentRef = doc(db, collectionName, documentID);
    await updateDoc(documentRef, data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createDocument = async (collectionName, document) => {
  const collectionRef = collection(db, collectionName);

  try {
    const newDocument = await addDoc(collectionRef, document);

    if (!newDocument) throw Error;

    return newDocument;
  } catch (error) {
    throw new Error(error.message);
  }
};

// ============================================================
// FILES
// ============================================================

const getFileMetadata = (file) => {
  try {
    const metadata = file.type.split('/');

    if (!metadata) throw Error;

    const [type, extension] = metadata;

    return { type, extension };
  } catch (error) {
    throw new Error(`Error getting file metadata: ${error.message}`);
  }
};

export const getFileBlob = async (filePath, fileName, extension) => {
  try {
    const fullFilePath = `media/${filePath}/${fileName}.${extension}`;
    const fileRef = ref(storage, fullFilePath);

    const blob = await getBlob(fileRef);

    if (!blob) throw Error;

    return blob;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getFileUrl = async (filePath, fileName, extension) => {
  try {
    const fullFilePath = `media/${filePath}/${fileName}.${extension}`;
    const fileRef = ref(storage, fullFilePath);

    const url = await getDownloadURL(fileRef);

    if (!url) throw Error;

    return url;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const uploadFile = async (filePath, fileName, file) => {
  if (!file) return;

  try {
    const { extension } = await getFileMetadata(file);
    const fullFilePath = filePath + `${fileName}.${extension}`;
    const fileRef = ref(storage, fullFilePath);

    const snapshot = await uploadBytes(fileRef, file);

    if (!snapshot) throw Error;

    const url = await getDownloadURL(snapshot.ref);

    if (!url) throw Error;

    return { snapshot, url };
  } catch (error) {
    throw new Error(error.message);
  }
};
