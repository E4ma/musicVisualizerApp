import React, { createRef, useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import background from "./Images/background1.jpg";

const UpdateWindowSize = () => {
  const [size, setSize] = useState([1000, 1000]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

let rafId;

let ctx, x_end, y_end, bar_height;

const bars = 900; //  max 1030 - leave it in 555
const bar_width = 2; //  good in 1
const radius = 0; // innercircle
let audio;
let audioContext;
let source;
let analyser;
let frequency_array;
const createAudioContext = () => {
  audio = new Audio();

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  source = audioContext.createMediaElementSource(audio);
  analyser = audioContext.createAnalyser();
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  frequency_array = new Uint8Array(analyser.frequencyBinCount);
};

const Displayer = () => {
  const [width, height] = UpdateWindowSize();
  const [canvas, setCanvas] = useState(createRef());
  const [isPaused, setIsPaused] = useState(true);
  const [songSelect, setsongSelect] = useState();
  const [currentSong, setCurrentSong] = useState(0);
  const [sliderM, setSliderM] = useState(1);
  const [sliderN, setSliderN] = useState(1);
  const center_x = width / 2;
  const center_y = height / 2;
  useEffect(() => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
    }
  }, [sliderM, sliderN]);
  const getSong = async (song) => {
    createAudioContext();
    const response = await axios.get(
      `http://localhost:5000/upload/media/${song}`,
      { responseType: "blob" }
    );
    audio.src = URL.createObjectURL(response.data);
    audio.load();
    // audio.play()
  };
  function animationLooper(canvas) {
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
    for (let i = 0; i < bars; i++) {
      //divide a circle into equal part
      const rads = (Math.PI * 2) / bars;
      // Math is magical - you can make lots of visualizer
      // this 4.5 decides the canves size
      bar_height = frequency_array[i] * 2.5;
      const x = center_x + Math.cos(rads * i) * radius;
      const y = center_y + Math.sin(rads * i) * radius;
      x_end = center_x + Math.cos(rads * sliderN * i) * (radius + bar_height);
      y_end =
        center_y +
        Math.sin(rads * sliderM * i + (Math.PI / 640) * new Date()) *
          (radius + bar_height);
      //draw a bar
      // const x = bar_width / 2 + (i * window.innerWidth) / bars;
      // const y = 900;
      // const y_end = 800 - bar_height;
      // const x_end = x;
      drawBar(x, y, x_end, y_end, i, ctx, canvas);
    }
  }
  function drawBar(x1 = 0, y1 = 0, x2 = 0, y2 = 0, i, ctx) {
    i = (i + new Date().getTime() * 2) % 600; //  2 is an OK number,  600/6 =100 integer is good
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, "rgba(0, 255, 0, 255)");
    gradient.addColorStop(1, "rgba(254, 0, 0, 255)");
    ctx.fillStyle = "pink";
    let lineColor;
    if (i < 150) {
      // lineColor = "red"
      lineColor =
        "rgb(" +
        Math.abs(275 - i) +
        ", " +
        Math.abs(175 - i / 2) +
        ", " +
        1000 +
        ")";
    } else if (i < 300) {
      // lineColor="blue"
      lineColor =
        "rgb(" +
        1000 +
        ", " +
        Math.abs(275 - i) +
        ", " +
        Math.abs(175 - i / 2) +
        ")";
    } else if (i < 450) {
      // lineColor="green"
      lineColor =
        "rgb(" +
        Math.abs(175 - i / 2) +
        ", " +
        1000 +
        ", " +
        Math.abs(275 - i) +
        ")";
    } else if (i < 600) {
      // lineColor = "red"
      lineColor =
        "rgb(" +
        Math.abs(175 - i / 2) +
        ", " +
        1000 +
        ", " +
        Math.abs(275 - i) +
        ")";
    } else if (i < 750) {
      // lineColor="blue"
      lineColor =
        "rgb(" +
        1000 +
        ", " +
        Math.abs(275 - i) +
        ", " +
        Math.abs(175 - i / 2) +
        ")";
    } else if (i < 900) {
      // lineColor="green"
      lineColor =
        "rgb(" +
        Math.abs(275 - i) +
        ", " +
        Math.abs(175 - i / 2) +
        ", " +
        1000 +
        ")";
    }

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = bar_width;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  const togglePlay = () => {
    // createAudioContext()
    if (audio.paused) {
      audioContext.resume();
      audio.play();
      setIsPaused(false);
      rafId = requestAnimationFrame(tick);
    } else {
      audio.pause();
      setIsPaused(true);
      cancelAnimationFrame(rafId);
    }
  };

  function tick() {
    animationLooper(canvas.current);
    analyser.getByteTimeDomainData(frequency_array);
    rafId = requestAnimationFrame(tick);
  }

  useEffect(() => {
    const getSongList = async () => {
      let res = await axios.get("http://localhost:5000/upload/list");
      setsongSelect(res.data);
      console.log(setsongSelect);
    };
    getSongList();
  }, []);

  return (
    <div
      className="audioControlBackground"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="buttonWrapper">
        <button
          onClick={() => {
            if (audio) {
              togglePlay();
            }
          }}
          style={{
            width: "200px",
            backgroundColor: isPaused
              ? // this is the play/pause button colors
                "yellow"
              : "green",
          }}
        >
          {isPaused ? "Play" : "Pause"}
        </button>

        <select
          onChange={(e) => {
            getSong(e.target.value);
          }}
        >
          {" "}
          <option>Choose A Song</option>
          {songSelect &&
            songSelect.map((song) => {
              return <option value={song}>{song}</option>;
            })}
        </select>
      </div>
      <div className="songInfoWrapper">
        {/* Inserted by SN */}

        {/* Removed by SN */}
        {/* < h3 style={{ color: textColor }}>{songName}</h3> */}
      </div>
      <div className="canvasWrapper">
        {audio && audio.paused ? <canvas /> : <canvas ref={canvas} />}
      </div>
      <div className="sliders">
        {" "}
        <div>{sliderM}</div>
        <input
          className="slider"
          type="range"
          min="0"
          max="8"
          step=".5"
          onChange={(e) => {
            setSliderM(e.target.value);
          }}
          value={sliderM}
        />{" "}
        <div>{sliderN}</div>
        <input
          className="slider1"
          type="range"
          min="0"
          max="8"
          step=".5"
          onChange={(e) => {
            setSliderN(e.target.value);
          }}
          value={sliderN}
        />
      </div>
    </div>
  );
};

export default Displayer;
