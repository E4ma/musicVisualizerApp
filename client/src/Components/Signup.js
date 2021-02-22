import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import LandingNav from "./LandingNav"


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    //are passwords same?
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
      //and then exit
    }

    try {
      setError("")
      //disables signup button
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/Home")
    } catch {
      setError("Failed to create an account. Password should be at least 6 characters")
    }

    setLoading(false)
  }

  return (
    <>
      <LandingNav />
      <Container className="signinContainer">
        <div className="signinWrapper">
          <div>
            <h2 className="text-center m-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <input className="signinInput" placeholder="Enter Email" type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <input className="signinInput" placeholder="Enter Password" type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <input className="signinInput" placeholder="Re-enter Password" type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <button disabled={loading} className="formBtn" type="submit">
                Sign Up
            </button>
            </Form>
          </div>
          <div className="w-100 text-center m-2">
            Already have an account? <Link to="/login" className="formLink">Sign In</Link>
          </div>
        </div>
      </Container>
    </>
  )
}