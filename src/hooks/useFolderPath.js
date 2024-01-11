import { useLocation } from 'react-router-dom';

export const useFolderPath = () => {
  const { pathname } = useLocation();

  const folderPath = `${pathname.slice(1).replaceAll('-', ' ')}`;

  return folderPath;
};
