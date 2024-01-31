import React, { useRef } from 'react'
import VideoPlayer from "./components/VideoPlayer"
import './App.css'

interface VideoPlayerRef {
  play: () => void;
  pause: () => void;
  setVolumen: (volume: number) => void;
}

function App() {
const videoPlayerRef = useRef<VideoPlayerRef>(null)

  const handlePlayClick = () => {
    if(videoPlayerRef.current){
      videoPlayerRef.current.play()
    }
  }

  const handlePauseClick = () => {
    if(videoPlayerRef.current){
      videoPlayerRef.current.pause()
    }
  }

  const handleVolumeChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(event.target.value)
    if(videoPlayerRef.current){
      videoPlayerRef.current.setVolumen(volume)
    }
  }

  return (
    <>
      <VideoPlayer 
        ref={videoPlayerRef}
        source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    <div>
       <button onClick={handlePlayClick}>Reproducir</button>
       <button onClick={handlePauseClick}>Pausar</button>
     </div>
     <div>
       <label>Volumen:</label>
       <input
         type="range"
         min="0"
         max="1"
         step="0.1"
         onChange={handleVolumeChange}
       />
     </div>
  
    </>
  )
}

export default App
