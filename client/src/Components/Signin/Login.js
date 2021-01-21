import React from 'react'
// import { Button, Modal } from 'react-bootstrap'
import {
  Container,
  Row,
  Col,
  Nav,
  Button,
  Tab,
  ButtonGroup,
} from 'react-bootstrap'

const Login = () => {
  return (
    // <div className="ui container">
    //     <h3>Hello Login Page</h3>
    // </div>

    // <Modal.Dialog centered>
    //     <Modal.Header closeButton>
    //         <Modal.Title>Hello Login or Signup Page</Modal.Title>
    //     </Modal.Header>

    //     <Modal.Body>
    //         <p>Modal body text goes here.</p>
    //     </Modal.Body>

    //     <Modal.Footer>
    //         <Button variant="secondary">Close</Button>
    //         <Button variant="primary">Save changes</Button>
    //     </Modal.Footer>
    // </Modal.Dialog>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">{/* <Sonnet /> */}The dog</Tab.Pane>
            <Tab.Pane eventKey="second">{/* <Sonnet /> */}The cat</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default Login
