import React from 'react';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import { Button, ButtonGroup, Navbar, Nav } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
// import { Switch, Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import pic2 from './Logo2.png';

import About from '../../Containers/About';
import TemplatesPage from '../../Containers/TemplatesPage';
import Login from '../Signin/Login';



const NavbarButtons = () => {
    return (

        <div>
            <div className="row">
                <div className="col-md-12">
                    <Router>

                        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                            {/* <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand> */}
 
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    {/* <img src={pic2} alt={""} width={100} height={100} /> */}
                                    <img src={pic2} alt={""} width={100} height={100} />
                                    <Nav.Link href="/About">
                                        <Button className="ui secondary button"> ABOUT</Button>
                                    </Nav.Link>
                                    <Nav.Link href="/Templates">
                                        <Button className="ui secondary button">TEMPLATES</Button>
                                    </Nav.Link>
                                    <Nav.Link href="/Login">
                                        <Button className="ui secondary button"> LOGIN</Button>
                                    </Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <br />
                        <Switch>

                            <Route path="/About">
                                <About />
                            </Route>
                            <Route path="/Templates">
                                <TemplatesPage />
                            </Route>
                            <Route exact path="/Login">
                                <Login />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>

    )
}

export default NavbarButtons
