import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Main from '../components/main/Main';
import About from '../components/about/About';
import Contacts from '../components/contacts/Contacts';

const DomRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Main}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/contacts' exact component={Contacts}></Route>
      </Switch>
    </Router>
  );
};

export default DomRouter;
