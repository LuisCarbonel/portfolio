import React from 'react'
import './mainStyle.css'

class Home extends React.Component {
  constructor() {
    super()

  }






  render() {
    return (
      <div>
        <span className="welcome-name">LUIS CARBONEL</span>
        <span className="welcome-text">
          Hello there! Nice too meet you! I am a Front-End Web Developer from New York, Welcome to my portfolio!
        </span>
        <span className="line1"></span>
        <span className="line2"></span>
        <div className="avatar" />
      </div>
    )
  }
}

export default Home 