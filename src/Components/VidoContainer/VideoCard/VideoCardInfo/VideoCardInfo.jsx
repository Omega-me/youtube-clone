import React, { useState } from 'react';
import './VideoCardInfo.css';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Api from '../../../../libs/testApi';

const useStyles = makeStyles({
  avatar: {
    width: '35px',
    height: '35px',
  },
});

const VideoCardInfo = ({
  channelTittle,
  title,
  publishedTime,
  description,
  videoId,
}) => {
  const location = useLocation();
  const classes = useStyles();
  const [data, setData] = useState(Api.items);

  return (
    <div className='VideoCardInfo'>
      {location.pathname === '/' ? (
        <div className='videoCard__infoContainer'>
          <Avatar
            className={classes.avatar}
            src={channelTittle}
            alt={channelTittle}
          />
          <div className='videoCard__info'>
            <h5>{title}</h5>
            <p>{channelTittle}</p>
            <p>{publishedTime}</p>
          </div>
        </div>
      ) : (
        <div className='videoCardInfo__onPlay'>
          <p>{title}</p>
          <hr />
          <div className='videoCardInfo__avatar'>
            {/* <Avatar
              className={classes.avatar2}
              src={channelTittle}
              alt={channelTittle}
            /> */}
            <div className='videoCardInfo__content'>
              <h5>{channelTittle}</h5>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCardInfo;
