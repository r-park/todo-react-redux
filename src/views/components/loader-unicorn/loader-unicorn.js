import React from 'react';
import Img from 'react-image'

import './loader-unicorn.css';

const LoaderUnicorn = ({ isShow }) => {
  const componentClasses = ['loader-unicorn'];  
  if(!isShow) { componentClasses.push('hideme'); }

  return(
    <Img src='https://i.imgur.com/wULKbXa.gif' 
      className={componentClasses.join(' ')} />
  );
};

LoaderUnicorn.propTypes = {
  isShow: React.PropTypes.bool.isRequired
};

export default LoaderUnicorn;