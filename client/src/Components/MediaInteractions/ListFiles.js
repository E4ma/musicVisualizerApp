import React, { useContext } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { PlaylistContext } from '../../contexts/PlaylistContext'

const ListFiles = ({ audio, background }) => {
  const { songList, loadSongIntoAudio } = useContext(PlaylistContext)

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
                loadSongIntoAudio(event.target.firstChild.data)
                console.log('getSong clicked in playlist', event)
              }}
            >
              {songList?.map((song, index) => {
                // console.log('This is the song with index', song, index)
                return (
                  <ListGroup.Item key={index} value={(song, picture)}>
                    {(song, picture)}
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

export default ListFiles
