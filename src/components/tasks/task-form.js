import React, { Component, PropTypes } from 'react';


export class TaskForm extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {title: ''};

    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clearInput() {
    this.setState({title: ''});
    this.setState({firstName: ''});
    this.setState({lastName: ''});
    this.setState({phoneAthlete: ''});
    this.setState({email: ''});
    this.setState({address: ''});
    this.setState({cityStateZipAthelete: ''});
    this.setState({aauCoachName: ''});
    this.setState({aauCoachEmail: ''});
    this.setState({aauCoachPhone: ''});
    this.setState({hsCoachName: ''});
    this.setState({hsCoachEmail: ''});
    this.setState({hsCoachPhone: ''});
    this.setState({completed: false}); 
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
      debugger;
    event.preventDefault();
    const title = this.state.title.trim();
    this.props.createTask(this.state);
    this.clearInput();
  }

  render() {
      var object ={
              1:'firstName',
              2:'LastName',
              3:'emailAthlete',
              4:'phoneAthelete',
              5:'email',
              6:'address',
              7:'cityStateZip',
              8:'aauCoachName',
              9:'aauCoachEmail',
              10:'aauCoachPhone',
              11:'hsCoachName',
              12:'hsCoachEmail',
              13:'hsCoachPhone',
              14:'gradeClass',
              15:'height',
              16:'weight',
              17:'vertJump',
              18:'posistion',
              19:'aauProgram',
              20:'aauJersey',
              21:'highSchool',
              22:'hudlProfile',
              23:'gpa',
              24:'act',
              25:'classRank',
          },
          mapppedThings = Object.keys(object).map((obj,k)=>{
              var objRef = object[obj];
              return (
                <input
                  autoComplete="off"
                  autoFocus
                  className="task-form__input"
                  maxLength="64"
                  onChange={this.onChange.bind(this,objRef )}
                  onKeyUp={this.onKeyUp}
                  placeholder={objRef} 
                  ref={c => objRef  = c}
                  type="text"
                  value={this.state[objRef]}
                  key={k}
                />
                  )
          });
    return (
      <form className="task-form" onSubmit={this.onSubmit} noValidate>
          {mapppedThings}
        <button onClick={this.onSubmit} >Submit</button>
      </form>
    );
  }
}
