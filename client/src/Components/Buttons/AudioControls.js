import React from 'react'
import play from './icons/play.png'
import pause from './icons/pause.png'
import next from './icons/next.png'
import previous from './icons/previous.png'

const AudioControls = ({ isPaused, onClickPrev, onClickNext, playTrack }) => {
  return (
    <div>
      {/* Previous song button */}
      <button className="prevButton" onClick={onClickPrev}>
        <img src={previous} height={30} width={30} />
      </button>
      {/* The PlayButton
    {isPaused ? 'Play' : 'Pause'} */}
      {isPaused ? (
        <button className="playButton" onClick={() => playTrack(true)}>
          <img src={play} height={30} width={30} />
        </button>
      ) : (
        <button className="pauseButton" onClick={() => playTrack(false)}>
          <img src={pause} height={30} width={30} />
        </button>
      )}
      <button className="nextButton" onClick={onClickNext}>
        <img src={next} height={30} width={30} />
      </button>
    </div>
  )
}

export default AudioControls
