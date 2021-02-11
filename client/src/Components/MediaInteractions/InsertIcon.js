import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import icon from '../Images/Daco.png'

//Icon input
const InsertIcon = () => {
  return (
    <div className="iconWrapper">
      <img
        style={{
          width: '15%',
          height: '15%',
        }}
        src={`${icon}`}
      />
    </div>
  )
}

export default InsertIcon
