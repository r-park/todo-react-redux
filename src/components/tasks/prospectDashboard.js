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
									<div className="col-sm-4 recruiting-tracking-btn background-blue"  style={divStyle}><h5>RECEIVED A LETTER</h5></div>
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
                        <div id="prospect-clubname"><u><h5>{task.aauProgram}</h5></u></div>
                        <div id="prospect-account"><u><h5>Account</h5></u></div>
                        <div className="prospect-container">
                            <ul className="prospect-categories list-inline">
                                <li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />D1</li>
                                <li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />D2</li>
                                <li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />D3</li>
                                <li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />NAIA</li>
                                <li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />JUCO</li>
                            </ul>
                            <h2 id="prospect-interest" className="text-center" >My Recruiting Interest</h2>
                            <div id="recruiting-tracking">    						
                                <div className="row">
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleLetterClick}><h5>RECEIVED A LETTER</h5></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleTextClick}><h5>RECEIVED A TEXT</h5></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleEmailClick}><h5>RECEIVED AN EMAIL</h5></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleCallClick}><h5>RECEIVED A PHONECALL</h5></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleCampClick}><h5>WAS INVITED TO A CAMP</h5></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleWorkoutClick}><h5>HAD A PRIVATE WORKOUT</h5></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue"onClick={this.handleCampusClick}><h5>WAS INVITED TO CAMPUS</h5></div>
                                    <div className="col-sm-4 recruiting-tracking-btn background-blue"onClick={this.handleOfferedClick}><h5>WAS OFFERED</h5></div>
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
