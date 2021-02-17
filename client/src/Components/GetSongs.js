import React, { useState } from 'react'

const GetSongs = () => {
  const getSong = async (song) => {
    createAudioContext()
    const response = await axios.get(
      `http://localhost:5000/upload/media/${song}`,
      { responseType: 'blob' },
    )
    audio.src = URL.createObjectURL(response.data)
    audio.load()
    if (audio) {
      togglePlay()
    }
  }
}

export default GetSongs
