import React, {
  createRef,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
} from 'react'
import background from './Images/background1.jpg'
import { PlaylistContext } from '../contexts/PlaylistContext'

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
    songSelect,
    getSong,
    audio,
    frequency_array,
    audioContext,
    analyser,
  } = useContext(PlaylistContext)
  //This is the state that lets us know what the current song loaded is
  const [currentSong, setCurrentSong] = useState(-1)

  const [width, height] = UpdateWindowSize()
  const [canvas, setCanvas] = useState(createRef())
  //State for whether the song is playing or not
  const [isPaused, setIsPaused] = useState(true)
  //Slider for changing peak lengths
  const [sliderM, setSliderM] = useState(1)
  const [sliderN, setSliderN] = useState(1)
  const center_x = width / 2
  const center_y = height / 2

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

  return (
    <div
      className="audioControlBackground"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="buttonWrapper">
        {/* This is to play the previous song */}
        <button
          onClick={() => {
            if (audio && !isPaused) {
              togglePlay()
            }
            if (currentSong === 0) {
              setCurrentSong((curr) => songSelect.length - 1)
              getSong(songSelect[songSelect.length - 1]).then(() =>
                togglePlay(),
              )
            } else {
              setCurrentSong((curr) => (curr - 1) % songSelect.length)
              getSong(
                songSelect[(currentSong - 1) % songSelect.length],
              ).then(() => togglePlay())
            }
            // togglePlay();
          }}
        >
          Previous
        </button>
        {/* The play button */}
        <button
          onClick={() => {
            //console.log('Is audio being called', audio)
            if (audio) {
              togglePlay()
            }
          }}
          style={{
            width: '150px',
            backgroundColor: isPaused
              ? // this is the play/pause button colors
                'yellow'
              : 'green',
          }}
        >
          {isPaused ? 'Play' : 'Pause'}
        </button>
        {/* Plays the next song */}
        <button
          onClick={() => {
            if (audio && !isPaused) {
              togglePlay()
            }
            setCurrentSong((curr) => (curr + 1) % songSelect.length)
            getSong(
              songSelect[(currentSong + 1) % songSelect.length],
            ).then(() => togglePlay())
          }}
        >
          Next
        </button>
        {songSelect && (
          <select
            value={songSelect[currentSong]}
            onChange={(e) => {
              getSong(e.target.value)
              let foo = (e.target.selectedIndex - 1) % songSelect.length
              setCurrentSong(foo)
            }}
          >
            {' '}
            <option>Choose A Song</option>
            {songSelect &&
              songSelect.map((song) => {
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
