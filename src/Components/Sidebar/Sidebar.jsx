import React from 'react';
import './Sidebar.css';
import SidebarElement from './SidebarElement/SidebarElement';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import VideoLabelSharpIcon from '@material-ui/icons/VideoLabelSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarElement
        active
        className='sidebar__element'
        Icon={<HomeSharpIcon className='icon icon--active' />}
        text='Home'
      />
      <SidebarElement
        className='sidebar__element'
        Icon={<WhatshotSharpIcon className='icon' />}
        text='Trending'
      />
      <SidebarElement
        className='sidebar__element'
        Icon={<SubscriptionsSharpIcon className='icon' />}
        text='Subscription'
      />
      <hr className='hr' />
      <SidebarElement
        className='sidebar__element'
        Icon={<VideoLibrarySharpIcon className='icon' />}
        text='Library'
      />
      <SidebarElement
        className='sidebar__element'
        Icon={<HistorySharpIcon className='icon' />}
        text='History'
      />
      <SidebarElement
        className='sidebar__element'
        Icon={<VideoLabelSharpIcon className='icon' />}
        text='Your videos'
      />
      <SidebarElement
        className='sidebar__element'
        Icon={<WatchLaterSharpIcon className='icon' />}
        text='Watch later'
      />
      <SidebarElement
        className='sidebar__element'
        Icon={<ThumbUpAltSharpIcon className='icon' />}
        text='Liked videos'
      />
      <SidebarElement
        className='sidebar__element'
        Icon={<ExpandMoreSharpIcon className='icon' />}
        text='Show more'
      />
      <hr className='hr' />
    </div>
  );
};

export default Sidebar;
