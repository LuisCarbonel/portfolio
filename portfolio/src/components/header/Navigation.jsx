import React from 'react'
import './headerStyle.css'


class Navigation extends React.Component {
  constructor() {
    super();
  }



  render() {
    return (
      <div>
        <a href="/" className="name-icon">Luis Carbonel</a>
        <div className="menu-wrap">
          <input type="checkbox" class="toggler"/>
            <div className="hamburger"><div></div></div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#projects"> PROJECTS</a></li>
                    <li><a href="#about">ABOUT ME</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        )
      }
    
    }
    
export default Navigation