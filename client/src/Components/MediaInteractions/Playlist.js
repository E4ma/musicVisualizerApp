import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

// const createAudioContext = () => {
//   let audio = new Audio()

//   let audioContext = new (window.AudioContext || window.webkitAudioContext)()
//   let source = audioContext.createMediaElementSource(audio)
//   let analyser = audioContext.createAnalyser()
//   let source.connect(analyser)
//   analyser.connect(audioContext.destination)
//   let frequency_array = new Uint8Array(analyser.frequencyBinCount)
// }

const Playlist = (props) => {
  const [playlist, setPlaylist] = useState()
  // const getSong = async (song) => {
  //   createAudioContext()
  //   const response = await axios.get(
  //     `http://localhost:5000/upload/media/${song}`,
  //     { responseType: 'blob' },
  //   )
  //   audio.src = URL.createObjectURL(response.data)
  //   audio.load()
  //   // audio.play()
  // }

  // console.log(uploadedFile)
  useEffect(() => {
    const getSongList = async () => {
      let res = await axios.get('http://localhost:5000/upload/list')
      const data = res.data
      setPlaylist(data)
    }
    getSongList()
  }, [props.uploadedFile])
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
