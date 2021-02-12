import React, { useState } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import pic from './Images/logogrey.png'
// import pic from './Logo1sn.png'

const Navigation = ({ onRouteChange }) => {

  function handleLogin(){

    return
  }
  //Navbar

  return (
    <>
      <Navbar style={{ backgroundColor: 'black' }} variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="/Home" style={{ fontSize: 23 }}>
          {/* <img src={pic} alt={''} width={80} height={80} /> */}
          <img src={pic} alt={''} height={'30%'} width={'30%'} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ fontSize: 23 }}>
            <Nav.Link onClick={() => onRouteChange('About')} style={{ color: 'white' }}>
              About
              </Nav.Link>
            <Nav.Link onClick={() => onRouteChange('TemplatesPage')} style={{ color: 'white' }}>
              Templates
            </Nav.Link>
            <Nav.Link>My Account</Nav.Link>
            <Button  variant="outline-secondary" size='lg'>
              Sign In
            </Button>
            <Button  variant="outline-info" size='lg'>
              Sign Up
            </Button> 
            {/* <ul>
            <li><Link to="/Home" style={{ color: 'white' }}>Home</Link></li>
              <li><Link to="/About" style={{ color: 'white' }}>About</Link></li>
              <li><Link to="/Login" style={{ color: 'white' }}>Sign In</Link></li>
              <li><Link to="/Signup" style={{ color: 'white' }}>Sign Up</Link></li>
            </ul> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation