import React, { useRef, useState } from "react"
import { Container, Form, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Navigation from "./Navigation"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    //runs if all promises are successful
    Promise.all(promises)
      .then(() => {
        history.push("/MyAccount")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <Navigation />
      <Container className="signinContainer">
        <div className="signinWrapper">
          <div>
            <h2 className="text-center m-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
            
              <Form.Group id="email">
                <input className="signinInput" type="email" ref={emailRef} placeholder={currentUser.email} defaultValue={currentUser.email} required />
              </Form.Group>

              <Form.Group id="password">
                <input
                className="signinInput"
                  type="password"
                  ref={passwordRef}
                  placeholder="Input new password. Leave blank to keep the same"
                />
              </Form.Group>

              <Form.Group id="password-confirm">
                <input
                className="signinInput"
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Confirm Password"
                />
              </Form.Group>

              <button disabled={loading} className="formBtn" type="submit">
                Update
            </button>
            </Form>
          </div>
          <div className="w-100 text-center m-2">
            <Link to="/MyAccount" className="formLink">Cancel</Link>
          </div>
        </div>
      </Container>
    </>
  )
}