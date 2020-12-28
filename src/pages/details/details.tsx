import React from 'react';
import ItemDetails from '../../components/item-details/item-details';
import { Route } from 'react-router-dom';

const DetailsPage = () => {
  return (
    <React.Fragment>
      <Route path={'/details/:itemId'} component={ItemDetails} />
    </React.Fragment>
  );
};

export default DetailsPage;
