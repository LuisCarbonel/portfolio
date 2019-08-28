import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Navigation from './components/header/Navigation';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <Navigation/>
      </div>
    );
  }
}

export default App;
