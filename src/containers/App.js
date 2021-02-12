import React, { Component } from 'react';
// import Person from '../components/Persons/Person/Person'
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor')
    
  }

  state = {
    persons: [
      {id: "00", name: "Astu", age: 30},
      {id: "01", name: "Seni", age: 39},
      {id: "02", name: "Alem", age: 28},
      {id: "03", name: "Teddy", age: 27}      
    ],
    showPerson: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount')
  // }

  componentDidMount() {
    console.log('[App.js] ComponentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[App.js ] componentDidUpdate')
  }

  nameChangeHandler = (event, personIdx) => {
    let personIndex = this.state.persons.findIndex(p => {
      return p.id === personIdx
    })
    let person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    let persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })

  };


    togglePersonHandler = () => {
      this.setState(prevState => ({
        showPerson: !prevState.showPerson
      }))
    };


    deletePersonHandler = (personId) => {
      let persons = [...this.state.persons]
      persons.splice(personId, 1)

      this.setState({
        persons: persons
      })
    };

  render () {
    console.log('[App.js] render');

      let persons = null;
      if(this.state.showPerson) {
        persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            />
      };

      
    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({showCockpit: false})
        }}>
          clear Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPerson}
        personsLength={this.state.persons.length}
        clicked={this.togglePersonHandler}
        /> : null }
        {persons}
      </div>
    );
  };
};

export default App;