import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  // const [error, setError] = useState("")
  const [route, setRoute] = useState('Login')

  function onEmailChange (event) {
    setLoginEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setLoginPassword(event.target.value);
  }

  function onRouteChange(route) {
    setRoute(route);
  }

  function onSubmitLogin () {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.loadUser(user)
          this.onRouteChange('home');
        }
      })
  }

  return (

    // <Modal.Dialog centered>
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend >Sign In</legend>
              <div className="mt3">
                <label htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div>
              <div className="mv3">
                <label htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                />
              </div>
              <Button
              onClick={onSubmitLogin}
              >Submit</Button>
              <div className="lh-copy mt3">
              <p  onClick={onRouteChange('Register')} className="f6 link dim black db pointer">Register</p>
            </div>
            </fieldset>

    // </Modal.Dialog>

  )
}

export default Login
