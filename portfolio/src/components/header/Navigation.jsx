import React from 'react'
import './headerStyle.css'


class Navigation extends React.Component {
  constructor() {
    super();
  }



  render() {
    return (
      <div>
        <a href="/" >Luis Carbonel</a>
        <div className="menu-wrap">
          <input type="checkbox" class="toggler"/>
            <div className="hamburger"><div></div></div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
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