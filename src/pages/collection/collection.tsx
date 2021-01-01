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
import { useHistory, useRouteMatch } from 'react-router-dom';
import { selectAdminMode } from '../../redux/admin/admin.selector';

interface Collections {
  collections: {
    title: string;
    items: any[];
  };
}

const CollectionPage = () => {
  const isLoaded = useSelector(selectIsCollectionsLoaded);
  const [currentStatus, setCurrentStatus] = useState(isLoaded);

  useEffect(() => {
    setCurrentStatus(isLoaded);
  }, [isLoaded]);

  const admin = useSelector(selectAdminMode);
  const history = useHistory();
  const match: any = useRouteMatch();
  const collectionId = match.params.collectionId;
  const { collections }: Collections = useSelector((state: any) => ({
    collections: selectCollection(collectionId)(state),
  }));

  console.log(typeof collections);

  const Admin = () => (
    <React.Fragment>
      {admin ? (
        <div
          className='collection_item_admin'
          onClick={() => {
            history.push(`/admin/addcollection/${collectionId}/item`);
          }}
        >
          <p className='sign_to_action'>+</p>
          <p className='text_to_action'>Добавить позицию</p>
        </div>
      ) : null}
    </React.Fragment>
  );

  const Title = () => (
    <React.Fragment>
      {currentStatus && collections ? (
        <h2 className='title'>{collections.title}</h2>
      ) : null}
    </React.Fragment>
  );

  const Item = () => (
    <React.Fragment>
      {collections.items ? (
        <React.Fragment>
          {collections.items.map((item: any) => (
            <CollectionItem
              key={item.id}
              collectionId={collectionId}
              item={item}
            />
          ))}
        </React.Fragment>
      ) : (
        <div className='empty_cont'>
          <p className='empty'>Пусто</p>
        </div>
      )}
    </React.Fragment>
  );

  const Spinner = () => (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );

  return (
    <div className='collection-page'>
      <Title />
      <div className='items'>
        <Admin />
        {currentStatus ? <Item /> : <Spinner />}
      </div>
    </div>
  );
};

export default CollectionPage;
