import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';






export class ProspectSummary extends Component {
  
  
  handleVideoClick(){
    result.access_token = "ya29.CjHaAtZTxnBjtbYIilsdP_JwsuS0HKLxKc6Lz5Ege2QO43pCtktJulP9YP96VeSjGryf";
    var uploadVideo = new UploadVideo();
    uploadVideo.ready(result.access_token);
      debugger;

  }
  
  // click-handlers for Prospect-signin
  
  handleConfirmClick(event) {
	document.getElementById('prospect-confirmation').style.display='none';
	document.getElementById('prospect-dashboard').style.display='block';
	window.scrollTo(0, 0);
  } 
  
  // click-handlers for prospect-dashboard
  
   handleDashboardClick() {
    document.getElementById('prospect-updates-container').style.display='block';
    document.getElementById('player-d1-recruiting-summary').style.display='none';
	document.getElementById('player-d2-recruiting-summary').style.display='none';
	document.getElementById('player-d3-recruiting-summary').style.display='none';
	document.getElementById('player-d4-recruiting-summary').style.display='none';
	document.getElementById('player-d5-recruiting-summary').style.display='none';
  }
   
   handleSummaryClick() {
    document.getElementById('prospect-updates-container').style.display='none';
    document.getElementById('player-d1-recruiting-summary').style.display='block';
  }
  
