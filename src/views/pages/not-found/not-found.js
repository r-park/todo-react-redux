import React from 'react';
import PropTypes from 'prop-types';

import './not-found.css';
import LoaderUnicorn from '../../components/loader-unicorn/loader-unicorn';
import Button from '../../components/button';

const NotFound = ({authenticated, signOut}) => (
  <div className='g-row not-found'>
    <br/>
    <h1>404 - איבדת את הדרך. לא מצאנו את הדף הזה.</h1>
    <br/>
    <Button className='button-small'><a href='/'>חזור לדרך המרכזית</a></Button>
    <LoaderUnicorn isShow={ true }/>
  </div>
);

NotFound.propTypes = {
};


export default NotFound;
