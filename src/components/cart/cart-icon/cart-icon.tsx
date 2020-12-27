import React from 'react';
import { ReactComponent as ShopingIcon } from '../../../assets/bag.svg';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors';

interface Props {
  color: string;
}

const CartIcon = ({ color }: Props) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div onClick={() => dispatch(toggleCartHidden())}>
      <ShopingIcon stroke={color} fill={color} className='shop_icon' />
      <span className='items_count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
