import React from 'react'
import { Row, Col, Nav, Button, ButtonGroup } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Displayer from './Displayer'
import ImportAudio from './UploadAudio/AudioImport'

const Home = () => {
  return (
    <React.StrictMode>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col style={{ width: '20rem' }} sm={3}>
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

          <Col style={{ width: '20rem' }}>
            <Displayer />
          </Col>
        </Row>
      </Tab.Container>
    </React.StrictMode>
  )
}

export default Home
