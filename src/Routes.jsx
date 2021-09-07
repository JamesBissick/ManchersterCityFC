import React, { useState } from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Pages/Home/Home';

const Routes = (props) => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact component={ Home } path='/' />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
