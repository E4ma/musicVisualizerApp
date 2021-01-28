import React, { createRef, useState, useEffect, useLayoutEffect } from 'react'
import songFile from './audio/TrimmedTrack2.mp3'
import songFile2 from './audio/Rodriguez - Inner City Blues.mp3'
import songFile3 from './audio/Lucky Dube-Too-Many-People.wav.mp3'

const UpdateWindowSize = () => {
  const [size, setSize] = useState([1000, 1000])
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
      // console.log(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

let songs = [
  {
    name: "Keep 'Em Coming",
    songFile: songFile,
    color: 'black',
    fontColor: 'black',
  },
  {
    name: 'Rodriguez - Inner City Blue',
    songFile: songFile2,
    color: 'red',
    fontColor: 'black',
  },
  {
    name: 'Lucky Dube-Too-Many-People',
    songFile: songFile3,
    color: 'pink',
    fontColor: 'darkpurple',
  },
]

let rafId
let analyser
// Changing Variables
let ctx, x_end, y_end, bar_height

// constants
// const width = window.innerWidth * (3 / 4) //
// const width = 1000
// const height = window.innerHeight
// const height = 1000
const bars = 999 //  max 1030 - leave it in 555
const bar_width = 2 //  good in 1
const radius = 0 // innercircle

let audioSource = new Audio(songs[0].songFile)

const Displayer = () => {
  const [width, height] = UpdateWindowSize()
  const [audio, setAudio] = useState(audioSource)
  const [songList, setSongList] = useState(songs)
  const [canvas, setCanvas] = useState(createRef())
  //
  const [audioContext, setAudioContext] = useState()
  const [isPaused, setIsPaused] = useState(true)
  //
  const [currentSong, setCurrentSong] = useState(0)
  const [frequency_array, setFrequencyArray] = useState()
  const [songName, setSongName] = useState(songs[0].name)
  const [textColor, setTextColor] = useState(songs[0].textColor)
  //changing the 2 lines below moves the canves
  const center_x = width / 2
  const center_y = height / 2
  function animationLooper(canvas) {
    canvas.width = width
    canvas.height = height

    ctx = canvas.getContext('2d')

    for (var i = 0; i < bars; i++) {
      //divide a circle into equal part
      const rads = (Math.PI * 2) / bars

      // Math is magical - you can make lots of visualizer
      // this 4.5 decides the canves size
      bar_height = frequency_array[i] * 2.5

      const x = center_x + Math.cos(rads * i) * radius
      const y = center_y + Math.sin(rads * i) * radius
      x_end = center_x + Math.cos(rads * i) * (radius + bar_height)
      y_end = center_y + Math.sin(rads * i) * (radius + bar_height)

      //draw a bar
      drawBar(x, y, x_end, y_end, frequency_array[i], ctx, canvas)
    }
  }

  function drawBar(x1 = 0, y1 = 0, x2 = 0, y2 = 0, frequency, ctx, canvas) {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    // gradient.addColorStop(0, "rgba(35, 7, 77, 1)");
    // gradient.addColorStop(1, "rgba(204, 83, 51, 1)");
    gradient.addColorStop(0, 'rgba(30, 17, 18, 11)')
    gradient.addColorStop(1, 'rgba(254, 283, 151, 121)')
    ctx.fillStyle = gradient

    const lineColor = 'rgb(' + frequency + ', ' + frequency + ', ' + 205 + ')'
    ctx.strokeStyle = lineColor
    ctx.lineWidth = bar_width
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }

  useEffect(() => {
    let context = new (window.AudioContext || window.webkitAudioContext)()
    let source = context.createMediaElementSource(audio)

    analyser = context.createAnalyser()
    source.connect(analyser)
    analyser.connect(context.destination)
    let frequencyArray = new Uint8Array(analyser.frequencyBinCount)
    setFrequencyArray(frequencyArray)
    //
    setAudioContext(context)
    //
  }, [audio])

  const togglePlay = () => {
    // const { audio } = this;
    if (audio.paused) {
      audioContext.resume()
      audio.play()
      setIsPaused(false)
      rafId = requestAnimationFrame(tick)
    } else {
      audio.pause()
      setIsPaused(true)
      cancelAnimationFrame(rafId)
    }
  }

  const changeSong = (songNumber) => {
    console.log('No8', songNumber)
    let { name, songFile, color, fontColor } = songList[songNumber]
    audio.src = songFile
    if (!isPaused) {
      audio.play()
    }
    setCurrentSong(songNumber)
    setSongName(name)
    // setBackgroundColor(color)
    setTextColor(fontColor)
  }

  const tick = () => {
    animationLooper(canvas.current)
    analyser.getByteTimeDomainData(frequency_array)
    rafId = requestAnimationFrame(tick)
  }

  return (
    <div className="audioControl Background ">
      <button
        onClick={togglePlay}
        style={
          isPaused
            // this is the play/pause button colors
            ? { backgroundColor: 'yellow' }
            : { backgroundColor: 'green' }

        }
      >
        {isPaused ? 'Paused' : 'PLAYING !!!'}
      </button>

      <button onClick={() => { changeSong((currentSong + 1) % 3) }} >
        Change Song my Friend
      </button>

      {/* Inserted by SN */}
      <div style={{ color: 'whitesmoke' }}>
        {songName}
      </div>


      <canvas ref={canvas} />

      {/* Removed by SN */}
      {/* < h3 style={{ color: textColor }}>{songName}</h3> */}
    </div>
  )
}

export default Displayer
