import React from 'react'
import Particles from "react-tsparticles"
import './App.css'
import Signup from './Signup'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './About'
import Editor from './Home'
import Profile from './MyAccount'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'

function App() {
  const particleParams = {
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: { enable: false, force: 2, smooth: 10 }
        },
        resize: true,
      },
      modes: {
        bubble: { distance: 200, duration: 2, opacity: 0, size: 0, speed: 3 },
        grab: { distance: 400, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
        repulse: { distance: 400, duration: 0.4 }
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: { enable: false, rotateX: 600, rotateY: 600 },
        bounce: false,
        direction: "none",
        enable: true,
        outMode: "out",
        random: true,
        speed: 0.3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 600
      },
      opacity: {
        anim: { enable: true, opacity_min: 0.3, speed: 5, sync: false },
        random: {
          enable: true,
          minimumValue: 0.3
        },
        value: 0.6
      },
      shape: {
        type: "circle",
      },
      size: {
        anim: { enable: true, size_min: 0.3, speed: 4, sync: false },
        random: false,
        value: 1
      }
    },
    detectRetina: true,
  }

  return (
    <div>
      <Particles className="particles" params={particleParams} />
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/Login" component={Login} />
            <PrivateRoute exact path="/MyAccount" component={Profile} />
            <PrivateRoute exact path="/Home" component={Editor} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={About} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App

