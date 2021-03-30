/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Header } from '../components';

import {
  Home,
} from '../pages';

function Routes() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default Routes;
