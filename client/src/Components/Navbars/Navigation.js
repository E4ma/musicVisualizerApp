import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import pic2 from './Logo2.png'

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn === true) {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
          <Navbar.Brand href="/Home">
            <img src={pic2} alt={''} width={80} height={80} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link onClick={() => onRouteChange('Profile')} >My Account</Nav.Link> */}
              <Nav.Link onClick={() => onRouteChange('TemplatesPage')}>
                Templates
              </Nav.Link>
            </Nav>
            <Button
              onClick={() => onRouteChange('signout')}
              variant="outline-info"
            >
              Signout
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  } else {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
          <Navbar.Brand href="/Home" style={{ fontSize: 23 }}>
            <img src={pic2} alt={''} width={80} height={80} />
            HummingBird
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ fontSize: 23 }}>
              <Nav.Link onClick={() => onRouteChange('About')}>About</Nav.Link>
              <Nav.Link onClick={() => onRouteChange('TemplatesPage')}>
                Templates
              </Nav.Link>
              <Nav.Link>My Account</Nav.Link>
              {/* <Nav.Link onClick = {()=>onRouteChange('contact')}  variant="outline-info">Contact us</Nav.Link>  */}
            </Nav>

            {/* <Button
              onClick={() => onRouteChange('Login')}
              variant="outline-info"
            >
              Sign In
            </Button> */}
            <Button style={{ fontSize: 19 }} variant="danger">
              Sign Out
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default Navigation
