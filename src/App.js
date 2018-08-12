import React, { Component } from 'react';
import Title from './Components/Title';
import ToDoFrom from './Components/ToDoFrom';
import './styles/app.css';


import './styles/base.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title />
      <ToDoFrom />
      </div>
    );
  }
}

export default App;
