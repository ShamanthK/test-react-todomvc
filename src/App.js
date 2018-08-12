import React, { Component } from 'react';
import Title from './Components/Title';
import ToDoMain from './Components/ToDoMain';

import './styles/app.css';


import './styles/base.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title />
      <ToDoMain />
      </div>
    );
  }
}

export default App;
