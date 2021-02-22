import React from 'react'
// import { Container, Row, Col, Image } from 'react-bootstrap'


//Icon input
const InsertIcon = (props) => {



  return (
    <div className="iconWrapper">
      <img
        style={{
          width: '15%',
          height: '15%',
        }}
        src={`${props.iconUrl}`}
      />
    </div>
  )
}

export default InsertIcon
