import React from 'react'
import './footerStyle.css'
class Contact extends React.Component {
  constructor() {
    super()

  }






  render() {
    return (
      <div className="contact-section" id="contact">
        <a href='#contact'></a>
        <div className="contact-title">
          Get In Touch
          <span className="line8"></span>
          <span className="line9"></span>
        </div>
        <div className="contact-links">
          <a href="mailto:luis.carbonel.gk@hotmail.com?Subject=Hello%20there!%20How%20are%20you%20feeling%20today?" target="_top">
          <p> Luis.carbonel.gk@hotmail.com </p>
          </a>
          <a href="https://github.com/LuisCarbonel" target="_top">
          <p> Github </p>
          </a>
          <a href="https://www.linkedin.com/in/luis-carbonel/" target="_top">
          <p> LinkedIn </p>
          </a>
        </div>
      </div>
    )
  }
}

export default Contact