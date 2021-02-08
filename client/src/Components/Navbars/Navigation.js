import React, { useState } from 'react'
import { Navbar, Nav, Button, Modal, Form, Row, Col } from 'react-bootstrap'
import pic from './Logo9.GIF'

const Navigation = ({ onRouteChange }) => {

  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleLogin = () => setShow(true);
  const handleRegister = () => setRegister(true);
  const handleRegisterClose = () => setRegister(false);

  function registerClicked(){
   handleClose() || setRegister(true);
  }

  if (show === true) {
    return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Row>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control placeholder="Email address" />
              </Col>
              <Col>
                <Form.Control placeholder="Password" />
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              Submit
  </Button>
  </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
          onClick={registerClicked}
          variant="Light"
          >Register</Button>
        </Modal.Footer>
      </Modal>

    );
  } 

  if (register === true) {
    return (

      <Modal show={register} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>
        </Modal.Body>
      </Modal>

    );
  } else {
    console.log("register not working");
  }




  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="/Home" style={{ fontSize: 23 }}>
          <img src={pic} alt={''} width={80} height={80} />
            The HummingBird
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ fontSize: 23 }}>
            <Nav.Link onClick={() => onRouteChange('About')}>About</Nav.Link>
            <Nav.Link onClick={() => onRouteChange('TemplatesPage')}>
              Templates
              </Nav.Link>
            {/* <Nav.Link>My Account</Nav.Link> */}
           <Button
           onClick={handleLogin}
           variant="outline-secondary"
           >Sign In</Button>
     <Button
          onClick={handleRegister}
            variant="outline-info">
            Sign Up
            </Button>

          </Nav>

     
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


export default Navigation
