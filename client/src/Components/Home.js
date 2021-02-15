import React from 'react'
import { Card, Row, Col, Nav, Container } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Displayer from './Displayer'
import FileUpload from './MediaInteractions/FileUpload'
import InsertIcon from './MediaInteractions/InsertIcon'
import Navigation from './Navigation'
// import Playlist from './MediaInteractions/Playlist'

const Home = () => {


  return (
    <div>
      <Navigation />
<Container fluid id="editor-cont">
<Row>
  <Col xs={6} md={4}>
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column" id="tab-nav">
        <Nav.Item>
          <Nav.Link eventKey="uploadAudio">Audio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="uploadBackground">Background</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="uploadIcon">Icon</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="home">Visualizer</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content id="tab-cont">
        <Tab.Pane eventKey="uploadAudio" mediatype="audio">
        <FileUpload mediatype="Audio" />
        </Tab.Pane>
        <Tab.Pane eventKey="uploadBackground">
        <FileUpload mediatype="Background" filetype="image" />
        </Tab.Pane>
        <Tab.Pane eventKey="uploadIcon">
        <FileUpload mediatype="Icon" filetype="image" />
        </Tab.Pane>
        
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

    </Col>
    <Col xs={12} md={8}>
     {/* card for displaying the visualizer on the right panel*/}
    {/* <Card className="visualizer">
              <Card.Body> */}
              <Container>
              <Displayer />
                <InsertIcon />
              </Container>

              {/* </Card.Body>
            </Card> */}
    </Col>
  </Row>

</Container>
    </div>
  )
}

export default Home
