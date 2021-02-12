import React from 'react'

import { Card } from 'react-bootstrap'

const Playlist = (props) => {
  return (
    <>
      <br />
      <Card.Body className="playlistTab">
        <Card.Title>Playlist</Card.Title>
        <Card.Text className="tabScroll">
          <div>
            <ol>
              {props.playlist?.map((song) => {
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
