import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const RouteMod: any = Route;

const ShopPage = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <RouteMod
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
