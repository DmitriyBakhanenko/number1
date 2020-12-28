import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item';

import {
  SpinnerOverlay,
  SpinnerContainer,
} from '../../components/with-spinner/with-spinner.styles';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import './collection.scss';
import { useRouteMatch } from 'react-router-dom';

const CollectionPage = () => {
  const isLoaded = useSelector(selectIsCollectionsLoaded);
  const [currentStatus, setCurrentStatus] = useState(isLoaded);

  useEffect(() => {
    setCurrentStatus(isLoaded);
  }, [isLoaded]);

  const match: any = useRouteMatch();
  const collectionId = match.params.collectionId;
  const { collections }: any = useSelector((state: any) => ({
    collections: selectCollection(collectionId)(state),
  }));

  return (
    <React.Fragment>
      {currentStatus ? (
        <div className='collection-page'>
          <h2 className='title'>{collections.title}</h2>
          <div className='items'>
            {collections.items.map((item: any) => (
              <CollectionItem
                key={item.id}
                collectionId={collectionId}
                item={item}
              />
            ))}
          </div>
        </div>
      ) : (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )}
    </React.Fragment>
  );
};

export default CollectionPage;
