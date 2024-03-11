import React, { forwardRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';

import Svg from '../svg/Svg';

import './Accordion.scss';

const Accordion = ({ className, children }) => (
  <RadixAccordion.Root className={`${className} accordion`} type='multiple'>
    {children}
  </RadixAccordion.Root>
);

const AccordionItem = forwardRef(({ value, children, ...props }, ref) => (
  <RadixAccordion.Item
    ref={ref}
    className='accordion__item'
    value={value}
    {...props}
  >
    {children}
  </RadixAccordion.Item>
));

const Trigger = forwardRef(({ children, ...props }, ref) => (
  <RadixAccordion.Header className='accordion__header'>
    <RadixAccordion.Trigger className='accordion__trigger' ref={ref} {...props}>
      {children}
      <Svg icon='chevron-down' aria-hidden />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));

const Content = forwardRef(({ children, ...props }, ref) => (
  <RadixAccordion.Content ref={ref} className='accordion__content' {...props}>
    <div>{children}</div>
  </RadixAccordion.Content>
));

export { Accordion, AccordionItem, Trigger, Content };
