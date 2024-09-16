import { useState, useRef } from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

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
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Audio Player</h2>
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isPlaying ? (
              <PauseIcon className="h-8 w-8" />
            ) : (
              <PlayIcon className="h-8 w-8" />
            )}
          </button>
          <audio
            ref={audioRef}
            src="/path-to-your-audio-file.mp3"
            className="w-full"
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      </div>
    </div>
  )
}