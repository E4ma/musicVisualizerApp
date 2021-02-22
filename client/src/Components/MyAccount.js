import React, { useState } from "react"
import { Form, Col, Row, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Navigation from "./Navigation"

export default function Dashboard() {

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

  return (
    <>
      <Navigation />
      <Container className="profileContainer">
        <div className="signinWrapper">

          <div>
            <h2 className="text-center m-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  <strong>Email</strong>
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext readOnly defaultValue={currentUser.email} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  <strong>Password</strong>
                </Form.Label>
                <Col sm="10">
                  <input className="signinInput" type="password" placeholder="Update Profile" readOnly />
                </Col>
              </Form.Group>
              <div className="w-100 text-center m-2">
                <button className="mt-3 formBtn"><a href="/update-profile" >Update Profile</a>
                  
            </button>
              </div>
            </Form>
          </div>


          <div className="w-100 text-center m-2">
            <Link className="formLink" variant="link" onClick={handleLogout}>
              Sign Out
          </Link>
          </div>
        </div>
      </Container>
    </>
  )
}