import React, { useContext, useMemo } from "react";
import Video from "./Video";
import { videoStore } from "../data/video/VideoContext";

export default function VideoList() {
    const [videoState, videoDispatch] = useContext(videoStore);
    const videoList = useMemo(() => {
        function onClick(video) {
                videoDispatch({
                    type: 'select',
                    value: video
                });
        }
        return videoState.videos.map(item => (
                <Video video={item} onClick={onClick} key={item.url} />
            ))
    }, [videoState.video, videoDispatch]);    
    
    return (
        <ul className='list'>
            {videoList}
        </ul>
    );
}
