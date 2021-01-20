import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { paymentSuccess } from '../../redux/user/user.actions';
import Image from '../../assets/favicon-32x32.png';

// TODO - price, paymentSuccess
const StripeCheckoutBtn = ({ price }: any) => {
  const dispatch = useDispatch();
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HpHg6FlzvANYvNV4E37iWhqiosVdlMXvho3IIwea2am8YFctygmeHBzwWTpUrtbfIKeTcedPHEZgDgMTX3Ahbvw00nNXQ7Yxg';

  const onToken = (token: any) => {
    axios({
      url: 'http://18.191.152.175:5000/payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((_response) => {
        alert('Оплата произведена успешно!');
        dispatch(paymentSuccess());
      })
      .catch((err) => {
        alert(
          'Ошибка при оплате. Пожалуйста убедитесь, что Вы ввели коректные данные карты.'
        );
        console.log('payment error', JSON.parse(err));
      });
  };

  return (
    <StripeCheckout
      label='Оплата картой'
      name='Number1 Ltd'
      billingAddress
      shippingAddress
      image={Image}
      description={`Сумма Вашего заказа: ₴${price}`}
      amount={priceForStripe}
      panelLabel='Оплата картой'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutBtn;
