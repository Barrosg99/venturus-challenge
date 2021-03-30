/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Footer, Header } from '../components';

import {
  Home,
} from '../pages';

function Routes() {
  return (
    <>
      <Header />
      <Footer />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default Routes;
