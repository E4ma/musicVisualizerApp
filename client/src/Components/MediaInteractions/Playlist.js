import React, { useContext } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { PlaylistContext } from '../../contexts/PlaylistContext'

const Playlist = (props) => {
  const { setCurrentSongIndex, songList } = useContext(PlaylistContext)

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`
  }
  return (
    <>
      <br />
      <Card.Body className="playlistTab" style={{ overflow: 'auto' }}>
        <Card.Title className="mb-2 text-muted">Playlist</Card.Title>
        <Card.Text className="tabScroll">
          <div>
            <ListGroup action>
              {songList?.map((song, index) => {
                // console.log('This is the song with index', song, index)

                return (
                  <ListGroup.Item
                    onClick={() => setCurrentSongIndex(index)}
                    key={generateKey(index)}
                    value={song}
                  >
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
