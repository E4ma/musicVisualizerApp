import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const Playlist = ({ uploadedFile }) => {
  const [playlist, setPlaylist] = useState()
  console.log(uploadedFile)
  useEffect(() => {
    const getSongList = async () => {
      let res = await axios.get('http://localhost:5000/upload/list')
      const data = res.data
      setPlaylist(data)
    }
    getSongList()
  }, [uploadedFile])
  return (
    <>
      <br />
      <Card.Body className="playlistTab">
        <Card.Title>Playlist</Card.Title>
        <Card.Text className="tabScroll">
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
