import React, { forwardRef } from 'react';
import * as RadixSelect from '@radix-ui/react-select';

import Scrollbar from '../scrollbar/Scrollbar';
import Svg from '../svg/Svg';

import './Select.scss';

const Select = forwardRef(
  (
    {
      label,
      value,
      onChange,
      align = 'end',
      side = 'bottom',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <RadixSelect.Root value={value} onValueChange={onChange} {...props}>
        <RadixSelect.Trigger
          ref={ref}
          className='select__trigger'
          aria-label={label}
        >
          <RadixSelect.Value placeholder={label} aria-label={value} />
          <RadixSelect.Icon className='select__icon'>
            <Svg icon='chevron-down' aria-hidden />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Content
          className='select__content'
          position='popper'
          align={align}
          sideOffset={2}
          side={side}
        >
          <Scrollbar>
            <RadixSelect.Viewport asChild>
              <RadixSelect.Group>{children}</RadixSelect.Group>
            </RadixSelect.Viewport>
          </Scrollbar>
        </RadixSelect.Content>
      </RadixSelect.Root>
    );
  }
);

const Option = forwardRef(({ label, value, ...props }, ref) => {
  return (
    <RadixSelect.Item
      ref={ref}
      className='select__item'
      value={value}
      {...props}
    >
      <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});

export { Select, Option };
