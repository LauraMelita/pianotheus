import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getFileUrl, getFileBlob } from '../services/firebase/api';

export const useFile = () => {
  const { pathname } = useLocation();

  const filePath = `${pathname.slice(1)}`;

  const downloadFile = async (fileName, fileExtension) => {
    try {
      const blob = await getFileBlob(filePath, fileName, fileExtension);
      const blobURL = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobURL;
      if (fileName && fileName.length) a.download = fileName;
      document.body.appendChild(a);
      a.click();

      return blobURL;
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const openFileInNewWindow = async (fileName, fileExtension) => {
    try {
      const blob = await getFileBlob(filePath, fileName, fileExtension);
      const blobUrl = URL.createObjectURL(blob);

      window.open(blobUrl, '_blank'); // Open the blob URL in a new window

      return blobUrl;
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const getFileLink = async (fileName, fileExtension) => {
    try {
      const url = getFileUrl(filePath, fileName, fileExtension);
      return url;
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return {
    getFileLink,
    downloadFile,
    openFileInNewWindow,
  };
};
