import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Eric", age: 23},
      { name: 'Eric', age: 22}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () =>{
    //console.log('Was clicked!');
    // Don't do this this.state.persons[0].name = 'Eric Xu';
    this.setState({ //only works for class Components that extend component
      persons: [
        { name: "Eric Xu", age: 23},
        { name: 'Eric Xin', age: 22}
      ]
    } );
  }

  //only way to change dom is to change props and state

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: rice</Person>
        

        </div>
      );
    // compiles to this: return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
