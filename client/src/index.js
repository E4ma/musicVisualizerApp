import React from 'react'
import ReactDOM from 'react-dom'

//SN: we cant use both (semantec and bootstrap)
// import 'semantic-ui-css/semantic.min.css' //Semantic hooked to displayer.js
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
