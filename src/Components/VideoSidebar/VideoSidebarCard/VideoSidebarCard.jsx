import React from 'react';
import './VideoSidebarCard.css';
import { useHistory } from 'react-router-dom';

const VideoSidebarCard = ({
  videoId,
  thumbnail,
  title,
  channelTitle,
  publishTime,
}) => {
  const history = useHistory();

  const handlePlay = () => {
    history.replace(`/${videoId}/refresh`); //here i set the route location to videoId/refresh fror rfreshing the router and with setTimeout() function I change the route path back to the video id in case to work
    setTimeout(() => {
      history.replace(`/${videoId}`);
    });
  };

  return (
    <div onClick={handlePlay} className='videoSidebarCard'>
      <img src={thumbnail} alt={title} />
      <div className='videoSidebarCard__info'>
        <h5>{title}</h5>
        <p>{channelTitle}</p>
        <p>{publishTime}</p>
      </div>
    </div>
  );
};

export default VideoSidebarCard;
