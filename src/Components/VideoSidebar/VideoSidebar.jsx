import React, { useState, useContext } from 'react';
import './VideoSidebar.css';
import VideoSidebarCard from './VideoSidebarCard/VideoSidebarCard';
// import Api from '../../libs/testApi';
import { YoutubeContext } from '../../Context/YoutubeContext';

const VideoSidebar = () => {
  // const [data, setData] = useState(Api.items);
  const { myData } = useContext(YoutubeContext);
  const [data, setData] = myData;

  return (
    <div className='videoSidebar'>
      {data.map(video => (
        <VideoSidebarCard
          videoId={video.id.videoId}
          key={video.etag}
          thumbnail={video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          channelTitle={video.snippet.channelTitle}
          publishTime={video.snippet.publishTime}
        />
      ))}
    </div>
  );
};

export default VideoSidebar;
