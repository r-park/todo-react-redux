import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';





export class ProspectDashboard extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {editing: false};

    this.delete = this.delete.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.stopEditing = this.stopEditing.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  delete() {
    this.props.deleteTask(this.props.task);
  }

  editTitle() {
      //debugger;
    this.setState({editing: true});
      //debugger;
  }

  saveTitle(event) {
    if (this.state.editing) {
      const { task } = this.props;
      const title = event.target.value.trim();

      if (title.length && title !== task.title) {
        this.props.updateTask(task, {title});
      }

      this.stopEditing();
    }
  }

  stopEditing() {
    this.setState({editing: false});
  }

  toggleStatus() {
    let checked = !this.props.task.completed;
    this.props.updateTask(this.props.task, {completed: checked});
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      this.saveTitle(event);
    }
    else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }

  filters(){
    return <ul>
        <li className="btn btn-default" onClick={this.handleD1HMFilter.bind(this)}>High Major</li>
        <li className="btn btn-default" onClick={this.handleD1HMMMFilter.bind(this)}>High Major - / Mid-Major +</li>
        <li className="btn btn-default " onClick={this.handleD1MMFilter.bind(this)}>Mid-Major</li>
        <li className="btn btn-default " onClick={this.handleD1MMLMFilter.bind(this)}>Mid-Major - / Low Major +</li>
        <li className="btn btn-default" onClick={this.handleD1LMFilter.bind(this)}>Low Major</li>
    </ul>						
   }
   prospectSummary(){
       debugger;
       debugger;
        //D1HMFilter
        //D1HMMMFilter
        //D1LMFilter
        //D1MMFilter
        //D1MMLMFilter
       //
                                //college.value.indexOf('DIII')?
                                //    return <li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>{college.college}</li>
                                //    : return <div></div>;
                                

        return(

            <div style={{height:'220px',overflow:'auto'}}>
                {
                    this.props.task.recruitingInfo ?
                    Object.keys(this.props.task.recruitingInfo).map(
                        (task)=>{
                            return Object.keys(this.props.task.recruitingInfo[task])
                            .map((textFilter)=>{
                                var college = this.props.task.recruitingInfo[task][textFilter];
                                    console.log('========================');
                                    console.log('========================');
                                    console.log('college: '+college.college);
                                    console.log('conference: '+college.conference);
                                    console.log('value: '+college.value);
                                    console.log('valueLength: '+college.value.length);
                                    console.log('=========DIII===============');
                                    console.log(college.value.indexOf('DI'));
                                    console.log('==========D1HMFilter ==============');
                                    console.log(this.state.D1HMFilter );
                                    console.log('==========D1HMMMFilter==============');
                                    console.log(!!this.state.D1HMMMFilter);
                                if (
                                    college.value.indexOf('High-Major') != -1                       && college.value.length == 17 && !!this.state.D1HMFilter      && !this.state.D4SummaryClick && !this.state.D5SummaryClick
                                    || college.value.indexOf('High-Major - / Mid-Major +') != -1                                  && !!this.state.D1HMMMFilter    && !this.state.D4SummaryClick && !this.state.D5SummaryClick
                                    || college.value.indexOf('Mid-Major') != -1                     && college.value.length == 13 && !!this.state.D1MMFilter      && !this.state.D4SummaryClick && !this.state.D5SummaryClick
                                    || college.value.indexOf('Mid-Major - / Low-Major +') != -1                                   && !!this.state.D1MMLMFilter    && !this.state.D4SummaryClick && !this.state.D5SummaryClick
                                    || college.value.indexOf('Low-Major') != -1                     && college.value.length == 13 && !!this.state.D1LMFilter     
                                    || college.value.indexOf('DII') != -1                           && college.value.length == 7  && !!this.state.D2SummaryClick       
                                    || college.value.indexOf('DIII') != -1                          && college.value.length == 8  && !!this.state.D3SummaryClick       
                                    || college.value.indexOf('NAIA') != -1                                                        && !!this.state.D4SummaryClick       
                                    || college.value.indexOf('JUCO') != -1                                                        && !!this.state.D5SummaryClick        
                                ){
                                        return <li className="prospect-button background-light-gray" onClick={this.handleCollegeRecruitingSummary}>{college.college} : {college.value} </li>;
                                }else{ 
                                    return <div></div>;
                                }
                            })
                        }
                    ): ""
                }
            </div>
        );
   }
          // First Name       : {task.firstName} 
          // Last Name        : {task.lastName}
          // Email (Athlete)  : {task.emailAthlete}
          // Phone (Athlete)  : {task.phoneAthelete}
          // Adress           : {task.addressAthelete}
          // City             : {task.cityAthelete}
          // State            : {task.stateAthelete}
          // Zip              : {task.zipAthelete}
          // Coach Name (AAU) : {task.aauCoachName}
          // Coach Email (AAU): {task.aauCoachEmail}
          // Coach Phone (AAU): {task.aauCoachPhone}
          // Coach Name (HS)  : {task.hsCoachName}
          // Coach Email (HS) : {task.hsCoachEmail}
          // Coach Phone (HS) : {task.hsCoachPhone}
          // GradeClass       : {task.gradeClass}
          // Height           : {task.height}
          // Weight           : {task.weight}
          // Vertical Jump    : {task.vertJump}
          // Posistion        : {task.posistion}
          // Program (AAU)    : {task.aauProgram}
          // Jersey (AAU)     : {task.aauJersey}
          // High School      : {task.highSchool}
          // HUDL Profile     : {task.hudlProfile}
          // GPA              : {task.gpa}
          // ACT              : {task.act}
          // Class Rank       : {task.classRank}
  renderTitle(task) {
      var divStyle={width: '33%', display: 'inline-block'};
    return (
        <div>
        <div className="panel-container" style={{width: '20%', display: 'inline-block'}}>
            <div id="program-name" ><h5>Prospect Name</h5></div>
            <div id="" className="data-cat-btn background-gray">
                <h5>Dashboard</h5>
            </div>
            <div className="panel-cat-name">
                <h5>Edit Information</h5>
            </div>
            <div id="" className="data-cat-btn background-gray" >
                <h5>Contact Information</h5>
            </div>
            <div id="" className="data-cat-btn background-gray" >
                <h5>Athletic Information</h5>
            </div>
            <div id="" className="data-cat-btn background-gray" >
                <h5>Academic Information</h5>
            </div>
            <div className="panel-cat-name">
                <h5 >Order Premium Service</h5>
            </div>
            <div id="" className="data-cat-btn background-gray" >
                <h5>Video Service</h5>
            </div>
            <div id="" className="data-cat-btn background-gray" >
                <h5>Marketing Service</h5>
            </div>
        </div>    				
        <div className="prospect-container"style={{width: '70%',height: '655px', display: 'inline-block'}}>
    						<ul className="prospect-categories list-inline">
    							<li className="cat-btn background-blue"><input type="checkbox"  />D1</li>
    							<li className="cat-btn background-blue"><input type="checkbox"  />D2</li>
    							<li className="cat-btn background-blue"><input type="checkbox"  />D3</li>
    							<li className="cat-btn background-blue"><input type="checkbox"  />NAIA</li>
    							<li className="cat-btn background-blue"><input type="checkbox"  />JUCO</li>
    						</ul>
    						<h2 id="prospect-interest" className="text-center" >Recruiting Interest</h2>
							<div id="recruiting-tracking">    						
								<div className="row">
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED</h5><h5>A LETTER</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED A TEXT</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED AN EMAIL</h5></div>
								</div>
								<div className="row">
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED A PHONE CALL</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>WAS INVITED TO A CAMP</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"      style={divStyle}><h5>HAD A PRIVATE WORKOUT</h5></div>
								</div>
								<div className="row">
									<div className="col-sm-4 recruiting-tracking-btn background-blue"       style={divStyle}><h5>WAS INVITED TO CAMPUS</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"      style={divStyle}><h5>WAS OFFERED</h5></div>
								</div>
							</div>

          <div
            className="task-item__title"
            ref={c => this.titleText = c}
            tabIndex="0">
            {task.firstName}    {task.lastName}      ({task.gradeClass}/{task.posistion})      {task.stateAthelete}

           First Name       : {task.firstName} 
           Last Name        : {task.lastName}

           Email (Athlete)  : {task.emailAthlete}
           Phone (Athlete)  : {task.phoneAthelete}
           Adress           : {task.addressAthelete}
           City             : {task.cityAthelete}
           State            : {task.stateAthelete}
           Zip              : {task.zipAthelete}
           Coach Name (AAU) : {task.aauCoachName}
           Coach Email (AAU): {task.aauCoachEmail}
           Coach Phone (AAU): {task.aauCoachPhone}
           Coach Name (HS)  : {task.hsCoachName}


          </div> 
       </div> 
        </div>
    );
  }

  renderTitleInput(task) {
    return (
      <input
        autoComplete="off"
        autoFocus
        className="task-item__input"
        defaultValue={task.title}
        maxLength="64"
        onBlur={this.saveTitle}
        onKeyUp={this.onKeyUp}
        ref={c => this.titleInput = c}
        type="text"
      />
    );
  }
  
  
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
		this.handleD2SummaryClick();
            this.state['D1SummaryClick'] = true;
            this.state['D2SummaryClick'] = false;
            this.state['D3SummaryClick'] = false;
            this.state['D4SummaryClick'] = false;
            this.state['D5SummaryClick'] = false;
            this.state.D1HMFilter        = true;
            this.state.D1HMMMFilter      = true;
            this.state.D1MMFilter        = true;
            this.state.D1MMLMFilter      = true;
            this.state.D1LMFilter        = true;
            this.props.updateTask(this.props.task, this.state);
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
  
  		handleD1SummaryClick() {
		this.handleD2SummaryClick();
            debugger;
            this.state['D1SummaryClick'] = true;
            this.state['D2SummaryClick'] = false;
            this.state['D3SummaryClick'] = false;
            this.state['D4SummaryClick'] = false;
            this.state['D5SummaryClick'] = false;
            this.state.D1HMFilter        = true;
            this.state.D1HMMMFilter      = true;
            this.state.D1MMFilter        = true;
            this.state.D1MMLMFilter      = true;
            this.state.D1LMFilter        = true;
            this.props.updateTask(this.props.task, this.state);
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
            this.state['D1SummaryClick'] = false;
            this.state['D2SummaryClick'] = true;
            this.state['D3SummaryClick'] = false;
            this.state['D4SummaryClick'] = false;
            this.state['D5SummaryClick'] = false;
            this.state.D1HMFilter        = false;
            this.state.D1HMMMFilter      = false;
            this.state.D1MMFilter        = false;
            this.state.D1MMLMFilter      = false;
            this.state.D1LMFilter        = false;
            this.props.updateTask(this.props.task, this.state);
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='none';
			document.getElementById('player-d2-recruiting-summary').style.display='block';
			document.getElementById('player-d3-recruiting-summary').style.display='none';
			document.getElementById('player-d4-recruiting-summary').style.display='none';
			document.getElementById('player-d5-recruiting-summary').style.display='none';
		  }
		handleD3SummaryClick() {

            this.state['D1SummaryClick'] = false;
            this.state['D2SummaryClick'] = false;
            this.state['D3SummaryClick'] = true;
            this.state['D4SummaryClick'] = false;
            this.state['D5SummaryClick'] = false;
            this.state.D1HMFilter        = false;
            this.state.D1HMMMFilter      = false;
            this.state.D1MMFilter        = false;
            this.state.D1MMLMFilter      = false;
            this.state.D1LMFilter        = false;


            this.props.updateTask(this.props.task, this.state);
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='none';
			document.getElementById('player-d2-recruiting-summary').style.display='none';
			document.getElementById('player-d3-recruiting-summary').style.display='block';
			document.getElementById('player-d4-recruiting-summary').style.display='none';
			document.getElementById('player-d5-recruiting-summary').style.display='none';
		  }
		handleD4SummaryClick() {

            this.state['D1SummaryClick'] = false;
            this.state['D2SummaryClick'] = false;
            this.state['D3SummaryClick'] = false;
            this.state['D4SummaryClick'] = true;
            this.state['D5SummaryClick'] = false;
            this.state.D1HMFilter        = false;
            this.state.D1HMMMFilter      = false;
            this.state.D1MMFilter        = false;
            this.state.D1MMLMFilter      = false;
            this.state.D1LMFilter        = false;




            this.props.updateTask(this.props.task, this.state);
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='none';
			document.getElementById('player-d2-recruiting-summary').style.display='none';
			document.getElementById('player-d3-recruiting-summary').style.display='none';
			document.getElementById('player-d4-recruiting-summary').style.display='block';
			document.getElementById('player-d5-recruiting-summary').style.display='none';
		  }
		handleD5SummaryClick() {
            this.state['D1SummaryClick'] = false;
            this.state['D2SummaryClick'] = false;
            this.state['D3SummaryClick'] = false;
            this.state['D4SummaryClick'] = false;
            this.state['D5SummaryClick'] = true;
            this.state.D1HMFilter        = false;
            this.state.D1HMMMFilter      = false;
            this.state.D1MMFilter        = false;
            this.state.D1MMLMFilter      = false;
            this.state.D1LMFilter        = false;



            this.props.updateTask(this.props.task, this.state);
			document.getElementById('prospect-updates-container').style.display='none';
			document.getElementById('player-d1-recruiting-summary').style.display='none';
			document.getElementById('player-d2-recruiting-summary').style.display='none';
			document.getElementById('player-d3-recruiting-summary').style.display='none';
			document.getElementById('player-d4-recruiting-summary').style.display='none';
			document.getElementById('player-d5-recruiting-summary').style.display='block';
		  }
		  
		handleD1HMFilter() {
            debugger;
            this.state['D1HMFilter'] ? this.state['D1HMFilter']=false: this.state['D1HMFilter']=true;
            debugger;
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='none';
			document.getElementById('mm-schools-recruiting-feed').style.display='none';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='none';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
            this.props.updateTask(this.props.task, this.state);
		}
		handleD1HMMMFilter() {
            this.state['D1HMMMFilter'] ? this.state['D1HMMMFilter']=false: this.state['D1HMMMFilter']=true;
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='none';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('mm-schools-recruiting-feed').style.display='none';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='none';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
            this.props.updateTask(this.props.task, this.state);
		}
		handleD1MMFilter() {
            this.state['D1MMFilter'] ? this.state['D1MMFilter']=false: this.state['D1MMFilter']=true;
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='none';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='none';
			document.getElementById('mm-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='none';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
            this.props.updateTask(this.props.task, this.state);
		}
		handleD1MMLMFilter() {
            this.state['D1MMLMFilter'] ? this.state['D1MMLMFilter']=false: this.state['D1MMLMFilter']=true;
			document.getElementById('all-d1-schools-recruiting-feed').style.display='none';
			document.getElementById('hm-schools-recruiting-feed').style.display='none';
			document.getElementById('hmmm-schools-recruiting-feed').style.display='none';
			document.getElementById('mm-schools-recruiting-feed').style.display='none';
			document.getElementById('mmlm-schools-recruiting-feed').style.display='inline-block';
			document.getElementById('lm-schools-recruiting-feed').style.display='none';
            this.props.updateTask(this.props.task, this.state);
		}
		handleD1LMFilter() {
            this.state['D1LMFilter'] ? this.state['D1LMFilter']=false: this.state['D1LMFilter']=true;
            this.props.updateTask(this.props.task, this.state);
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
    const { editing } = this.state;
    const { task } = this.props;

    console.log('task:'+task);
    //debugger;
    return (
        <div >
              
              
              <section id="prospect-confirmation" className="page">

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="text-center" >You have successfully created your prospect profile!</h3>
                                <p>Now that you have created your profile, you will be entered into our master 
                                prospect database. This database is searched by coaches of all levels.</p>
                                <p>In order to increase your chance of appearing in database searches, please 
                                add recruiting interest to your profile. Once you are on the dashboard, you will
                                 be able to let everyone know who is currently recruiting you. </p>
                                <p>In addition to adding recruiting interest to your profile, you can order 
                                premium video and marketing service to get your information in front of more 
                                coaches.</p>
                                <p>We will email a bill corresponding to your chosen pricing plan in the next 3-5 days.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.handleConfirmClick} className="btn btn-default btn-large center-button">View Profile</button>
                
            </section>
            <section id="prospect-dashboard" className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="panel-container">
                                    <div id="program-name" ><h5>{task.firstName} {task.lastName}</h5></div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleDashboardClick}>
                                        <h5>Dashboard</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleSummaryClick.bind(this)}>
                                        <h5>Summary</h5>
                                    </div>
                                    <div className="panel-cat-name">
                                        <h5>Edit Profile</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleEditProfileClick}>
                                        <h5>Prospect Information</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleEditPricingPlanClick}>
                                        <h5>Pricing Plan</h5>
                                    </div>
                    
                                    <div className="panel-cat-name">
                                        <h5>Premium Service</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleVideoServiceClick.bind(this)}>
                                        <h5>Video Service</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleMarketingServiceClick.bind(this)}>
                                        <h5>Marketing Service</h5>
                                    </div>
                                </div>    				
                            </div>
                    <div className="col-sm-9">
                        <div><u><h5 id="prospect-clubname">{task.pricePlan}</h5></u><u><h5 onClick={this.coachesView} id="prospect-coach-view" className="text-right">View What Coaches See</h5></u></div>
                        
                        <div className="registered-prospect-container">
                        	 
								<ul className="prospect-categories list-inline">
									<li className="cat-btn background-blue"                onClick={this.handleD1SummaryClick.bind(this)}>D1</li>
									<li className="cat-btn background-blue"                onClick={this.handleD2SummaryClick.bind(this)}>D2</li>
									<li className="cat-btn background-blue"                onClick={this.handleD3SummaryClick.bind(this)}>D3</li>
									<li className="cat-btn background-blue"                onClick={this.handleD4SummaryClick.bind(this)}>NAIA</li>
									<li className="cat-btn background-blue"                onClick={this.handleD5SummaryClick.bind(this)}>JUCO</li>
								</ul>
							<div id="prospect-updates-container">
								<h2 id="prospect-interest" className="text-center" >Recruiting Interest</h2>
								<p id="prospect-interest-caption" className="text-center background-light-gray">Build your profile by tracking which schools are recruiting you!</p>
								<div id="recruiting-tracking">    						
									<div className="row">
										<div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleLetterClick}><p>RECEIVED A LETTER</p></div>
										<div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleTextClick}><p>RECEIVED A TEXT</p></div>
										<div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleEmailClick}><p>RECEIVED AN EMAIL</p></div>
									</div>
									<div className="row">
										<div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleCallClick}><p>RECEIVED A PHONE CALL</p></div>
										<div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleCampClick}><p>WAS INVITED TO A CAMP</p></div>
										<div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleWorkoutClick}><p>HAD A PRIVATE WORKOUT</p></div>
									</div>
									<div className="row">
										<div className="col-sm-4 recruiting-tracking-btn background-blue"onClick={this.handleCampusClick}><p>WAS INVITED TO CAMPUS</p></div>
										<div className="col-sm-4 recruiting-tracking-btn background-blue"onClick={this.handleOfferedClick}><p>WAS OFFERED</p></div>
									</div>
								</div>
                           	</div>
                           	<div className="g-col">
							
						
							</div>
                           	<div id="player-d1-recruiting-summary" className="">
								<h2 id="prospect-interest" className="text-center" >D1 Recruiting Interest</h2>
								<div id="recruiting-interest-cats">   
                                    {this.filters()}
								</div>
								<div id="all-d1-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
								<div id="hm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
								<div id="hmmm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
								<div id="mm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
								<div id="mmlm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
								<div id="lm-schools-recruiting-feed" className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
							</div>
							<div id="player-d2-recruiting-summary" className="text-center">
								<h2 id="prospect-interest" className="text-center" >D2 Recruiting Interest</h2>
								<div id="recruiting-interest-cats">   
								</div>
								<div className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
							</div>
							<div id="player-d3-recruiting-summary" className="text-center">
								<h2 id="prospect-interest" className="text-center" >D3 Recruiting Interest</h2>
								<div id="recruiting-interest-cats">   
								</div>
								<div className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
							</div>
							<div id="player-d4-recruiting-summary" className="text-center">
								<h2 id="prospect-interest" className="text-center" >NAIA Recruiting Interest</h2>
								<div className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
							</div>
							<div id="player-d5-recruiting-summary" className="text-center">
								<h2 id="prospect-interest" className="text-center" >JUCO Recruiting Interest</h2>
								<div className="recruiting-activity-feed" >
									<ul className=" list-unstyled" >
                                        {this.prospectSummary()}
									</ul>
								</div>
							</div>
                        </div>
                        <div id="upgrade-price-plan" className="recruit-update-container text-center">
						  <u><h3>Premium Services</h3></u>
						  <div className="letter-attributes background-light-gray text-center">
			 				<p>To access these services please upgrade your pricing plan.</p>
						  </div>
						  <button className="btn btn-default btn-large" onClick={this.submitUpdate}>Close</button>        
						</div>
						<div id="recruiting-activity-summary" className="college-recruiting-summary text-center">
                        <h5 style={{color:'red'}}><b>Note:</b> Upcoming feature</h5>
						  <u><h5>Drake University & {task.firstName} {task.lastName}</h5></u>
						  <ul className="list-unstyled text-left">
		 				  	<li><div className="highlight-box background-blue"></div>Letter</li>
		 				  	<li><div className="highlight-box background-blue"></div>Text</li>
		 				  	<li><div className="highlight-box background-blue"></div>Phone Call</li>
		 				  	<li><div className="highlight-box"></div>Camp Invite</li>
		 				  	<li><div className="highlight-box"></div>Private Workout</li>
		 				  	<li><div className="highlight-box background-blue"></div>Recruiting Visit</li>
		 				  	<li><div className="highlight-box"></div>Scholarship Offer</li>
						  </ul>
						  <button className="btn btn-default btn-large" onClick={this.closeCollegeRecruitingSummary}>Close</button>        
						</div>
                    </div>
                </div>
            </div>
            </section>
            
            
            <section id="video-upload" className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-md-3">
                                <div id="video-description" className="panel-container">
                                    <div className="text-center" ><h3>Premium Video Service</h3></div>
                                    <p id="video-paragraph" >When you subscribe to our Premium Video Service, all you have to do is 
                                    upload your video, and we will take it from there!</p>
                                </div>    				
                            </div>
                            <div className="col-sm-8 col-md-9">
                                <div className="prospect-container"> 
                                	<a href="https://prospect-source.firebaseapp.com/upload_video.html">
										<button id="video-files-button" className="btn btn-default btn-large center-button background-light-gray">
											Upload Video File
										</button>
                                    </a>
                                    <button className="btn btn-default btn-large center-button" onClick={this.closeVideoUpload}>
                                    	Back To Dashboard
                                	</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </section>
            
             <section id="marketing-service" className="">
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-md-3">
								<div id="video-description" className="panel-container">
									<div className="text-center" ><h3>Marketing Service</h3></div>
									<p id="video-paragraph" >When you upload your highlight video to our Premium
									 Marketing Service, we will send it out to coaches for you!</p>
								</div>    				
							</div>
							<div className="col-sm-8 col-md-9">
								<div className="prospect-container">
									<div className="video-upload-container list-unstyled">
										<a href="https://prospect-source.firebaseapp.com/upload_video.html">
											<button id="video-files-button" className="btn btn-default btn-large center-button background-light-gray">
												Upload Video File
											</button>
										</a>										
										<div id="hudl-url">Hudl Highlight URL<input className="custom-file-input" type="text" name="hudl-url" /></div>
									</div>
									<button id="submit-back" className="btn btn-default btn-large" onClick={this.submitMarketingOrder}>Submit & Return To Dashboard</button>
								</div>
							</div>
						</div>
					</div>
					<div id="marketing-confirm" className="marketing-confirm-container text-center">
					  <div className="marketing-confirm background-light-gray">
						<h4>Thanks for submitting your highlight video!</h4>
						<p className="text-left" >Thanks for submitting a highlight video. Our team will post this video to our YouTube channel and/or distribute it directly to college
						coaches within your rating. If you only submitted your Hudl highlight URL, we will send this directly to college coaches and push
						them towards your Hudl profile. </p>
						<p className="text-left">Your CC on file will be charged accordingly for this service.</p>
						<button className="btn btn-default btn-large center-button" onClick={this.submitUpdate}>Submit Marketing Order</button>
					  </div>        
					</div>
			</section>
    
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//apis.google.com/js/client:plusone.js"></script>
    <script src="cors_upload.js"></script>
    <script src="upload_video.js"></script>
    
    
    
    
    <section id="coaches-plans" className="page">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-gray">
    					<h2>1</h2>
    				</div>
    				<h5 className="timeline-heading1">CREATE ACCOUNT</h5>
    			</div>
    			<div className="col-sm-4">
    				<div className="timeline-image2 background-gray">
    					<h2>2</h2>
    				</div>
    				<h5 className="timeline-heading2">GENERAL INFORMATION</h5>
    			</div>
    			<div className="col-sm-4">
    				<div className="timeline-image3 background-blue">
    					<h2>3</h2>
    				</div>
	    			<h5 className="timeline-heading3">BILLING</h5>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-xs-12">
    				<div className="text-center plans-header">
    					<h2>Plans & Features</h2>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    		  <div className="col-md-4">
    			<table id="coach-plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features">
							<h5>Basic</h5> 
							<div className="cost" >Free!</div> 
							<div>Receive referrals from Clubs around the country</div>
						</th>		
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Receive Prospect Referrals (No Registration Required)</td>
					  </tr>
					</tbody>
					
				</table>
    		  </div>
    		  <div className="col-md-4">
    			<table id="coach-plans-features-table" className="text-center">
					
					<thead>	  
					  <tr id="table-header-row">
						<th className="features">
							<h5>Plus Membership</h5> 
							<div className="cost" >$10/month</div>
							<div className="cost-month" >$108/year (10% off)</div>
							<div>Free 3 Month Trial!</div>
						</th>
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Receive Prospect Referrals (No Registration Required)</td>
					  </tr>
					  <tr>
						<td className="" >Access our searchable database of D1, D2, D3, NAIA, JUCO prospects</td>
					  </tr>
					  <tr>
						<td className="" >Access Prospect Contact, Atheltic, & Academic Information</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >View Prospect Recruitment Level (D1,D2,D3,NAIA,JUCO)</td>
				      </tr>
					  <tr>
						<td className=" background-blue" >Request Full Game Film</td>
					  </tr>
					</tbody>
					
				</table>
    		  </div>
    		  <div className="col-md-4">
    			<table id="coach-plans-features-table" className="text-center">
					
					<thead>	  
					  <tr id="table-header-row">
						<th className="features">
							<h5>Premium Membership</h5> 
							<div className="cost" >$20/month</div>
							<div className="cost-month" >$216/year (10% off)</div>
							<div>Free 3 Month Trial!</div>
						</th>
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Receive Prospect Referrals (No Registration Required)</td>
					  </tr>
					  <tr>
						<td className="" >Access our searchable database of D1, D2, D3, NAIA, JUCO prospects</td>
					  </tr>
					  <tr>
						<td className="" >Access Prospect Contact, Atheltic, & Academic Information</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >View Prospect Recruitment Level (D1,D2,D3,NAIA,JUCO)</td>
				      </tr>
					  <tr>
						<td className=" background-blue" >Request Full Game Film</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >View Which Schools Have Recruited the Prospect</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >View How Prospects Are Being Contacted (letter, text, visit, etc)</td>
				      </tr>
				      
					</tbody>
					
				</table>
    		  </div>
    		  <select id="price-plan-dropdown" style={{margin:'20px', width:'85%'}} name="price-plan" className="form-control standalone" type="select">
					<option value="none" defaultValue>Select Price Plan</option>
					<option value="basic">Basic - Free</option>
					<option value="plus">Plus - $10/month</option>
					<option value="plus">Plus - $108/year(10% off)</option>
					<option value="Premium">Premium - $20/month</option>
					<option value="Premium">Premium - $216/year(10% off)</option>
				</select>
    		  
    		</div>
    	</div>
    	
        <form className="text-center" onSubmit={ this.handleSubmit }>
        
          	<a onClick={this.handleButtonClick} className="btn btn-default btn-large">Complete Registration</a>
       
        </form>
      </section>
      
      <section id="coach-confirmation" className="page">
       	<form onSubmit={ this.handleSubmit }>
    		<div className="container">
    			<div className="row">
    				<div className="col-sm-12">
    					<h3 className="text-center" >You have successfully created your college coach account!
    					</h3>
    				</div>
    			</div>	
    			<div className="row">
    				<div className="col-sm-offset-1 col-sm-4 input-box">
    					<div id="gender-info" className="input-container">
    						<h4>Coach Verification</h4>
    						<div>In order to verify your email address as a
								college coach, please make sure the email
								address seen below is correct so we can
								send an email to verify it is a university
								email.</div>
							<p id="coach-email" className="text-center">task.coachesEmail</p>
          				</div>
    				</div>
					<div className="col-sm-6" >    					
    					<p>Please visit your dashboard and use our service to search and follow prospects 
    					in our database. This platform is intended to help your coaching staff discover new prospects and gain more information on prospects you already follow. </p>													
						<p>We will email a bill corresponding to your chosen pricing plan in the next 3-5 days.</p>
                        <p>Thank you for choosing Prospect Source!</p>
    				</div>
    			</div>
    	  	</div>
          	<button onClick={this.handleButtonClick} className="btn btn-default btn-large center-button">View Profile</button>
    	</form>
    </section>
    
    
    
    <section id="profile" className="page">
    	<div className="container">
    		<div id="profile-top-row" className="row profile-top-row">
    			<div className="col-sm-3">
    				<div id="club-logo" className="background-blue">
    					<h5>{task.aauProgram}</h5>
    				</div>
    			</div>
    			<div className="col-sm-6">
    				<div id="" className="">
    					<div id="profile-basics">
							<h3>{ task.firstName}  {task.lastName} ({ task.gradeClass })</h3>
							<div><h4>Position:</h4>  { task.position}</div>
							<div><h4>Height:</h4>  { task.height}</div>
							<div><h4>State:</h4>  { task.stateAthlete}</div>
						</div>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-3">
    				<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
    					<h5>Contact Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray" onClick={this.handleAthleticClick}>
    					<h5>Athletic Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray" onClick={this.handleAcademicClick}>
    					<h5>Academic Information</h5>
    				</div>
    				<div id="" className="data-cat-btn background-blue" onClick={this.handleRecruitingClick}>
    					<h5>Recruiting Interest</h5>
    				</div>
    				<div id="" className="data-cat-btn background-gray" onClick={this.backToDashboard} >
    					<h5>Back To Dashboard</h5>
    				</div>
    			</div>
    			<div id="athlete-info-container" className="col-sm-9">
      				<div>
			      		<div id="profile-contact-info">
							<h3>Contact Information</h3>
							<div><h4>Phone:</h4>  { task.phoneAthlete}</div>
							<div><h4>Email:</h4>  { task.emailAthlete}</div>
							<div><h4>AAU Coach Name:</h4>  { task.aauCoachName}</div>
							<div><h4>AAU Coach Email:</h4>    { task.aauCoachEmail}</div>
							<div><h4>AAU Coach Phone:</h4>    { task.aauCoachPhone}</div>
							<div><h4>HS Coach Name:</h4>     {task.hsCoachName}</div>
							<div><h4>HS Coach Email:</h4>    { task.hsCoachEmail}</div>
						</div>
						<div id="profile-athletic-info">
							<h3>Athletic Information</h3>
							<div><h4>Grade/Class:</h4>  { task.gradeClass}</div>
							<div><h4>Height:</h4>  { task.height}</div>
							<div><h4>Weight:</h4>  { task.weight}</div>
							<div><h4>Vertical Jump:</h4>    { task.vertJump}</div>
							<div><h4>Position:</h4>    { task.position}</div>
							<div><h4>AAU Program:</h4>     {task.aauProgram}</div>
							<div><h4>AAU Jersey:</h4>    { task.aauJersey}</div>
							<div><h4>High School:</h4>    { task.highSchool}</div>
							<div><h4>HUDL Profile:</h4>    { task.hudlProfile}</div>
						</div>
						<div id="profile-academic-info">
							<h3>Academic Information</h3>
							<div><h4>GPA:</h4>  { task.gpa}</div>
							<div><h4>ACT:</h4>  { task.act}</div>
							<div><h4>Class Rank:</h4>  { task.classRank}</div>
						</div>
						<div id="player-recruiting-interest" className="">
    					
							<ul className="prospect-categories list-inline">
								<li className="cat-btn background-blue">D1</li>
								<li className="cat-btn background-blue">D2</li>
								<li className="cat-btn background-blue">D3</li>
								<li className="cat-btn background-blue">NAIA</li>
								<li className="cat-btn background-blue">JUCO</li>
							</ul>
							<h2 id="prospect-interest" className="text-center" >Recruiting Interest</h2>
							<div id="recruiting-interest-cats">   
								<ul>
									<li className="btn btn-default">High Major</li>
									<li className="btn btn-default">High Major - / Mid-Major +</li>
									<li className="btn btn-default">Mid-Major</li>
									<li className="btn btn-default">Mid-Major - / Low Major +</li>
									<li className="btn btn-default">Low Major</li>
								</ul>						
							</div>
							<div id="recruiting-activity-feed" >
								<ul className="prospect-button background-light-gray list-inline" onClick={this.handleSummaryClick}>
									<li className="prospect-update">Southwest Minnesota</li>
								</ul>
							</div>
    					
    					</div>
			      	</div>	
      			</div>
      		</div>
      	</div>
      	
      </section> 
      
      
      
      
      <section id="coach-dashboard" className="">
    		<div className="container">
    			<div className="row">
    				<div className="col-sm-3">
    					<div className="panel-container">
    						<div id="program-name" ><h5>School Name</h5></div>
    						<div id="" className="data-cat-btn background-gray">
    							<h5>Dashboard</h5>
							</div>
    						<div className="panel-cat-name">
    							<h5>Edit Information</h5>
    						</div>
    						<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
    							<h5>Account Information</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Pricing Plan</h5>
							</div>
							<div className="panel-cat-name">
								<h5>Recruiting Feeds</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D1 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D2 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D3 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>NAIA Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>JUCO Recruiting</h5>
							</div>
						</div>    				
    				</div>
    				<div className="col-sm-9">
    					<div className="prospect-container">
    						<h2 id="" className="text-center" >Prospect Source Recruits</h2>
    						<ul className="recruiting-feed-categories list-inline">
    							<li className="cat-btn background-blue">Level</li>
    							<li className="cat-btn background-blue">Class</li>
    							<li className="cat-btn background-blue">State</li>
    							<li className="cat-btn background-blue">Position</li>
    							<li className="cat-btn background-blue">ACT</li>
    							<li className="cat-btn background-blue">GPA</li>    							
    						</ul>
    						<li >
							  <div id="all-prospects-container" className="prospect-summary background-light-gray ">
									<ul id="all-prospects" className="list-unstyled ">
										<li className="prospect-feed list-unstyled">{task.firstName} {task.lastName} ({task.gradeClass}/{task.position})</li>
										<li className="prospect-feed">{task.stateAthlete}</li>
										<li className="prospect-feed">{task.aauProgram}</li>
									</ul>
									<ul id="prospect-divisions" className=" ">
										<li>
											<div className="highlight-box"></div><p className="text-center">D1</p>
										</li>
										<li>
											<div className="highlight-box"></div><p className="text-center">D2</p>
										</li>
										<li>
											<div className="highlight-box"></div><p className="text-center">D3</p>
										</li>
										<li>
											<div className="highlight-box"></div><p className="text-center">NAIA</p>
										</li>
										<li>
											<div className="highlight-box"></div><p className="text-center">JUCO</p>
										</li>
									</ul>
								<div className="profile-link-button text-center background-gray">Profile</div>
							  </div>
							</li>
    					</div>
    				</div>
    			</div>
    	  	</div>
    </section>
      
       
       </div>
    );
    
            
    //  <div className={classNames('task-item', {'task-item--completed': task.completed, 'task-item--editing': editing})} tabIndex="0">
    //    <div className="cell">
    //      <button
    //        aria-hidden={editing}
    //        aria-label="Mark task as completed"
    //        className={classNames('task-item__button', {'hide': editing})}
    //        onClick={this.toggleStatus}
    //        ref={c => this.toggleStatusButton = c}
    //        type="button">
    //        <svg className={classNames('icon', {'icon--active': task.completed})} width="24" height="24" viewBox="0 0 24 24">
    //          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
    //        </svg>
    //      </button>
    //    </div>

    //    <div className="cell" >
    //      {editing ? this.renderTitleInput(task) : this.renderTitle(task)}

    //    </div>

    //    <div className="cell">
    //      <button
    //        aria-hidden={!editing}
    //        aria-label="Cancel editing"
    //        className={classNames('task-item__button', {'hide': !editing})}
    //        onClick={this.stopEditing}
    //        ref={c => this.cancelEditButton = c}
    //        type="button">
    //        <svg className="icon" width="24" height="24" viewBox="0 0 24 24">
    //          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    //          <path d="M0 0h24v24H0z" fill="none"></path>
    //        </svg>
    //      </button>
    //      <button
    //        aria-hidden={editing}
    //        aria-label="Edit task"
    //        className={classNames('task-item__button', {'hide': editing})}
    //        onClick={this.editTitle}
    //        ref={c => this.editButton = c}
    //        type="button">
    //        <svg className="icon" width="24" height="24" viewBox="0 0 24 24">
    //          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
    //        </svg>
    //      </button>
    //      <button
    //        aria-hidden={editing}
    //        aria-label="Delete task"
    //        className={classNames('task-item__button', {'hide': editing})}
    //        onClick={this.delete}
    //        ref={c => this.deleteButton = c}
    //        type="button">
    //        <svg className="icon" width="24" height="24" viewBox="0 0 24 24">
    //          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
    //        </svg>
    //      </button>
    //    </div>
    //  </div>
  }
}




