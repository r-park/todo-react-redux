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
      this.state['collegeProgramGender']='';     
      this.state['textFilter']='';     
      this.state['textFilterLetter']='';     
      this.state['textFilterText']='';     
      this.state['textFilterEmail']='';     
      this.state['textFilterCall']='';     
      this.state['textFilterCamp']='';     
      this.state['textFilterWorkout']='';     
      this.state['textFilterCampus']='';     
      this.state['textFilterOffered']='';     

      
      this.state['recruitingInfo']= [
          {d1:{ letter:'', text:'', email:'', call:'', campInvitation:'', privateWorkout:'', campusInvitation:'', offered:'' }},
          {d2:{ letter:'', text:'', email:'', call:'', campInvitation:'', privateWorkout:'', campusInvitation:'', offered:'' }},
          {d3:{ letter:'', text:'', email:'', call:'', campInvitation:'', privateWorkout:'', campusInvitation:'', offered:'' }},
          {d4:{ letter:'', text:'', email:'', call:'', campInvitation:'', privateWorkout:'', campusInvitation:'', offered:'' }},
          {d5:{ letter:'', text:'', email:'', call:'', campInvitation:'', privateWorkout:'', campusInvitation:'', offered:'' }}
      ];
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
    //this.props.tasks && this.props.tasks[0]['key'] ? this.state[title]= event.target.value: this.firstSubmit(title, event.target.value);
    
    ['textFilter','textFilterLetter',
      'textFilterText','textFilterEmail',
      'textFilterCall', 'textFilterCamp',
      'textFilterWorkout','textFilterCampus','textFilterOffered']
      .indexOf(title) != -1 ? this.onSubmit(event): ''; 
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
    if (title.pricePlan == "") {
    document.getElementById('general-info').style.display='none';
  	document.getElementById('prospect-plans-features').style.display='block';
  	window.scrollTo(0, 0);
    } else {
    document.getElementById('general-info').style.display='none';
  	document.getElementById('prospect-dashboard').style.display='block';
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
     
    submitUpdate(props ,filter, event) {
        debugger;
    document.getElementById("letter-update").style.display='none';
    document.getElementById("text-update").style.display='none';
    document.getElementById("email-update").style.display='none';
    document.getElementById("call-update").style.display='none';
    document.getElementById("camp-update").style.display='none';
    document.getElementById("workout-update").style.display='none';
    document.getElementById("campus-update").style.display='none';
    document.getElementById("offered-update").style.display='none';
    document.getElementById("upgrade-price-plan").style.display='none';
    this.state[filter]='';     
    debugger; 
    this.onChange(filter, event);
    //this.onSubmit(event); 
    //this.props.updateTask(this.props.tasks[0], this.state);
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
                  style={{margin:'5px'}}
              >
                <input
                  autoComplete="off"
                  autoFocus
                  className="task-form__input"
                  maxLength="64"
                  onChange={this.onChange.bind(this,objRef)}
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

  mappedColleges (recruitingInterest, filter) {
      debugger;
      var textFilter = this.state[filter] === undefined ?  '' : this.state[filter];

      return recruitingInterest
                  .filter((college)=>{
                      return college
                             .college
                             .toLowerCase()
                             .indexOf(textFilter.toLowerCase()) === -1 ? 
                                false: true;
                              return true ;
                  })
                  .map((college,k) =>{
                      return (<li
                              key={k}
                              onClick={this.recruitInterestClick.bind(this,event,college,filter)}
                              ><u>{college.college}</u></li>);
      });
  }
  recruitInterestClick(props,college,filter,event){
      debugger;

    //this.state.recruitingInfo = { d1:{ [filter]:college } };
    this.props.createTask(this.props.tasks[0], { [filter]:college  });
    //this.onSubmit(event);
    //this.props.updateTask(this.props.tasks[0], this.state);


  }
  render() {
         var recruitingInterest = 
             
             [  
              {  
                "college":"Boston College",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Clemson University",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Duke University",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Florida State University",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Georgia Institute of Technology",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"North Carolina State University",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Syracuse University",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Maryland, College Park",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Miami (Florida)",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University Of North Carolina, Chapel Hill",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Notre Dame",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Pittsburgh",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Virginia",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Virginia Polytechnic Institute & State University",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Wake Forest University",
                "conference":"Atlantic Coast Conference",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Indiana University, Bloomington",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Michigan State University",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Northwestern University",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Penn State University",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Purdue University",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Rutgers State University of New Jersey, New Brunswick",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"The Ohio State University",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Illinois, Champaign",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Iowa",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Michigan, Ann Arbor",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Minnesota, Twin Cities",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Nebraska at Lincoln",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Wisconsin, Madison",
                "conference":"Big 10",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Baylor University",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Iowa State University",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Kansas State University",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Oklahoma State University",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Texas Christian University",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Texas Tech University",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Kansas",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Oklahoma",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Texas at Austin",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"West Virginia University",
                "conference":"Big 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Butler University",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Creighton University",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"DePaul University",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Georgetown University",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Marquette University",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Providence College",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Seton Hall University",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"St. John's University (New York)",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Villanova University",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Xavier University",
                "conference":"Big East",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Arizona State University",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Oregon State University",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Stanford University",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Arizona",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of California, Berkeley",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of California, Los Angeles",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Colorado, Boulder",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Oregon",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Southern California",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Utah",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Washington",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Washington State University",
                "conference":"Pac 12",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Auburn University",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Louisiana State University",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Mississippi State University",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Texas A&M University, College Station",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Arkansas, Fayetteville",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Florida",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Georgia",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Kentucky",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Mississippi",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Missouri, Columbia",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of South Carolina, Columbia",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"University of Tennessee at Knoxville",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"Vanderbilt University",
                "conference":"Southeastern ",
                "value":"(M) DI High-Major"
              },
              {  
                "college":"East Carolina University",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Southern Methodist University",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Temple University",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Central Florida",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Cincinnati",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Connecticut",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Houston",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Louisville",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Memphis",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of South Florida",
                "conference":"American Athletic Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Davidson College",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Duquesne University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Fordham University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"George Mason University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"George Washington University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"La Salle University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Saint Louis University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"St. Bonaventure University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"St. Joseph's University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Dayton",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Massachusetts, Amherst",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Rhode Island",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Richmond",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Virginia Commonwealth University",
                "conference":"Atlantic 10 Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Florida International University",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Louisiana Tech University",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Marshall University",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Middle Tennessee State University",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Old Dominion University",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Rice University",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Tulane University",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Alabama, Birmingham",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of North Carolina, Charlotte",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of North Texas",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Southern Mississippi",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Texas at El Paso",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Texas at San Antonio",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Tulsa",
                "conference":"Conference USA",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Boise State University",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"California State University, Fresno",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Colorado State University",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"San Diego State University",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"San Jose State University",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"U.S. Air Force Academy",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Nevada, Las Vegas",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Nevada, Reno",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of New Mexico",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of Wyoming",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Utah State University",
                "conference":"Mountain West Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Brigham Young University",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Gonzaga University",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Loyola Marymount University",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Pepperdine University",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"Santa Clara University",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"St. Mary's College (California)",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of San Diego",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of San Francisco",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"University of the Pacific",
                "conference":"West Coast Conference",
                "value":"(M) High-Major - / Mid-Major +"
              },
              {  
                "college":"State University of New York at Albany",
                "conference":"America East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Stony Brook University",
                "conference":"America East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Hartford",
                "conference":"America East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Maine, Orono",
                "conference":"America East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Massachusetts, Lowell",
                "conference":"America East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Maryland, Baltimore County",
                "conference":"America East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of New Hampshire",
                "conference":"America East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Vermont",
                "conference":"America East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Binghamton University",
                "conference":"American East Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"College of Charleston",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"College of William and Mary",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Drexel University",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Elon University",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Hofstra University",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"James Madison University",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Northeastern University",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Towson University",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Delaware",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of North Carolina, Wilmington",
                "conference":"Colonial Athletic Association",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Cleveland State University",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Oakland University",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Detroit Mercy",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Illinois, Chicago",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Wisconsin, Green Bay",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Wisconsin, Milwaukee",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Valparaiso University",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Wright State University",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Youngstown State University",
                "conference":"Horizon League",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Canisius College",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Fairfield University",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Iona College",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Manhattan College",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Marist College",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Monmouth University",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Niagara University",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Quinnipiac University",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Rider University",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Siena College",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"St. Peter's College",
                "conference":"Metro Athlantic Athletic Conference",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Ball State University",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Bowling Green State University",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Central Michigan University",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Eastern Michigan University",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Kent State University",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Miami University (Ohio)",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Northern Illinois University",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Ohio University",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"State University of New York at Buffalo",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Akron",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Toledo",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Western Michigan University",
                "conference":"Mid-American",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Bradley University",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Drake University",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Illinois State University",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Indiana State University",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Loyola University (Illinois)",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Missouri State University",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Southern Illinois University, Carbondale",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Evansville",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Northern Iowa",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Wichita State University",
                "conference":"Missouri Valley",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Appalachian State University",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Arkansas State University-Jonesboro",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Florida Atlantic University",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Georgia State University",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Texas State University San Marcos",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Troy University",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Arkansas, Little Rock",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Louisiana at Lafayette",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Louisiana at Monroe",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of South Alabama",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"University of Texas at Arlington",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Western Kentucky University",
                "conference":"Sun Belt",
                "value":"(M) Mid-Major"
              },
              {  
                "college":"Florida Gulf Coast University",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Jacksonville University",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Kennesaw State University",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Lipscomb University",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Northern Kentucky University",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"New Jersey Institute of Technology",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Stetson University",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of North Florida",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of South Carolina, Upstate",
                "conference":"Atlantic Sun Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"California State University, Sacramento",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Southern Utah University",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Eastern Washington University",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Idaho State University",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Montana State University, Bozeman",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Northern Arizona",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Portland State University",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of Montana",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of North Dakota",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of Northern Colorado",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Weber State University",
                "conference":"Big Sky Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"California Polytechnic State University",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"California State University, Fullerton",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"California State University, Northridge",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Long Beach State University",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of California, Davis",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of California, Irvine",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of California, Riverside",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of California, Santa Barbara",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of Hawaii, Manoa",
                "conference":"Big West",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Brown University",
                "conference":"The Ivy League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Columbia University",
                "conference":"The Ivy League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Cornell University",
                "conference":"The Ivy League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Dartmouth College",
                "conference":"The Ivy League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Harvard University",
                "conference":"The Ivy League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Princeton University",
                "conference":"The Ivy League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of Pennsylvania",
                "conference":"The Ivy League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Yale University",
                "conference":"The Ivy League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Austin Peay State University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Belmont University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Eastern Illinois University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Eastern Kentucky University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Jacksonville State University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Morehead State University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Murray State University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Southeast Missouri State University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Southern Illinois University, Edwardsville",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Tennessee State University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Tennessee Technological University",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of Tennessee at Martin",
                "conference":"Ohio Valley",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"American University",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Boston University",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Bucknell University",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Colgate University",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"College of the Holy Cross",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Lafayette College",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Lehigh University",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Loyola University (Maryland)",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"U.S. Military Academy",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"U.S. Naval Academy",
                "conference":"Patriot League",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"East Tennessee State University",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Furman University",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Georgia Southern University",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Samford University",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"The Citadel",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of North Carolina, Greensboro",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"University of Tennessee at Chattanooga",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Western Carolina University",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Wofford College",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Virginia Military Institute",
                "conference":"Southern Conference",
                "value":"(M) Mid-Major - / Low-Major +"
              },
              {  
                "college":"Campbell University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Charleston Southern University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Coastal Carolina University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Gardner-Webb University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"High Point University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Liberty University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Longwood University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Presbyterian College",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Radford University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of North Carolina, Asheville",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Virginia Military Institute",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Winthrop University",
                "conference":"Big South Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Bethune-Cookman University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Coppin State University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Delaware State University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Florida A&M University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Hampton University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Howard University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Morgan State University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Norfolk State University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"North Carolina A&T State University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"North Carolina Central University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Savannah State University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"South Carolina State University",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of Maryland, Eastern Shore",
                "conference":"Mid-Eastern Athletic",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Bryant University",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Central Connecticut State University",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Fairleigh Dickinson University, Metropolitan",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Long Island University, Brooklyn",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Mount St. Mary's University",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Robert Morris University",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Sacred Heart University",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Saint Francis University",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"St. Francis College",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Wagner College",
                "conference":"Northeast Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Houston Baptist University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Abilene Christian University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of the Incarnate Word",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Lamar University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"McNeese State University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Nicholls State University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Northwestern State University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Sam Houston State University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Southeastern Louisiana University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Stephen F. Austin State University",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Texas A&M University, Corpus Christi",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of Central Arkansas",
                "conference":"Southland Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Alcorn State University",
                "conference":"Southwestern Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Grambling State University",
                "conference":"Southwestern Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Jackson State University",
                "conference":"Southwestern Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Mississippi Valley State University",
                "conference":"Southwestern Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Prairie View A&M University",
                "conference":"Southwestern Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Southern University Baton Rouge",
                "conference":"Southwestern Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Texas Southern University",
                "conference":"Southwestern Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of Arkansas, Pine Bluff",
                "conference":"Southwestern Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Indiana University - Purdue University at Fort Wayne",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Indiana University - Purdue University at Indianapolis",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"North Dakota State University",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Oral Roberts University",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"South Dakota State University",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of Denver",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of South Dakota",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of Nebraska-Omaha",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Western Illinois University",
                "conference":"The Summit League",
                "value":"(M) Low-Major"
              },
              {  
                "college":"California State University, Bakersfield",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Chicago State University",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"New Mexico State University",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Seattle University",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of Idaho",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of Missouri, Kansas City",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"University of Texas at Pan American",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Utah Valley University",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Grand Canyon University",
                "conference":"Western Athletic Conference",
                "value":"(M) Low-Major"
              },
              {  
                "college":"Academy of Art University",
                "value":"(M) DII"
              },
              {  
                "college":"Adams State College",
                "value":"(M) DII"
              },
              {  
                "college":"Adelphi University",
                "value":"(M) DII"
              },
              {  
                "college":"Albany State University",
                "value":"(M) DII"
              },
              {  
                "college":"Alderson-Broaddus College",
                "value":"(M) DII"
              },
              {  
                "college":"American International College",
                "value":"(M) DII"
              },
              {  
                "college":"Anderson University (South Carolina)",
                "value":"(M) DII"
              },
              {  
                "college":"Angelo State University",
                "value":"(M) DII"
              },
              {  
                "college":"Arkansas Tech University",
                "value":"(M) DII"
              },
              {  
                "college":"Armstrong Atlantic State University",
                "value":"(M) DII"
              },
              {  
                "college":"Ashland University",
                "value":"(M) DII"
              },
              {  
                "college":"Assumption College",
                "value":"(M) DII"
              },
              {  
                "college":"Augusta State University",
                "value":"(M) DII"
              },
              {  
                "college":"Augustana College (South Dakota)",
                "value":"(M) DII"
              },
              {  
                "college":"Barry University",
                "value":"(M) DII"
              },
              {  
                "college":"Barton College",
                "value":"(M) DII"
              },
              {  
                "college":"Bellarmine University",
                "value":"(M) DII"
              },
              {  
                "college":"Bemidji State University",
                "value":"(M) DII"
              },
              {  
                "college":"Benedict College",
                "value":"(M) DII"
              },
              {  
                "college":"Bentley University",
                "value":"(M) DII"
              },
              {  
                "college":"Black Hills State University",
                "value":"(M) DII"
              },
              {  
                "college":"Bloomfield College",
                "value":"(M) DII"
              },
              {  
                "college":"Bloomsburg University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Bluefield State College",
                "value":"(M) DII"
              },
              {  
                "college":"Bowie State College",
                "value":"(M) DII"
              },
              {  
                "college":"Brevard College",
                "value":"(M) DII"
              },
              {  
                "college":"Brigham Young University, Hawaii",
                "value":"(M) DII"
              },
              {  
                "college":"C.W. Post Campus of Long Island University",
                "value":"(M) DII"
              },
              {  
                "college":"Caldwell College",
                "value":"(M) DII"
              },
              {  
                "college":"California State Polytechnic University, Pomona",
                "value":"(M) DII"
              },
              {  
                "college":"California State University, Chico",
                "value":"(M) DII"
              },
              {  
                "college":"California State University, Dominguez Hills",
                "value":"(M) DII"
              },
              {  
                "college":"California State University, East Bay",
                "value":"(M) DII"
              },
              {  
                "college":"California State University, Los Angeles",
                "value":"(M) DII"
              },
              {  
                "college":"California State University, Monterey Bay",
                "value":"(M) DII"
              },
              {  
                "college":"California State University, San Bernardino",
                "value":"(M) DII"
              },
              {  
                "college":"California State University, Stanislaus",
                "value":"(M) DII"
              },
              {  
                "college":"California University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Cameron University",
                "value":"(M) DII"
              },
              {  
                "college":"Carson-Newman College",
                "value":"(M) DII"
              },
              {  
                "college":"Catawba College",
                "value":"(M) DII"
              },
              {  
                "college":"Central State University",
                "value":"(M) DII"
              },
              {  
                "college":"Central Washington University",
                "value":"(M) DII"
              },
              {  
                "college":"Chadron State College",
                "value":"(M) DII"
              },
              {  
                "college":"Chaminade University",
                "value":"(M) DII"
              },
              {  
                "college":"Chestnut Hill College",
                "value":"(M) DII"
              },
              {  
                "college":"Cheyney University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Chowan University",
                "value":"(M) DII"
              },
              {  
                "college":"Christian Brothers University",
                "value":"(M) DII"
              },
              {  
                "college":"Claflin University",
                "value":"(M) DII"
              },
              {  
                "college":"Clarion University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Clark Atlanta University",
                "value":"(M) DII"
              },
              {  
                "college":"Clayton State University",
                "value":"(M) DII"
              },
              {  
                "college":"Coker College",
                "value":"(M) DII"
              },
              {  
                "college":"Colorado Christian University",
                "value":"(M) DII"
              },
              {  
                "college":"Colorado School of Mines",
                "value":"(M) DII"
              },
              {  
                "college":"Colorado State University, Pueblo",
                "value":"(M) DII"
              },
              {  
                "college":"Columbus State University",
                "value":"(M) DII"
              },
              {  
                "college":"Concord University",
                "value":"(M) DII"
              },
              {  
                "college":"Concordia College, New York",
                "value":"(M) DII"
              },
              {  
                "college":"Concordia University, St. Paul",
                "value":"(M) DII"
              },
              {  
                "college":"Dallas Baptist University",
                "value":"(M) DII"
              },
              {  
                "college":"Davis and Elkins College",
                "value":"(M) DII"
              },
              {  
                "college":"Delta State University",
                "value":"(M) DII"
              },
              {  
                "college":"Dixie State College of Utah",
                "value":"(M) DII"
              },
              {  
                "college":"Dominican College",
                "value":"(M) DII"
              },
              {  
                "college":"Dominican University (California)",
                "value":"(M) DII"
              },
              {  
                "college":"Dowling College",
                "value":"(M) DII"
              },
              {  
                "college":"Drury University",
                "value":"(M) DII"
              },
              {  
                "college":"East Central University",
                "value":"(M) DII"
              },
              {  
                "college":"East Stroudsburg University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Eastern New Mexico University",
                "value":"(M) DII"
              },
              {  
                "college":"Eckerd College",
                "value":"(M) DII"
              },
              {  
                "college":"Elizabeth City State University",
                "value":"(M) DII"
              },
              {  
                "college":"Emporia State University",
                "value":"(M) DII"
              },
              {  
                "college":"Erskine College",
                "value":"(M) DII"
              },
              {  
                "college":"Fairmont State University",
                "value":"(M) DII"
              },
              {  
                "college":"Fayetteville State University",
                "value":"(M) DII"
              },
              {  
                "college":"Felician College",
                "value":"(M) DII"
              },
              {  
                "college":"Ferris State University",
                "value":"(M) DII"
              },
              {  
                "college":"Florida Institute of Technology",
                "value":"(M) DII"
              },
              {  
                "college":"Florida Southern College",
                "value":"(M) DII"
              },
              {  
                "college":"Fort Hays State University",
                "value":"(M) DII"
              },
              {  
                "college":"Fort Lewis College",
                "value":"(M) DII"
              },
              {  
                "college":"Fort Valley State University",
                "value":"(M) DII"
              },
              {  
                "college":"Francis Marion University",
                "value":"(M) DII"
              },
              {  
                "college":"Franklin Pierce University",
                "value":"(M) DII"
              },
              {  
                "college":"Gannon University",
                "value":"(M) DII"
              },
              {  
                "college":"Georgia College & State University",
                "value":"(M) DII"
              },
              {  
                "college":"Georgia Southwestern State University",
                "value":"(M) DII"
              },
              {  
                "college":"Glenville State College",
                "value":"(M) DII"
              },
              {  
                "college":"Goldey-Beacom College",
                "value":"(M) DII"
              },
              {  
                "college":"Grand Valley State University",
                "value":"(M) DII"
              },
              {  
                "college":"Harding University",
                "value":"(M) DII"
              },
              {  
                "college":"Hawaii Pacific University",
                "value":"(M) DII"
              },
              {  
                "college":"Henderson State University",
                "value":"(M) DII"
              },
              {  
                "college":"Hillsdale College",
                "value":"(M) DII"
              },
              {  
                "college":"Holy Family University",
                "value":"(M) DII"
              },
              {  
                "college":"Humboldt State University",
                "value":"(M) DII"
              },
              {  
                "college":"Indiana University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Johnson C. Smith University",
                "value":"(M) DII"
              },
              {  
                "college":"Kentucky State University",
                "value":"(M) DII"
              },
              {  
                "college":"Kentucky Wesleyan College",
                "value":"(M) DII"
              },
              {  
                "college":"Kutztown University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Lake Erie College",
                "value":"(M) DII"
              },
              {  
                "college":"Lake Superior State University",
                "value":"(M) DII"
              },
              {  
                "college":"Lander University",
                "value":"(M) DII"
              },
              {  
                "college":"Lane College",
                "value":"(M) DII"
              },
              {  
                "college":"Le Moyne College",
                "value":"(M) DII"
              },
              {  
                "college":"Lees-McRae College",
                "value":"(M) DII"
              },
              {  
                "college":"LeMoyne-Owen College",
                "value":"(M) DII"
              },
              {  
                "college":"Lenoir-Rhyne University",
                "value":"(M) DII"
              },
              {  
                "college":"Lewis University",
                "value":"(M) DII"
              },
              {  
                "college":"Limestone College",
                "value":"(M) DII"
              },
              {  
                "college":"Lincoln Memorial University",
                "value":"(M) DII"
              },
              {  
                "college":"Lincoln University (Missouri)",
                "value":"(M) DII"
              },
              {  
                "college":"Lincoln University (Pennsylvania)",
                "value":"(M) DII"
              },
              {  
                "college":"Lindenwood University",
                "value":"(M) DII"
              },
              {  
                "college":"Livingstone College",
                "value":"(M) DII"
              },
              {  
                "college":"Lock Haven University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Lynn University",
                "value":"(M) DII"
              },
              {  
                "college":"Mansfield University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Mars Hill College",
                "value":"(M) DII"
              },
              {  
                "college":"Maryville University of St. Louis",
                "value":"(M) DII"
              },
              {  
                "college":"Mercy College",
                "value":"(M) DII"
              },
              {  
                "college":"Mercyhurst College",
                "value":"(M) DII"
              },
              {  
                "college":"Merrimack College",
                "value":"(M) DII"
              },
              {  
                "college":"Mesa State College",
                "value":"(M) DII"
              },
              {  
                "college":"Metropolitan State College of Denver",
                "value":"(M) DII"
              },
              {  
                "college":"Michigan Technological University",
                "value":"(M) DII"
              },
              {  
                "college":"Midwestern State University",
                "value":"(M) DII"
              },
              {  
                "college":"Miles College",
                "value":"(M) DII"
              },
              {  
                "college":"Millersville University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Minnesota State University, Mankato",
                "value":"(M) DII"
              },
              {  
                "college":"Minnesota State University, Moorhead",
                "value":"(M) DII"
              },
              {  
                "college":"Missouri Southern State Univerisy",
                "value":"(M) DII"
              },
              {  
                "college":"Missouri University of Science and Technology",
                "value":"(M) DII"
              },
              {  
                "college":"Missouri Western State University",
                "value":"(M) DII"
              },
              {  
                "college":"Molloy College",
                "value":"(M) DII"
              },
              {  
                "college":"Montana State University, Billings",
                "value":"(M) DII"
              },
              {  
                "college":"Morehouse College",
                "value":"(M) DII"
              },
              {  
                "college":"Mount Olive College",
                "value":"(M) DII"
              },
              {  
                "college":"New Mexico Highlands University",
                "value":"(M) DII"
              },
              {  
                "college":"New York Institute of Technology",
                "value":"(M) DII"
              },
              {  
                "college":"Newberry College",
                "value":"(M) DII"
              },
              {  
                "college":"Newman University",
                "value":"(M) DII"
              },
              {  
                "college":"North Georgia College and State University",
                "value":"(M) DII"
              },
              {  
                "college":"North Greenville University",
                "value":"(M) DII"
              },
              {  
                "college":"Northeastern State University",
                "value":"(M) DII"
              },
              {  
                "college":"Northern Michigan University",
                "value":"(M) DII"
              },
              {  
                "college":"Northern State University",
                "value":"(M) DII"
              },
              {  
                "college":"Northwest Missouri State University",
                "value":"(M) DII"
              },
              {  
                "college":"Northwest Nazarene University",
                "value":"(M) DII"
              },
              {  
                "college":"Northwood University (Michigan)",
                "value":"(M) DII"
              },
              {  
                "college":"Notre Dame de Namur University",
                "value":"(M) DII"
              },
              {  
                "college":"Nova Southeastern University",
                "value":"(M) DII"
              },
              {  
                "college":"Nyack College",
                "value":"(M) DII"
              },
              {  
                "college":"Ohio Dominican University",
                "value":"(M) DII"
              },
              {  
                "college":"Ohio Valley University",
                "value":"(M) DII"
              },
              {  
                "college":"Oklahoma Panhandle State University",
                "value":"(M) DII"
              },
              {  
                "college":"Ouachita Baptist University",
                "value":"(M) DII"
              },
              {  
                "college":"Pace University",
                "value":"(M) DII"
              },
              {  
                "college":"Paine College",
                "value":"(M) DII"
              },
              {  
                "college":"Palm Beach Atlantic University",
                "value":"(M) DII"
              },
              {  
                "college":"Pfeiffer University",
                "value":"(M) DII"
              },
              {  
                "college":"Philadelphia University",
                "value":"(M) DII"
              },
              {  
                "college":"Pittsburg State University",
                "value":"(M) DII"
              },
              {  
                "college":"Queens College",
                "value":"(M) DII"
              },
              {  
                "college":"Queens University of Charlotte",
                "value":"(M) DII"
              },
              {  
                "college":"Quincy University",
                "value":"(M) DII"
              },
              {  
                "college":"Regis University",
                "value":"(M) DII"
              },
              {  
                "college":"Rockhurst University",
                "value":"(M) DII"
              },
              {  
                "college":"Rollins College",
                "value":"(M) DII"
              },
              {  
                "college":"Saginaw Valley State University",
                "value":"(M) DII"
              },
              {  
                "college":"Saint Anselm College",
                "value":"(M) DII"
              },
              {  
                "college":"Saint Joseph's College (Indiana)",
                "value":"(M) DII"
              },
              {  
                "college":"Saint Leo University",
                "value":"(M) DII"
              },
              {  
                "college":"Saint Michael's College",
                "value":"(M) DII"
              },
              {  
                "college":"Salem International University",
                "value":"(M) DII"
              },
              {  
                "college":"San Francisco State University",
                "value":"(M) DII"
              },
              {  
                "college":"Seattle Pacific University",
                "value":"(M) DII"
              },
              {  
                "college":"Seton Hill University",
                "value":"(M) DII"
              },
              {  
                "college":"Shaw University",
                "value":"(M) DII"
              },
              {  
                "college":"Shepherd University",
                "value":"(M) DII"
              },
              {  
                "college":"Shippensburg University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Shorter College",
                "value":"(M) DII"
              },
              {  
                "college":"Slippery Rock University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"Sonoma State University",
                "value":"(M) DII"
              },
              {  
                "college":"Southeastern Oklahoma State University",
                "value":"(M) DII"
              },
              {  
                "college":"Southern Arkansas University",
                "value":"(M) DII"
              },
              {  
                "college":"Southern Connecticut State University",
                "value":"(M) DII"
              },
              {  
                "college":"Southern New Hampshire University",
                "value":"(M) DII"
              },
              {  
                "college":"Southwest Baptist University",
                "value":"(M) DII"
              },
              {  
                "college":"Southwest Minnesota State University",
                "value":"(M) DII"
              },
              {  
                "college":"Southwestern Oklahoma State University",
                "value":"(M) DII"
              },
              {  
                "college":"St. Andrews Presbyterian College",
                "value":"(M) DII"
              },
              {  
                "college":"St. Augustine's College",
                "value":"(M) DII"
              },
              {  
                "college":"St. Cloud State University",
                "value":"(M) DII"
              },
              {  
                "college":"St. Edward's University",
                "value":"(M) DII"
              },
              {  
                "college":"St. Martin's University",
                "value":"(M) DII"
              },
              {  
                "college":"St. Mary's University (Texas)",
                "value":"(M) DII"
              },
              {  
                "college":"St. Paul's College",
                "value":"(M) DII"
              },
              {  
                "college":"St. Thomas Aquinas College",
                "value":"(M) DII"
              },
              {  
                "college":"Stillman College",
                "value":"(M) DII"
              },
              {  
                "college":"Stonehill College",
                "value":"(M) DII"
              },
              {  
                "college":"Tarleton State University",
                "value":"(M) DII"
              },
              {  
                "college":"Texas A&M International University",
                "value":"(M) DII"
              },
              {  
                "college":"Texas A&M University, Commerce",
                "value":"(M) DII"
              },
              {  
                "college":"Texas A&M University, Kingsville",
                "value":"(M) DII"
              },
              {  
                "college":"The College of Saint Rose",
                "value":"(M) DII"
              },
              {  
                "college":"Tiffin University",
                "value":"(M) DII"
              },
              {  
                "college":"Truman State University",
                "value":"(M) DII"
              },
              {  
                "college":"Tusculum College",
                "value":"(M) DII"
              },
              {  
                "college":"Tuskegee University",
                "value":"(M) DII"
              },
              {  
                "college":"University of Alabama, Huntsville",
                "value":"(M) DII"
              },
              {  
                "college":"University of Alaska, Anchorage",
                "value":"(M) DII"
              },
              {  
                "college":"University of Alaska, Fairbanks",
                "value":"(M) DII"
              },
              {  
                "college":"University of Arkansas, Fort Smith",
                "value":"(M) DII"
              },
              {  
                "college":"University of Arkansas, Monticello",
                "value":"(M) DII"
              },
              {  
                "college":"University of Bridgeport",
                "value":"(M) DII"
              },
              {  
                "college":"University of California, San Diego",
                "value":"(M) DII"
              },
              {  
                "college":"University of Central Missouri",
                "value":"(M) DII"
              },
              {  
                "college":"University of Central Oklahoma",
                "value":"(M) DII"
              },
              {  
                "college":"University of Charleston",
                "value":"(M) DII"
              },
              {  
                "college":"University of Colorado, Colorado Springs",
                "value":"(M) DII"
              },
              {  
                "college":"University of Findlay",
                "value":"(M) DII"
              },
              {  
                "college":"University of Hawaii at Hilo",
                "value":"(M) DII"
              },
              {  
                "college":"University of Illinois, Springfield",
                "value":"(M) DII"
              },
              {  
                "college":"University of Indianapolis",
                "value":"(M) DII"
              },
              {  
                "college":"University of Mary",
                "value":"(M) DII"
              },
              {  
                "college":"University of Minnesota, Crookston",
                "value":"(M) DII"
              },
              {  
                "college":"University of Minnesota, Duluth",
                "value":"(M) DII"
              },
              {  
                "college":"University of Missouri, St. Louis",
                "value":"(M) DII"
              },
              {  
                "college":"University of Montevallo",
                "value":"(M) DII"
              },
              {  
                "college":"University of Nebraska at Kearney",
                "value":"(M) DII"
              },
              {  
                "college":"University of New Haven",
                "value":"(M) DII"
              },
              {  
                "college":"University of North Alabama",
                "value":"(M) DII"
              },
              {  
                "college":"University of North Carolina, Pembroke",
                "value":"(M) DII"
              },
              {  
                "college":"University of Pittsburgh, Johnstown",
                "value":"(M) DII"
              },
              {  
                "college":"University of South Carolina, Aiken",
                "value":"(M) DII"
              },
              {  
                "college":"University of Southern Indiana",
                "value":"(M) DII"
              },
              {  
                "college":"University of Tampa",
                "value":"(M) DII"
              },
              {  
                "college":"University of Texas of the Permian Basin",
                "value":"(M) DII"
              },
              {  
                "college":"University of the District of Columbia",
                "value":"(M) DII"
              },
              {  
                "college":"University of the Sciences",
                "value":"(M) DII"
              },
              {  
                "college":"University of West Alabama",
                "value":"(M) DII"
              },
              {  
                "college":"University of West Florida",
                "value":"(M) DII"
              },
              {  
                "college":"University of West Georgia",
                "value":"(M) DII"
              },
              {  
                "college":"University of Wisconsin, Parkside",
                "value":"(M) DII"
              },
              {  
                "college":"Upper Iowa University",
                "value":"(M) DII"
              },
              {  
                "college":"Valdosta State University",
                "value":"(M) DII"
              },
              {  
                "college":"Virginia State University",
                "value":"(M) DII"
              },
              {  
                "college":"Virginia Union University",
                "value":"(M) DII"
              },
              {  
                "college":"Washburn University of Topeka",
                "value":"(M) DII"
              },
              {  
                "college":"Wayne State College",
                "value":"(M) DII"
              },
              {  
                "college":"Wayne State University",
                "value":"(M) DII"
              },
              {  
                "college":"West Chester University of Pennsylvania",
                "value":"(M) DII"
              },
              {  
                "college":"West Liberty University",
                "value":"(M) DII"
              },
              {  
                "college":"West Texas A&M University",
                "value":"(M) DII"
              },
              {  
                "college":"West Virginia State University",
                "value":"(M) DII"
              },
              {  
                "college":"West Virginia Wesleyan College",
                "value":"(M) DII"
              },
              {  
                "college":"Western New Mexico University",
                "value":"(M) DII"
              },
              {  
                "college":"Western Oregon University",
                "value":"(M) DII"
              },
              {  
                "college":"Western State College of Colorado",
                "value":"(M) DII"
              },
              {  
                "college":"Western Washington University",
                "value":"(M) DII"
              },
              {  
                "college":"Wheeling Jesuit University",
                "value":"(M) DII"
              },
              {  
                "college":"William Jewell College",
                "value":"(M) DII"
              },
              {  
                "college":"Wilmington University",
                "value":"(M) DII"
              },
              {  
                "college":"Wingate University",
                "value":"(M) DII"
              },
              {  
                "college":"Winona State University",
                "value":"(M) DII"
              },
              {  
                "college":"Winston-Salem State University",
                "value":"(M) DII"
              },
              {  
                "college":"Adrian College",
                "value":"(M) DIII"
              },
              {  
                "college":"Albertus Magnus College",
                "value":"(M) DIII"
              },
              {  
                "college":"Albion College",
                "value":"(M) DIII"
              },
              {  
                "college":"Albright College",
                "value":"(M) DIII"
              },
              {  
                "college":"Alfred University",
                "value":"(M) DIII"
              },
              {  
                "college":"Allegheny College",
                "value":"(M) DIII"
              },
              {  
                "college":"Alma College",
                "value":"(M) DIII"
              },
              {  
                "college":"Alvernia University",
                "value":"(M) DIII"
              },
              {  
                "college":"Amherst College",
                "value":"(M) DIII"
              },
              {  
                "college":"Anderson University (Indiana)",
                "value":"(M) DIII"
              },
              {  
                "college":"Anna Maria College",
                "value":"(M) DIII"
              },
              {  
                "college":"Arcadia University",
                "value":"(M) DIII"
              },
              {  
                "college":"Augsburg College",
                "value":"(M) DIII"
              },
              {  
                "college":"Augustana College (Illinois)",
                "value":"(M) DIII"
              },
              {  
                "college":"Aurora University",
                "value":"(M) DIII"
              },
              {  
                "college":"Austin College",
                "value":"(M) DIII"
              },
              {  
                "college":"Averett University",
                "value":"(M) DIII"
              },
              {  
                "college":"Babson College",
                "value":"(M) DIII"
              },
              {  
                "college":"Baldwin-Wallace College",
                "value":"(M) DIII"
              },
              {  
                "college":"Baptist Bible College",
                "value":"(M) DIII"
              },
              {  
                "college":"Bard College",
                "value":"(M) DIII"
              },
              {  
                "college":"Baruch College",
                "value":"(M) DIII"
              },
              {  
                "college":"Bates College",
                "value":"(M) DIII"
              },
              {  
                "college":"Becker College",
                "value":"(M) DIII"
              },
              {  
                "college":"Beloit College",
                "value":"(M) DIII"
              },
              {  
                "college":"Benedictine University",
                "value":"(M) DIII"
              },
              {  
                "college":"Berry College",
                "value":"(M) DIII"
              },
              {  
                "college":"Bethany College (West Virginia)",
                "value":"(M) DIII"
              },
              {  
                "college":"Bethany Lutheran College",
                "value":"(M) DIII"
              },
              {  
                "college":"Bethel University (Minnesota)",
                "value":"(M) DIII"
              },
              {  
                "college":"Birmingham-Southern College",
                "value":"(M) DIII"
              },
              {  
                "college":"Blackburn College",
                "value":"(M) DIII"
              },
              {  
                "college":"Bluffton University",
                "value":"(M) DIII"
              },
              {  
                "college":"Bowdoin College",
                "value":"(M) DIII"
              },
              {  
                "college":"Brandeis University",
                "value":"(M) DIII"
              },
              {  
                "college":"Bridgewater College",
                "value":"(M) DIII"
              },
              {  
                "college":"Bridgewater State College",
                "value":"(M) DIII"
              },
              {  
                "college":"Brooklyn College",
                "value":"(M) DIII"
              },
              {  
                "college":"Buena Vista University",
                "value":"(M) DIII"
              },
              {  
                "college":"Buffalo State College",
                "value":"(M) DIII"
              },
              {  
                "college":"Cabrini College",
                "value":"(M) DIII"
              },
              {  
                "college":"California Institute of Technology",
                "value":"(M) DIII"
              },
              {  
                "college":"California Lutheran University",
                "value":"(M) DIII"
              },
              {  
                "college":"Calvin College",
                "value":"(M) DIII"
              },
              {  
                "college":"Capital University",
                "value":"(M) DIII"
              },
              {  
                "college":"Carleton College",
                "value":"(M) DIII"
              },
              {  
                "college":"Carnegie Mellon University",
                "value":"(M) DIII"
              },
              {  
                "college":"Carroll University",
                "value":"(M) DIII"
              },
              {  
                "college":"Carthage College",
                "value":"(M) DIII"
              },
              {  
                "college":"Case Western Reserve University",
                "value":"(M) DIII"
              },
              {  
                "college":"Castleton State College",
                "value":"(M) DIII"
              },
              {  
                "college":"Cazenovia College",
                "value":"(M) DIII"
              },
              {  
                "college":"Centenary College (Louisiana)",
                "value":"(M) DIII"
              },
              {  
                "college":"Centenary College (New Jersey)",
                "value":"(M) DIII"
              },
              {  
                "college":"Central College",
                "value":"(M) DIII"
              },
              {  
                "college":"Centre College",
                "value":"(M) DIII"
              },
              {  
                "college":"Chapman University",
                "value":"(M) DIII"
              },
              {  
                "college":"Christopher Newport University",
                "value":"(M) DIII"
              },
              {  
                "college":"Claremont McKenna",
                "value":"(M) DIII"
              },
              {  
                "college":"Clark University",
                "value":"(M) DIII"
              },
              {  
                "college":"Clarkson University",
                "value":"(M) DIII"
              },
              {  
                "college":"Coe College",
                "value":"(M) DIII"
              },
              {  
                "college":"Colby College",
                "value":"(M) DIII"
              },
              {  
                "college":"Colby-Sawyer College",
                "value":"(M) DIII"
              },
              {  
                "college":"College of Mount St. Joseph",
                "value":"(M) DIII"
              },
              {  
                "college":"College of Mount St. Vincent",
                "value":"(M) DIII"
              },
              {  
                "college":"College of Staten Island",
                "value":"(M) DIII"
              },
              {  
                "college":"College of Wooster",
                "value":"(M) DIII"
              },
              {  
                "college":"Colorado College",
                "value":"(M) DIII"
              },
              {  
                "college":"Concordia College, Moorhead",
                "value":"(M) DIII"
              },
              {  
                "college":"Concordia University, Chicago",
                "value":"(M) DIII"
              },
              {  
                "college":"Concordia University, Texas",
                "value":"(M) DIII"
              },
              {  
                "college":"Concordia University, Wisconsin",
                "value":"(M) DIII"
              },
              {  
                "college":"Connecticut College",
                "value":"(M) DIII"
              },
              {  
                "college":"Cornell College",
                "value":"(M) DIII"
              },
              {  
                "college":"Covenant College",
                "value":"(M) DIII"
              },
              {  
                "college":"Crown College",
                "value":"(M) DIII"
              },
              {  
                "college":"Curry College",
                "value":"(M) DIII"
              },
              {  
                "college":"D'Youville College",
                "value":"(M) DIII"
              },
              {  
                "college":"Daniel Webster College",
                "value":"(M) DIII"
              },
              {  
                "college":"Defiance College",
                "value":"(M) DIII"
              },
              {  
                "college":"Delaware Valley College",
                "value":"(M) DIII"
              },
              {  
                "college":"Denison University",
                "value":"(M) DIII"
              },
              {  
                "college":"DePauw University",
                "value":"(M) DIII"
              },
              {  
                "college":"DeSales University",
                "value":"(M) DIII"
              },
              {  
                "college":"Dickinson College",
                "value":"(M) DIII"
              },
              {  
                "college":"Dominican University (Illinois)",
                "value":"(M) DIII"
              },
              {  
                "college":"Drew University",
                "value":"(M) DIII"
              },
              {  
                "college":"Earlham College",
                "value":"(M) DIII"
              },
              {  
                "college":"East Texas Baptist University",
                "value":"(M) DIII"
              },
              {  
                "college":"Eastern Connecticut State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Eastern Mennonite University",
                "value":"(M) DIII"
              },
              {  
                "college":"Eastern Nazarene College",
                "value":"(M) DIII"
              },
              {  
                "college":"Eastern University",
                "value":"(M) DIII"
              },
              {  
                "college":"Edgewood College",
                "value":"(M) DIII"
              },
              {  
                "college":"Elizabethtown College",
                "value":"(M) DIII"
              },
              {  
                "college":"Elmhurst College",
                "value":"(M) DIII"
              },
              {  
                "college":"Elmira College",
                "value":"(M) DIII"
              },
              {  
                "college":"Elms College",
                "value":"(M) DIII"
              },
              {  
                "college":"Emerson College",
                "value":"(M) DIII"
              },
              {  
                "college":"Emmanuel College (Massachusetts)",
                "value":"(M) DIII"
              },
              {  
                "college":"Emory and Henry College",
                "value":"(M) DIII"
              },
              {  
                "college":"Emory University",
                "value":"(M) DIII"
              },
              {  
                "college":"Endicott College",
                "value":"(M) DIII"
              },
              {  
                "college":"Eureka College",
                "value":"(M) DIII"
              },
              {  
                "college":"Fairleigh Dickinson University, Florham",
                "value":"(M) DIII"
              },
              {  
                "college":"Ferrum College",
                "value":"(M) DIII"
              },
              {  
                "college":"Finlandia University",
                "value":"(M) DIII"
              },
              {  
                "college":"Fitchburg State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Flagler College",
                "value":"(M) DIII"
              },
              {  
                "college":"Fontbonne University",
                "value":"(M) DIII"
              },
              {  
                "college":"Framingham State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Franciscan University of Steubenville",
                "value":"(M) DIII"
              },
              {  
                "college":"Franklin & Marshall College",
                "value":"(M) DIII"
              },
              {  
                "college":"Franklin College",
                "value":"(M) DIII"
              },
              {  
                "college":"Frostburg State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Gallaudet University",
                "value":"(M) DIII"
              },
              {  
                "college":"Geneva College",
                "value":"(M) DIII"
              },
              {  
                "college":"George Fox University",
                "value":"(M) DIII"
              },
              {  
                "college":"Gettysburg College",
                "value":"(M) DIII"
              },
              {  
                "college":"Gordon College",
                "value":"(M) DIII"
              },
              {  
                "college":"Goucher College",
                "value":"(M) DIII"
              },
              {  
                "college":"Green Mountain College",
                "value":"(M) DIII"
              },
              {  
                "college":"Greensboro College",
                "value":"(M) DIII"
              },
              {  
                "college":"Greenville College",
                "value":"(M) DIII"
              },
              {  
                "college":"Grinnell College",
                "value":"(M) DIII"
              },
              {  
                "college":"Grove City College",
                "value":"(M) DIII"
              },
              {  
                "college":"Guilford College",
                "value":"(M) DIII"
              },
              {  
                "college":"Gustavus Adolphus College",
                "value":"(M) DIII"
              },
              {  
                "college":"Gwynedd-Mercy College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hamilton College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hamline University",
                "value":"(M) DIII"
              },
              {  
                "college":"Hampden-Sydney College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hanover College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hardin-Simmons University",
                "value":"(M) DIII"
              },
              {  
                "college":"Hartwick College",
                "value":"(M) DIII"
              },
              {  
                "college":"Harvey Mudd College",
                "value":"(M) DIII"
              },
              {  
                "college":"Haverford College",
                "value":"(M) DIII"
              },
              {  
                "college":"Heidelberg University",
                "value":"(M) DIII"
              },
              {  
                "college":"Hendrix College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hilbert College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hiram College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hobart College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hood College",
                "value":"(M) DIII"
              },
              {  
                "college":"Hope College",
                "value":"(M) DIII"
              },
              {  
                "college":"Howard Payne University",
                "value":"(M) DIII"
              },
              {  
                "college":"Hunter College",
                "value":"(M) DIII"
              },
              {  
                "college":"Huntingdon College",
                "value":"(M) DIII"
              },
              {  
                "college":"Husson University",
                "value":"(M) DIII"
              },
              {  
                "college":"Illinois College",
                "value":"(M) DIII"
              },
              {  
                "college":"Illinois Wesleyan University",
                "value":"(M) DIII"
              },
              {  
                "college":"Immaculata University",
                "value":"(M) DIII"
              },
              {  
                "college":"Ithaca College",
                "value":"(M) DIII"
              },
              {  
                "college":"John Carroll University",
                "value":"(M) DIII"
              },
              {  
                "college":"John Jay College of Criminal Justice",
                "value":"(M) DIII"
              },
              {  
                "college":"Johns Hopkins University",
                "value":"(M) DIII"
              },
              {  
                "college":"Johnson and Wales University, Providence",
                "value":"(M) DIII"
              },
              {  
                "college":"Johnson State College",
                "value":"(M) DIII"
              },
              {  
                "college":"Juniata College",
                "value":"(M) DIII"
              },
              {  
                "college":"Kalamazoo College",
                "value":"(M) DIII"
              },
              {  
                "college":"Kean University",
                "value":"(M) DIII"
              },
              {  
                "college":"Keene State College",
                "value":"(M) DIII"
              },
              {  
                "college":"Kenyon College",
                "value":"(M) DIII"
              },
              {  
                "college":"Keuka College",
                "value":"(M) DIII"
              },
              {  
                "college":"Keystone College",
                "value":"(M) DIII"
              },
              {  
                "college":"Kings College",
                "value":"(M) DIII"
              },
              {  
                "college":"Knox College",
                "value":"(M) DIII"
              },
              {  
                "college":"La Grange College",
                "value":"(M) DIII"
              },
              {  
                "college":"La Roche College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lake Forest College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lakeland College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lancaster Bible College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lasell College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lawrence University",
                "value":"(M) DIII"
              },
              {  
                "college":"Lebanon Valley College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lehman College, City University of New York",
                "value":"(M) DIII"
              },
              {  
                "college":"Lesley University",
                "value":"(M) DIII"
              },
              {  
                "college":"LeTourneau University",
                "value":"(M) DIII"
              },
              {  
                "college":"Lewis & Clark College",
                "value":"(M) DIII"
              },
              {  
                "college":"Linfield College",
                "value":"(M) DIII"
              },
              {  
                "college":"Loras College",
                "value":"(M) DIII"
              },
              {  
                "college":"Louisiana College",
                "value":"(M) DIII"
              },
              {  
                "college":"Luther College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lycoming College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lynchburg College",
                "value":"(M) DIII"
              },
              {  
                "college":"Lyndon State College",
                "value":"(M) DIII"
              },
              {  
                "college":"Macalester College",
                "value":"(M) DIII"
              },
              {  
                "college":"MacMurray College",
                "value":"(M) DIII"
              },
              {  
                "college":"Maine Maritime Academy",
                "value":"(M) DIII"
              },
              {  
                "college":"Manchester College",
                "value":"(M) DIII"
              },
              {  
                "college":"Manhattanville College",
                "value":"(M) DIII"
              },
              {  
                "college":"Maranatha Baptist Bible College",
                "value":"(M) DIII"
              },
              {  
                "college":"Marian University (Wisconsin)",
                "value":"(M) DIII"
              },
              {  
                "college":"Marietta College",
                "value":"(M) DIII"
              },
              {  
                "college":"Martin Luther College",
                "value":"(M) DIII"
              },
              {  
                "college":"Marymount University",
                "value":"(M) DIII"
              },
              {  
                "college":"Maryville College",
                "value":"(M) DIII"
              },
              {  
                "college":"Marywood University",
                "value":"(M) DIII"
              },
              {  
                "college":"Massachusetts College of Liberal Arts",
                "value":"(M) DIII"
              },
              {  
                "college":"Massachusetts Institute of Technology",
                "value":"(M) DIII"
              },
              {  
                "college":"McDaniel College",
                "value":"(M) DIII"
              },
              {  
                "college":"McMurry University",
                "value":"(M) DIII"
              },
              {  
                "college":"Medaille College",
                "value":"(M) DIII"
              },
              {  
                "college":"Medgar Evers College",
                "value":"(M) DIII"
              },
              {  
                "college":"Messiah College",
                "value":"(M) DIII"
              },
              {  
                "college":"Methodist University",
                "value":"(M) DIII"
              },
              {  
                "college":"Middlebury College",
                "value":"(M) DIII"
              },
              {  
                "college":"Millikin University",
                "value":"(M) DIII"
              },
              {  
                "college":"Millsaps College",
                "value":"(M) DIII"
              },
              {  
                "college":"Milwaukee School of Engineering",
                "value":"(M) DIII"
              },
              {  
                "college":"Misericordia University",
                "value":"(M) DIII"
              },
              {  
                "college":"Mississippi College",
                "value":"(M) DIII"
              },
              {  
                "college":"Mitchell College",
                "value":"(M) DIII"
              },
              {  
                "college":"Monmouth College",
                "value":"(M) DIII"
              },
              {  
                "college":"Montclair State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Moravian College",
                "value":"(M) DIII"
              },
              {  
                "college":"Morrisville State",
                "value":"(M) DIII"
              },
              {  
                "college":"Mount Aloysius College",
                "value":"(M) DIII"
              },
              {  
                "college":"Mount Ida College",
                "value":"(M) DIII"
              },
              {  
                "college":"Mount St. Mary College",
                "value":"(M) DIII"
              },
              {  
                "college":"Muhlenberg College",
                "value":"(M) DIII"
              },
              {  
                "college":"Muskingum University",
                "value":"(M) DIII"
              },
              {  
                "college":"Nazareth College",
                "value":"(M) DIII"
              },
              {  
                "college":"Neumann University",
                "value":"(M) DIII"
              },
              {  
                "college":"New England College",
                "value":"(M) DIII"
              },
              {  
                "college":"New Jersey City University",
                "value":"(M) DIII"
              },
              {  
                "college":"New York City College of Technology",
                "value":"(M) DIII"
              },
              {  
                "college":"New York University",
                "value":"(M) DIII"
              },
              {  
                "college":"Newbury College",
                "value":"(M) DIII"
              },
              {  
                "college":"Nichols College",
                "value":"(M) DIII"
              },
              {  
                "college":"North Carolina Wesleyan College",
                "value":"(M) DIII"
              },
              {  
                "college":"North Central College",
                "value":"(M) DIII"
              },
              {  
                "college":"North Central University",
                "value":"(M) DIII"
              },
              {  
                "college":"North Park University",
                "value":"(M) DIII"
              },
              {  
                "college":"Northland College",
                "value":"(M) DIII"
              },
              {  
                "college":"Northwestern College (Iowa)",
                "value":"(M) DIII"
              },
              {  
                "college":"Northwestern College (Minnesota)",
                "value":"(M) DIII"
              },
              {  
                "college":"Norwich University",
                "value":"(M) DIII"
              },
              {  
                "college":"Oberlin College",
                "value":"(M) DIII"
              },
              {  
                "college":"Occidental College",
                "value":"(M) DIII"
              },
              {  
                "college":"Oglethorpe University",
                "value":"(M) DIII"
              },
              {  
                "college":"Ohio Northern University",
                "value":"(M) DIII"
              },
              {  
                "college":"Ohio Wesleyan University",
                "value":"(M) DIII"
              },
              {  
                "college":"Otterbein University",
                "value":"(M) DIII"
              },
              {  
                "college":"Pacific Lutheran University",
                "value":"(M) DIII"
              },
              {  
                "college":"Pacific University Oregon",
                "value":"(M) DIII"
              },
              {  
                "college":"Penn State University Erie, The Behrend College",
                "value":"(M) DIII"
              },
              {  
                "college":"Penn State University, Abington",
                "value":"(M) DIII"
              },
              {  
                "college":"Penn State University, Altoona",
                "value":"(M) DIII"
              },
              {  
                "college":"Penn State University, Berks College",
                "value":"(M) DIII"
              },
              {  
                "college":"Penn State University, Harrisburg",
                "value":"(M) DIII"
              },
              {  
                "college":"Philadelphia Biblical University",
                "value":"(M) DIII"
              },
              {  
                "college":"Piedmont College",
                "value":"(M) DIII"
              },
              {  
                "college":"Plymouth State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Polytechnic Institute of New York",
                "value":"(M) DIII"
              },
              {  
                "college":"Pomona-Pitzer College",
                "value":"(M) DIII"
              },
              {  
                "college":"Presentation College",
                "value":"(M) DIII"
              },
              {  
                "college":"Principia College",
                "value":"(M) DIII"
              },
              {  
                "college":"Ramapo College",
                "value":"(M) DIII"
              },
              {  
                "college":"Randolph College",
                "value":"(M) DIII"
              },
              {  
                "college":"Randolph-Macon College",
                "value":"(M) DIII"
              },
              {  
                "college":"Regis College",
                "value":"(M) DIII"
              },
              {  
                "college":"Rensselaer Polytechnic Institute",
                "value":"(M) DIII"
              },
              {  
                "college":"Rhode Island College",
                "value":"(M) DIII"
              },
              {  
                "college":"Rhodes College",
                "value":"(M) DIII"
              },
              {  
                "college":"Richard Stockton College of New Jersey",
                "value":"(M) DIII"
              },
              {  
                "college":"Ripon College",
                "value":"(M) DIII"
              },
              {  
                "college":"Rivier College",
                "value":"(M) DIII"
              },
              {  
                "college":"Roanoke College",
                "value":"(M) DIII"
              },
              {  
                "college":"Rochester Institute of Technology",
                "value":"(M) DIII"
              },
              {  
                "college":"Rockford College",
                "value":"(M) DIII"
              },
              {  
                "college":"Roger Williams University",
                "value":"(M) DIII"
              },
              {  
                "college":"Rose Hulman Institute of Technology",
                "value":"(M) DIII"
              },
              {  
                "college":"Rosemont College",
                "value":"(M) DIII"
              },
              {  
                "college":"Rowan University",
                "value":"(M) DIII"
              },
              {  
                "college":"Rust College",
                "value":"(M) DIII"
              },
              {  
                "college":"Rutgers State University of New Jersey, Camden",
                "value":"(M) DIII"
              },
              {  
                "college":"Rutgers State University of New Jersey, Newark",
                "value":"(M) DIII"
              },
              {  
                "college":"Saint Joseph's College of Maine",
                "value":"(M) DIII"
              },
              {  
                "college":"Saint Mary's University of Minnesota",
                "value":"(M) DIII"
              },
              {  
                "college":"Saint Vincent College",
                "value":"(M) DIII"
              },
              {  
                "college":"Salem State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Salisbury University",
                "value":"(M) DIII"
              },
              {  
                "college":"Salve Regina University",
                "value":"(M) DIII"
              },
              {  
                "college":"Schreiner University",
                "value":"(M) DIII"
              },
              {  
                "college":"Shenandoah University",
                "value":"(M) DIII"
              },
              {  
                "college":"Simpson College",
                "value":"(M) DIII"
              },
              {  
                "college":"Skidmore College",
                "value":"(M) DIII"
              },
              {  
                "college":"Southern Vermont College",
                "value":"(M) DIII"
              },
              {  
                "college":"Spalding University",
                "value":"(M) DIII"
              },
              {  
                "college":"Springfield College",
                "value":"(M) DIII"
              },
              {  
                "college":"St. John Fisher College",
                "value":"(M) DIII"
              },
              {  
                "college":"St. John's University (Minnesota)",
                "value":"(M) DIII"
              },
              {  
                "college":"St. Joseph's College (Brooklyn)",
                "value":"(M) DIII"
              },
              {  
                "college":"St. Joseph's College (Long Island)",
                "value":"(M) DIII"
              },
              {  
                "college":"St. Lawrence University",
                "value":"(M) DIII"
              },
              {  
                "college":"St. Mary's College (Maryland)",
                "value":"(M) DIII"
              },
              {  
                "college":"St. Norbert College",
                "value":"(M) DIII"
              },
              {  
                "college":"St. Olaf College",
                "value":"(M) DIII"
              },
              {  
                "college":"State University College at Fredonia",
                "value":"(M) DIII"
              },
              {  
                "college":"State University College at New Paltz",
                "value":"(M) DIII"
              },
              {  
                "college":"State University College at Old Westbury",
                "value":"(M) DIII"
              },
              {  
                "college":"State University College at Oneonta",
                "value":"(M) DIII"
              },
              {  
                "college":"State University College at Oswego",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York at Cobleskill",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York at Cortland",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York at Farmingdale",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York at Geneseo",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York at Maritime College",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York at Plattsburgh",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York at Potsdam",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York at Purchase College",
                "value":"(M) DIII"
              },
              {  
                "college":"State University of New York Institute of Technology",
                "value":"(M) DIII"
              },
              {  
                "college":"Stevens Institute of Technology",
                "value":"(M) DIII"
              },
              {  
                "college":"Stevenson University",
                "value":"(M) DIII"
              },
              {  
                "college":"Suffolk University",
                "value":"(M) DIII"
              },
              {  
                "college":"Sul Ross State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Susquehanna University",
                "value":"(M) DIII"
              },
              {  
                "college":"Swarthmore College",
                "value":"(M) DIII"
              },
              {  
                "college":"Texas Lutheran University",
                "value":"(M) DIII"
              },
              {  
                "college":"The Catholic University of America",
                "value":"(M) DIII"
              },
              {  
                "college":"The City College of New York",
                "value":"(M) DIII"
              },
              {  
                "college":"The College of New Jersey",
                "value":"(M) DIII"
              },
              {  
                "college":"The College of St. Scholastica",
                "value":"(M) DIII"
              },
              {  
                "college":"The Sage Colleges",
                "value":"(M) DIII"
              },
              {  
                "college":"Thiel College",
                "value":"(M) DIII"
              },
              {  
                "college":"Thomas College",
                "value":"(M) DIII"
              },
              {  
                "college":"Thomas Moore University",
                "value":"(M) DIII"
              },
              {  
                "college":"Transylvania University",
                "value":"(M) DIII"
              },
              {  
                "college":"Trine University",
                "value":"(M) DIII"
              },
              {  
                "college":"Trinity College (Connecticut)",
                "value":"(M) DIII"
              },
              {  
                "college":"Trinity University Texas",
                "value":"(M) DIII"
              },
              {  
                "college":"Tufts University",
                "value":"(M) DIII"
              },
              {  
                "college":"U.S. Coast Guard Academy",
                "value":"(M) DIII"
              },
              {  
                "college":"U.S. Merchant Marine Academy",
                "value":"(M) DIII"
              },
              {  
                "college":"Union College (New York)",
                "value":"(M) DIII"
              },
              {  
                "college":"University of California, Santa Cruz",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Chicago",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Dallas",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Dubuque",
                "value":"(M) DIII"
              },
              {  
                "college":"University of La Verne",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Maine, Farmington",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Mary Hardin-Baylor",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Mary Washington",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Massachusetts, Boston",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Massachusetts, Dartmouth",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Minnesota, Morris",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Mount Union",
                "value":"(M) DIII"
              },
              {  
                "college":"University of New England",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Pittsburgh, Bradford",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Pittsburgh, Greensburg",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Portland",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Puget Sound",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Redlands",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Rochester",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Scranton",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Southern Maine",
                "value":"(M) DIII"
              },
              {  
                "college":"University of St. Thomas (Minnesota)",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Texas at Dallas",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Texas at Tyler",
                "value":"(M) DIII"
              },
              {  
                "college":"University of the Ozarks",
                "value":"(M) DIII"
              },
              {  
                "college":"University of the South",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, Eau Claire",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, La Crosse",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, Oshkosh",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, Platteville",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, River Falls",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, Stevens Point",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, Stout",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, Superior",
                "value":"(M) DIII"
              },
              {  
                "college":"University of Wisconsin, Whitewater",
                "value":"(M) DIII"
              },
              {  
                "college":"Ursinus College",
                "value":"(M) DIII"
              },
              {  
                "college":"Utica College",
                "value":"(M) DIII"
              },
              {  
                "college":"Vassar College",
                "value":"(M) DIII"
              },
              {  
                "college":"Virginia Wesleyan College",
                "value":"(M) DIII"
              },
              {  
                "college":"Wabash College",
                "value":"(M) DIII"
              },
              {  
                "college":"Washington Adventist University",
                "value":"(M) DIII"
              },
              {  
                "college":"Washington and Jefferson College",
                "value":"(M) DIII"
              },
              {  
                "college":"Washington and Lee University",
                "value":"(M) DIII"
              },
              {  
                "college":"Washington College Maryland",
                "value":"(M) DIII"
              },
              {  
                "college":"Washington University Missouri",
                "value":"(M) DIII"
              },
              {  
                "college":"Waynesburg University",
                "value":"(M) DIII"
              },
              {  
                "college":"Webster University",
                "value":"(M) DIII"
              },
              {  
                "college":"Wells College",
                "value":"(M) DIII"
              },
              {  
                "college":"Wentworth Institute of Technology",
                "value":"(M) DIII"
              },
              {  
                "college":"Wesley College",
                "value":"(M) DIII"
              },
              {  
                "college":"Wesleyan University",
                "value":"(M) DIII"
              },
              {  
                "college":"Western Connecticut State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Western New England College",
                "value":"(M) DIII"
              },
              {  
                "college":"Westfield State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Westminster College",
                "value":"(M) DIII"
              },
              {  
                "college":"Westminster College Missouri",
                "value":"(M) DIII"
              },
              {  
                "college":"Wheaton College Illinois",
                "value":"(M) DIII"
              },
              {  
                "college":"Wheaton College Massachusetts",
                "value":"(M) DIII"
              },
              {  
                "college":"Wheelock College",
                "value":"(M) DIII"
              },
              {  
                "college":"Whitman College",
                "value":"(M) DIII"
              },
              {  
                "college":"Whittier College",
                "value":"(M) DIII"
              },
              {  
                "college":"Whitworth University",
                "value":"(M) DIII"
              },
              {  
                "college":"Widener University",
                "value":"(M) DIII"
              },
              {  
                "college":"Wilkes University",
                "value":"(M) DIII"
              },
              {  
                "college":"Willamette University",
                "value":"(M) DIII"
              },
              {  
                "college":"William Paterson University of New Jersey",
                "value":"(M) DIII"
              },
              {  
                "college":"Williams College",
                "value":"(M) DIII"
              },
              {  
                "college":"Wilmington College",
                "value":"(M) DIII"
              },
              {  
                "college":"Wisconsin Lutheran College",
                "value":"(M) DIII"
              },
              {  
                "college":"Wittenberg University",
                "value":"(M) DIII"
              },
              {  
                "college":"Worcester Polytechnic Institute",
                "value":"(M) DIII"
              },
              {  
                "college":"Worcester State University",
                "value":"(M) DIII"
              },
              {  
                "college":"Yeshiva University",
                "value":"(M) DIII"
              },
              {  
                "college":"York College (New York)",
                "value":"(M) DIII"
              },
              {  
                "college":"York College (Pennsylvania)",
                "value":"(M) DIII"
              },
              {  
                "college":"Allen University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Arizona Christian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Auburn University Montgomery",
                "value":"(M) NAIA"
              },
              {  
                "college":"Avila University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Bacone College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Baker University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Benedictine College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Bethel University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Biola University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Blue Mountain College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Brewton-Parker College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Campbellsville University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Carroll College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Central Baptist College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Central Methodist University",
                "value":"(M) NAIA"
              },
              {  
                "college":"College of Coastal Georgia",
                "value":"(M) NAIA"
              },
              {  
                "college":"Columbia College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Culver-Stockton College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Cumberland University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Dalton State College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Dillard University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Edward Waters College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Evangel University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Faulkner University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Fisk University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Freed-Hardeman University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Georgetown College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Graceland University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Grand View University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Hannibal-LaGrange University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Harris-Stowe State University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Hope International University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Huston-Tillotson University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Jarvis Christian College",
                "value":"(M) NAIA"
              },
              {  
                "college":"John Brown University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Langston University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Lewis-Clark State College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Life University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Lindenwood University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Lindsey Wilson College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Louisiana State University Alexandria",
                "value":"(M) NAIA"
              },
              {  
                "college":"Louisiana State University Shreveport",
                "value":"(M) NAIA"
              },
              {  
                "college":"Loyola University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Lyon College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Martin Methodist College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Menlo College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Mid-America Christian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"MidAmerica Nazarene University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Middle Georgia State College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Missouri Baptist University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Missouri Valley College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Montana State University-Northern",
                "value":"(M) NAIA"
              },
              {  
                "college":"Montana Tech of the Univ of Montana",
                "value":"(M) NAIA"
              },
              {  
                "college":"Morris College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Oklahoma City University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Our Lady of the Lake University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Park University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Paul Quinn College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Peru State College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Philander Smith College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Rocky Mountain College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Saint Gregory's University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Saint Louis College of Pharmacy",
                "value":"(M) NAIA"
              },
              {  
                "college":"San Diego Christian College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Shawnee State University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Southern University at New Orleans",
                "value":"(M) NAIA"
              },
              {  
                "college":"Southwestern Assemblies of God Univ",
                "value":"(M) NAIA"
              },
              {  
                "college":"Southwestern Christian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"St. Catharine College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Talladega College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Texas College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Texas Wesleyan University",
                "value":"(M) NAIA"
              },
              {  
                "college":"The Master's College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Tougaloo College",
                "value":"(M) NAIA"
              },
              {  
                "college":"University of Great Falls",
                "value":"(M) NAIA"
              },
              {  
                "college":"University of Mobile",
                "value":"(M) NAIA"
              },
              {  
                "college":"University of Montana-Western",
                "value":"(M) NAIA"
              },
              {  
                "college":"University of Pikeville",
                "value":"(M) NAIA"
              },
              {  
                "college":"University of Science and Arts of Oklahoma",
                "value":"(M) NAIA"
              },
              {  
                "college":"University of St. Thomas Houston",
                "value":"(M) NAIA"
              },
              {  
                "college":"University of the Cumberlands",
                "value":"(M) NAIA"
              },
              {  
                "college":"University of the Southwest",
                "value":"(M) NAIA"
              },
              {  
                "college":"Vanguard University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Voorhees College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Washington Adventist University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Wayland Baptist University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Westmont College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Wiley College",
                "value":"(M) NAIA"
              },
              {  
                "college":"William Carey University",
                "value":"(M) NAIA"
              },
              {  
                "college":"William Jessup University",
                "value":"(M) NAIA"
              },
              {  
                "college":"William Penn University",
                "value":"(M) NAIA"
              },
              {  
                "college":"William Woods University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Williams Baptist College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Xavier University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Alice Lloyd College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Aquinas College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Asbury University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Ashford University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Ave Maria University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Bellevue University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Benedictine University at Mesa",
                "value":"(M) NAIA"
              },
              {  
                "college":"Bethany College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Bethel College - Indiana",
                "value":"(M) NAIA"
              },
              {  
                "college":"Bethel College - Kansas",
                "value":"(M) NAIA"
              },
              {  
                "college":"Bluefield College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Brescia University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Briar Cliff University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Bryan College",
                "value":"(M) NAIA"
              },
              {  
                "college":"California State University-Maritime",
                "value":"(M) NAIA"
              },
              {  
                "college":"California, University of, Merced",
                "value":"(M) NAIA"
              },
              {  
                "college":"Calumet College of St. Joseph",
                "value":"(M) NAIA"
              },
              {  
                "college":"Cardinal Stritch University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Carlow University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Central Christian College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Cincinnati Christian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Clarke University",
                "value":"(M) NAIA"
              },
              {  
                "college":"College of the Ozarks",
                "value":"(M) NAIA"
              },
              {  
                "college":"Concordia University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Concordia University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Corban University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Cornerstone University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Dakota State University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Dakota Wesleyan University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Davenport University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Dickinson State University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Doane College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Dordt College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Eastern Oregon University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Embry-Riddle Aeronautical University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Evergreen State College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Fisher College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Florida Memorial University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Friends University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Goshen College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Governors State University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Grace College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Haskell Indian Nations University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Hastings College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Holy Cross College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Huntington University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Indiana Tech",
                "value":"(M) NAIA"
              },
              {  
                "college":"Indiana University East",
                "value":"(M) NAIA"
              },
              {  
                "college":"Indiana University Kokomo",
                "value":"(M) NAIA"
              },
              {  
                "college":"Indiana University Northwest",
                "value":"(M) NAIA"
              },
              {  
                "college":"Indiana University Southeast",
                "value":"(M) NAIA"
              },
              {  
                "college":"Indiana University-South Bend",
                "value":"(M) NAIA"
              },
              {  
                "college":"Indiana Wesleyan University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Johnson & Wales University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Johnson & Wales University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Judson University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Kansas Wesleyan University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Keiser University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Kentucky Christian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"La Sierra University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Lawrence Technological University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Lincoln Christian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Lourdes University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Madonna University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Marian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Marygrove College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Mayville State University",
                "value":"(M) NAIA"
              },
              {  
                "college":"McPherson College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Midland University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Milligan College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Montreat College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Morningside College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Mount Marty College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Mount Mercy University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Mount Vernon Nazarene University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Multnomah University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Nebraska Wesleyan University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Northern New Mexico College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Northwest Christian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Northwest University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Northwestern College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Ohio Christian University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Oklahoma Wesleyan University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Olivet Nazarene University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Oregon Institute of Technology",
                "value":"(M) NAIA"
              },
              {  
                "college":"Ottawa University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Pacific Union College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Point Park University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Point University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Presentation College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Purdue University Calumet",
                "value":"(M) NAIA"
              },
              {  
                "college":"Purdue University-North Central",
                "value":"(M) NAIA"
              },
              {  
                "college":"Reinhardt University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Robert Morris University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Rochester College",
                "value":"(M) NAIA"
              },
              {  
                "college":"Roosevelt University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Saint Xavier University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Siena Heights University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Simpson University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Southeastern University",
                "value":"(M) NAIA"
              },
              {  
                "college":"Alabama Southern Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Albany Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Allegany College of Maryland",
                "value":"(M) JUCO"
              },
              {  
                "college":"Allen County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Alpena Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Ancilla College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Angelina College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Anne Arundel Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Anoka-Ramsey Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Arizona Western College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Arkansas Baptist College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Arkansas State University Mid-South",
                "value":"(M) JUCO"
              },
              {  
                "college":"ASA College",
                "value":"(M) JUCO"
              },
              {  
                "college":"ASA College Miami",
                "value":"(M) JUCO"
              },
              {  
                "college":"Atlanta Metropolitan College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Atlantic Cape Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Baltimore City Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Barton Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Baton Rouge Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bergen Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bishop State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bismarck State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Black Hawk College-East",
                "value":"(M) JUCO"
              },
              {  
                "college":"Black Hawk College-Moline",
                "value":"(M) JUCO"
              },
              {  
                "college":"Blinn College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Borough of Manhattan Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bossier Parish Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bristol Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bronx Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Brookdale Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Brookhaven College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Broward College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Brown Mackie College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Brunswick Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bryant & Stratton College - VA",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bucks County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Bunker Hill Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Butler Community College - KS",
                "value":"(M) JUCO"
              },
              {  
                "college":"Butler County Community College - PA",
                "value":"(M) JUCO"
              },
              {  
                "college":"Caldwell Community College & Technical Institute",
                "value":"(M) JUCO"
              },
              {  
                "college":"Camden County College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cape Fear Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Carl Albert State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Carl Sandburg College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Casper College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Catawba Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cayuga Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"CC of Allegheny County-Allegheny",
                "value":"(M) JUCO"
              },
              {  
                "college":"CC of Allegheny County-Boyce",
                "value":"(M) JUCO"
              },
              {  
                "college":"CCBC Catonsville",
                "value":"(M) JUCO"
              },
              {  
                "college":"CCBC Dundalk",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cecil College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cedar Valley College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Central Arizona College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Central Carolina Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Central Community College-Columbus",
                "value":"(M) JUCO"
              },
              {  
                "college":"Central Georgia Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Central Lakes College-Brainerd",
                "value":"(M) JUCO"
              },
              {  
                "college":"Central Wyoming College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Chandler-Gilbert Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Chattahoochee Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Chattahoochee Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Chattanooga State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Chesapeake College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Chipola College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cincinnati State Technical & Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Clarendon College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Clark State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cleveland State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Clinton Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Clinton Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cloud County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Coahoma Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Coastal Bend College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cochise College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Coffeyville Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Colby Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"College of Central Florida",
                "value":"(M) JUCO"
              },
              {  
                "college":"College of DuPage",
                "value":"(M) JUCO"
              },
              {  
                "college":"College of Lake County",
                "value":"(M) JUCO"
              },
              {  
                "college":"College of Southern Idaho",
                "value":"(M) JUCO"
              },
              {  
                "college":"College of Southern Maryland",
                "value":"(M) JUCO"
              },
              {  
                "college":"Collin County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Colorado Northwestern Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Columbia State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Columbia-Greene Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Columbus State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Community College of Beaver County",
                "value":"(M) JUCO"
              },
              {  
                "college":"Community College of Philadelphia",
                "value":"(M) JUCO"
              },
              {  
                "college":"Community College of Rhode Island",
                "value":"(M) JUCO"
              },
              {  
                "college":"Connors State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Copiah-Lincoln Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Corning Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"County College of Morris",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cowley County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cumberland County College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Cuyahoga Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Dakota College at Bottineau",
                "value":"(M) JUCO"
              },
              {  
                "college":"Dakota County Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Danville Area Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Davidson County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Dawson Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Daytona State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Dean College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Delaware County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Delaware Technical Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Delgado Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Delta College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Denmark Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Des Moines Area Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Dodge City Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Dutchess Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Dyersburg State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"East Central Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"East Georgia State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"East Mississippi Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Eastern Arizona College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Eastern Florida State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Eastern Oklahoma State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Eastern Wyoming College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Eastfield College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Edison Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Elgin Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Ellsworth Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Enterprise State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Erie Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Essex County College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Faulkner State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Finger Lakes Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Florida Southwestern State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Florida State College at Jacksonville",
                "value":"(M) JUCO"
              },
              {  
                "college":"Fond du Lac Tribal & Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Fort Scott Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Frank Phillips College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Frederick Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Fulton-Montgomery Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Gadsden State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Garden City Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Garrett College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Gateway Community College - CT",
                "value":"(M) JUCO"
              },
              {  
                "college":"Genesee Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Georgia Highlands College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Georgia Military College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Georgia Northwestern Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Gillette College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Glen Oaks Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Glendale Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Globe Institute of Technology",
                "value":"(M) JUCO"
              },
              {  
                "college":"Gogebic Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Gordon State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Grand Rapids Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Guilford Technical Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Gulf Coast State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hagerstown Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Harcum College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Harford Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Harper College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Harrisburg Area Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Harry S Truman College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Henry Ford College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Herkimer County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hesston College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hibbing Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Highland Community College - Illinois",
                "value":"(M) JUCO"
              },
              {  
                "college":"Highland Community College - Kansas",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hill College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hillsborough Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hinds Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hocking College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Holmes Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Holyoke Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hostos Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Howard College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Howard Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hudson Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Hutchinson Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Illinois Central College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Illinois Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Independence Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Indian Hills Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Indian River State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Iowa Central Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Iowa Lakes Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Iowa Western Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Itasca Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Itawamba Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Jackson College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Jackson State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Jacksonville College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Jamestown Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Jamestown Community College-Cattaraugus",
                "value":"(M) JUCO"
              },
              {  
                "college":"Jefferson Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Jefferson Davis Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"John A. Logan College",
                "value":"(M) JUCO"
              },
              {  
                "college":"John Wood Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Johnson College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Johnson County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Johnston Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Joliet Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Jones County Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kalamazoo Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kankakee Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kansas City Kansas Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kaskaskia College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kellogg Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kennedy-King College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kilgore College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kingsborough Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kirkwood Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Kishwaukee College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Labette Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lackawanna College",
                "value":"(M) JUCO"
              },
              {  
                "college":"LaGuardia Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lake Land College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lake Michigan College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lake Region State College - ND",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lakeland Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lamar Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lamar State College - Port Arthur",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lansing Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Laramie County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lawson State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lee College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lehigh Carbon Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lenoir Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lewis & Clark Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lincoln College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lincoln Land Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lincoln Trail College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Little Big Horn College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Little Priest Tribal College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lorain County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Louisburg College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Lurleen B. Wallace Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Luzerne County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Macomb Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Madison College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Malcolm X College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Manor College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Marion Military Institute",
                "value":"(M) JUCO"
              },
              {  
                "college":"Marshalltown Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Massasoit Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"MassBay Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"MCC-Penn Valley",
                "value":"(M) JUCO"
              },
              {  
                "college":"McCook Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"McHenry County College",
                "value":"(M) JUCO"
              },
              {  
                "college":"McLennan Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mercer County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mercyhurst North East",
                "value":"(M) JUCO"
              },
              {  
                "college":"Meridian Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mesa Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mesabi Range College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Miami Dade College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mid Michigan Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Middlesex County College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Midland College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Miles Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Milwaukee Area Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mineral Area College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Minnesota State Community & Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Minnesota West Community & Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mississippi Delta Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mississippi Gulf Coast Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Missouri State University - West Plains",
                "value":"(M) JUCO"
              },
              {  
                "college":"Moberly Area Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mohawk Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Monroe College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Monroe Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Montgomery College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Montgomery County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Moraine Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Morton College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Motlow State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mott Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Mountain View College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Murray State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Muskegon Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Nassau Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Navarro College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Neosho County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"New Mexico Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"New Mexico Military Institute",
                "value":"(M) JUCO"
              },
              {  
                "college":"New River Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Niagara County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"North Arkansas College",
                "value":"(M) JUCO"
              },
              {  
                "college":"North Central Missouri College",
                "value":"(M) JUCO"
              },
              {  
                "college":"North Country Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"North Dakota State College of Science",
                "value":"(M) JUCO"
              },
              {  
                "college":"North Idaho College",
                "value":"(M) JUCO"
              },
              {  
                "college":"North Iowa Area Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"North Lake College",
                "value":"(M) JUCO"
              },
              {  
                "college":"North Platte Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northampton Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northeast Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northeast Mississippi Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northeastern Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northeastern Oklahoma A&M College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northern Essex Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northern Oklahoma College-Enid",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northern Oklahoma College-Tonkawa",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northern Virginia Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northland Community & Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northwest College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northwest Florida State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northwest Kansas Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Northwest Mississippi Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Oakland Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Oakton Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Ocean County College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Odessa College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Olive-Harvey College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Olney Central College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Onondaga Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Orange County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Otero Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Owens Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Oxford College of Emory University",
                "value":"(M) JUCO"
              },
              {  
                "college":"Palm Beach State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Panola College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Paris Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Parkland College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Pasco-Hernando State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Passaic County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Patrick Henry Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Pearl River Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Pennsylvania Highlands Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Pensacola State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Phoenix College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Pima Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Pitt Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Polk State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Potomac State College of WVU",
                "value":"(M) JUCO"
              },
              {  
                "college":"Prairie State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Pratt Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Prince George's Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Queensborough Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Quinsigamond Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Rainy River Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Ranger College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Raritan Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Redlands Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Rend Lake College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Richard Bland College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Richard J. Daley College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Richland College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Ridgewater College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Riverland Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Roane State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Rochester Community and Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Rock Valley College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Rockland Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Rowan College at Burlington County",
                "value":"(M) JUCO"
              },
              {  
                "college":"Rowan College at Gloucester County",
                "value":"(M) JUCO"
              },
              {  
                "college":"Roxbury Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Salt Lake Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"San Jacinto College-Central",
                "value":"(M) JUCO"
              },
              {  
                "college":"Sandhills Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Santa Fe College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Sauk Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Schenectady County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Schoolcraft College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Scottsdale Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Seminole State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Seward County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Shawnee Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Shelton State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Sheridan College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Sinclair Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Snead State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Snow College",
                "value":"(M) JUCO"
              },
              {  
                "college":"South Georgia State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"South Georgia Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"South Mountain Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"South Plains College",
                "value":"(M) JUCO"
              },
              {  
                "college":"South Suburban College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southeast Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southeastern Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southeastern Illinois College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southern Crescent Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southern Union State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southern University-Shreveport",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southwest Mississippi Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southwest Tennessee Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southwestern Christian College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southwestern Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Southwestern Illinois College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Spartanburg Methodist College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Springfield Technical Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"St. Clair County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"St. Cloud Technical  & Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"St. Louis Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"St. Petersburg College",
                "value":"(M) JUCO"
              },
              {  
                "college":"State College of Florida, Manatee-Sarasota",
                "value":"(M) JUCO"
              },
              {  
                "college":"State Fair Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Suffolk County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Sullivan County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"SUNY Adirondack",
                "value":"(M) JUCO"
              },
              {  
                "college":"SUNY Broome Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Sussex County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Tallahassee Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Temple College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Thaddeus Stevens College of Technology",
                "value":"(M) JUCO"
              },
              {  
                "college":"Three Rivers Community College - MO",
                "value":"(M) JUCO"
              },
              {  
                "college":"Tohono O'odham Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Tompkins Cortland Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Trinidad State Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Trinity Valley Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Triton College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Tyler Junior College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Ulster County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Union County College",
                "value":"(M) JUCO"
              },
              {  
                "college":"United Tribes Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"University of Connecticut at Avery Point",
                "value":"(M) JUCO"
              },
              {  
                "college":"USC Salkehatchie",
                "value":"(M) JUCO"
              },
              {  
                "college":"Utah State University Eastern",
                "value":"(M) JUCO"
              },
              {  
                "college":"Valley Forge Military College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Vance-Granville Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Vermilion Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Vincennes University",
                "value":"(M) JUCO"
              },
              {  
                "college":"Volunteer State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Wabash Valley College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Wake Technical Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Wallace Community College-Selma",
                "value":"(M) JUCO"
              },
              {  
                "college":"Wallace State Community College-Hanceville",
                "value":"(M) JUCO"
              },
              {  
                "college":"Walters State Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Waubonsee Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Wayne County Community College District",
                "value":"(M) JUCO"
              },
              {  
                "college":"Weatherford College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Wentworth Military Academy",
                "value":"(M) JUCO"
              },
              {  
                "college":"West Georgia Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Westchester Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Western Nebraska Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Western Oklahoma State College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Western Technical College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Western Texas College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Western Wyoming Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Westmoreland County Community College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Wilbur Wright College",
                "value":"(M) JUCO"
              },
              {  
                "college":"Williston State College",
                "value":"(M) JUCO"
              }
            ];
             
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
              },
              coachInfo:{
                  25:{ ref:'name',           display: 'GPA'               },
                  26:{ ref:'act',           display: 'ACT'               },
                  27:{ ref:'classRank',     display: 'Class Rank'        },
              },
              textFilterLetter:{
                  28:{ ref:'textFilterLetter',           display: 'Search'  },
              },
              textFilterText:{
                  29:{ ref:'textFilterText',           display: 'Search'  },
              },
              textFilterEmail:{
                  30:{ ref:'textFilterEmail',           display: 'Search'  },
              },
              textFilterCall:{
                  31:{ ref:'textFilterCall',           display: 'Search'  },
              },
              textFilterCamp:{
                  32:{ ref:'textFilterCamp',           display: 'Search'  },
              },
              textFilterWorkout:{
                  33:{ ref:'textFilterWorkout',           display: 'Search'  },
              },
              textFilterCampus:{
                  34:{ ref:'textFilterCampus',           display: 'Search'  },
              },
              textFilterOffered:{
                  35:{ ref:'textFilterOffered',           display: 'Search'  },
              },

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
							<select id="gender" style={{margin:'20px', width:'85%'}} onChange={ this.onChangeGender.bind(this)} value={this.state.gender} id="gender" name="gender" className="form-control standalone" type="select" >
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

               {this.mappedInputs(genInfo.textFilterLetter)}
			<div  style={ { paddingBottom : '5px' }} className="letter-attributes background-light-gray">
                <ul style={ {
                        listStyle:'none', 
                        height: '200px',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        paddingBottom : '5px'
                }}>
                    {this.mappedColleges(recruitingInterest, 'textFilterLetter', this)}
                </ul>
			</div> 
			  <button className="btn btn-default btn-large" onClick={this.submitUpdate.bind(this,event, 'textFilterLetter')}>Submit</button>            
		</div>

        <div id="text-update" className="recruit-update-container text-center">
			  <u><h3>Recruiting Text</h3></u>
               {this.mappedInputs(genInfo.textFilterText)}
			<div  style={ { paddingBottom : '5px' }} className="letter-attributes background-light-gray">
                <ul style={ {
                        listStyle:'none', 
                        height: '200px',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        paddingBottom : '5px'
                }}>
                    {this.mappedColleges(recruitingInterest, 'textFilterText', this)}
                </ul>
			</div> 
			  <button className="btn btn-default btn-large" onClick={this.submitUpdate.bind(this,event, 'textFilterText')}>Submit</button>            
        </div>
        
        <div id="email-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Email</h3></u>
               {this.mappedInputs(genInfo.textFilterEmail)}
			<div  style={ { paddingBottom : '5px' }} className="letter-attributes background-light-gray">
                <ul style={ {
                        listStyle:'none', 
                        height: '200px',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        paddingBottom : '5px'
                }}>
                    {this.mappedColleges(recruitingInterest,'textFilterEmail', this)}
                </ul>
			</div> 
          <button className="btn btn-default btn-large" onClick={this.submitUpdate.bind(this, event,'textFilterEmail')}>Submit</button>           
        </div>
        
        <div id="call-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Phone Call</h3></u>
               {this.mappedInputs(genInfo.textFilterCall)}
			<div  style={ { paddingBottom : '5px' }} className="letter-attributes background-light-gray">
                <ul style={ {
                        listStyle:'none', 
                        height: '200px',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        paddingBottom : '5px'
                }}>
                    {this.mappedColleges(recruitingInterest,'textFilterCall', this)}
                </ul>
			</div> 
          <button className="btn btn-default btn-large" onClick={this.submitUpdate.bind(this,event,'textFilterCall')}>Submit</button>      
        </div>
        
        <div id="camp-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Camp</h3></u>
               {this.mappedInputs(genInfo.textFilterCamp)}
			<div  style={ { paddingBottom : '5px' }} className="letter-attributes background-light-gray">
                <ul style={ {
                        listStyle:'none', 
                        height: '200px',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        paddingBottom : '5px'
                }}>
                    {this.mappedColleges(recruitingInterest, 'textFilterCamp',  this)}
                </ul>
			</div> 
          <button className="btn btn-default btn-large" onClick={this.submitUpdate.bind(this,event,'textFilterCamp')}>Submit</button>        
        </div>
        
        
         <div id="workout-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Workout</h3></u>
               {this.mappedInputs(genInfo.textFilterWorkout)}
			<div  style={ { paddingBottom : '5px' }} className="letter-attributes background-light-gray">
                <ul style={ {
                        listStyle:'none', 
                        height: '200px',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        paddingBottom : '5px'
                }}>
                    {this.mappedColleges(recruitingInterest,'textFilterWorkout', this)}
                </ul>
			</div> 
          <button className="btn btn-default btn-large" onClick={this.submitUpdate.bind(this,event,'textFilterWorkout')}>Submit</button>      
        </div>


         <div id="campus-update" className="recruit-update-container text-center">
          <u><h3>Campus Visit</h3></u>
               {this.mappedInputs(genInfo.textFilterCampus)}
			<div  style={ { paddingBottom : '5px' }} className="letter-attributes background-light-gray">
                <ul style={ {
                        listStyle:'none', 
                        height: '200px',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        paddingBottom : '5px'
                }}>
                    {this.mappedColleges(recruitingInterest, this)}
                </ul>
			</div> 
          <button className="btn btn-default btn-large" onClick={this.submitUpdate.bind(this,event,'textFilterCampus')}>Submit</button>        
        </div>
     

         <div id="offered-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Offer</h3></u>
               {this.mappedInputs(genInfo.textFilterOffered)}
			<div  style={ { paddingBottom : '5px' }} className="letter-attributes background-light-gray">
                <ul style={ {
                        listStyle:'none', 
                        height: '200px',
                        overflow: 'auto',
                        overflowY: 'scroll',
                        paddingBottom : '5px'
                }}>
                    {this.mappedColleges(recruitingInterest, this)}
                </ul>
			</div> 
          <button className="btn btn-default btn-large" onClick={this.submitUpdate.bind(this,event,'textFilterOffered')}>Submit</button>        
        </div>

		<section id="coach-general-info" className="page">
       	<form onSubmit={ this.handleSubmit }>
    		<div className="container">
    			<div className="row">
    				<div className="col-sm-4">
    					<div className="timeline-image1 background-gray">
    						<h2>1</h2>
    					</div>
    					<h5 className="timeline-heading1">CREATE ACCOUNT</h5>
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
    				<div className="col-md-offset-4 col-md-4 input-box">
    					<div className="input-container program-info">
    						<h4>Coach Information</h4>
    						<div>Name<input onChange={this.handleUserInput} value={ this.state.ccNumber } /></div>
          					<div>Position<input onChange={this.handleUserInput} value={ this.state.ccCode } /></div>
          					<div>Email<input onChange={this.handleUserInput} value={ this.state.ccExpiration } /></div>
          					<div>Phone Number<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>Head Coach Email<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<div>Head Coach Phone<input onChange={this.handleUserInput} value={ this.state.ccName } /></div>
          					<select id="college-team-gender" style={{margin:'20px', width:'85%'}} name="price-plan" className="form-control standalone" type="select" placeholder="select">
								<option value="none" defaultValue>Select Price Plan</option>
								<option value="Mens Program">Mens Program</option>
								<option value="Womens Program">Womens Program</option>
							</select>
    					</div>
    				</div>
    			</div>
    	  	</div>
          	<button onClick={this.handleButtonClick} className="btn btn-default btn-large center-button">Next</button>
    	</form>
    </section>

        </div>
    );
  }
}
