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
                    <li><a href="/">HOME</a></li>
                    <li><a href="#">ABOUT ME</a></li>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="#">CONTACT</a></li>
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