import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const Playlist = () => {
  const [playlist, setPlaylist] = useState()

  useEffect(() => {
    const getSongList = async () => {
      let res = await axios.get('http://localhost:5000/upload/list')
      const data = res.data
      console.log('This is the list of songs', data)
      setPlaylist(data)
    }
    getSongList()
  }, [])

  return (
    <>
      <br />
      <Card.Body style={{ backgroundColor: 'black' }}>
        <Card.Title>Playlist</Card.Title>
        <Card.Text>
          <div>
            <ol>
              {playlist?.map((song) => {
                return <li key={song}>{song}</li>
              })}
            </ol>
          </div>
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default Playlist
