import React from 'react';
import './checkout.styles.scss';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutBtn from '../../components/stripe-btn/stripe-btn.component';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Продукция</span>
        </div>
        <div className='header-block'>
          <span>Описание</span>
        </div>
        <div className='header-block'>
          <span>Количество</span>
        </div>
        <div className='header-block'>
          <span>Цена</span>
        </div>
        <div className='header-block'>
          <span>Удалить</span>
        </div>
      </div>
      {cartItems.map((cartItem: any) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>Всего: ${total}</span>
      </div>
      <div className='test-warning'>
        *Данные для тестовой оплаты карты*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
      </div>
      <div className='stripe-btn'>
        <StripeCheckoutBtn price={total} />
      </div>
    </div>
  );
};

export default CheckoutPage;
