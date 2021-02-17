import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'



const ImageList = (props) => {
  const [imagelist, setImagelist] = useState([])

  const getImage = async (image) => {
    console.log('This is in getImage', image)
    let picture
    const response = await axios.request({
      url: `http://localhost:5000/upload/media/${image}`,
      responseType: 'blob',
      method: 'GET',
    })
    picture.src = URL.createObjectURL(response.data)
    picture.load()
  }

  const getPictureList = async () => {
    let res = await axios.get('http://localhost:5000/upload/backgroundList')
    const data = res.data
    console.log('This is data', data)

    setImagelist(data)
    console.log('This is the list of background images', imagelist)
  }
  useEffect(() => {
    getPictureList()
  }, [props.uploadedImage])

  return (
    <>
      <br />
      <Card.Body className="playlistTab">
        <Card.Title>Backgrounds</Card.Title>
        <Card.Text className="tabScroll">
          <div>
            <ul
              onClick={(event) => {
                getImage(event.target.firstChild.data)
              }}
            >
              {imagelist?.map((picture, index) => {
                console.log('This is the picture with index', picture, index)
                return (
                  <li key={index} value={picture}>
                    {picture}
                  </li>
                )
              })}
            </ul>
          </div>
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default ImageList
