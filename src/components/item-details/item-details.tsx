import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { addItem } from '../../redux/cart/cart.actions';
//import { ReactComponent as CloseBtn } from '../../assets/times-solid.svg';

import { useDispatch } from 'react-redux';

const ItemDetails = () => {
  const match: any = useRouteMatch();
  const dispatch = useDispatch();
  const collection: any = useSelector(
    selectCollection(match.params.collectionId)
  );
  const item: any = collection[0].items.filter(
    (i: any) => Number(i.id) === Number(match.params.itemId)
  );

  const {
    imageUrl,
    name,
    price,
    brand,
    country,
    landing,
    style,
    color,
    fabricType,
    fabricSettings,
    fastener,
    sizes,
  } = item[0];
  return (
    <div id='overlay'>
      <div className='overlay-item-container'>
        <img className='overlay-img' src={imageUrl[0]} alt='' />
        <div className='overlay-product-info'>
          <div className='overlay-controls'>
            <div
              className='close-btn-container'
              onClick={() => {
                /*  TODO */
              }}
            >
              {/*              <CloseBtn />  */}
            </div>
          </div>
          <div className='overlay-info'>
            <h1 className='overlay-product-tittle'>{name}</h1>
            <h2 className='overlay-product-price'>{price}$</h2>
            {brand ? (
              <p className='overlay-product-brand'>
                <strong>Бренд:</strong> <span>{brand}</span>
              </p>
            ) : null}
            {country ? (
              <p className='overlay-product-brand'>
                <strong>Страна:</strong> <span>{country}</span>
              </p>
            ) : null}
            {landing ? (
              <p className='overlay-product-brand'>
                <strong>Посадка:</strong> <span>{landing}</span>
              </p>
            ) : null}
            {style ? (
              <p className='overlay-product-brand'>
                <strong>Стиль:</strong> <span>{style}</span>
              </p>
            ) : null}
            {color ? (
              <p className='overlay-product-brand'>
                <strong>Цвет:</strong> <span>{color}</span>
              </p>
            ) : null}
            {fabricType ? (
              <p className='overlay-product-brand'>
                <strong>Тип ткани:</strong> <span>{fabricType}</span>
              </p>
            ) : null}
            {fabricSettings ? (
              <p className='overlay-product-brand'>
                <strong>Свойства ткани:</strong> <span>{fabricSettings}</span>
              </p>
            ) : null}
            {fastener ? (
              <p className='overlay-product-brand'>
                <strong>Застежка:</strong> <span>{fastener}</span>
              </p>
            ) : null}
            {sizes ? (
              <p className='overlay-product-brand'>
                <strong>Размеры:</strong> <span>{sizes}</span>
              </p>
            ) : null}
          </div>
          <CustomButton onClick={() => dispatch(addItem(item[0]))} overlay>
            Добавить в корзину
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
