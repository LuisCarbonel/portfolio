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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
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