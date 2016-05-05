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
      debugger;
    this.setState({editing: true});
      debugger;
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
    						<h2 id="prospect-interest" className="text-center" >My Recruiting Interest</h2>
							<div id="recruiting-tracking">    						
								<div className="row">
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED</h5><h5>A LETTER</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED A TEXT</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED AN EMAIL</h5></div>
								</div>
								<div className="row">
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED A PHONECALL</h5></div>
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


  render() {
    const { editing } = this.state;
    const { task } = this.props;

    console.log('task:'+task);
    debugger;
    return (
        <div >
              <section className="page">
                <form onSubmit={ this.handleSubmit }>
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
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-default btn-large center-button">View Profile</button>
                </form>
            </section>
            <section className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="panel-container">
                                    <div id="program-name" ><h5>{task.firstName} {task.lastName}</h5></div>
                                    <div id="" className="data-cat-btn background-gray">
                                        <h5>Dashboard</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray">
                                        <h5>Summary</h5>
                                    </div>
                                    <div className="panel-cat-name">
                                        <h5>Edit Information</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
                                        <h5>Contact Information</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
                                        <h5>Athletic Information</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
                                        <h5>Academic Information</h5>
                                    </div>
                                    <div className="panel-cat-name">
                                        <h5 >Order Premium Service</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
                                        <h5>Video Service</h5>
                                    </div>
                                    <div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
                                        <h5>Marketing Service</h5>
                                    </div>
                                </div>    				
                            </div>
                    <div className="col-sm-9">
                        <div><u><h5 id="prospect-clubname">{task.aauProgram}</h5></u><u><h5 id="prospect-coach-view" className="text-right">View What Coaches See</h5></u></div>
                        
                        <div className="prospect-container">
                            <ul className="prospect-categories list-inline">
                                <li className="cat-btn background-blue">D1</li>
                                <li className="cat-btn background-blue">D2</li>
                                <li className="cat-btn background-blue">D3</li>
                                <li className="cat-btn background-blue">NAIA</li>
                                <li className="cat-btn background-blue">JUCO</li>
                            </ul>
                            <h2 id="prospect-interest" className="text-center" >My Recruiting Interest</h2>
                            <div id="recruiting-tracking">    						
                                <div className="row">
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleLetterClick}><p>RECEIVED A LETTER</p></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleTextClick}><p>RECEIVED A TEXT</p></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleEmailClick}><p>RECEIVED AN EMAIL</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleCallClick}><p>RECEIVED A PHONECALL</p></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleCampClick}><p>WAS INVITED TO A CAMP</p></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleWorkoutClick}><p>HAD A PRIVATE WORKOUT</p></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue"onClick={this.handleCampusClick}><p>WAS INVITED TO CAMPUS</p></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue"onClick={this.handleOfferedClick}><p>WAS OFFERED</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className="">
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
                                    <button className="btn btn-default btn-large center-button background-light-gray"><h5>View Uploaded Video Files</h5></button>
                                    <ul className="video-upload-container list-unstyled">
                                        <li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
                                        <li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
                                        <li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
                                        <li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
                                        <li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>    							
                                    </ul>
                                    <button className="btn btn-default btn-large center-button" onClick={this.handleVideoClick}>Submit Video Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </section>
    
    
    <h1> Coaches Signin</h1>
    
    <section className="page">
       	<form onSubmit={ this.handleSubmit }>
    		<div className="container">
    			<div className="row">
    				<div className="col-sm-4">
    					<div className="timeline-image1 background-gray">
    						<h2>1</h2>
    					</div>
    					<h5 className="timeline-heading1">SIGN IN</h5>
    				</div>
    				<div className="col-sm-4">
    					<div className="timeline-image2 background-blue">
    						<h2>2</h2>
    					</div>
    					<h5 className="timeline-heading2">GENERAL INFORMATION</h5>
    				</div>
    				<div className="col-sm-4">
    					<div className="timeline-image3 background-gray">
    						<h2>3</h2>
    					</div>
	    				<h5 className="timeline-heading3">BILLING</h5>
    				</div>
    			</div>
    			<div className="row">
    				<div className="col-md-offset-2 col-md-4 input-box">
    					<div className="input-container program-info">
    						<h4>Coach Information</h4>
    						<div>Name<input onChange={this.handleUserInput} value={ this.state.ccNumber } /></div>
          					<div>Position<input onChange={this.handleUserInput} value={ this.state.ccCode } /></div>
          					<div>Email<input onChange={this.handleUserInput} value={ this.state.ccExpiration } /></div>
          					<div>Phone Number<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>Head Coach Email<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>Head Coach Phone<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
    					</div>
    				</div>
    				<div className="col-md-4 input-box">
    					<div id="gender-info" className="input-container">
    						<h4>Coach Verification</h4>
    						<div>IN ORDER TO VERIFY YOUR EMAIL ADDRESS AS A
								COLLEGE COACH, PLEASE MAKE SURE THE EMAIL
								ADDRESS SEEN BELOW IS CORRECT SO WE CAN
								SEND AN EMAIL TO VERIFY IT IS A UNIVERSITY
								EMAIL.</div>
							<h4>Email just entered</h4>
          				</div>
    				</div>
    			</div>
    	  	</div>
          	<button onClick={this.handleButtonClick} className="btn btn-default btn-large center-button">View Prospects</button>
    	</form>
    </section>
    
    
    <h1> Coaches Dashboard</h1>
    
    
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
    				<div id="" className="data-cat-btn background-gray" >
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
								<ul className="prospect-activity background-light-gray list-inline" onClick={this.handleSummaryClick}>
									<li className="prospect-update">Southwest Minnesota</li>
								</ul>
							</div>
    					
    					</div>
			      	</div>	
      			</div>
      		</div>
      	</div>
      	
      </section> 
      
      
      
      
      <section className="">
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
    							<h5>School Information</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Coach Information</h5>
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
    					
    					</div>
    				</div>
    			</div>
    	  	</div>
    </section>

        </div>
    );
    //        
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
//var Letter = React.createClass({
//  render: function() {
//    var _this = this;
//    var createItem = function(prospect, index) {
//      return (
//         <div id="letter-update" className="recruit-update-container text-center">
//          <u><h3>Recruiting Letter</h3></u>
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
//var Text = React.createClass({
//  render: function() {
//    var _this = this;
//    var createItem = function(prospect, index) {
//      return (
//         <div id="text-update" className="recruit-update-container text-center">
//          <u><h3>Recruiting Text</h3></u>
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
//var Email = React.createClass({
//  render: function() {
//    var _this = this;
//    var createItem = function(prospect, index) {
//      return (
//         <div id="email-update" className="recruit-update-container text-center">
//          <u><h3>Recruiting Email</h3></u>
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
