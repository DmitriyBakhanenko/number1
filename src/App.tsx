import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homepage/homepage';
import ContactPage from './pages/contacts/contacts';
import ShopPage from './pages/shop/shop';
import Header from './components/header/Header';
import LoginPage from './pages/login/login';
import CheckoutPage from './pages/checkout/checkout';
//import { connect } from 'react-redux';
//import { selectCurrentUser } from './redux/user/user.selectors';
//import { createStructuredSelector } from 'reselect';
//import { checkUserSession } from './redux/user/user.actions';
//import { selectIfCartIsEmpty } from './redux/cart/cart.selectors';

const cartIsEmpty = true;
const currentUser = null;

const App = () => {
  //useEffect(() => {
  //checkUserSession();
  //}, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contacts' component={ContactPage} />
        <Route path={'/shop'} component={ShopPage} />
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

//const mapStateToProps = createStructuredSelector({
//currentUser: selectCurrentUser,
//cartIsEmpty: selectIfCartIsEmpty,
//});

//const mapDispatchToProps = (dispatch) => ({
//checkUserSession: () => dispatch(checkUserSession()),
//});

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
