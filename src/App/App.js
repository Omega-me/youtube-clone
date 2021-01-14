import React from 'react';
import { Header, HomePage, VideoPlayerPage } from './allComponents'
import './App.css';
import { YoutubeProvider } from '../Context/YoutubeContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <YoutubeProvider>

      <div className='app'>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/:video' exact>
              <VideoPlayerPage />
            </Route>
            <Route path='/:video/refresh' />{/* this route is used only for refreshing page after we click a new video on sidebar vides because if I didnt refresh the video will not play */}
          </Switch>
        </Router>
      </div>

    </YoutubeProvider>
  );
}

export default App;
