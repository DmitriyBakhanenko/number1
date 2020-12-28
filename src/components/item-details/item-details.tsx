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
  const { collections }: any = useSelector((state: any) => ({
    collections: selectCollection(match.params.collectionId)(state),
  }));
  const item = collections.items.filter(
    (item: any) => Number(item.id) === Number(match.params.itemId)
  );
  const { imageUrl, name, price } = item[0];
  return (
    <div id='overlay'>
      <div className='overlay-item-container'>
        <img className='overlay-img' src={imageUrl} alt='' />
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
            <p className='overlay-product-brand'>
              <strong>Бренд:</strong> <span>Lorem ipsum dolor sit amet.</span>
            </p>
            <p className='overlay-product-brand'>
              <strong>Страна:</strong> <span>Lorem ipsum dolor sit amet.</span>
            </p>
            <p className='overlay-product-brand'>
              <strong>Посадка:</strong> <span>Lorem ipsum dolor sit amet.</span>
            </p>
            <p className='overlay-product-brand'>
              <strong>Стиль:</strong> <span>Lorem ipsum</span>
            </p>
            <p className='overlay-product-brand'>
              <strong>Цвет:</strong> <span>Lorem ipsum</span>
            </p>
            <p className='overlay-product-brand'>
              <strong>Тип ткани:</strong> <span>Lorem ipsum</span>
            </p>
            <p className='overlay-product-brand'>
              <strong>Свойства ткани:</strong> <span>Lorem ipsum</span>
            </p>
            <p className='overlay-product-brand'>
              <strong>Застежка:</strong> <span>Lorem ipsum</span>
            </p>
            <p className='overlay-product-brand'>
              <strong>Размеры:</strong> <span>Lorem ipsum</span>
            </p>
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
