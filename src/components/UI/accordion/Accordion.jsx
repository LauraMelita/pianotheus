import React, { forwardRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import classNames from 'classnames';

import Svg from '../svg/Svg';

import './Accordion.scss';

const Accordion = ({
  className,
  type,
  value,
  defaultValue,
  onValueChange,
  collapsible,
  children,
}) => {
  return (
    <RadixAccordion.Root
      className={classNames(className, 'accordion')}
      type={type}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      collapsible={collapsible}
    >
      {children}
    </RadixAccordion.Root>
  );
};

const AccordionItem = forwardRef(({ value, children, ...props }, ref) => {
  return (
    <RadixAccordion.Item
      ref={ref}
      className='accordion__item'
      value={value}
      {...props}
    >
      {children}
    </RadixAccordion.Item>
  );
});

const Trigger = forwardRef(({ children, ...props }, ref) => {
  return (
    <RadixAccordion.Header className='accordion__header'>
      <RadixAccordion.Trigger
        className='accordion__trigger'
        ref={ref}
        {...props}
      >
        {children}
        <Svg icon='chevron-down' aria-hidden />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
});

const Content = forwardRef(({ children, ...props }, ref) => {
  return (
    <RadixAccordion.Content ref={ref} className='accordion__content' {...props}>
      <div>{children}</div>
    </RadixAccordion.Content>
  );
});

export { Accordion, AccordionItem, Trigger, Content };
