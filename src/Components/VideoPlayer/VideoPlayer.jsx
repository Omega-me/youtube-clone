import React from 'react';
import './VideoPlayer.css';
import Youtube from 'react-youtube';
import { useLocation } from 'react-router-dom';
import VideoCardInfo from '../VidoContainer/VideoCard/VideoCardInfo/VideoCardInfo';

const VideoPlayer = () => {
  const location = useLocation();

  const opts = {
    // height: '579',
    // width: '1029',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <div className='videoPlayer'>
        <Youtube
          className='videoPlayer__embed'
          videoId={location.pathname}
          opts={opts}
        />
      </div>
      <div className='videoPlayer__informations'>
        <VideoCardInfo />
      </div>
    </div>
  );
};

export default VideoPlayer;
