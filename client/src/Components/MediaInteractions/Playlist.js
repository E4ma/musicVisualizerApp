import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

let audio
let audioContext
let source
let analyser
let frequency_array
const createAudioContext = () => {
  audio = new Audio()

  audioContext = new (window.AudioContext || window.webkitAudioContext)()
  source = audioContext.createMediaElementSource(audio)
  analyser = audioContext.createAnalyser()
  source.connect(analyser)
  analyser.connect(audioContext.destination)
  frequency_array = new Uint8Array(analyser.frequencyBinCount)
}

const Playlist = (props) => {
  const [playlist, setPlaylist] = useState([])

  const getSong = async (song) => {
    console.log('This is in getSong', song)
    createAudioContext()
    const response = await axios.request({
      url: `http://localhost:5000/upload/media/${song}`,
      responseType: 'blob',
      method: 'GET',
    })
    audio.src = URL.createObjectURL(response.data)
    // console.log('audio.src', audio.src)
    audio.load()
    // audio.play()
  }

  const getSongList = async () => {
    let res = await axios.get('http://localhost:5000/upload/list')
    const data = res.data
    console.log('This is data', data)

    setPlaylist(data)
    console.log('This is the playlist', playlist)
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
        <Card.Title className="mb-2 text-muted">Playlist</Card.Title>
        <Card.Text className="tabScroll">
          <div>
            <ul
              onClick={(event) => {
                getSong(event.target.firstChild.data)
              }}
            >
              {playlist?.map((song, index) => {
                console.log('This is the song with index', song, index)
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
