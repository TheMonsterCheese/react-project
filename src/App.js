import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Eric", age: 23},
      { name: 'Kevin', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // Don't do this this.state.persons[0].name = 'Eric Xu';
    this.setState({ //only works for class Components that extend component
      persons: [
        { name: newName, age: 23},
        { name: 'Kevin Xu', age: 26}
      ]
    } );
  }

  //only way to change dom is to change props and state

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Eric', age: 23},
        { name: event.target.value, age: 26}
      ]
    } );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Eric Xu')}> Switch Name</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Eric!!!')}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>My hobbies: gg
          </Person>
          
        </div>
      );
    // compiles to this: return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
