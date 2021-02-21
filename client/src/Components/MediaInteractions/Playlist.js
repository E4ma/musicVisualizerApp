import React, { useContext, useState } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { PlaylistContext } from '../../contexts/PlaylistContext'

const Playlist = (props) => {
  const { getSong, songList, loadSongIntoAudio } = useContext(PlaylistContext)
  // const [songName, setSongName] = useState('')
  return (
    <>
      <br />
      <Card.Body className="playlistTab" style={{ overflow: 'auto' }}>
        <Card.Title className="mb-2 text-muted">Playlist</Card.Title>
        <Card.Text className="tabScroll">
          <div>
            <ListGroup
              action
              onClick={(event) => {
                // setSongName(event.target.firstChild.data)
                getSong(event.target.firstChild.data)
                console.log(
                  'getSong clicked in playlist',
                  event.target.firstChild.data,
                )
              }}
            >
              {songList?.map((song, index) => {
                // console.log('This is the song with index', song, index)
                return (
                  <ListGroup.Item key={index} value={song}>
                    {song}
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </div>
        </Card.Text>
      </Card.Body>
    </>
  )
}

export default Playlist
