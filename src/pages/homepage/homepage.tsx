import React from 'react';

import Collections from '../../components/collections/Collections';
import Header from '../../components/header/Header';

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Collections />
    </React.Fragment>
  );
};

export default HomePage;
