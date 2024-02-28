import React, { forwardRef } from 'react';
import * as RadixSelect from '@radix-ui/react-select';

import Scrollbar from '../scrollbar/Scrollbar';

import Svg from '../svg/Svg';
import './Select.scss';

const Select = ({ options, value, onChange }) => {
  console.log(options);

  const SelectItem = forwardRef(
    ({ children, className, ...props }, forwardedRef) => {
      return (
        <RadixSelect.Item
          className='select__item'
          {...props}
          ref={forwardedRef}
        >
          <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        </RadixSelect.Item>
      );
    }
  );

  return (
    <div className='select'>
      {/* <span className='select__label'>{options.option}</span> */}
      <RadixSelect.Root value={value} onValueChange={onChange}>
        <RadixSelect.Trigger
          className='select__trigger'
          // aria-label={options.option}
        >
          <RadixSelect.Value placeholder='Composer' aria-label={value} />
          <RadixSelect.Icon className='select__icon'>
            <Svg icon='chevron-down' />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Content
          className='select__content'
          position='popper'
          sideOffset={2}
        >
          <Scrollbar>
            <RadixSelect.Viewport asChild>
              <RadixSelect.Group>
                {value && <SelectItem value='all'>All</SelectItem>}
                {options.values.map((value, index) => (
                  <SelectItem key={index} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </RadixSelect.Group>
            </RadixSelect.Viewport>
          </Scrollbar>
        </RadixSelect.Content>
      </RadixSelect.Root>
    </div>
  );
};

export default Select;
