import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, ButtonGroup, Tab, Tabs } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Audio from './Audio';
import Displayer from './Displayer';
import Login from './Signin/Login';

const Home = () => {
    return (


        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">AUDIO</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">BACKGROUND</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">ICON</Nav.Link>
                        </Nav.Item>


                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Audio />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <About />
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Login />
                        </Tab.Pane>

                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>


        // <Container fluid>
        //     <Row >
        //         <Col >

        //             <Router>
        //                 <Navbar variant="light" bg="transparent">
        //                     <Nav fill className="flex-column">
        //                         <h1 style={{ textAlign: 'center' }}>Edit</h1>
        //                         <Nav.Item>
        //                             <Nav.Link href="/Audio">Audio</Nav.Link>
        //                         </Nav.Item>
        //                         <Nav.Item>
        //                             <Nav.Link eventKey="link-1">Background</Nav.Link>
        //                         </Nav.Item>
        //                         <Nav.Item>
        //                             <Nav.Link eventKey="Icon">Icon</Nav.Link>
        //                         </Nav.Item>
        //                         <Nav.Item>
        //                             <Nav.Link eventKey="text">Text</Nav.Link>
        //                         </Nav.Item>
        //                         <Nav.Item>
        //                             <Nav.Link>
        //                                 <ButtonGroup aria-label="Basic example">
        //                                     <Button variant="secondary">Export</Button>
        //                                     <Button variant="secondary">Save</Button>
        //                                 </ButtonGroup>
        //                             </Nav.Link>
        //                         </Nav.Item>
        //                     </Nav>
        //                 </Navbar>


        //                 <Switch>
        //                     <Route path="/Audio" exact component={Audio} />

        //                     {/* <Route path="/Background">
        //                     <Background />
        //                 </Route>

        //                 <Route path="/Icon" exact component={Icon} />
        //                 <Route path="/Text" exact component={Text} />
        //                 <Route path="/Export" exact component={Export} />
        //                 <Route path="/Save" exact component={Save} /> */}


        //                 </Switch>
        //             </Router>

        //         </Col>

        //         <Col>

        //             <Displayer />
        //         </Col>

        //     </Row>
        // </Container>



    )
}

export default Home
