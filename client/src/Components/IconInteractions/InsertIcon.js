import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import icon from '../Images/Daco.png'

//Icon input
const InsertIcon = () => {
  return (
    <div className="iconWrapper">
      <img
        style={{
          width: '20%',
          height: '20%',
        }}
        src={`${icon}`}
      />
    </div>
  )
}

export default InsertIcon
