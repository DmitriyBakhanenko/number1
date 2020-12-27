import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
//import { Route } from 'react-router-dom';
//import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ match }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      {/*     <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      /> */}
    </div>
  );
};

export default ShopPage;
