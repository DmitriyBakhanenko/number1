import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logoMain1.png';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import { ReactComponent as Search } from '../../assets/search.svg';

import './Header.scss';

const Header = () => {
  const [color, setColor] = useState('white');

  return (
    <div className='header'>
      <img src={Logo} alt='logo' className='header_logo'></img>
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <Search className='search_icon' />
      </div>
      <div className='header_nav'>
        <Link to='/login' className='header_option'>
          <span className='header_optionLineOne'>Привет</span>
          <span className='header_optionLineTwo'>Логин</span>
        </Link>
        <Link to='/orders' className='header_option'>
          <span className='header_optionLineOne'>Покупки</span>
          <span className='header_optionLineTwo'>& Заказы</span>
        </Link>
        <Link to='/contacts' className='header_option'>
          <span className='header_optionLineOne'>О нас</span>
          <span className='header_optionLineTwo'>Контакты</span>
        </Link>
        <div
          onMouseEnter={() => setColor('#FF9900')}
          onMouseLeave={() => setColor('#fff')}
          className='shopicon_container'
        >
          <Bag stroke={color} fill={color} className='shop_icon' />
          <span className='items_count'>3</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
