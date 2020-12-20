import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className='main_container'>
      <div className='dimmer'></div>
      <div className='text_container'>
        <h1 className='main_header_text'>
          Лучшие итальянские и турецкие бренды
        </h1>
        <h3 className='main_secondary_text'>
          Откройте для себя новую коллекцию лучших брендов
        </h3>
        <button className='look_button'>Посмотреть</button>
      </div>
    </div>
  );
};

export default Main;
