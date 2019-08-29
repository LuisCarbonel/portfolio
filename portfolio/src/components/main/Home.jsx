import React from 'react'
import './mainStyle.css'
import Projects from './Projects';

class Home extends React.Component {
  constructor() {
    super()

  }






  render() {
    return (
      <>
        <div>
          <span className="welcome-name">LUIS CARBONEL</span>
          <span className="welcome-text">
            Hello there! Nice too meet you! I am a Front-End Web Developer from New York, Welcome to my portfolio!
        </span>
          <div className="border-letter">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            <span className="scroll-down">SCROLLDOWN</span>
          </div>
          <div className="avatar" />
        </div>
        <Projects/>
      </>
    )
  }
}

export default Home 