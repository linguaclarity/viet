'use client'

import React, { useState, useRef } from 'react'

export default function AudioPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <audio
            ref={audioRef}
            src={src}
            className="w-full"
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      </div>
    </div>
  )
}