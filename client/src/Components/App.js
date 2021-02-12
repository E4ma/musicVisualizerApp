import React, { useState } from 'react'
import './App.css'
import Signup from './Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import About from './About'
import TemplatesPage from './TemplatesPage'
import Home from './Home'
import MyAccount from './MyAccount'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'




function App(){

  return(
      <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
      >
        <div className="w-100" >

    <Router>
      
    {/* <Navigation /> */}
      <AuthProvider>
        <Switch>
          <Route path="/Home" component={Home} />
          <PrivateRoute exact path="/" component={MyAccount} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
        </div>

      </Container>
  )
}

// const App = () => {
//   const [route, setRoute] = useState('signout')
//   // const [isSignedIn, setIsSignedIn] = useState(false)
//   const [displayPage, setDisplayPage] = useState(Home)

//   // if (isSignedIn === 'signout') {
//   //   setIsSignedIn(false)
//   // } else if (isSignedIn === 'signin') {
//   //   setIsSignedIn(true)
//   // }

//   const onRouteChange = (route) => {
//  if (route === 'Home') {
//       setDisplayPage(<Home />)
//     } else if (route === 'About') {
//       setDisplayPage(<About />)
//     } else if (route === 'TemplatesPage') {
//       setDisplayPage(<TemplatesPage />)
//     }
//     setRoute({ route: route })
//   }

//   // if (route === 'signout') {
//   //   setRoute({ isSignedIn: false })
//   // } else if (route === 'signin') {
//   //   setRoute({ isSignedIn: true })
//   // } else

//   return (
//     <>
//       <div className="Frontscr">
//         <Navigation  onRouteChange={onRouteChange} />
//         {displayPage}
//       </div>
//     </>
//   )
// }

export default App

// isSignedIn={setIsSignedIn}