  		handleD1SummaryClick() {
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='block';
			document.getElementById('player-d2-recruiting-summary').style.display='none';
			document.getElementById('player-d3-recruiting-summary').style.display='none';
			document.getElementById('player-d4-recruiting-summary').style.display='none';
			document.getElementById('player-d5-recruiting-summary').style.display='none';
			document.getElementById('all-d1-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('hm-schools-recruiting-feed').style.display='none';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='none';
			document.getElementById('mm-schools-recruiting-feed').style.display='none';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='none';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
		  }
		handleD2SummaryClick() {
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='none';
			document.getElementById('player-d2-recruiting-summary').style.display='block';
			document.getElementById('player-d3-recruiting-summary').style.display='none';
			document.getElementById('player-d4-recruiting-summary').style.display='none';
			document.getElementById('player-d5-recruiting-summary').style.display='none';
		  }
		handleD3SummaryClick() {
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='none';
			document.getElementById('player-d2-recruiting-summary').style.display='none';
			document.getElementById('player-d3-recruiting-summary').style.display='block';
			document.getElementById('player-d4-recruiting-summary').style.display='none';
			document.getElementById('player-d5-recruiting-summary').style.display='none';
		  }
		handleD4SummaryClick() {
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='none';
			document.getElementById('player-d2-recruiting-summary').style.display='none';
			document.getElementById('player-d3-recruiting-summary').style.display='none';
			document.getElementById('player-d4-recruiting-summary').style.display='block';
			document.getElementById('player-d5-recruiting-summary').style.display='none';
		  }
		handleD5SummaryClick() {
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='none';
			document.getElementById('player-d2-recruiting-summary').style.display='none';
			document.getElementById('player-d3-recruiting-summary').style.display='none';
			document.getElementById('player-d4-recruiting-summary').style.display='none';
			document.getElementById('player-d5-recruiting-summary').style.display='block';
		  }
		  
		handleD1HMFilter() {
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='none';
			document.getElementById('mm-schools-recruiting-feed').style.display='none';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='none';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
		}
		handleD1HMMMFilter() {
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='none';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('mm-schools-recruiting-feed').style.display='none';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='none';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
		}
		handleD1MMFilter() {
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='none';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='none';
			document.getElementById('mm-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='none';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
		}
		handleD1MMLMFilter() {
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='none';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='none';
			document.getElementById('mm-schools-recruiting-feed').style.display='none';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
		}
		handleD1LMFilter() {
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='none';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='none';
			document.getElementById('mm-schools-recruiting-feed').style.display='none';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='none';
			document.getElementById('lm-schools-recruiting-feed').style.display='inline-block';
		}
   
  handleEditProfileClick(event)  {
  	document.getElementById('prospect-dashboard').style.display='none';
  	document.getElementById('general-info').style.display='block';
  }
  
  handleEditPricingPlanClick(event)  {
    document.getElementById('prospect-dashboard').style.display='none';
  	document.getElementById('prospect-plans-features').style.display='block';
  }
 
  handleVideoServiceClick(event)  {
  		debugger;
  	if (this.props.task.pricePlan == "Basic Plan") {
	    document.getElementById("upgrade-price-plan").style.display='block';
	} else {
  	document.getElementById('prospect-dashboard').style.display='none';
  	document.getElementById('video-upload').style.display='block';
  	}
  }

  handleMarketingServiceClick(event)  {
  	if (this.props.task.pricePlan == "Basic Plan" 
  	|| this.props.task.pricePlan == "Plus Monthly Plan" 
  	|| this.props.task.pricePlan == "Plus Yearly Plan") {
		document.getElementById("upgrade-price-plan").style.display='block';	
	} else  {
  	document.getElementById('prospect-dashboard').style.display='none';
  	document.getElementById('marketing-service').style.display='block';
  	}
  } 

  handleLetterClick(event) {
    document.getElementById("letter-update").style.display='block';
  }
  
  handleTextClick(event) {
    document.getElementById("text-update").style.display='block';
  }
  
  handleEmailClick(event) {
    document.getElementById("email-update").style.display='block';
  }
  
  handleCallClick(event) {
    document.getElementById("call-update").style.display='block';
  }
  
  handleCampClick(event) {
    document.getElementById("camp-update").style.display='block';
  }
  
  handleWorkoutClick(event) {
    document.getElementById("workout-update").style.display='block';
  }
  
  handleCampusClick(event) {
    document.getElementById("campus-update").style.display='block';
  }
  
  handleOfferedClick(event) {
    document.getElementById("offered-update").style.display='block';
  }
  
  submitUpdate(event) {
    document.getElementById("upgrade-price-plan").style.display='none';
	document.getElementById("marketing-confirm").style.display='none';
  }
   
  closeVideoUpload(event) {
	document.getElementById("video-upload").style.display='none';
    document.getElementById("prospect-dashboard").style.display='block';
  }
   
  submitMarketingOrder(event) {
    document.getElementById("marketing-service").style.display='none';
    document.getElementById("marketing-confirm").style.display='block';
    document.getElementById("prospect-dashboard").style.display='block';
    window.scrollTo(0, 0);
  }

  coachesView(event)  {
	  document.getElementById("profile").style.display='block';
	  document.getElementById("prospect-dashboard").style.display='none';
	  window.scrollTo(0, 0);
  } 
   
  handleCollegeRecruitingSummary() {
  	  document.getElementById("recruiting-activity-summary").style.display='block';
  }
  
  closeCollegeRecruitingSummary() {
  	  document.getElementById("recruiting-activity-summary").style.display='none';
  }
  

// click-handlers for Player-Profile

   handleContactClick() {
    document.getElementById('profile-contact-info').style.display='block';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='none';
    document.getElementById('player-recruiting-interest').style.display='none';
  }
  
   handleAthleticClick(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='block';
    document.getElementById('profile-academic-info').style.display='none';
    document.getElementById('player-recruiting-interest').style.display='none';
  }

   handleAcademicClick(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='block';
    document.getElementById('player-recruiting-interest').style.display='none';
  }
  
   handleRecruitingClick(event) {
    document.getElementById('profile-contact-info').style.display='none';
    document.getElementById('profile-athletic-info').style.display='none';
    document.getElementById('profile-academic-info').style.display='none';
    document.getElementById('player-recruiting-interest').style.display='block';
  }

   backToDashboard(event) {
      document.getElementById("profile").style.display='none';
	  document.getElementById("prospect-dashboard").style.display='block';
	  window.scrollTo(0, 0);
  }
  
// click-handlers for coaches-signin


// click-handlers for coaches-dashboard
  
  


  render() {
    
    return (
        <div >
              
              
              
                           	<div id="player-d1-recruiting-summary" className="">
								<h2 id="prospect-interest" className="text-center" >D1 Recruiting Interest</h2>
								<div id="recruiting-interest-cats">   
									<ul>
										<li className="btn btn-default" onClick={this.handleD1HMFilter}>High Major</li>
										<li className="btn btn-default" onClick={this.handleD1HMMMFilter}>High Major - / Mid-Major +</li>
										<li className="btn btn-default background-blue" onClick={this.handleD1MMFilter}>Mid-Major</li>
										<li className="btn btn-default background-blue" onClick={this.handleD1MMLMFilter}>Mid-Major - / Low Major +</li>
										<li className="btn btn-default" onClick={this.handleD1LMFilter}>Low Major</li>
									</ul>						
								</div>
								<div id="all-d1-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Southwest Minnesota University</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
								<div id="hm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>task.High Major</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
								<div id="hmmm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>task.High Major - / Mid-Major +</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
								<div id="mm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>task.Mid-Major +</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
								<div id="mmlm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>task.Mid-Major - / Low Major +</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
								<div id="lm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>task.Low Major +</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
							</div>
							<div id="player-d2-recruiting-summary" className="text-center">
								<h2 id="prospect-interest" className="text-center" >D2 Recruiting Interest</h2>
								<div className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>D2 school</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
							</div>
							<div id="player-d3-recruiting-summary" className="text-center">
								<h2 id="prospect-interest" className="text-center" >D3 Recruiting Interest</h2>
								<div className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>D3 school</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
							</div>
							<div id="player-d4-recruiting-summary" className="text-center">
								<h2 id="prospect-interest" className="text-center" >NAIA Recruiting Interest</h2>
								<div className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>NAIA school</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
							</div>
							<div id="player-d5-recruiting-summary" className="text-center">
								<h2 id="prospect-interest" className="text-center" >JUCO Recruiting Interest</h2>
								<div className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>JUCO school</li>
										<li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>Drake University</li>
									</ul>
								</div>
							</div>
                       
       </div>
    );
  }
}


