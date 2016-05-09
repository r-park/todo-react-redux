import React, { Component, PropTypes } from 'react';


export class TaskForm extends Component {
  
  static propTypes = {
    createTask: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {title: 'true'};

    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmit2 = this.onSubmit2.bind(this);
  }

  firstSubmit(key,value) {
      this.state['firstName'       ]='';
      this.state['lastName'        ]=''; 
      this.state['emailAthlete'    ]='';
      this.state['phoneAthlete'    ]='';
      this.state['addressAthlete'  ]='';
      this.state['cityAthlete'     ]='';
      this.state['stateAthlete'    ]='';
      this.state['zipAthlete'      ]='';
      this.state['aauCoachName'    ]='';
      this.state['aauCoachEmail'   ]='';
      this.state['aauCoachPhone'   ]='';
      this.state['hsCoachName'     ]='';
      this.state['hsCoachEmail'    ]='';
      this.state['hsCoachPhone'    ]='';
      this.state['gradeClass'      ]='';
      this.state['height'          ]='';
      this.state['weight'          ]='';
      this.state['vertJump'        ]='';
      this.state['position'        ]='';
      this.state['aauProgram'      ]='';
      this.state['aauJersey'       ]='';
      this.state['highSchool'      ]='';
      this.state['hudlProfile'     ]='';
      this.state['gpa'             ]='';
      this.state['act'             ]='';
      this.state['classRank'       ]='';
      this.state['gender'          ]='';
      this.state['pricePlan'       ]='';      
      //debugger;
      this.state[key]=value;

console.log('State : '+this.state);
//debugger;
      this.props.createTask(this.state)
  }

  onChange(title, event) {
      const {tasks} = this.props;
    //const obj = {};
    debugger;
    tasks.length ? this.state[title]= event.target.value.trim(): this.firstSubmit(title,event.target.value.trim());
    //obj[title]= event.target.value;
    //this.setState(obj);
//debugger;
    //this.props.tasks && this.props.tasks[0]['key'] ? this.state[title]= event.target.value: this.firstSubmit(title, event.target.value);
    
  }

  onChangeAAUCLUB(event) {
      //debugger;
      this.state['aauProgram']=event.target.value; 
      //debugger;
  }

  onChangeGender(event) {
      this.state['gender']=event.target.value; 
  }

  onChangePricePlan(event) {
      this.state['pricePlan']=event.target.value; 
  }

