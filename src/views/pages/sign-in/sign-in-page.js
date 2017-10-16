import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authActions } from 'src/auth';
import Button from 'src/views/components/button';
import Img from 'react-image';
import Icon from 'src/views/components/icon';
import { NavLink } from 'react-router-dom';

import './sign-in-page.css';


const SignInPage = ({signInWithFacebook, signInWithGoogle}) => {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <h1 className="sign-in__heading">
          ברוכים הבאות לדואוקרט
        </h1>
        <h3 className="sign-in__heading">
מערכת לניהול ארועי יצירה משותפת
        </h3>
        <div className='sign-in__content'>
          <h3 className='before-about'>
          בהרשמה כאן תכנסו למערכת ניהול המשימות השיתופי של מידברנרות 
          </h3>
          <h5 className='about-header'>
          (<NavLink to='/about'> קצת על המערכת ></NavLink>)
          </h5>
          <br />
          <h3>
  כמה נקודות חשובות לפי שמתחילים:
          </h3>
          <h3>
          <Icon name='done' className='grow done' />
          כל אחד מוזמן להירשם לכל משימה (כל עוד היא פנויה)
          </h3>
          <h3>
          <Icon name='done' className='grow done' />
            נבקש שתרשמו למשימה אחת בלבד כדי לאפשר לכולם להשתתף 
          </h3>
          <h3>
          <Icon name='done' className='grow done' />
          כל אחד יכול להציע כל משימה (גם בלי להירשם למשימה שהציע)
          </h3>
          <h3>
          <Icon name='done' className='grow done' />
          האירוע יתקיים רק אם נבצע את כל המשימות הקריטיות לקיומו
          </h3>
          <h3>
          <Icon name='done' className='grow done' />
            כל השאר - מה שלא נעשה לא יקרה :)
          </h3>
          <h3>
            קחו חלק בניסוי
          </h3>
          <div className='sign-in-buttons'>
            <Button className="sign-in__button" onClick={signInWithGoogle}>התחברי עם גוגל</Button>
            <Button className="sign-in__button" onClick={signInWithFacebook}>התחברי עם פייסבוק</Button>
        </div>
        <br/>
        <br/>
        </div>
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
