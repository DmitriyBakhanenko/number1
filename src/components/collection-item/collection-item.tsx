import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }: any) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        В корзину
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
