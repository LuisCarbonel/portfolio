import React from 'react'

class AboutMe extends React.Component {
  constructor() {
    super()

  }






  render() {
    return (
      <div className="about-section" id="about">
        <a href='#about'></a>
        <div className="about-title">
          About Me
          <span className="line6"></span>
          <span className="line7"></span>
        </div>
        <div className="aboutme">
          Hi there! My name is Luis Carbonel and I am a 24 years old front-end web developer. I am very friendly, honest and competitive.
          My main hobbies are playing online videogames, eating delicious food, playing with my dog Bamboo, traveling, chill with my friends, watching movies, series and memes.
          Also, now that I got involved in the amazing world of programming, I've been loving bringing to life my crazy ideas through coding, building innovative and helpful stuff, and learning more every day.
        </div>
        <div className="photo"></div>
      </div>
    )
  }
}

export default AboutMe