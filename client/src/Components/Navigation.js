import React, { useState } from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap'

import pic from './Images/logogrey-bird.png'
// import pic from './Logo1sn.png'


const Navigation = () => {

  const [error, setError] = useState("")
  const { logout } = useAuth()
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


    <Navbar className="landingNav" variant="dark" expand="sm">
      <Container className="navContainer">
      <Navbar.Brand href="/About">
          {/* <img src={pic} alt={''} width={80} height={80} /> */}
          <img 
          src={pic} 
          alt={''} 
          height={'40'} 
          width={'45'} 
          className="d-inline-block"/>{' '}HUMMINGBIRD
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav fill >

            <Nav.Item ><Link className="mainNav" to="/Home" >Editor</Link></Nav.Item>
            <Nav.Item ><Link className="mainNav" to="/MyAccount" >Profile</Link></Nav.Item>
            <Nav.Item onClick={handleLogout}><Link className="navBtn" >Sign Out</Link></Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default Navigation