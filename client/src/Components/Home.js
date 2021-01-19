import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, ButtonGroup } from 'react-bootstrap';
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

                    <Displayer /> 
                </Col>

            </Row>
        </Container>



    )
}

export default Home
