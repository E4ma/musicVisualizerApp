import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import NavbarButtons from './Components/Navbars/NavbarButtons';
import VisualizerPage from './Components/VisualizerPage';
import About from './Components/About';
import TemplatesPage from './Components/TemplatesPage';
import Home from './Components/Home';
import Login from './Components/Signin/Login';
// import NavbarButtons from './Components/LeftColumnItems/Navbars/NavbarButtons';
// import VisualizerPage from './Containers/VisualizerPage';

const App = () => {
  const [route, setRoute] = useState('signout');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [displayPage, setDisplayPage] = useState(Home);

  if (isSignedIn === 'signout') {
    setIsSignedIn(false)
  } else if (isSignedIn === 'signin') {
    setIsSignedIn(true)
  }

  const onRouteChange = (route) => {

    if (route === 'signout') {
      setRoute({ isSignedIn: false })

    } else if (route === 'signin') {
      setRoute({ isSignedIn: true })
    } else if (route === 'Home') {
      setDisplayPage(<Home onRouteChange={onRouteChange} />)
    } else if (route === 'About') {
      setDisplayPage(<About onRouteChange={onRouteChange} />)
    } else if (route === "TemplatesPage") {
      setDisplayPage(<TemplatesPage />)
    } else if (route === 'Login') {
      setDisplayPage(<Login onRouteChange={onRouteChange} />)
    }
    setRoute({ route: route })
  };


  return (
    <>
      <NavbarButtons isSignedIn={setIsSignedIn} onRouteChange={onRouteChange} />
     {displayPage}
      {/* <Footer /> */}
    </>
  );
}


export default App;
