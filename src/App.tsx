import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import ContactPage from './pages/contacts/contacts';
import Header from './components/header/Header';
import LoginPage from './pages/login/login';
import CheckoutPage from './pages/checkout/checkout';
import ItemDetails from './components/item-details/item-details';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { selectIfCartIsEmpty } from './redux/cart/cart.selectors';
import { fetchCollectionsStart } from './redux/shop/shop.actions';
import CollectionPage from './pages/collection/collection';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const cartIsEmpty = useSelector(selectIfCartIsEmpty);

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/contacts'} component={ContactPage} />
        <Route path={'/shop/:collectionId'} component={CollectionPage} />
        <Route
          path={'/details/:collectionId/:itemId'}
          component={ItemDetails}
        />
        <Route
          exact
          path={'/checkout'}
          render={() => (cartIsEmpty ? <CheckoutPage /> : <Redirect to='/' />)}
        />
        <Route
          exact
          path={'/login'}
          render={() => (currentUser ? <Redirect to='/' /> : <LoginPage />)}
        />
      </Switch>
    </div>
  );
};

export default App;
