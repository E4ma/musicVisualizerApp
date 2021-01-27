import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Login = () => {
  return (
    // <div className="ui container">
    //     <h3>Hello Login Page</h3>
    // </div>

    <Modal.Dialog centered>
      <Modal.Header closeButton>
        <Modal.Title>Hello Login or Signup Page</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
}

export default Login
