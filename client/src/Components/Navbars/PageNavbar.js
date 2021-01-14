import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarButtons from './NavbarButtons';
import About from '../../Containers/About';
import TemplatesPage from '../../Containers/TemplatesPage';
import Login from '../Signin/Login';

import Test from '../../Containers/Test';

const PageNavbar = () => {
    return (
        <Router>
            <div className='ui container'>

                <NavbarButtons />

                <Route path="/About" component={About} />
                <Route path="/Templates" component={TemplatesPage} />
                <Route path="/Login" component={Login} />
                <Route path="/Test" component={Test} />

            </div>
        </Router>
    )
}

export default PageNavbar;





