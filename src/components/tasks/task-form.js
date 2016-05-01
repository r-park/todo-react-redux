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
      debugger;
      this.state[key]=value;

console.log('State : '+this.state);
//debugger;
      this.props.createTask(this.state)
  }

  onChange(title, event) {
      const {tasks} = this.props;
    //const obj = {};
    tasks.length ? this.state[title]= event.target.value.trim(): this.firstSubmit(title,event.target.value.trim());
    debugger;
    //obj[title]= event.target.value;
    //this.setState(obj);
//debugger;
    //this.props.tasks && this.props.tasks[0]['key'] ? this.state[title]= event.target.value: this.firstSubmit(title, event.target.value);
    
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
    debugger;
    // tasks.length ? this.props.updateTask(this.props.tasks[0], this.state): this.firstSubmit(title, event.target.value);
    this.props.updateTask(this.props.tasks[0], this.state)
    //this.clearInput();
  }
                  //value={tasks.length && tasks[0][objRef] != "" && tasks[0][objRef] == this.state[objRef]  ? tasks[0][objRef] : ""}
  mappedInputs(object){

// Set state = Tasks !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      this.state = Object.assign({}, this.state, tasks);

      debugger;
      const {tasks} = this.props;
      return Object.keys(object).map((obj,k)=>{
          var objRef = object[obj]['ref'],
          objDisplay = object[obj]['display'];
          tasks.length ? console.log(JSON.stringify(tasks[0],null,2)): console.log('nothing here');
          return (
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
                  key={k}
                />
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
    return (
          <form className="task-form" onSubmit={this.onSubmit} noValidate>
            <div className="g-row">
                <div style={divStyle} className="g-col">
                    <h1>Contact Information :</h1>
                    {this.mappedInputs(genInfo.contactInfo)} 
                </div>
                <div style={divStyle} className="g-col">
                    <h1>Athlete Information:</h1>
                    {this.mappedInputs(genInfo.athleteInfo)}
                </div>
                <div style={divStyle} className="g-col">
                    <h1>Academic Information :</h1>
                    {this.mappedInputs(genInfo.academicInfo)}
                </div>
            </div>
            <div className="g-row">
                <div className="g-col">
                    <button onClick={this.onSubmit} >Submit</button>
                </div>
            </div>
      </form>
    );
  }
}
