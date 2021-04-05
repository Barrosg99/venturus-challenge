/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Footer, Header } from '../components';

import {
  Home,
  Team,
} from '../pages';

function Routes() {
  return (
    <>
      <Header />
      <Footer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={['/team/:id', '/create-team']} component={Team} />
      </Switch>
    </>
  );
}

export default Routes;
