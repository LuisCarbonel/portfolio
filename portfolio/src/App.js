import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Navigation from './components/header/Navigation';
import Home from './components/main/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <heade>
        <Navigation />
        </heade>
        <body>
        <Home/>
        </body>
        <footer>
           
        </footer>
      </div>
    );
  }
}

export default App;
