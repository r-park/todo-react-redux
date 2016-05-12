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
      <section id="app-sign-in" className="">
    	<div className="container">
    		<div className="row">
    			
    			<div className="col-sm-offset-4 col-sm-4 sign-in">
    				<div id="aau-prospect" >
                      <div className="g-row" >
                        <div className="g-col text-center">
                          <h3 className="sign-in__heading ">Prospect</h3>
                          <h3 className="sign-in__heading ">Sign In</h3>

                          <button onClick={signInWithFacebook} className="btn btn-default btn-large center-button">Facebook</button>
                          <button onClick={signInWithGoogle} className="btn btn-default btn-large center-button">Google</button>
                          <button onClick={signInWithTwitter} className="btn btn-default btn-large center-button">Twitter</button>
                        </div>
                      </div>
    				</div>
    			</div>
    		</div>
    	</div>
    	
          
      </section>
    );
  }
}

export default connect(null, authActions)(SignIn);



//      <section className="page">
//       <form onSubmit={ this.handleSubmit }>
//    	<div className="container">
//    		<div className="row">
//    			<div className="col-sm-4">
//    				<div className="timeline-image1 background-blue">
//    					<h2>1</h2>
//    				</div>
//    				<h5 className="timeline-heading1">Sign In</h5>
//    			</div>
//    			<div className="col-sm-4">
//    				<div className="timeline-image2 background-gray">
//    					<h2>2</h2>
//    				</div>
//    				<h5 className="timeline-heading2">GENERAL INFORMATION</h5>
//    			</div>
//    			<div className="col-sm-4">
//    				<div className="timeline-image3 background-gray">
//    					<h2>3</h2>
//    				</div>
//	    			<h5 className="timeline-heading3">BILLING</h5>
//    			</div>
//    		</div>
//    		<div className="row">
//    			<div style={{width:'33%'}} className="col-sm-3">
//    			</div>
//    			<div style={{width:'33%'}} className="col-sm-3">
//    				<div id="aau-prospect" >
//
//                          <h1 style={{width:'100%', textAlign:'center'}} className="sign-in__heading">Sign In</h1>
//
//                          <button onClick={signInWithFacebook} className="btn btn-default btn-large center-button">Facebook</button>
//                          <button onClick={signInWithGoogle} className="btn btn-default btn-large center-button">Google</button>
//                          <button onClick={signInWithTwitter} className="btn btn-default btn-large center-button">Twitter</button>
//    				</div>
//    			</div>
//    			<div style={{width:'33%'}} className="col-sm-3">
//    			</div>
//    		</div>
//    	</div>
//    	
//          
//        </form>
//      </section>
