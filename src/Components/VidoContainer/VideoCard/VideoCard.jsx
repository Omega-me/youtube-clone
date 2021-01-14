import React from 'react';
import './VideoCard.css';
import VideoCardInfo from './VideoCardInfo/VideoCardInfo';
import Api from '../../../libs/testApi';

import { useHistory } from 'react-router-dom';

const VideoCard = ({
  videoId,
  thumbnail,
  title,
  channelTittle,
  publishedTime,
  description,
}) => {
  const history = useHistory();

  const handleVideo = () => {
    history.push(`/${videoId}`);
  };

  return (
    <div onClick={handleVideo} className='videoCard'>
      <img src={thumbnail} alt='' />
      <VideoCardInfo
        videoId={videoId}
        thumbnail={thumbnail}
        title={title}
        channelTittle={channelTittle}
        publishedTime={publishedTime}
        description={description}
      />
    </div>
  );
};

export default VideoCard;
