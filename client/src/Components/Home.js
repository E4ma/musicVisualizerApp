import React from 'react'

import { Card, Row, Col, Nav, Button, ButtonGroup } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Displayer from './Displayer'
import FileUpload from './MediaInteractions/FileUpload'
import InsertIcon from './MediaInteractions/InsertIcon'

const Home = () => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col md={2}>
            <Nav
              variant="pills"
              className="flex-column textbold"
              bg="transparent"
              style={{ fontWeight: 'bold' }} >
              <br />
              <br />

              {/*------ Audio -----*/}
              <Nav.Item>
                <Nav.Link eventKey="uploadAudio" style={{ borderRadius: '22px', backgroundColor: 'transparent' }} >
                  <button className='btn1'>Audio</button>
                </Nav.Link>
              </Nav.Item>
              <br />
              <br />

              {/*------ Background -----*/}
              <Nav.Item>
                <Nav.Link eventKey="uploadBackground" style={{ borderRadius: '22px', backgroundColor: 'transparent' }} >
                  <button className='btn1'>Background</button>
                </Nav.Link>
              </Nav.Item>
              <br />
              <br />


              {/*------ Icon -----*/}
              <Nav.Item>
                <Nav.Link eventKey="uploadIcon" style={{ borderRadius: '22px', backgroundColor: 'transparent' }} >
                  <button className='btn1'>Icon</button>
                </Nav.Link>
              </Nav.Item>
              <br />
              <br />

              {/*------ Text -----*/}
              <Nav.Item>
                <Nav.Link eventKey="home" style={{ borderRadius: '22px', backgroundColor: 'transparent' }} >
                  <button className='btn1'>Visualizer</button>
                </Nav.Link>
              </Nav.Item>

              {/* <br />
              <Nav.Item>
                <Nav.Link eventKey="uploadBackground">Background</Nav.Link>
              </Nav.Item>
              <br /> */}

              {/* <Nav.Item>
                <Nav.Link eventKey="uploadIcon">Icon</Nav.Link>
              </Nav.Item>
              <br /> */}

              {/* SN disabled the Text Upload for now.............. */}

              {/* <Nav.Item>
                <Nav.Link eventKey="text">Visualizer Mode</Nav.Link>
              </Nav.Item>
              <br /> */}

              {/* SN disabled the Export/Save for now............... */}
              {/* <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Export</Button>
                <Button variant="secondary">Save</Button>
              </ButtonGroup> */}


            </Nav>
          </Col>

          <Col md={'auto'}>
            <Tab.Content>
              <Tab.Pane eventKey="uploadAudio" mediaType="audio">
                <FileUpload mediaType="Audio" />
              </Tab.Pane>
              <Tab.Pane eventKey="uploadBackground">
                <FileUpload mediaType="Background" />
              </Tab.Pane>
              <Tab.Pane eventKey="uploadIcon">
                <FileUpload mediaType="Icon" />
              </Tab.Pane>
            </Tab.Content>
          </Col>

          {/* card for displaying the visualizer on the right panel*/}

          <Col md xl={'auto'}>
            <br />
            <Card className="visualizer">
              <Card.Body>
                <Displayer />
                <InsertIcon />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container >
    </div >
  )
}

export default Home
