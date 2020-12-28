import React from 'react';

import Collections from '../../components/collections/Collections';
import './homepage.scss';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className='linier_background' />
      <Collections />
    </React.Fragment>
  );
};

export default HomePage;
