import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, ButtonGroup } from 'react-bootstrap';
import Displayer from './Displayer';

const Home = () => {
    return (

        <Container fluid>
            <Row >
                <Col>
                
                    <Navbar variant="light" bg="transparent">
                   
                        <Nav fill className="flex-column">
                            <div style={{ margin:50}}>
                                <br></br>
                            <h1 style={{ textAlign: 'center' }}><b>Edit</b></h1>
                            <Nav.Item>
                                <br></br>
                                <Nav.Link href="/Audio"><b>Audio</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <br></br>
                                <Nav.Link eventKey="link-1"><b><b>Background</b></b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <br></br>
                                <Nav.Link eventKey="Icon"><b>Icon</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <br></br>
                                <Nav.Link eventKey="text"><b>Text</b></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <br></br>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="secondary">Export</Button>
                                        <Button variant="secondary">Save</Button>
                                    </ButtonGroup>
                                </Nav.Link>
                            </Nav.Item>
                            </div>
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
