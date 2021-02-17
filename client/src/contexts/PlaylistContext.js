import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PlaylistContext = createContext()

const PlaylistContextProvider = (props) => {
  const [songSelect, setsongSelect] = useState([])

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

  const getSong = async (song) => {
    console.log('This is in getSong', song)
    createAudioContext()
    const response = await axios.request({
      url: `http://localhost:5000/upload/media/${song}`,
      responseType: 'blob',
      method: 'GET',
    })
    audio.src = URL.createObjectURL(response.data)
    console.log('audio.src', audio.src)
    audio.load()
    // audio.play()
  }

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
  }, [])

  return (
    <PlaylistContext.Provider
      value={{
        createAudioContext,
        songSelect,
        setsongSelect,
        getSong,
        getSongList,
        audio,
        frequency_array,
        audioContext,
        analyser,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  )
}

export default PlaylistContextProvider
