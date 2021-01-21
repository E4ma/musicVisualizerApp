import React from 'react'
import { Container, Row, Col, Nav, Button, ButtonGroup } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Displayer from './Displayer'
import ImportAudio from './UploadAudio/AudioImport'

const Home = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          {/* <Navbar variant="light" bg="transparent">
                        <Nav fill className="flex-column">
                            <h1 style={{ textAlign: 'center' }}>Edit</h1>
                            <Nav.Item>
                                <Nav.Link href="/Audio">Audio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Background</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Icon">Icon</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="text">Text</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link> */}
          {/* <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Export</Button>
            <Button variant="secondary">Save</Button>
          </ButtonGroup>
          </Nav.Link> */}
          {/* </Nav.Item>
                        </Nav>
                    </Navbar> */}
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="uploadAudio">Audio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Background</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Icon">Icon</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="text">Text</Nav.Link>
            </Nav.Item>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Export</Button>
              <Button variant="secondary">Save</Button>
            </ButtonGroup>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="uploadAudio">
              <ImportAudio />
            </Tab.Pane>
            <Tab.Pane eventKey="second">{/* <Sonnet /> */}</Tab.Pane>
          </Tab.Content>
        </Col>

        <Col>
          <Displayer />
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default Home
