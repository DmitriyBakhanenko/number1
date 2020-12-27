import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/cart/cart.selectors';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((e: any) => <CartItem key={e.id} item={e} />)
        ) : (
          <span className='empty-message'>Ваша корзина пуста</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        ПЕРЕЙТИ К ОПЛАТЕ
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
