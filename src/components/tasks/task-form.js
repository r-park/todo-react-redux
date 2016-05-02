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
  }

  firstSubmit(key,value) {
      this.state['firstName'       ]='';
      this.state['lastName'        ]=''; 
      this.state['emailAthlete'    ]='';
      this.state['phoneAthelete'   ]='';
      this.state['addressAthelete' ]='';
      this.state['cityAthelete'    ]='';
      this.state['stateAthelete'   ]='';
      this.state['zipAthelete'     ]='';
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
      this.state['posistion'       ]='';
      this.state['aauProgram'      ]='';
      this.state['aauJersey'       ]='';
      this.state['highSchool'      ]='';
      this.state['hudlProfile'     ]='';
      this.state['gpa'             ]='';
      this.state['act'             ]='';
      this.state['classRank'       ]='';
      //debugger;
      this.state[key]=value;

console.log('State : '+this.state);
//debugger;
      this.props.createTask(this.state)
  }

  onChange(title, event) {
      const {tasks} = this.props;
    //const obj = {};
    //debugger;
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
    this.props.updateTask(this.props.tasks[0], this.state)
    //this.clearInput();
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
                  onChange={this.onChange.bind(this,objRef )}
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
                   4:{ ref:'phoneAthelete',   display: 'Phone (Athlete)'  },
                   6:{ ref:'addressAthelete', display: 'Adress'           },
                   7:{ ref:'cityAthelete',    display: 'City'             }, 
                   8:{ ref:'stateAthelete',   display: 'State'            },
                   9:{ ref:'zipAthelete',     display: 'Zip'              }, 
                  10:{ ref:'aauCoachName',    display: 'Coach Name (AAU)' },
                  11:{ ref:'aauCoachEmail',   display: 'Coach Email (AAU)'},
                  12:{ ref:'aauCoachPhone',   display: 'Coach Phone (AAU)'},
                  13:{ ref:'hsCoachName',     display: 'Coach Name (HS)'  },
                  14:{ ref:'hsCoachEmail',    display: 'Coach Email (HS)' },
                  15:{ ref:'hsCoachPhone',    display: 'Coach Phone (HS)' }
              },
              athleteInfo:{
                  16:{ ref:'gradeClass',    display: 'GradeClass'        },
                  17:{ ref:'height',        display: 'Height'            },
                  18:{ ref:'weight',        display: 'Weight'            },
                  19:{ ref:'vertJump',      display: 'Vertical Jump'     },
                  20:{ ref:'posistion',     display: 'Posistion'         },
                  21:{ ref:'aauProgram',    display: 'Program (AAU)'     },
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
        
      <section className="page">
        <form onSubmit={ this.handleSubmit }>
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-gray">
    					<h2>1</h2>
    				</div>
    				<h5 className="timeline-heading1">Sign In</h5>
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
								<option value="none" defaultValue>Select Your AAU Club</option>
								<option value="Kingdom Hoops">Kingdom Hoops</option>
								<option value="Rusty's Rascals">Rustys Rascals</option>
								<option value="McCall MadMen">McCall MadMen</option>
								<option value="Alex's Angels">Maschoff Monsters</option>
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
        
        </div>
    );
  }
}
