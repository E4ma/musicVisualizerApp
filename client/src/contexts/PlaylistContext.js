import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const PlaylistContext = createContext()

const PlaylistContextProvider = (props) => {
  const [songList, setSongList] = useState([])
  // const [songName, setSongName] = useState('')
  const [currentSongIndex, setCurrentSongIndex] = useState(-1)
  const [audio, setAudio] = useState()
  const [audioContext, setAudioContext] = useState()
  const [source, setSource] = useState()
  const [analyser, setAnalyser] = useState()
  const [frequency_array, setFrequency_array] = useState()
  const [duration, setDuration] = useState()
  const [curTime, setCurTime] = useState()
  const [clickedTime, setClickedTime] = useState()

  // createAudioContextSingleton runs the file only once not again and again
  const createAudioContextSingleton = () => {
    if (!audio) {
      let a = new Audio()
      console.log('CreateAudioContextSingleton: a =', a)
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

  const getSong = (song) => {
    if (!audio) {
      createAudioContextSingleton()
      console.log('this is createAudioSingleton', audio)
    }
    console.log('this is song =', song)

    console.log('PlaylistContext: songList[currentSongIndex]', currentSongIndex)
  }

  const loadSongIntoAudio = async () => {
    if (!songList[currentSongIndex] || !audio) {
      console.log('nothing here')
      return
    }

    try {
      const response = await axios.request({
        url: `http://localhost:5000/upload/media/${songList[currentSongIndex]}`,
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
      // console.log('PlaylistContext: Audio in getSong= ', audio)

      audio.src = URL.createObjectURL(response.data)
      console.log('PlaylistContext: audio.src', audio.src)
      audio.load()
    } catch (ex) {
      console.error(`PlaylistContext: exception in getSong(): `, ex.message)
    }
    // audio.play()
  }

  const getSongList = async () => {
    let res = await axios.get('http://localhost:5000/upload/list')
    const data = res.data
    console.log('This is data', data)

    setSongList(data)
  }
  // console.log(uploadedFile)
  //Returns a list of files saved
  useEffect(() => {
    getSongList()
  }, [])

  useEffect(() => {
    loadSongIntoAudio()
  }, [currentSongIndex, audio])

  //Scrollbar
  // useEffect(() => {
  //   const setAudiodata = () => {
  //     setDuration(audio.duration)
  //     setCurTime(audio.currentTime)
  //   }

  //   const setAudioTime = () => {
  //     setCurTime(audio.currentTime)
  //   }

  //   audio.addEventListener('loadeddata', setAudioData)
  //   audio.addEventListener('timeupdate', setAudioTime)

  //   playing ? audio.play() : audio.pause()

  //   if (clickedTime && clickedTime !== curTime) {
  //     audio.currentTime = clickedTime
  //     setClickedTime(null)
  //   }

  //   return () => {
  //     audio.removeEventListener('loadeddata', setAudioData)
  //     audio.removeEventListener('timeupdate', setAudioTime)
  //   }
  // }, [])
  return (
    <PlaylistContext.Provider
      value={{
        createAudioContextSingleton,
        currentSongIndex,
        setCurrentSongIndex,
        songList,
        setSongList,
        getSong,
        getSongList,
        loadSongIntoAudio,
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
