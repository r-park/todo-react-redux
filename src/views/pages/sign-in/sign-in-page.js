import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from 'src/auth';
import Button from 'src/views/components/button';

import './sign-in-page.css';


const SignInPage = ({signInWithFacebook, signInWithGoogle}) => {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">Hi beautiful. Let's get to know you.</h1>
        <Button className="sign-in__button" onClick={signInWithGoogle}>Sign in with Google</Button>
        <Button className="sign-in__button" onClick={signInWithFacebook}>Sign in with Facebook</Button>
      </div>
    </div>
  );
};

SignInPage.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
};


//=====================================
//  CONNECT
//-------------------------------------

const mapDispatchToProps = {
  signInWithFacebook: authActions.signInWithFacebook,
  signInWithGoogle: authActions.signInWithGoogle,
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(SignInPage)
);
