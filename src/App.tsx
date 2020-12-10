import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Collection from './Components/Collection';
import Delivery from './Components/Delivery';

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
