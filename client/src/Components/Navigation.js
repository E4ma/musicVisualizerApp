import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap'

import pic from './Images/logogrey.png'
// import pic from './Logo1sn.png'


const Navigation = () => {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  //Navbar

  return (


    <Navbar style={{ backgroundColor: 'black' }} variant="dark" expand="sm" sticky="top" className="justify-content-end">
      <Container id="nav-wrap">
        <Navbar.Brand href="/Login">
          {/* <img src={pic} alt={''} width={80} height={80} /> */}
          <img
            src={pic}
            alt={''}
            height={'30%'}
            width={'30%'}
            className="d-inline-block align-top" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item id="nav-item"><Link to="/About" style={{ color: 'white' }}>About</Link></Nav.Item>
            <Nav.Item id="nav-item"><Link to="/Home" style={{ color: 'white' }}>Editor</Link></Nav.Item>
            <Nav.Item id="nav-item"><Link to="/MyAccount" style={{ color: 'white' }}>Profile</Link></Nav.Item>
            <Nav.Item id="nav-item" onClick={handleLogout}><Link style={{ color: 'white' }} >Logout</Link></Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default Navigation