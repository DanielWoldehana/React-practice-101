import React, { Component }from 'react';
import classes from './Person.module.css'


class Person extends Component{
    render () {
        console.log('[Person.js] rendering....')
    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            <p>Hi my name is {this.props.name} and I am {this.props.age} years old</p>
            <input 
            style={{width: '40%'}}
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}/>
            <br />
            <button 
            className="btn"
            onClick={this.props.clicked}
            >delete</button>
        </div>
    );
};

    }
    
export default Person;