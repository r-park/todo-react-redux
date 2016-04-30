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

  clearInput() {
      this.setState({'firstName':''});
      this.setState({'lastName':''}); 
      this.setState({'emailAthlete':''});
      this.setState({'phoneAthelete':''});
      this.setState({'addressAthelete':''});
      this.setState({'cityAthelete':''});
      this.setState({'stateAthelete':''});
      this.setState({'zipAthelete':''});
      this.setState({'aauCoachName':''});
      this.setState({'aauCoachEmail':''});
      this.setState({'aauCoachPhone':''});
      this.setState({'hsCoachName':''});
      this.setState({'hsCoachEmail':''});
      this.setState({'hsCoachPhone':''});
      this.setState({'gradeClass':''});
      this.setState({'height':''});
      this.setState({'weight':''});
      this.setState({'vertJump':''});
      this.setState({'posistion':''});
      this.setState({'aauProgram':''});
      this.setState({'aauJersey':''});
      this.setState({'highSchool':''});
      this.setState({'hudlProfile':''});
      this.setState({'gpa':''});
      this.setState({'act':''});
      this.setState({'classRank':''});
  }

  onChange(title, event) {
    const obj = {};
    obj[title]= event.target.value;
    this.setState(obj);
  }

  onKeyUp(event) {
    if (event.keyCode === 27) {
      this.clearInput();
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const title = this.state.title.trim();
    this.props.createTask(this.state);
    this.clearInput();
  }
  mappedInputs(object){
      return Object.keys(object).map((obj,k)=>{
          var objRef = object[obj]['ref'],
          objDisplay = object[obj]['display'];
          return (
                <input
                  autoComplete="off"
                  autoFocus
                  className="task-form__input"
                  maxLength="64"
                  onChange={this.onChange.bind(this,objRef )}
                  onKeyUp={this.onKeyUp}
                  placeholder={objDisplay} 
                  ref={c => objRef  = c}
                  type="text"
                  value={this.state[objRef]}
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
