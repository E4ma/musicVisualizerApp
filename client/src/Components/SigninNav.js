import React from 'react'
import { Link} from "react-router-dom"
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import pic from './Images/logogrey-bird.png'
import wave from './Images/navWave.svg'
// import pic from './Logo1sn.png'


const SigninNav = () => {


  return (
    
<Navbar className="landingNav" variant="dark" expand="sm" >
        <Container className="navContainer">
        <Navbar.Brand href="/About">
          {/* <img src={pic} alt={''} width={80} height={80} /> */}
          <img 
          src={pic} 
          alt={''} 
          height={'40'} 
          width={'45'} 
          className="d-inline-block"/>{' '}HUMMINGBIRD
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" >
          <Nav fill >

          <Nav.Item><Link to="/Signup" className="navBtn">Sign Up</Link></Nav.Item>

          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>


   
  )
}

export default SigninNav