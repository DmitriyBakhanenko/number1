import React from 'react';

import ShopPage from '../shop/shop';
import Collections from '../../components/collections/Collections';
import './homepage.scss';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className='linier_background' />
      <Collections />
      <ShopPage />
    </React.Fragment>
  );
};

export default HomePage;
