import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './counterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
