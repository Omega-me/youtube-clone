import React, { useState, useContext } from 'react';
import VideoCard from './VideoCard/VideoCard';
import './VidoContainer.css';
// import Api from '../../libs/testApi';
import { YoutubeContext } from '../../Context/YoutubeContext';

const VidoContainer = () => {
  // const [data, setData] = useState(Api.items);
  const { myData } = useContext(YoutubeContext);
  const [data, setData] = myData;

  return (
    <div className='VidoContainer'>
      {data.map(video => (
        <VideoCard
          videoId={video.id.videoId}
          key={video.etag}
          thumbnail={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          channelTittle={video.snippet.channelTitle}
          publishedTime={video.snippet.publishTime}
          description={video.snippet.description}
        />
      ))}
    </div>
  );
};

export default VidoContainer;
