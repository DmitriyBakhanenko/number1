import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/About';
import Contacts from './components/Contacts';
import Collection from './components/Collection';
import Delivery from './components/Delivery';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path='/' exact component={Main}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/collection' exact component={Collection}></Route>
        <Route path='/contacts' exact component={Contacts}></Route>
        <Route path='/delivery' exact component={Delivery}></Route>
      </Switch>
    </Router>
  );
};

export default App;
