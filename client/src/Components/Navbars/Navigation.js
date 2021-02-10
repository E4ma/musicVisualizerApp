import React, { useState } from 'react'
import { Navbar, Nav, Button, Modal, Form, Row, Col } from 'react-bootstrap'
import pic from './Logo9.GIF'
// import pic from './Logo1sn.png'
import Axios from 'axios'

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

  // Event handlers for SignUp
  const url = "http://localhost:5000/createUser/newUser"
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: ""
  })

  const registerForm = e => {
    e.preventDefault();
    Axios.post(url, {
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      email: data.email,
      password: data.password
    })
      .then(res => {
        console.log(res.data)
      }).catch(err => {
        if (err.res) {
          console.log("this is a response error", err.res);
        } else if (err.req) {
          console.log("this is a request error", err.req);
        } else {
          console.log("error", err)
        }
      })
  }

  function handleSignup(e) {
    const newuser = { ...data }
    newuser[e.target.name] = e.target.value
    setData(newuser)
    //  console.log(newuser)
  }

  //The modals

  if (register === true) {
    return (

      <Modal show={register} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => registerForm(e)}>
            <Form.Group >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstname" placeholder="Enter first name"
                value={data.firstname}
                onChange={(e) => handleSignup(e)}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastname" placeholder="Enter last name"
                value={data.lastname}
                onChange={(e) => handleSignup(e)}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" placeholder="Create a Username"
                value={data.username}
                onChange={(e) => handleSignup(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email"
                value={data.email}
                onChange={(e) => handleSignup(e)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
  </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password"
                value={data.password}
                onChange={(e) => handleSignup(e)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
</Button>
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
      {/* <Navbar bg="dark" variant="dark" expand="sm" sticky="top"> */}
      <Navbar variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="/Home" style={{ fontSize: 23 }}>
          {/* <img src={pic} alt={''} width={80} height={80} /> */}
          <img src={pic} alt={''} width={50} height={50} />
            The HummingBird
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ fontSize: 22 }}>
            <Nav.Link onClick={() => onRouteChange('About')} className="navItem" >About</Nav.Link>
            <Nav.Link onClick={() => onRouteChange('TemplatesPage')} className="navItem">
              Templates
              </Nav.Link>
            {/* <Nav.Link>My Account</Nav.Link> */}
            <Button className="navItem"
              onClick={handleLogin}
              variant="outline-secondary"
            >Sign In</Button>
            <Button className="navItem"
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
