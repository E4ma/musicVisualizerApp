import React from 'react'
import { Nav, Modal, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom"
// import Displayer from './Displayer'
import Navigation from './Navigation'

import vid1 from "./Vidoes/tunnel1.mp4";
import vid2 from "./Vidoes/globe1.mp4";

// styling for About is in App.css

const About = () => {
    return (

        <div>
            <Navigation />
            <div>
                <br></br>
                <Modal.Dialog >
                    <video src={vid1}
                        controls autoPlay loop
                    />
                </Modal.Dialog>
            </div>

            <div>
                <Jumbotron className='aboutScrStyles' >
                    <h1>Turn your music into a visual!</h1>
                    <br></br>
                    <h4>HummingBird makes it fast and easy to create your </h4>
                    <h4>own custom visualizers..</h4>
                    <br></br>
                    <p>
                        <Nav>
                            <Nav.Item id="nav-item"><Link to="/Home" style={{ color: 'white' }}>
                                <button className="btn2">Create</button>
                            </Link></Nav.Item>
                        </Nav>
                    </p>
                </Jumbotron>
            </div >
        </div>

    )
}

export default About