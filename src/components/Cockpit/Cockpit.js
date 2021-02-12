import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
      useEffect(() => {
        console.log('[Cockpit.js] usEffect')
        //http request ..... possible here
         setTimeout(() => {
          alert('Saved some date to the cloud')
        }, 1000)
        return() => {
          console.log('[Cockpit.js] useEffect cleanup work')
        }
      }, [])
      
      // you can us useEffect as many times as needed.

      useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () =>  {
          console.log('[Cockpit.js] useEffect cleanup work')
        }
      })

    const assignedClasses = []
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    

      if(props.personsLength <= 2) {
        assignedClasses.push(classes.red)
      }
      if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
      }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really Working</p>
            <button
            className={btnClass}
            onClick={props.clicked}
            >Toggle Names</button>
        </div>
    );
};

export default React.memo(Cockpit);