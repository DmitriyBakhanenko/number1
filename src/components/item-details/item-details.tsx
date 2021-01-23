import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { addItem } from '../../redux/cart/cart.actions';
//import { ReactComponent as CloseBtn } from '../../assets/times-solid.svg';

import { useDispatch } from 'react-redux';
import './item-details.scss';

const ItemDetails = () => {
  const match: any = useRouteMatch();
  const history = useHistory();
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
    <div className='details_item_container'>
      <div className='details_header'>
        <h1 className='details_product_tittle'>{name}</h1>
        <h1 className='details_product_price'>{price}грн</h1>
      </div>
      <div className='details_product_container'>
        <img className='details_img' src={imageUrl[0]} alt='' />
        <div className='details_product_info'>
          <table className='details_table'>
            {brand ? (
              <tr>
                <th>Бренд</th>
                <th>{brand}</th>
              </tr>
            ) : null}
            {country ? (
              <tr>
                <th>Страна</th>
                <th>{country}</th>
              </tr>
            ) : null}
            {landing ? (
              <tr>
                <th>Посадка</th>
                <th>{landing}</th>
              </tr>
            ) : null}
            {style ? (
              <tr>
                <th>Стиль</th>
                <th>{style}</th>
              </tr>
            ) : null}
            {color ? (
              <tr>
                <th>Цвет</th>
                <th>{color}</th>
              </tr>
            ) : null}
            {fabricType ? (
              <tr>
                <th>Тип ткани</th>
                <th>{fabricType}</th>
              </tr>
            ) : null}
            {fabricSettings ? (
              <tr>
                <th>Свойства ткани</th>
                <th>{fabricSettings}</th>
              </tr>
            ) : null}
            {fastener ? (
              <tr>
                <th>Застежка</th>
                <th>{fastener}</th>
              </tr>
            ) : null}
            {sizes ? (
              <tr>
                <th>Размеры</th>
                <th>{sizes}</th>
              </tr>
            ) : null}
          </table>
        </div>
      </div>
      <div className='details_btns'>
        <CustomButton
          className='details_back_btn'
          onClick={() =>
            history.push(
              `/shop/${match.params.section}/${match.params.collectionId}`
            )
          }
        >
          Вернуться
        </CustomButton>
        <CustomButton
          className='details_add_btn'
          onClick={() => dispatch(addItem(item[0]))}
          overlay
        >
          Добавить в корзину
        </CustomButton>
      </div>
    </div>
  );
};

export default ItemDetails;
