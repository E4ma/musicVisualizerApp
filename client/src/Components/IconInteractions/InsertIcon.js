import React from 'react'
import icon from '../Images/bobaFettIcon.webp'

//Icon input
const InsertIcon = () => {
  return (
    <div className="iconWrapper">
      <img
        style={{ width: '20%', height: '20%', position: 'static' }}
        src={`${icon}`}
      />
    </div>
  )
}

export default InsertIcon
