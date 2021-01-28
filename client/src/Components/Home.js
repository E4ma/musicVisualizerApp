import React from 'react'
import '../home.css'
import {
  Container,
  Card,
  Row,
  Col,
  Nav,
  Button,
  ButtonGroup,
  Jumbotron,
} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import BackgroundImport from './UploadBackground/backgroundUpload'
import Displayer from './Displayer'
import AudioImport from './UploadAudio/AudioUpload'
import IconUpload from './UploadIcon/IconUpload'

const Home = () => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column" bg="transparent">
              <br />

              <Nav.Item>
                <Nav.Link eventKey="uploadAudio">
                  Audio
                  {/* <Button size="sm">Audio</Button> */}
                </Nav.Link>
              </Nav.Item>
              <br />
              <Nav.Item>
                <Nav.Link eventKey="uploadBackground">Background</Nav.Link>
              </Nav.Item>
              <br />
              <Nav.Item>
                <Nav.Link eventKey="uploadIcon">Icon </Nav.Link>
              </Nav.Item>
              <br />
              <Nav.Item>
                <Nav.Link eventKey="text">Text</Nav.Link>
              </Nav.Item>
              <br />
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Export</Button>
                <Button variant="secondary">Save</Button>
              </ButtonGroup>
            </Nav>
          </Col>

          <Col sm={3}>
            <Tab.Content>
              <Tab.Pane eventKey="uploadAudio">
                <AudioImport />
              </Tab.Pane>
              <Tab.Pane eventKey="uploadBackground">
                <BackgroundImport />
              </Tab.Pane>
              <Tab.Pane eventKey="uploadIcon">
                <IconUpload />
              </Tab.Pane>
            </Tab.Content>
          </Col>

          {/* card for displaying the visualizer on the right panel*/}

          <Col sm={3}>
            <br />
            {/* <Card style={{ width: '70rem', height: '40rem' }}>
              <Card.Body>
                <Card.Title>Visualizer</Card.Title>
                <Displayer />
              </Card.Body>
            </Card> */}
            <Jumbotron>
              <Displayer />
            </Jumbotron>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default Home
