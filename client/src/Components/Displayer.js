import React, {
  createRef,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
} from 'react'
import axios from 'axios'
import background from './Images/background1.jpg'
// import songList from './MediaInteractions/Playlist'
// import pictureList from './MediaInteractions/ImageList'
import { PlaylistContext } from '../contexts/PlaylistContext'
import AudioControls from './Buttons/AudioControls'

const UpdateWindowSize = () => {
  const [size, setSize] = useState([1000, 1000])
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

let rafId

let ctx, x_end, y_end, bar_height

const bars = 900 //  max 1030 - leave it in 555
const bar_width = 2 //  good in 1
const radius = 0 // innercircle

const Displayer = (props) => {
  const {
    songName,
    songList,
    getSong,
    loadSongIntoAudio,
    audio,
    frequency_array,
    audioContext,
    analyser,
  } = useContext(PlaylistContext)
  //This is the state that lets us know what the current song loaded is

  const [width, height] = UpdateWindowSize()
  const [canvas, setCanvas] = useState(createRef())
  //State for whether the song is playing or not
  const [isPaused, setIsPaused] = useState(true)
  const [pictureSelect, setpictureSelect] = useState()
  const [currentPicture, setCurrentPicture] = useState(-1)
  const [backgroundUrl, setBackgroundUrl] = useState(background)
  const [currentSongIndex, setCurrentSongIndex] = useState(-1)
  //Slider for changing peak lengths
  const [sliderM, setSliderM] = useState(1)
  const [sliderN, setSliderN] = useState(1)
  const center_x = width / 2
  const center_y = height / 2

  let picture
  const getPicture = async (picture) => {
    const response = await axios.get(
      `http://localhost:5000/upload/image/${picture}`,
      { responseType: 'blob' },
    )
    console.log(response.data)
    setBackgroundUrl(URL.createObjectURL(response.data))

    // picture.load()
    // let pictureURL = picture.src
  }

  function animationLooper(canvas) {
    canvas.width = width
    canvas.height = height
    ctx = canvas.getContext('2d')
    for (let i = 0; i < bars; i++) {
      //divide a circle into equal part
      const rads = (Math.PI * 2) / bars
      // Math is magical - you can make lots of visualizer
      // this 4.5 decides the canves size
      bar_height = frequency_array[i] * 2.5
      const x = center_x + Math.cos(rads * i) * radius
      const y = center_y + Math.sin(rads * i) * radius
      x_end =
        center_x +
        Math.cos(rads * sliderN * i + (Math.PI / 640) * new Date()) *
          (radius + bar_height)
      y_end =
        center_y +
        Math.sin(rads * sliderM * i + (Math.PI / 640) * new Date()) *
          (radius + bar_height)
      //draw a bar
      // const x = bar_width / 2 + (i * window.innerWidth) / bars;
      // const y = 900;
      // const y_end = 800 - bar_height;
      // const x_end = x;
      drawBar(x, y, x_end, y_end, i, ctx, canvas)
    }
  }

  function drawBar(x1 = 0, y1 = 0, x2 = 0, y2 = 0, i, ctx) {
    i = (i + new Date().getTime() * 2) % 600 //  2 is an OK number,  600/6 =100 integer is good
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
    gradient.addColorStop(0, 'rgba(0, 255, 0, 255)')
    gradient.addColorStop(1, 'rgba(254, 0, 0, 255)')
    ctx.fillStyle = 'pink'
    let lineColor
    if (i < 150) {
      // lineColor = "red"
      lineColor =
        'rgb(' +
        Math.abs(275 - i) +
        ', ' +
        Math.abs(175 - i / 2) +
        ', ' +
        1000 +
        ')'
    } else if (i < 300) {
      // lineColor="blue"
      lineColor =
        'rgb(' +
        1000 +
        ', ' +
        Math.abs(275 - i) +
        ', ' +
        Math.abs(175 - i / 2) +
        ')'
    } else if (i < 450) {
      // lineColor="green"
      lineColor =
        'rgb(' +
        Math.abs(175 - i / 2) +
        ', ' +
        1000 +
        ', ' +
        Math.abs(275 - i) +
        ')'
    } else if (i < 600) {
      // lineColor = "red"
      lineColor =
        'rgb(' +
        Math.abs(175 - i / 2) +
        ', ' +
        1000 +
        ', ' +
        Math.abs(275 - i) +
        ')'
    } else if (i < 750) {
      // lineColor="blue"
      lineColor =
        'rgb(' +
        1000 +
        ', ' +
        Math.abs(275 - i) +
        ', ' +
        Math.abs(175 - i / 2) +
        ')'
    } else if (i < 900) {
      // lineColor="green"
      lineColor =
        'rgb(' +
        Math.abs(275 - i) +
        ', ' +
        Math.abs(175 - i / 2) +
        ', ' +
        1000 +
        ')'
    }

    ctx.strokeStyle = lineColor
    ctx.lineWidth = bar_width
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }

  //Sets the function to toggle if a song is playing or not
  const togglePlay = () => {
    // Plays audio when called
    console.log('Audio clicked in Displayer', audio)
    if (audio.paused) {
      audioContext.resume()
      audio.play()
      setIsPaused(false)
      rafId = requestAnimationFrame(tick)
    } else {
      //pauses audio
      audio.pause()
      setIsPaused(true)
      cancelAnimationFrame(rafId)
    }
  }

  const prevTrack = () => {
    if (audio && !isPaused) {
      togglePlay()
    }
    if (currentSongIndex === 0) {
      setCurrentSongIndex((curr) => songList.length - 1)
      getSong(songList[songList.length - 1])
    } else {
      setCurrentSongIndex((curr) => (curr - 1) % songList.length)
      getSong(songList[(currentSongIndex - 1) % songList.length])
    }
  }

  const playTrack = () => {
    if (audio) {
      togglePlay()
    }
  }

  const nextTrack = () => {
    if (audio && !isPaused) {
      togglePlay()
    }
    setCurrentSongIndex((curr) => (curr + 1) % songList.length)
    getSong(songList[(currentSongIndex + 1) % songList.length])
  }

  useEffect(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(tick)
    }
  }, [sliderM, sliderN])

  function tick() {
    animationLooper(canvas.current)
    analyser.getByteTimeDomainData(frequency_array)
    rafId = requestAnimationFrame(tick)
  }

  //console.log('This is the songList that is being imported', songList)

  useEffect(() => {
    const getPictureList = async () => {
      let res = await axios.get('http://localhost:5000/upload/backgroundList')
      setpictureSelect(res.data)
      //console.log(setSongList)
    }
    getPictureList()
  }, [])

  return (
    <div
      className="audioControlBackground"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="buttonWrapper">
        <AudioControls
          playTrack={playTrack}
          onClickPrev={prevTrack}
          onClickNext={nextTrack}
          isPaused={isPaused}
        />

        {pictureSelect && (
          <select
            value={pictureSelect[currentPicture]}
            onChange={(e) => {
              getPicture(e.target.value)
              setCurrentPicture(
                (e.target.selectedIndex - 1) % pictureSelect.length,
              )
            }}
          >
            {' '}
            <option>Pick an Image</option>
            {pictureSelect &&
              pictureSelect.map((picture) => {
                return <option value={picture}>{picture}</option>
              })}
          </select>
        )}
      </div>
      <div className="songInfoWrapper">
        <div style={{ color: 'red' }}>{songName}</div>
        {songList && (
          <select
            value={songList[currentSongIndex]}
            onChange={(e) => {
              console.log('e', e.target.value)
              getSong(e.target.value)
              let foo = (e.target.selectedIndex - 1) % songList.length
              setCurrentSongIndex(foo)
            }}
          >
            {' '}
            <option>Choose A Song</option>
            {songList &&
              songList.map((song) => {
                return <option value={song}>{song}</option>
              })}
          </select>
        )}
      </div>
      <div className="songInfoWrapper"></div>
      <div className="canvasWrapper">
        {audio && audio.paused ? <canvas /> : <canvas ref={canvas} />}
      </div>
      <div className="sliders">
        {' '}
        <div>{sliderM}</div>
        <p>X</p>
        <input
          className="slider"
          type="range"
          min="0"
          max="8"
          step=".1"
          onChange={(e) => {
            setSliderM(e.target.value)
          }}
          value={sliderM}
        />{' '}
        <div>{sliderN}</div>
        <p>Y</p>
        <input
          className="slider1"
          type="range"
          min="0"
          max="8"
          step=".1"
          onChange={(e) => {
            setSliderN(e.target.value)
          }}
          value={sliderN}
        />
      </div>
    </div>
  )
}

export default Displayer
