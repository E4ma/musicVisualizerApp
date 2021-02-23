import React from 'react'


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
        alt=''
      />
    </div>
  )
}

export default InsertIcon
