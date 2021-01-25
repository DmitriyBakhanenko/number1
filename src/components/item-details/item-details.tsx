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
                <td>{brand}</td>
              </tr>
            ) : null}
            {country ? (
              <tr>
                <th className='th2'>Страна</th>
                <td className='td2'>{country}</td>
              </tr>
            ) : null}
            {landing ? (
              <tr>
                <th>Посадка</th>
                <td>{landing}</td>
              </tr>
            ) : null}
            {style ? (
              <tr>
                <th className='th2'>Стиль</th>
                <td className='td2'>{style}</td>
              </tr>
            ) : null}
            {color ? (
              <tr>
                <th>Цвет</th>
                <td>{color}</td>
              </tr>
            ) : null}
            {fabricType ? (
              <tr>
                <th className='th2'>Тип ткани</th>
                <td className='td2'>{fabricType}</td>
              </tr>
            ) : null}
            {fabricSettings ? (
              <tr>
                <th>Свойства ткани</th>
                <td>{fabricSettings}</td>
              </tr>
            ) : null}
            {fastener ? (
              <tr>
                <th className='th2'>Застежка</th>
                <td className='td2'>{fastener}</td>
              </tr>
            ) : null}
            {sizes ? (
              <tr>
                <th>Размеры</th>
                <td>{sizes}</td>
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
