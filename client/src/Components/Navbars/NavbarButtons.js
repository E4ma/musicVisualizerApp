import React from 'react';
import { Link } from 'react-router-dom';
// import Buttom from 'react-bootstrap/Button';
import { Button, Navbar, Nav } from 'react-bootstrap';
import pic2 from './Logo.png';

const NavbarButtons = () => {
    return (
        <div className="ui container">

            {/* <Navbar.Brand href="#home">
                <img src={pic2} alt={""} width={80} height={80} />
            </Navbar.Brand> */}

            <Navbar bg="light" expand="lg">

                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <img src={pic2} alt={""} width={90} height={90} />

                    <Link to="/About">
                        <Button >About</Button>
                    </Link>
                    <Link to="/Templates">
                        <Button>Templates</Button>
                    </Link>
                    <Link to="/Login">
                        <Button>Login</Button>
                    </Link>

                    <Link to="/Test">
                        <Button>Test</Button>
                    </Link>

                </Nav>
                </Navbar.Collapse>
            </Navbar>


        </div>
    )
}

export default NavbarButtons
