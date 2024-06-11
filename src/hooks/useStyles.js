import { useScroll, useTransform } from 'framer-motion';

import { GLOBAL_STYLES } from '../utils/constants';

export const useStyles = () => {
  const { scrollYProgress } = useScroll();

  const navbarBackgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(0, 0, 0, 0)', 'rgb(0, 0, 0)']
  );

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

  return { navbarBackgroundColor, heroBackground };
};

// ============================================================
// NOTES:
// ============================================================
// scrollYProgress represents the vertical scroll progress of the page from 0 to 1 (0% to 100%).
// The input range [0, 0.1] specifies that the transformation occurs from the very top (0%) to 10% (0.1) down the page.
// The output range maps the input values to background colors, changing from transparent ('rgba(0, 0, 0, 0)') to black ('rgb(0, 0, 0)').
