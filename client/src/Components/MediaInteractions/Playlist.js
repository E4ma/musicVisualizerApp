import React, { useContext, useEffect } from 'react'
import { PlaylistContext } from '../../contexts/PlaylistContext'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const Playlist = (props) => {
  const { songSelect, setsongSelect, getSong } = useContext(PlaylistContext)
  const getSongList = async () => {
    let res = await axios.get('http://localhost:5000/upload/list')
    const data = res.data
    console.log('This is data', data)

    setsongSelect(data)
    console.log('This is the songSelect', songSelect)
  }
  // console.log(uploadedFile)
  //Returns a list of files saved
  useEffect(() => {
    getSongList()
  }, [props.uploadedFile])
  return (
    <>
      <br />
      <Card.Body className="playlistTab">
        <Card.Title>Playlist</Card.Title>
        <Card.Text className="tabScroll">
          <div>
            <ul
              onClick={(event) => {
                getSong(event.target.firstChild.data)
              }}
            >
              {songSelect?.map((song, index) => {
                // console.log('This is the song with index', song, index)
                return (
                  <li key={index} value={song}>
                    {song}
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

export default Playlist
