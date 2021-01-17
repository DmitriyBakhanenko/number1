import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { paymentSuccess } from '../../redux/user/user.actions';

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
        alert('Payment successful!');
        dispatch(paymentSuccess());
      })
      .catch((err) => {
        alert(
          'There was an issue with your payment. Please make sure you have provided the correct credit card credentials.'
        );
        console.log('payment error', JSON.parse(err));
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Number1 Ltd.'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is: ₴${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutBtn;
