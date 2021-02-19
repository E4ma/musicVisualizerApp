import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { PlaylistContext } from '../../contexts/PlaylistContext'

const Playlist = (props) => {
  const {
    songSelect,
    getSong,
    // setsongSelect,
    // getSongList,
    // audio,
    // frequency_array,
    // audioContext,
    // analyser,
  } = useContext(PlaylistContext)

  return (
    <>
      <br />
      <Card.Body className="playlistTab">
        <Card.Title className="mb-2 text-muted">Playlist</Card.Title>
        <Card.Text className="tabScroll">
          <div>
            <ul
              onClick={(event) => {
                getSong(event.target.firstChild.data)
                // console.log(
                //   'getSong clicked in playlist',
                //   event.target.firstChild.data,
                // )
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
