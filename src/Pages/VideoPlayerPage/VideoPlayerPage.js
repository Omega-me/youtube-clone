import React from 'react'
import './videoPlayerPage.css'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import VideoSidebar from '../../Components/VideoSidebar/VideoSidebar'

const VideoPlayerPage = () => {


    return (
        <div className='videoPlayerPage'>
            <VideoPlayer />
            <VideoSidebar />
        </div>
    )
}

export default VideoPlayerPage
