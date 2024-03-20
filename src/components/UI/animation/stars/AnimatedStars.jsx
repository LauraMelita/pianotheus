import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const AnimatedStars = ({ radius, count, factor, speed, ...props }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Canvas>
        <Stars
          fade
          radius={radius}
          count={count}
          factor={factor}
          speed={speed}
          {...props}
        />
      </Canvas>
    </div>
  );
};

export default AnimatedStars;
