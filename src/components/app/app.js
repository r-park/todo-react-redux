import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { POST_SIGN_IN_PATH, POST_SIGN_OUT_PATH } from 'config';
import { authActions } from 'core/auth';


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
    this.signOut = this.signOut.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { router } = this.context;
    const { auth } = this.props;

    if (auth.authenticated && !nextProps.auth.authenticated) {
      router.replace(POST_SIGN_OUT_PATH);
    }
    else if (!auth.authenticated && nextProps.auth.authenticated) {
      router.replace(POST_SIGN_IN_PATH);
    }
  }

  signOut() {
    this.props.signOut();
    window.location.replace('/');
  }

  render() {
    const { auth, children } = this.props;

      //  <header className="header">
      //    <div className="g-row">
      //      <div className="g-col">
      //        <h1 className="header__title">Prospect Source</h1>

      //        <ul className="header__links">
      //          {auth.authenticated ? <li><a className="header__link" onClick={this.signOut} href="#">Sign out</a></li> : null}
      //          <li><a className="header__link header__link--github" href="https://github.com/r-park/todo-react-redux"></a></li>
      //        </ul>
      //      </div>
      //    </div>
      //  </header>

      //  <main className="main">{children}</main>
      //</div>
    return (
      <div>
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                    <a className="navbar-brand page-scroll" href="index"><img src="img/ps-icon.png" /><span className="name">Prospect Source</span></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        {auth.authenticated ? <li><a className="header__link" onClick={this.signOut} href="#">Sign out</a></li> : null}
                    </ul>
                </div>
            </div>
        </nav>
        <main className="main">{children}</main>
      </div>

    );
  }
}

export default connect(state => ({
  auth: state.auth
}), authActions)(App);
