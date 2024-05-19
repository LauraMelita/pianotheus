import { GLOBAL_STYLES } from '../utils/constants';

export const useStyles = () => {
  const heroBackground = (image) =>
    `linear-gradient(to right,
      ${GLOBAL_STYLES.TRANSPARENT_COLOR}, 60%,
      ${GLOBAL_STYLES.BACKGROUND_COLOR}),
      
    linear-gradient(to right,
      rgba(18, 18, 18, 1),
      rgba(21, 21, 21, 0)),
  
    linear-gradient(to bottom,
      ${GLOBAL_STYLES.TRANSPARENT_COLOR},
      ${GLOBAL_STYLES.BACKGROUND_COLOR}),
  
    linear-gradient(to left,
      ${GLOBAL_STYLES.TRANSPARENT_COLOR}, 100%,
      ${GLOBAL_STYLES.BACKGROUND_COLOR}),
  
    url(${image}`;

  return { heroBackground };
};
