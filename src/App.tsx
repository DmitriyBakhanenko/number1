import React from 'react';
import Header from './components/header/Header';
import Collections from './components/collections/Collections';

import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <div className='linier_background'></div>
      <Collections />
    </div>
  );
};

export default App;
