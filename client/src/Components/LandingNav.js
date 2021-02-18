import React from 'react'
import { Link} from "react-router-dom"
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import pic from './Images/logogrey-bird.png'
// import pic from './Logo1sn.png'


const LandingNav = () => {


  return (
    

<Navbar style={{ backgroundColor: 'black' }} variant="dark" expand="sm" >
        <Container>
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

          <Nav.Item><Link to="/Login" className="navBtn">Sign In</Link></Nav.Item>

          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

   
  )
}

export default LandingNav