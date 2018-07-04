import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Username from './components/username';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Username />
      </div>
    );
  }
}

export default App;
