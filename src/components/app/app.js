import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { POST_SIGN_IN_PATH, POST_SIGN_OUT_PATH } from 'config';
import { authActions } from 'core/auth';


@connect(state => ({
  auth: state.auth
}), authActions)

export class App extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    const { auth, history } = this.props;

    if (auth.authenticated && !nextProps.auth.authenticated) {
      history.replaceState(null, POST_SIGN_OUT_PATH);
    }
    else if (!auth.authenticated && nextProps.auth.authenticated) {
      history.replaceState(null, POST_SIGN_IN_PATH);
    }
  }

  render() {
    const { auth, children, signOut } = this.props;

    return (
      <div>
        <header className="header">
          <div className="g-row">
            <div className="g-col">
              <h1 className="header__title">Todo React Redux</h1>
              <a className="header__link" href="https://github.com/r-park/todo-react-redux"></a>
            </div>
          </div>
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="g-row">
            <div className="g-col">
              {auth.authenticated ? <a onClick={signOut} href="javascript:">Sign out</a> : null}
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
