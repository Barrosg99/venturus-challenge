/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Footer, Header } from '../components';

import {
  Home,
  CreateTeam,
} from '../pages';

function Routes() {
  return (
    <>
      <Header />
      <Footer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-team" component={CreateTeam} />
      </Switch>
    </>
  );
}

export default Routes;
