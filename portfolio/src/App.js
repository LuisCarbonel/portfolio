import React from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import Navigation from './components/header/Navigation';
import Home from './components/main/Home';
import Projects from './components/main/Projects';

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
        <main>
          <Route path="/" render={ ()=> <Home />}/>
          <Route path="/projects" render={ ()=> <Projects />}/>
        </main>
        <footer>
           
        </footer>
      </div>
    );
  }
}

export default App;
