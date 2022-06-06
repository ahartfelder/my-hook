import React, { createContext } from "react";

const _state = {
    selectedVideo: {
        id: 9,
        title: 'Setangi Beach 3',
        duration: '15',
        url: 'Setangibeach.mp4',
        cover: 'lombok.jpg'
    },
    videos: [
        {
            id: 2,
            title: 'Setangi Beach 1',
            duration: '15',
            url: 'Setangibeach.mp4',
            cover: 'lombok.jpg'
        },
        {
            id: 5,
            title: 'Setangi Beach 2',
            duration: '15',
            url: 'Setangibeach.mp4',
            cover: 'lombok.jpg'
        },
        {
            id: 9,
            title: 'Setangi Beach 3',
            duration: '15',
            url: 'Setangibeach.mp4',
            cover: 'lombok.jpg'
        }
    ]
}

export const videoStore = createContext(_state);
const {Provider} = videoStore;

export function VideoContext(props) {
    return (
        <Provider value={[_state]} >{props.children}</Provider>
    );
}