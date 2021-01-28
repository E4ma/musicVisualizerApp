import React from 'react'
import icon from '../Images/image.png'

//Icon input
const InsertIcon = () => {
  return (
    // const icon = axios.get('http://localhost:5000/server')
    <div className="iconWrapper" style={{ top: '50px', left: '-20vw' }}>
      <img style={{ width: '30%', height: '30%' }} src={`${icon}`} />
    </div>
  )
}

export default InsertIcon
