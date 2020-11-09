import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
              { name: "Eric", age: 23},
              { name: 'Eric', age: 22}
        ],
        otherState: 'some other value'
    });
    console.log(personsState);

    const switchNameHandler = () => {
      
        setPersonsState({ //only works for class Components that extend component
          persons: [
            { name: "Eric Xu", age: 23},
            { name: 'Eric Xin', age: 22}
          ]
        } );
      };


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button onClick={switchNameHandler}> Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: rice</Person>  
        </div>
      );
    // compiles to this: return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};


export default App;