  onKeyUp(event) {
    if (event.keyCode === 27) {
      this.clearInput();
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this.state.title.trim();
    //this.props.createTask(this.state);

      const {tasks} = this.props;
    //debugger;
    // tasks.length ? this.props.updateTask(this.props.tasks[0], this.state): this.firstSubmit(title, event.target.value);
    this.props.updateTask(this.props.tasks[0], this.state);
    //this.clearInput();
    if (title.pricePlan !== "") {
    document.getElementById('general-info').style.display='none';
  	document.getElementById('prospect-dashboard').style.display='block';
  	window.scrollTo(0, 0);
    } else {
    document.getElementById('general-info').style.display='none';
  	document.getElementById('prospect-plans-features').style.display='block';
  	window.scrollTo(0, 0);
  	}
  }
  
   onSubmit2(event) {
    event.preventDefault();
    const title = this.state.title.trim();
    //this.props.createTask(this.state);

      const {tasks} = this.props;
    //debugger;
    // tasks.length ? this.props.updateTask(this.props.tasks[0], this.state): this.firstSubmit(title, event.target.value);
    this.props.updateTask(this.props.tasks[0], this.state);
    //this.clearInput();
    if (title.firstName !== "") {
    document.getElementById('prospect-plans-features').style.display='none';
  	document.getElementById('prospect-dashboard').style.display='block';
  	window.scrollTo(0, 0);
    } else {
    document.getElementById('prospect-plans-features').style.display='none';
  	document.getElementById('prospect-confirmation').style.display='block';
  	window.scrollTo(0, 0);
  	}
  }
     
    submitUpdate(event) {
    document.getElementById("letter-update").style.display='none';
    document.getElementById("text-update").style.display='none';
    document.getElementById("email-update").style.display='none';
    document.getElementById("call-update").style.display='none';
    document.getElementById("camp-update").style.display='none';
    document.getElementById("workout-update").style.display='none';
    document.getElementById("campus-update").style.display='none';
    document.getElementById("offered-update").style.display='none';
    document.getElementById("upgrade-price-plan").style.display='none';
  }
     
                  //value={tasks.length && tasks[0][objRef] != "" && tasks[0][objRef] == this.state[objRef]  ? tasks[0][objRef] : ""}
  mappedInputs(object){

// Set state = Tasks !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      this.state = Object.assign({}, this.state, tasks);

      //debugger;
      const {tasks} = this.props;
      return Object.keys(object).map((obj,k)=>{
          var objRef = object[obj]['ref'],
          objDisplay = object[obj]['display'];
          //tasks.length ? console.log(JSON.stringify(tasks[0],null,2)): console.log('nothing here');
          return (
              <div 
                  key={k}
                  style={{margin:'20px'}}
              >
                <input
                  autoComplete="off"
                  autoFocus
                  className="task-form__input"
                  maxLength="64"
                  onChange={this.onChange.bind(this,objRef, this.displayAcademicInfo )}
                  onKeyUp={this.onKeyUp}
                  
                  placeholder={tasks.length && tasks[0][objRef] != "" ? tasks[0][objRef] :objDisplay} 
                  ref={c => objRef  = c}
                  type="text"
                  value={tasks.length && tasks[objRef] != "" ? tasks[objRef]: this.state[objRef]  }
                />
              </div>
          )
      });
  }

  render() {
      var genInfo={
              contactInfo: {
                   1:{ ref:'firstName',       display: 'First Name'       },
                   2:{ ref:'lastName',        display: 'Last Name'        },
                   3:{ ref:'emailAthlete',    display: 'Email (Athlete)'  },
                   4:{ ref:'phoneAthlete',    display: 'Phone (Athlete)'  },
                   6:{ ref:'addressAthlete',  display: 'Address'           },
                   7:{ ref:'cityAthlete',     display: 'City'             }, 
                   8:{ ref:'stateAthlete',    display: 'State'            },
                   9:{ ref:'zipAthlete',      display: 'Zip'              }, 
                  10:{ ref:'aauCoachName',    display: 'Coach Name (AAU)' },
                  11:{ ref:'aauCoachEmail',   display: 'Coach Email (AAU)'},
                  12:{ ref:'aauCoachPhone',   display: 'Coach Phone (AAU)'},
                  13:{ ref:'hsCoachName',     display: 'Coach Name (HS)'  },
                  14:{ ref:'hsCoachEmail',    display: 'Coach Email (HS)' },
                  15:{ ref:'hsCoachPhone',    display: 'Coach Phone (HS)' }
              },
              athleteInfo:{
                  16:{ ref:'gradeClass',    display: 'Grade/Class'        },
                  17:{ ref:'height',        display: 'Height'            },
                  18:{ ref:'weight',        display: 'Weight'            },
                  19:{ ref:'vertJump',      display: 'Vertical Jump'     },
                  20:{ ref:'position',      display: 'position'          },
                  
                  22:{ ref:'aauJersey',     display: 'Jersey (AAU)'      },
                  23:{ ref:'highSchool',    display: 'High School'       },
                  24:{ ref:'hudlProfile',   display: 'HUDL Profile'      },
              },
              academicInfo:{
                  25:{ ref:'gpa',           display: 'GPA'               },
                  26:{ ref:'act',           display: 'ACT'               },
                  27:{ ref:'classRank',     display: 'Class Rank'        },
              }
          };

        var divStyle = { display: 'inline-block', width: '33%', float: 'left', padding: 10, };
    //      <form className="task-form" onSubmit={this.onSubmit} noValidate>
    //        <div className="g-row">
    //            <div style={divStyle} className="g-col">
    //                <h1>Contact Information :</h1>
    //                {this.mappedInputs(genInfo.contactInfo)} 
    //            </div>
    //            <div style={divStyle} className="g-col">
    //                <h1>Athlete Information:</h1>
    //                {this.mappedInputs(genInfo.athleteInfo)}
    //            </div>
    //            <div style={divStyle} className="g-col">
    //                <h1>Academic Information :</h1>
    //                {this.mappedInputs(genInfo.academicInfo)}
    //            </div>
    //        </div>
    //        <div className="g-row">
    //            <div className="g-col">
    //                <button onClick={this.onSubmit} >Submit</button>
    //            </div>
    //        </div>
    //  </form>
    return (
        <div>
        
      <section id="general-info" className="page">
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
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>CONTACT INFORMATION</h4>
                            {this.mappedInputs(genInfo.contactInfo)} 
       				 </div>
    			</div>
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ATHLETIC INFORMATION</h4>
                            {this.mappedInputs(genInfo.athleteInfo)}
          					<select id="aauClub" style={{margin:'20px', width:'85%'}} onChange={ this.onChangeAAUCLUB.bind(this)} value={this.state.aauProgram} id="aau-club" name="aau-club" className="form-control standalone" type="select">
								<option value="none" defaultValue>Select AAU Club</option>
								<option value="Kingdom Hoops">Kingdom Hoops</option>
								<option value="Rusty's Rascals">Rustys Rascals</option>
								<option value="McCall MadMen">McCall MadMen</option>
								<option value="Maschoff Monsters">Maschoff Monsters</option>
							</select>
							<select id="gender" style={{margin:'20px', width:'85%'}} onChange={ this.onChangeGender.bind(this)} value={this.state.gender} id="gender" name="gender" className="form-control standalone" type="select">
								<option value="none" defaultValue>Select Gender</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
       				 </div>
    			</div>
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ACADEMIC INFORMATION</h4>
                        {this.mappedInputs(genInfo.academicInfo)}
       				</div>
    			</div>
    		</div>
    	</div>
          
          <button onClick={this.onSubmit} id="prospect-data-button" className="btn btn-default btn-large center-button">NEXT</button>
        </form>
      </section>
        
       <section id="prospect-plans-features" className="page">
        <form className="text-center" >
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-gray">
    					<h2>1</h2>
    				</div>
    				<h5 className="timeline-heading1">SIGN IN</h5>
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
    		  <div className="col-md-offset-1 col-md-2">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Basic</h5> <div className="cost" >Free</div> <div>Showcase & track your recruiting</div></th>		
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact, Athletic, & Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>	
						
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-2">
    			<table id="plans-features-table" className="text-center">
					
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Plus</h5> 
							<div className="cost" >$5/month</div> 
							<div className="cost-month" >$54/year (10% off)</div> 
							<div>Showcase Your Information & Store Highlight</div>
						</th>
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact, Athletic, & Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					  
					  <tr>
						<td className=" background-gray" >Store Highlight Video</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>	
						
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-2">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Premium 1</h5> 
							<div className="cost" >$13.33/month</div> 
							<div className="cost-month" >$144/year (10% off)</div>  
							<div>Let us send out your highlight video</div>
						</th>
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact, Athletic, & Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					  
					  <tr>
						<td className=" background-gray" >Highlight Distributed To College Coaches</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>
						
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-2">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Premium 2</h5> 
							<div className="cost" >$21.67/month</div> 
							<div className="cost-month" >$234/year (10% off)</div>  
							<div>Let us create and send one video/year</div>
						</th>		
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact, Athletic, & Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					  
					  <tr>
						<td className=" background-gray" >Highlight Distributed To College Coaches</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >Highlight Produced & Distributed To College Coaches (Once)</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>
						
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-2">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Premium 3</h5> 
							<div className="cost" >$38.33/month</div> 
							<div className="cost-month" >$414/year (10% off)</div> 
							<div>Let us create and send two video/year</div></th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact, Athletic, & Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					  
					  <tr>
						<td className=" background-gray" >Highlight Distributed To College Coaches</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >Highlight Produced & Distributed To College Coaches (Once)</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >Highlight Produced & Distributed To College Coaches (Twice)</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>
						
					  </tr>
					</tfoot>
					
				</table>
    		  </div>
    		  <select id="price-plan" style={{margin:'20px', width:'85%'}} name="price-plan" onChange={ this.onChangePricePlan.bind(this)} value={this.state.pricePlan} className="form-control standalone" type="select" placeholder="select">
					<option value="none" defaultValue>Select Price Plan</option>
					<option value="Basic Plan">Basic - Free</option>
					<option value="Plus Monthly Plan">Plus - $5/month</option>
					<option value="Plus Yearly Plan">Plus - $54/year(10% off)</option>
					<option value="Premium 1 - Monthly Plan">Premium 1 - $13.33/month</option>
					<option value="Premium 1 - Yearly Plan">Premium 1 - $144/year(10% off)</option>
					<option value="Premium 2 - Monthly Plan">Premium 2 - $21.67/month</option>
					<option value="Premium 2 - Yearly Plan">Premium 2 - $234/year(10% off)</option>
					<option value="Premium 3 - Monthly Plan">Premium 3 - $38.33/month</option>
					<option value="Premium 3 - Yearly Plan">Premium 3 - $414/year(10% off)</option>
				</select>
    		</div>
    	</div>
    	
        
          
          	<button onClick={this.onSubmit2}  className="btn btn-default btn-large">Finish</button>
       
        </form>
      </section> 
      
      	<div id="letter-update" className="recruit-update-container text-center">
			<u><h3>Recruiting Letter</h3></u>
			<input type="text"/><div className="btn-default search">Search School</div>
			<div className="letter-attributes background-light-gray">
				<select id="letter" className="form-control standalone" type="select" label="Select" placeholder="select">
					<option value="NCAA D1">NCAA D1</option>
					<option value="NCAA D2">NCAA D2</option>
					<option value="NCAA D3">NCAA D3</option>
					<option value="NCAA NAIA">NCAA NAIA</option>
					<option value="NCAA JUCO">NCAA JUCO</option>
				</select> 
			</div> 
			<button className="btn btn-default btn-large" onClick={this.submitUpdate}>Submit</button>       
		</div>
        
        <div id="text-update" className="recruit-update-container text-center">
			  <u><h3>Recruiting Text</h3></u>
			  <input type="text"/><div className="btn-default search">Search School</div>
			  <div className="letter-attributes background-light-gray"> 
				<label htmlFor="sel1"></label>
						<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
							<option value="NCAA D1  V">NCAA D1  V</option>
							<option value="NCAA D2  V">NCAA D2  V</option>
							<option value="NCAA D3  V">NCAA D3  V</option>
							<option value="NCAA NAIA  V">NCAA NAIA  V</option>
						</select> 
			  </div>   
			  <button className="btn btn-default btn-large" onClick={this.submitUpdate}>Submit</button>            
        </div>
        
        <div id="email-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Email</h3></u>
          <input type="text"/><div className="btn-default search">Search School</div>
          <div className="letter-attributes background-light-gray">
        	<label htmlFor="sel1"></label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="NCAA D1  V">NCAA D1  V</option>
    					<option value="NCAA D2  V">NCAA D2  V</option>
    					<option value="NCAA D3  V">NCAA D3  V</option>
    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
     				</select> 
          </div>   
          <button className="btn btn-default btn-large" onClick={this.submitUpdate}>Submit</button>           
        </div>
        
        <div id="call-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Phone Call</h3></u>
          <input type="text"/><div className="btn-default search">Search School</div>
          <div className="letter-attributes background-light-gray"> 
        	<label htmlFor="sel1"></label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="NCAA D1  V">NCAA D1  V</option>
    					<option value="NCAA D2  V">NCAA D2  V</option>
    					<option value="NCAA D3  V">NCAA D3  V</option>
    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
     				</select> 
          </div>  
          <button className="btn btn-default btn-large" onClick={this.submitUpdate}>Submit</button>      
        </div>
        
        <div id="camp-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Camp</h3></u>
          <input type="text"/><div className="btn-default search">Search School</div>
          <div className="letter-attributes background-light-gray">
        	<label htmlFor="sel1"></label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="NCAA D1  V">NCAA D1  V</option>
    					<option value="NCAA D2  V">NCAA D2  V</option>
    					<option value="NCAA D3  V">NCAA D3  V</option>
    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
     				</select> 
          </div>
          <button className="btn btn-default btn-large" onClick={this.submitUpdate}>Submit</button>        
        </div>
        
        
         <div id="workout-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Workout</h3></u>
          <input type="text"/><div className="btn-default search">Search School</div>
          <div className="letter-attributes background-light-gray"> 
        	<label htmlFor="sel1"></label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="NCAA D1  V">NCAA D1  V</option>
    					<option value="NCAA D2  V">NCAA D2  V</option>
    					<option value="NCAA D3  V">NCAA D3  V</option>
    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
     				</select> 
          </div>  
          <button className="btn btn-default btn-large" onClick={this.submitUpdate}>Submit</button>      
        </div>


         <div id="campus-update" className="recruit-update-container text-center">
          <u><h3>Campus Visit</h3></u>
          <input type="text"/><div className="btn-default search">Search School</div>
          <div className="letter-attributes background-light-gray">
          	 
        	<label htmlFor="sel1"></label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="NCAA D1  V">NCAA D1  V</option>
    					<option value="NCAA D2  V">NCAA D2  V</option>
    					<option value="NCAA D3  V">NCAA D3  V</option>
    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
     				</select> 
          </div>
          <button className="btn btn-default btn-large" onClick={this.submitUpdate}>Submit</button>        
        </div>
     

         <div id="offered-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Offer</h3></u>
          <input type="text"/><div className="btn-default search">Search School</div>
          <div className="letter-attributes background-light-gray">
          	 
        	<label htmlFor="sel1"></label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="NCAA D1  V">NCAA D1  V</option>
    					<option value="NCAA D2  V">NCAA D2  V</option>
    					<option value="NCAA D3  V">NCAA D3  V</option>
    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
     				</select> 
          </div>
          <button className="btn btn-default btn-large" onClick={this.submitUpdate}>Submit</button>        
        </div>


        </div>
    );
  }
}
