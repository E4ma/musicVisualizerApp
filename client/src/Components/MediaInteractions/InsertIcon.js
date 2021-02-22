import React from 'react'
// import { Container, Row, Col, Image } from 'react-bootstrap'
import icon from '../Images/Daco.png'

//Icon input
const InsertIcon = () => {

  // const [iconUrl, setIconUrl] = useState(icon)
  // const getPicture = async (picture) => {
  //   const response = await axios.get(
  //     `http://localhost:5000/upload/image/${picture}`,
  //     { responseType: 'blob' },
  //   )
  //   console.log(response.data)
  //   setBackgroundUrl(URL.createObjectURL(response.data))

  // }

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
