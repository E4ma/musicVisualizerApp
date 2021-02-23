import React, { useState } from 'react'
import axios from 'axios'
import { Card, Row, Col, Nav, Modal } from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import Displayer from './Displayer'
import FileUpload from './MediaInteractions/FileUpload'
import IconUpload from './MediaInteractions/IconUpload'
import InsertIcon from './MediaInteractions/InsertIcon'
import Navigation from './Navigation'
import PlaylistContext from '../contexts/PlaylistContext'
import background from './Images/background1.jpg'
import icon from './Images/Daco.png'

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
  const [backModalOpen, setBackModalOpen] = useState(false)
  const showBackModal = () => {
    setBackModalOpen(true)
  }
  const hideBackModal = () => {
    setBackModalOpen(false)
  }

  // This is for controlling the Modal window (ICON)
  const [iconModalOpen, setIconModalOpen] = useState(false)
  const showIconModal = () => {
    setIconModalOpen(true)
  }
  const hideIconModal = () => {
    setIconModalOpen(false)
  }

  //Background image change
  const [backgroundUrl, setBackgroundUrl] = useState(background)
  const getPicture = async (picture) => {
    const response = await axios.get(
      `http://localhost:5000/upload/image/${picture}`,
      { responseType: 'blob' },
    )
    console.log(response.data)
    setBackgroundUrl(URL.createObjectURL(response.data))
  }

  //icon image change
  const [iconUrl, setIconUrl] = useState(icon)
  const getIcon = async (iconImage) => {
    const response = await axios.get(
      `http://localhost:5000/iconUpload/icon/${iconImage}`,
      { responseType: 'blob' },
    )
    console.log(response.data)
    setIconUrl(URL.createObjectURL(response.data))
  }

  return (
    <PlaylistContext>
      <Navigation />
      <div className="editorContainer">
        <Row className="editorRow justify-content-md-center">
          <Col xs={2}>
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
                    <br />
                    <br />
                    <br />
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
                        <button className="btn1" onClick={showIconModal}>
                          Icon
                        </button>
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
                          OK
                        </button>
                      </Modal>
                    </Tab.Pane>

                    <Tab.Pane eventKey="uploadBackground" mediatype="image">
                      <Modal show={backModalOpen} onHide={hideBackModal}>
                        <FileUpload
                          getPicture={getPicture}
                          mediatype="Background"
                        />
                        <button className="btn2" onClick={hideBackModal}>
                          {' '}
                          OK
                        </button>
                      </Modal>
                    </Tab.Pane>

                    <Tab.Pane eventKey="uploadIcon">
                      <Modal show={iconModalOpen} onHide={hideIconModal}>
                        <IconUpload getIcon={getIcon} mediatype="Icon" />
                        <button className="btn2" onClick={hideIconModal}>
                          {' '}
                          OK
                        </button>
                      </Modal>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>

          {/* card for displaying the visualizer on the right panel*/}

          <Col md={9}>
            <div className="visualizer">
              <Card.Body>
                <Displayer backgroundUrl={backgroundUrl} />
                <InsertIcon iconUrl={iconUrl} />
              </Card.Body>
            </div>
          </Col>
        </Row>
      </div>
    </PlaylistContext>
  )
}

export default Home
