import { useRef, forwardRef, useImperativeHandle } from "react";

interface VideoPlayerProps {
    source: string;
}

interface VideoPlayerRef {
    play: () => void;
    pause: () => void;
    setVolumen: (volume: number) => void;
}

const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>(
    (props, ref) => {

        const videoRef = useRef<HTMLVideoElement>(null);

        useImperativeHandle(
            ref,
            () => ({       
                play: () => {
                    if(videoRef.current){
                        videoRef.current.play(); 
                    }
                },
                pause: () => {
                    if(videoRef.current){
                        videoRef.current.pause(); 
                    }
                },
                setVolumen: (volume) => {
                    if(videoRef.current){
                        videoRef.current.volume = volume; 
                    }
                },
          }),
            [videoRef]
        );    

        return(
            <div>
                <video ref={videoRef} width="400" >
                    <source src={props.source} type="video/mp4"  />
                    Tu navegador no coporta el video
                </video>
            </div>
        );
    }
);

export default VideoPlayer;