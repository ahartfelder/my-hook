import React, { useContext } from "react";
import { videoStore } from "../data/video/VideoContext";
import Video from "./Video";

export default function VideoList() {
    const [videoState] =useContext(videoStore);
    
    function onClick(video) {
        console.log(video);
    }
    
    return (
        <ul className='list'>
            {videoState.videos.map(item => (
                <Video video={item} onClick={onClick} key={item.id} />
            ))}
        </ul>
    );
}
