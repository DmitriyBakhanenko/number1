import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { useHistory } from 'react-router-dom';

const CollectionItem = ({ item, collectionId }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name, price, imageUrl } = item;

  const showDetails = () => {
    history.push(`/shop/${collectionId}/${item.id}`);
  };

  return (
    <div className='collection-item'>
      <div
        className='image'
        onClick={showDetails}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
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
