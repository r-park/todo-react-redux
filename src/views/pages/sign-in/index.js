import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'src/core/auth';


export function SignIn({signInWithGithub, signInWithGoogle, signInWithTwitter}) {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">Sign in</h1>
        <button className="btn sign-in__button" onClick={signInWithGithub} type="button">GitHub</button>
        <button className="btn sign-in__button" onClick={signInWithGoogle} type="button">Google</button>
        <button className="btn sign-in__button" onClick={signInWithTwitter} type="button">Twitter</button>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

export default connect(null, authActions)(SignIn);
