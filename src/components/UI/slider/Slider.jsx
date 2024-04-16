import React, { forwardRef } from 'react';
import * as RadixSlider from '@radix-ui/react-slider';

import './Slider.scss';

const Slider = forwardRef(
  ({ defaultValue, value, onChange, min, max, step, ...props }, ref) => {
    return (
      <RadixSlider.Root
        ref={ref}
        className='slider'
        defaultValue={defaultValue}
        value={value}
        onValueChange={onChange}
        min={min}
        max={max}
        step={step}
        {...props}
      >
        <RadixSlider.Track className='slider__track'>
          <RadixSlider.Range className='slider__range' />
        </RadixSlider.Track>
        <RadixSlider.Thumb className='slider__thumb' />
      </RadixSlider.Root>
    );
  }
);

export default Slider;
