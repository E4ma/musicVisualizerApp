import React, { useState } from 'react'
import { Navbar, Nav, Button, Modal, Form, Row, Col } from 'react-bootstrap'
import pic from './Logo9.GIF'
// import pic from './Logo1sn.png'

const Navigation = ({ onRouteChange }) => {

  // for open/close of signin/signup modals 
  const [show, setShow] = useState(false);
  const [register, setRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleLogin = () => setShow(true);
  const handleRegister = () => setRegister(true);
  const handleRegisterClose = () => setRegister(false);

  function registerClicked() {
    handleClose() || setRegister(true);
  }

  //API

  const [signUpMessage, setSignUpMessage] = useState("");

const createUser = () => {
  let userInfo = {
    firstname: this.name.firstname.value,
    lastname: this.name.lastname.value,
    username: this.name.username.value,
    email: this.name.email.value,
    password: this.name.password.value
  };

  fetch('/new', {
    method: 'POST',
    headers: {'Content-type':'application/json'},
    body:JSON.stringify(userInfo)
  }).then(r=>r.json()).then(res=>{
    if(res){
      setSignUpMessage("New User created successfully");
    }
  })
}

//The modals

if (register === true) {
  return (

    <Modal show={register} onHide={handleRegisterClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstname" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastname" placeholder="Enter last name" />
          </Form.Group>
          <Form.Group >
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Create a Username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
  </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={createUser} variant="primary" type="submit">
            Sign Up
</Button>
<p>{signUpMessage}</p>
        </Form>
      </Modal.Body>
    </Modal>

  );
} 

  if (show === true) {
    return (

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" placeholder="username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
  </Button>
  
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={registerClicked}
            variant="Light"
          >Sign Up</Button>
        </Modal.Footer>
      </Modal>

    );
  }



//Navbar

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="/Home" style={{ fontSize: 23 }}>
          {/* <img src={pic} alt={''} width={80} height={80} /> */}
          <img src={pic} alt={''} width={50} height={50} />
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
