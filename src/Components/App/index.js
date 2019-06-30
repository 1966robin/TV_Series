import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/Intro';
import 'whatwg-fetch';
import Series from '../../Containers/Series'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App title">TV Series List</h1>
        </header>
        <Intro message="Here your can find all of your most loved series"/>
        <Series/>
      </div>
    );
  }
}

export default App;
