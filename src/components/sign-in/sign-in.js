import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'core/auth';


export class SignIn extends Component {
  static propTypes = {
    signInWithFacebook : PropTypes.func.isRequired,
    signInWithGoogle: PropTypes.func.isRequired,
    signInWithTwitter: PropTypes.func.isRequired
  };

  render() {
    const {
      signInWithFacebook,
      signInWithGoogle,
      signInWithTwitter
    } = this.props;

    return (
      <div className="g-row sign-in">
        <div className="g-col">
          <h1 className="sign-in__heading">Sign in</h1>
          <button className="sign-in__button" onClick={signInWithFacebook} type="button">Facebook</button>
          <button className="sign-in__button" onClick={signInWithGoogle} type="button">Google</button>
          <button className="sign-in__button" onClick={signInWithTwitter} type="button">Twitter</button>
        </div>
      </div>
    );
  }
}

export default connect(null, authActions)(SignIn);
