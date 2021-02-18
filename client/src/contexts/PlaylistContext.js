import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PlaylistContext = createContext()

const PlaylistContextProvider = (props) => {
  const [songSelect, setsongSelect] = useState([])
  const [audio, setAudio] = useState()
  const [audioContext, setAudioContext] = useState()
  const [source, setSource] = useState()
  const [analyser, setAnalyser] = useState()
  const [frequency_array, setFrequency_array] = useState()

  // createAudioContextSingleton runs the file only once not again and again
  const createAudioContextSingleton = () => {
    if (!audio) {
      let a = new Audio()

      let ac = new (window.AudioContext || window.webkitAudioContext)()
      let s = ac.createMediaElementSource(a)
      let analy = ac.createAnalyser()
      s.connect(analy)
      analy.connect(ac.destination)
      let freqArr = new Uint8Array(analy.frequencyBinCount)

      setAudio(a)
      setAnalyser(analy)
      setSource(s)
      setAudioContext(ac)
      setFrequency_array(freqArr)
    }
  }

  const getSong = async (song) => {
    // console.log(`This is in getSong(): (${song})`)
    createAudioContextSingleton()
    try {
      const response = await axios.request({
        url: `http://localhost:5000/upload/media/${song}`,
        responseType: 'blob',
        method: 'GET',
      })
      let MIN_URL_LENGTH = 22

      if (!response.data || response.data.length <= MIN_URL_LENGTH) {
        throw new Error(
          `Error with respond.data located in /upload/media:`,
          response.data,
        )
      }
      audio.src = URL.createObjectURL(response.data)
      console.log('audio.src in PlaylistContext', audio.src)
      audio.load()
    } catch (ex) {
      console.error(`exception in getSong(): `, ex.message)
    }
    // audio.play()
  }

  const getSongList = async () => {
    let res = await axios.get('http://localhost:5000/upload/list')
    const data = res.data
    console.log('This is data', data)

    setsongSelect(data)
    // console.log('This is the songSelect', songSelect)
  }
  // console.log(uploadedFile)
  //Returns a list of files saved
  useEffect(() => {
    getSongList()
  }, [])

  return (
    <PlaylistContext.Provider
      value={{
        createAudioContextSingleton,
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
