import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
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
    const { fileURL: avatarURL } = await uploadFile(
      uploadPath,
      fileName,
      avatar
    );

    // Update new user in firebase auth
    await updateProfile(newAccount.user, {
      displayName: username,
      photoURL: avatarURL,
    });

    // Create a new user in firestore collection
    const newUser = await createDocument('users', {
      id: uid,
      username,
      email,
      avatar: avatarURL,
    });

    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signInUser = async () => {};

export const getCurrentUser = async () => {};

export const signOutUser = async () => {};

// ============================================================
// COLLECTIONS
// ============================================================

export const getCollection = async (collectionName, orderCollectionBy) => {
  const collectionRef = collection(db, collectionName);

  try {
    const collectionQuery = query(
      collectionRef,
      orderBy(orderCollectionBy, 'asc')
    );

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

// ============================================================
// DOCUMENTS
// ============================================================

export const createDocument = async (collectionName, document) => {
  const collectionRef = collection(db, collectionName);

  try {
    const newDocument = await addDoc(collectionRef, document);

    if (!newDocument) throw Error;
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

const getFileURL = async (file) => {
  try {
    const fileURL = await getDownloadURL(file.ref);

    if (!fileURL) throw Error;

    return fileURL;
  } catch (error) {
    throw new Error(`Error getting file URL: ${error.message}`);
  }
};

export const uploadFile = async (filePath, fileName, file) => {
  try {
    const { extension } = await getFileMetadata(file);

    // File validation here

    const fullFilePath = filePath + `${fileName}.${extension}`;
    const fileRef = ref(storage, fullFilePath);

    const snapshot = await uploadBytes(fileRef, file);

    if (!snapshot) throw Error;

    console.log(snapshot);

    const fileURL = await getFileURL(snapshot);

    return { snapshot, fileURL };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const downloadFile = async (filePath, fileName, extension) => {
  const fullFilePath = `${filePath}/${fileName}.${extension}`;

  try {
    const fileRef = ref(storage, fullFilePath);

    const url = await getDownloadURL(fileRef);
    const blob = await getBlob(fileRef);

    if (!url || !blob) throw Error;

    return { url, blob: blob };
  } catch (error) {
    throw new Error(error.message);
  }
};
