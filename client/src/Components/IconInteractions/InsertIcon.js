import React from 'react'
import icon from '../Images/bobaFettIcon.webp'

//Icon input
const InsertIcon = () => {
  return (
    <div className="iconWrapper" style={{ top: '50px', left: '-20vw' }}>
      <img style={{ width: '30%', height: '30%' }} src={`${icon}`} />
    </div>
  )
}

export default InsertIcon
