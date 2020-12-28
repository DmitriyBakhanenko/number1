import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logoMain1.png';
import { ReactComponent as Search } from '../../assets/search.svg';
import CartIcon from '../cart/cart-icon/cart-icon';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const [color, setColor] = useState('white');
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  return (
    <div className='header'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='header_logo'></img>
      </Link>
      <div className='header_search'>
        <input type='text' className='header_searchInput' />
        <Search className='search_icon' />
      </div>
      <div className='header_nav'>
        <Link to='/login' className='header_option'>
          <span className='header_optionLineOne'>Привет</span>
          {currentUser ? (
            <span
              className='header_optionLineTwo'
              onClick={() => dispatch(signOutStart())}
            >
              {currentUser.displayName}
            </span>
          ) : (
            <span className='header_optionLineTwo'>Логин</span>
          )}
        </Link>
        <Link to='/checkout' className='header_option'>
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
          <CartIcon color={color} />
        </div>
      </div>
    </div>
  );
};

export default Header;
