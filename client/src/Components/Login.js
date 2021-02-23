import React, { useRef, useState } from "react"
import { Form, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import SigninNav from "./SigninNav"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/Home")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <SigninNav />
      <Container className="signinContainer">
        <div className="signinWrapper">
          <div >

            <h2 className="text-center m-4">Welcome Back!</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <input type="email" placeholder="Email" className="signinInput" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <input type="password" placeholder="Password" className="signinInput" ref={passwordRef} required />
              </Form.Group>
              <button disabled={loading} className="formBtn" type="submit">
                Sign In
            </button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password" className="formLink">Forgot Password?</Link>
            </div>

          </div>

          <div className="w-100 text-center m-2">
            Need an account? <Link to="/signup" className="formLink">Sign Up</Link>
          </div>

        </div>
      </Container>
    </>
  )
}