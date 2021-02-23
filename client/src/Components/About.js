import React from 'react'
import { Modal, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import Displayer from './Displayer'
import LandingNav from './LandingNav'

import vid1 from './Vidoes/tunnel1.mp4'
import vid2 from './Vidoes/globe1.mp4'

// styling for About is in App.css

const About = () => {
  return (
    <>
      <div className="landingpageabout">
        <LandingNav />
        <Container className="landingContainer">
          <Modal.Dialog>
            <video src={vid1} controls autoPlay loop />
          </Modal.Dialog>

          <div className="aboutScrStyles">
            <h1>Turn your music into a visual!</h1>
            <h4>HummingBird makes it fast and easy to create your </h4>
            <h4>own custom visualizers..</h4>

            <Link
              to="/Login"
              className="loginbutton"
              style={{ color: 'white' }}
            >
              <button className="btn3">Create</button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default About
