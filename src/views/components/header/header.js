import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import './header.css';


const Header = ({authenticated, signOut}) => (
  <header className="header">
    <div className="g-row">
      <div className="g-col">
      <ul className="header-actions">
          {authenticated ? <li><Button onClick={signOut}>התנתקי</Button></li> : null}
          <li>
          </li>
        </ul>
        <h1 className="header-title">Doocrate</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired
};


export default Header;
