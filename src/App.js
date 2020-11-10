import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: "asdf1", name: "Eric", age: 23},
      { id: "asdf2", name: 'Kevin', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; 
    //spread makes a copy ofth elements instead of being a reference to the object

    //const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  //only way to change dom is to change props and state

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person; 

    this.setState({persons: persons});
  }


togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      //use inline style to scope it to only one element
  };

  let persons = null;

  if(this.state.showPersons)
  {
    persons = (
    <div>

      {this.state.persons.map((person, index) => {
        return <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)} />;
      })}
      </div> )
  }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}> Toggle Persons</button>
        {persons} 
  
      </div>
      );
    // compiles to this: return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
