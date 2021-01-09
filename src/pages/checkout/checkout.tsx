import React, { useRef, useState } from 'react';
import './checkout.styles.scss';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
//import StripeCheckoutBtn from '../../components/stripe-btn/stripe-btn.component';
import { useSelector } from 'react-redux';
import CustomButton from '../../components/custom-button/custom-button';

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [inverted, setInverted] = useState(false);

  const stripeCheckout = () => {
    console.log('stripe payment');
  };

  const deliveryPayment = () => {
    setInverted(!inverted);
  };

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
        <span>Всего: {total}₴</span>
      </div>
      {/*<div className='test-warning'>
        *Данные для тестовой оплаты карты*
        <br />
        4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
          </div>
      <div className='stripe-btn'>
        <StripeCheckoutBtn price={total} />
      </div>*/}
      <div className='payment'>
        <CustomButton onClick={stripeCheckout}>Оплата картой</CustomButton>
        <CustomButton inverted={inverted} onClick={deliveryPayment}>
          Оплата при получении
        </CustomButton>
      </div>
      {inverted ? (
        <form className='payment_form'>
          <div className='pay_row'>
            <label htmlFor='pay_name' className='pay_label'>
              Имя и Фамилия
            </label>
            <input
              type='text'
              placeholder='имя получателя'
              className='pay_input'
            />
          </div>

          <div className='pay_row'>
            <label htmlFor='pay_tel' className='pay_label'>
              Мобильный Телефон
            </label>
            <input
              type='telephone'
              placeholder='телефон получателя'
              className='pay_input'
            />
          </div>

          <div className='pay_row'>
            <label htmlFor='pay_city' className='pay_label'>
              Город получения
            </label>
            <input
              type='text'
              placeholder='город получателя'
              className='pay_input'
            />
          </div>

          <div className='pay_row'>
            <label htmlFor='pay_partNP' className='pay_label'>
              Отделение Новой Почты
            </label>
            <input
              type='text'
              placeholder='номер отдела почты'
              className='pay_input'
            />
          </div>
          <CustomButton className='pay_btn' type='submit'>
            Отправить заказ
          </CustomButton>
        </form>
      ) : null}
    </div>
  );
};

export default CheckoutPage;
