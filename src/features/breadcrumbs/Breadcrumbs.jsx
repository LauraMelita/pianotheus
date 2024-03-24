import React from 'react';
import { NavLink } from 'react-router-dom';

import { useCollectionContext } from '../../context/CollectionContext';

import './Breadcrumbs.scss';

const BreadCrumbs = ({ currentPage }) => {
  const { collection: currentCollection, title: currentCollectionTitle } =
    useCollectionContext();

  const Item = ({ path, title }) => (
    <span className='breadcrumbs__item'>
      {path ? <NavLink to={path}>{title}</NavLink> : title}
    </span>
  );

  const Separator = () => {
    return <span className='breadcrumbs__separator'>/</span>;
  };

  return (
    <div className='breadcrumbs'>
      <Item path='/' title='Home' />
      <Separator />
      <Item path={`/${currentCollection}`} title={currentCollectionTitle} />
      <Separator />
      <Item title={currentPage} />
    </div>
  );
};

export default BreadCrumbs;