//
//var Call = React.createClass({
//  render: function() {
//    var _this = this;
//    var createItem = function(prospect, index) {
//      return (
//         <div id="call-update" className="recruit-update-container text-center">
//          <u><h3>Recruiting Call</h3></u>
//          <input type="text"/><div className="btn-default search">Search School</div>
//          <div className="letter-attributes background-light-gray">
//          	<ul className="list-inline">
//          		<li><input type="checkbox" /><span>Mens</span></li>
//          		<li><input type="checkbox" /><span>Womens</span></li>
//          	</ul> 
//        	<label htmlFor="sel1"></label>
//    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
//      					<option value="NCAA D1  V">NCAA D1  V</option>
//    					<option value="NCAA D2  V">NCAA D2  V</option>
//    					<option value="NCAA D3  V">NCAA D3  V</option>
//    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
//     				</select> 
//          </div>        
//        </div>
//      );
//    };
//    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
//  }
//});
//
//var Camp = React.createClass({
//  render: function() {
//    var _this = this;
//    var createItem = function(prospect, index) {
//      return (
//         <div id="camp-update" className="recruit-update-container text-center">
//          <u><h3>Recruiting Camp</h3></u>
//          <input type="text"/><div className="btn-default search">Search School</div>
//          <div className="letter-attributes background-light-gray">
//          	<ul className="list-inline">
//          		<li><input type="checkbox" /><span>Mens</span></li>
//          		<li><input type="checkbox" /><span>Womens</span></li>
//          	</ul> 
//        	<label htmlFor="sel1"></label>
//    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
//      					<option value="NCAA D1  V">NCAA D1  V</option>
//    					<option value="NCAA D2  V">NCAA D2  V</option>
//    					<option value="NCAA D3  V">NCAA D3  V</option>
//    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
//     				</select> 
//          </div>        
//        </div>
//      );
//    };
//    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
//  }
//});
//
//var Workout = React.createClass({
//  render: function() {
//    var _this = this;
//    var createItem = function(prospect, index) {
//      return (
//         <div id="workout-update" className="recruit-update-container text-center">
//          <u><h3>Recruiting Workout</h3></u>
//          <input type="text"/><div className="btn-default search">Search School</div>
//          <div className="letter-attributes background-light-gray">
//          	<ul className="list-inline">
//          		<li><input type="checkbox" /><span>Mens</span></li>
//          		<li><input type="checkbox" /><span>Womens</span></li>
//          	</ul> 
//        	<label htmlFor="sel1"></label>
//    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
//      					<option value="NCAA D1  V">NCAA D1  V</option>
//    					<option value="NCAA D2  V">NCAA D2  V</option>
//    					<option value="NCAA D3  V">NCAA D3  V</option>
//    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
//     				</select> 
//          </div>        
//        </div>
//      );
//    };
//    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
//  }
//});
//
//var Campus = React.createClass({
//  render: function() {
//    var _this = this;
//    var createItem = function(prospect, index) {
//      return (
//         <div id="campus-update" className="recruit-update-container text-center">
//          <u><h3>Campus Visit</h3></u>
//          <input type="text"/><div className="btn-default search">Search School</div>
//          <div className="letter-attributes background-light-gray">
//          	<ul className="list-inline">
//          		<li><input type="checkbox" /><span>Mens</span></li>
//          		<li><input type="checkbox" /><span>Womens</span></li>
//          	</ul> 
//        	<label htmlFor="sel1"></label>
//    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
//      					<option value="NCAA D1  V">NCAA D1  V</option>
//    					<option value="NCAA D2  V">NCAA D2  V</option>
//    					<option value="NCAA D3  V">NCAA D3  V</option>
//    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
//     				</select> 
//          </div>        
//        </div>
//      );
//    };
//    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
//  }
//});
//
//var Offered = React.createClass({
//  render: function() {
//    var _this = this;
//    var createItem = function(prospect, index) {
//      return (
//         <div id="offered-update" className="recruit-update-container text-center">
//          <u><h3>Recruiting Offer</h3></u>
//          <input type="text"/><div className="btn-default search">Search School</div>
//          <div className="letter-attributes background-light-gray">
//          	<ul className="list-inline">
//          		<li><input type="checkbox" /><span>Mens</span></li>
//          		<li><input type="checkbox" /><span>Womens</span></li>
//          	</ul> 
//        	<label htmlFor="sel1"></label>
//    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
//      					<option value="NCAA D1  V">NCAA D1  V</option>
//    					<option value="NCAA D2  V">NCAA D2  V</option>
//    					<option value="NCAA D3  V">NCAA D3  V</option>
//    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
//     				</select> 
//          </div>        
//        </div>
//      );
//    };
//    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
//  }
//});
//
//
//
//
//
//
