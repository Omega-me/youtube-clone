import React, { useContext, useState } from 'react';
import './Header.css';
import { Avatar, IconButton, Modal } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import { Link } from 'react-router-dom';
import { YoutubeContext } from '../../Context/YoutubeContext';

const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const { myQuery } = useContext(YoutubeContext);
  const [query, setQuery] = myQuery;

  return (
    <div className='sticky'>
      {!searchToggle ? (
        <div className='header'>
          <div className='header__left'>
            <IconButton style={{ padding: '15px' }}>
              <MenuIcon />
            </IconButton>
            <Link to='/'>
              <img
                src='https://www.scottbuckley.com.au/wp-content/uploads/transparent-background-youtube-logo-4.png'
                alt='logo'
              />
            </Link>
          </div>

          <div className='header__input'>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              type='text'
              placeholder='Search'
            />
            <button className='header__inputButton'>
              <SearchIcon />
            </button>
          </div>

          <div className='header__right'>
            <IconButton
              onClick={() => setSearchToggle(true)}
              className='header--responsiveSearch'>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <VideoCallSharpIcon />
            </IconButton>
            <IconButton>
              <AppsSharpIcon />
            </IconButton>
            <IconButton>
              <NotificationsSharpIcon />
            </IconButton>
            <Avatar src='...' alt='OlkenMerxira' />
          </div>
        </div>
      ) : (
        <div className='header--responsive'>
          <div className='header__left--responsive'>
            <IconButton onClick={() => setSearchToggle(false)}>
              <ArrowBackTwoToneIcon />
            </IconButton>
          </div>

          <div className='header__input--responsive'>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              type='text'
              placeholder='Search'
            />
            <button className='header__inputButton'>
              <SearchIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
