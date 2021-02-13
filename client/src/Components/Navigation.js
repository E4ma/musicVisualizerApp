import React, { useState }  from 'react'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
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
    <>
      <Navbar style={{ backgroundColor: 'black' }} variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="/Login" style={{ fontSize: 23 }}>
          {/* <img src={pic} alt={''} width={80} height={80} /> */}
          <img src={pic} alt={''} height={'30%'} width={'30%'} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ fontSize: 23 }}>

              <Nav.Item><Link to="/About" style={{ color: 'white' }}>About</Link></Nav.Item>
<Nav.Item><Link to="/Home" style={{ color: 'white' }}>Editor</Link></Nav.Item>
          <Nav.Item></Nav.Item>
          <Nav.Item><Link to="/MyAccount" style={{ color: 'white' }}>Profile</Link></Nav.Item>
          <Nav.Item></Nav.Item>
<Nav.Item>          <Nav.Link style={{ color: 'white' }} variant="link" className="btn1" onClick={handleLogout}>
            Log Out
                </Nav.Link></Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation