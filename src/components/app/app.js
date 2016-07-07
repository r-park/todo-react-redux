import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { authActions, getAuth } from 'src/core/auth';
import { paths } from '../routes';


export class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.signOut = ::this.signOut;
  }

  componentWillReceiveProps(nextProps) {
    const { router } = this.context;
    const { auth } = this.props;

    if (auth.authenticated && !nextProps.auth.authenticated) {
      router.replace(paths.SIGN_IN);
    }
    else if (!auth.authenticated && nextProps.auth.authenticated) {
      router.replace(paths.TASKS);
    }
  }

  signOut() {
    this.props.signOut();
  }

  render() {
    const { auth, children } = this.props;

    return (
      <div>
        <header className="header">
          <div className="g-row">
            <div className="g-col">
              <h1 className="header__title">Todo React Redux</h1>

              <ul className="header__links">
                {auth.authenticated ? <li><a className="header__link" onClick={this.signOut} href="#">Sign out</a></li> : null}
                <li><a className="header__link header__link--github" href="https://github.com/r-park/todo-react-redux"></a></li>
              </ul>
            </div>
          </div>
        </header>

        <main className="main">{children}</main>
      </div>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getAuth,
  auth => ({auth})
);

export default connect(
  mapStateToProps,
  authActions
)(App);
