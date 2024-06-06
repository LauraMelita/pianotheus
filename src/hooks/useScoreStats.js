import { useMemo } from 'react';

export const useScoreStats = (scores) => {
  const stats = useMemo(() => {
    const total = scores.length;

    const midi = scores.reduce((acc, score) => {
      if (score.status.midi === 'uploaded') {
        acc += 1;
      }
      return acc;
    }, 0);

    const sheetMusic = scores.reduce((acc, score) => {
      if (score.status.sheetMusic === 'uploaded') {
        acc += 1;
      }
      return acc;
    }, 0);

    const tutorials = scores.reduce((acc, score) => {
      if (score.videoKey) {
        acc += 1;
      }
      return acc;
    }, 0);

    return { total, midi, sheetMusic, tutorials };
  }, [scores]);

  return stats;
};
