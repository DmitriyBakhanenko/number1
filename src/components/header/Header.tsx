import React from 'react';

import Logo from '../../assets/logoMain1.png';
import bag from '../../assets/bag.svg';
import search from '../../assets/search.svg';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='logo' className='header_logo'></img>
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <img src={search} alt='search-icon' className='search_icon' />
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Добро пожаловать</span>
          <span className='header_optionLineTwo'>Логин</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>Покупки</span>
          <span className='header_optionLineTwo'>& Заказы</span>
        </div>
        <div className='header_option'>
          <span className='header_optionLineOne'>О нас</span>
          <span className='header_optionLineTwo'>Контакты</span>
        </div>
        <img src={bag} alt='shop-icon' className='shop_icon' />
      </div>
    </div>
  );
};

export default Header;
