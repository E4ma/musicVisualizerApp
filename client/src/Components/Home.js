import React from 'react'
import { Container, Card, Row, Col, Nav, Button, ButtonGroup } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import BackgroundImport from '../BackgroundImport'
import Displayer from './Displayer'
import AudioImport from './UploadAudio/AudioImport'

const Home = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>

        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <br />

            <Nav.Item>
              <Nav.Link eventKey="uploadAudio">Audio
                {/* <Button size="lg" block>Audio</Button> */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="uploadBackground">Background</Nav.Link>
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

        {/* <Col sm={9}> */}
        <Tab.Content>
          <Tab.Pane eventKey="uploadAudio">
            <AudioImport />
          </Tab.Pane>
          <Tab.Pane eventKey="uploadBackground">
            <BackgroundImport />
          </Tab.Pane>
        </Tab.Content>
        {/* </Col> */}

        {/* card for displaying the visualizer on the right panel*/}

        <Col sm={3}>
          <br />
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>Visualizer</Card.Title>
              <Displayer />
            </Card.Body>
          </Card>

        </Col>


      </Row>
    </Tab.Container >


  )
}

export default Home
