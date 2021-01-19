import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, ButtonGroup, Figure } from 'react-bootstrap';
import image from './Images/image1.jpg';
import Displayer from './Displayer';

const Home = () => {
    return (

        <Container fluid>
            <Row >
                <Col >
                    <Navbar variant="light" bg="transparent">
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
                                <Nav.Link>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="secondary">Export</Button>
                                        <Button variant="secondary">Save</Button>
                                    </ButtonGroup>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </Col>

                <Col>
                    <Figure>
                        <Figure.Image
                            width={800}
                            height={850}
                            alt="171x180"
                            src={image}
                        />
                        <Figure.Caption>
                            Visualizer here
                        </Figure.Caption>
                    </Figure>

                    {/* <Displayer />  */}
                </Col>

            </Row>
        </Container>



    )
}

export default Home
