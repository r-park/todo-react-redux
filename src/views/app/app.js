import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';

import { authActions, getAuth } from 'src/auth';
import Header from '../components/header';
import RequireAuthRoute from '../components/require-auth-route';
import RequireUnauthRoute from '../components/require-unauth-route';
import SignInPage from '../pages/sign-in';
import TasksPage from '../pages/tasks';
import NotFound from '../pages/not-found/';
import 'react-select/dist/react-select.css';


const App = ({authenticated, signOut}) => (
  <div>
    <Header
      authenticated={authenticated}
      signOut={signOut}
    />

    <main>    
      <Switch>
        <RequireAuthRoute authenticated={authenticated} exact path="/" component={TasksPage}/>      
        <RequireAuthRoute authenticated={authenticated} path="/task/:id" component={TasksPage} />
        <RequireUnauthRoute authenticated={authenticated} path="/sign-in" component={SignInPage}/>
        <Route component={NotFound}/>
      </Switch>
    </main>
  </div>
);

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut: authActions.signOut
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
