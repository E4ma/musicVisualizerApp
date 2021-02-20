import React, { useState, useEffect } from 'react'
import { Card, Row, Col, Nav, Modal } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Displayer from './Displayer'
import FileUpload from './MediaInteractions/FileUpload'
import InsertIcon from './MediaInteractions/InsertIcon'
import Navigation from './Navigation'
import PlaylistContext from '../contexts/PlaylistContext'

const Home = () => {
  // This is for controlling the Modal window (AUDIO)
  const [isOpen, setIsOpen] = useState(false)
  const showModal = () => {
    setIsOpen(true)
  }
  const hideModal = () => {
    setIsOpen(false)
  }

  // This is for controlling the Modal window (BACKGROUND)
  const [BackModelOpen, setBackModelOpen] = useState(false)
  const showBackModal = () => {
    setBackModelOpen(true)
  }
  const hideBackModal = () => {
    setBackModelOpen(false)
  }

  return (
    <PlaylistContext>
      <div>
        <Navigation />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col md={2}>
              <Nav
                variant="pills"
                className="flex-column textbold"
                bg="transparent"
                style={{ fontWeight: 'bold' }}
              >
                <br />

                {/*------ Audio -----*/}

                <Nav.Item>
                  <Nav.Link
                    eventKey="uploadAudio"
                    style={{
                      borderRadius: '22px',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <button className="btn1" onClick={showModal}>
                      Audio
                    </button>
                  </Nav.Link>
                </Nav.Item>

                <br />
                <br />

                {/*------ Background -----*/}
                <Nav.Item>
                  <Nav.Link
                    eventKey="uploadBackground"
                    style={{
                      borderRadius: '22px',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <button className="btn1" onClick={showBackModal}>
                      Background
                    </button>
                  </Nav.Link>
                </Nav.Item>
                <br />
                <br />

                {/*------ Icon -----*/}
                <Nav.Item>
                  <Nav.Link
                    eventKey="uploadIcon"
                    style={{
                      borderRadius: '22px',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <button className="btn1">Icon</button>
                  </Nav.Link>
                </Nav.Item>
                <br />
                <br />

                {/*------ Text -----*/}
                <Nav.Item>
                  <Nav.Link
                    eventKey="home"
                    style={{
                      borderRadius: '22px',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <button className="btn1">Visualizer</button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col md={'auto'}>
              <Tab.Content>
                <Tab.Pane eventKey="uploadAudio" mediatype="audio">
                  <Modal
                    className="modalUpload"
                    show={isOpen}
                    onHide={hideModal}
                  >
                    <FileUpload mediatype="Audio" />
                    <button className="btn2" onClick={hideModal}>
                      Cancel
                    </button>
                  </Modal>
                </Tab.Pane>

                <Tab.Pane eventKey="uploadBackground" mediatype="image">
                  <Modal show={BackModelOpen} onHide={hideBackModal}>
                    <FileUpload mediatype="Background" filetype="image" />
                    <button className="btn2" onClick={hideBackModal}>
                      {' '}
                      Cancel
                    </button>
                  </Modal>
                </Tab.Pane>

                <Tab.Pane eventKey="uploadIcon">
                  <FileUpload mediatype="Icon" filetype="image" />
                </Tab.Pane>
              </Tab.Content>
            </Col>

            {/* card for displaying the visualizer on the right panel*/}

            <Col md xl={'auto'}>
              <br />
              <Card
                className="visualizer"
                style={{ height: '85vh', padding: '5px', margin: '20px' }}
              >
                <Card.Body>
                  <Displayer />
                  <InsertIcon />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </PlaylistContext>
  )
}

export default Home
