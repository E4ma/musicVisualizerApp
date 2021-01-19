import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import pic2 from './Logo2.png';
// import About from '../../Containers/About';
// import TemplatesPage from '../../Containers/TemplatesPage';
// import Login from '../Signin/Login';
// import Home from '../../Containers/Home';
// import Login from '../../Containers/Signin/Login';


const NavbarButtons = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn === true) {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="sm" sticky="top">

                    <Navbar.Brand href="/Home">
                        <img src={pic2} alt={""} width={100} height={70} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => onRouteChange('home')} >Home</Nav.Link>
                            {/* <Nav.Link onClick={() => onRouteChange('Profile')} >My Account</Nav.Link> */}
                            <Nav.Link onClick={() => onRouteChange('TemplatesPage')} >Templates</Nav.Link>


                        </Nav>
                        <Button onClick={() => onRouteChange('signout')} variant="outline-info">Signout</Button>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    } else {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="sm" sticky="top">

                    <Navbar.Brand href="/Home">
                        <img src={pic2} alt={""} width={100} height={70} />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => onRouteChange('Home')} >Home</Nav.Link>
                            <Nav.Link onClick={() => onRouteChange('About')} >About</Nav.Link>
                            <Nav.Link onClick={() => onRouteChange('TemplatesPage')} >Templates</Nav.Link>
                            {/* <Nav.Link onClick = {()=>onRouteChange('contact')}  variant="outline-info">Contact us</Nav.Link>  */}

                        </Nav>
                        <Button onClick={() => onRouteChange('Login')} variant="outline-info">Sign In</Button>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
    // return (

    //     <div>
    //         <div className="row">
    //             <div className="col-md-12">
    //                 <Router>

    //                     <Navbar bg="dark" variant="dark" expand="sm" sticky="top">

    //                         <Navbar.Brand href="/Home">
    //                             <img src={pic2} alt={""} width={100} height={100} />
    //                         </Navbar.Brand>

    //                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //                         <Navbar.Collapse id="basic-navbar-nav">
    //                             <Nav className="mr-auto">

    //                                 <Nav.Link href="/Home">
    //                                     <Button className="ui secondary button"> HOME</Button>
    //                                 </Nav.Link>
    //                                 <Nav.Link href="/About">
    //                                     <Button className="ui secondary button"> ABOUT</Button>
    //                                 </Nav.Link>
    //                                 <Nav.Link href="/Templates">
    //                                     <Button className="ui secondary button">TEMPLATES</Button>
    //                                 </Nav.Link>
    //                                 <Nav.Link href="/Login">
    //                                     <Button className="ui secondary button"> LOGIN/SIGN UP</Button>
    //                                 </Nav.Link>

    //                             </Nav>
    //                         </Navbar.Collapse>
    //                     </Navbar>
    //                     <br />
    //                     <br />

    //                     <Switch>
    //                         <Route exact path="/Home">
    //                             <Home />
    //                         </Route>
    //                         <Route path="/About">
    //                             <About />
    //                         </Route>
    //                         <Route path="/Templates">
    //                             <TemplatesPage />
    //                         </Route>
    //                         <Route path="/Login">
    //                             <Login />
    //                         </Route>
    //                     </Switch>

    //                 </Router>
    //             </div>
    //         </div>
    //     </div >

    // )
}

export default NavbarButtons
