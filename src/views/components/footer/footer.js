import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import './footer.css';


const Footer = ({authenticated, signOut}) => (
  <footer className='footer'>
    המערכת נכתבה 
    <a href='https://github.com/metaburn/doocrate'>&nbsp;בקוד פתוח</a>
    &nbsp;ומוגשת ב ❤ מאת
     <a href='/about'>&nbsp;האנשים שיצרו את המערכת</a>
  </footer>
);

Footer.propTypes = {
  
};


export default Footer;
