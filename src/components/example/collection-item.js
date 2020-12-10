import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { toggleOverlayHidden } from '../../redux/overlay/overlay.actions';
// import {
//   selectOverlayHidden,
//   selectOverlayItemId
// } from '../../redux/overlay/overlay.selectors';
// import { createStructuredSelector } from 'reselect';

const CollectionItem = ({ item, addItem, toggleOverlay }) => {
  const { name, price, imageUrl, id } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        onClick={() => toggleOverlay(id)}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        В корзину
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   overlayIsHidden: selectOverlayHidden,
//   overlayItemId: selectOverlayItemId
// });

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  toggleOverlay: key => dispatch(toggleOverlayHidden(key))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
