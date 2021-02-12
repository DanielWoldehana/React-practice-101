import React, { PureComponent }from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state
  // }

  // componentWillReceiveProps(props){
    
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate')
  //   if(nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked) {
  //     return true;
  //   } else {
  //     return false
  //   }
  // };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return { message: 'snapsshot'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentdDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render () {
    console.log('[Persons.js] rendering...')
  return this.props.persons.map((p, index) => {
        return <Person 
        name={p.name}
        age={p.age}
        key={p.id}
        changed={(event) => this.props.changed(event, p.id)}
        clicked={() => this.props.clicked(index)}
        />
      })
    }
  }

export default Persons