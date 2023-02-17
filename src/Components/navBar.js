import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RssFeed from './feedPage/rssFeed';
import CompostBins from './homePage/compostBins';
import Intro from './homePage/intro';
import { NavLink } from 'react-router-dom';

const NavBarStyle = {
  height: "50px",
  justifyContent: "left",
  borderRadius: "0px 0px 15px 15px",
  overflow: "hidden",
  color: "white",
  paddingLeft: "50px"
}

export default function NavBar() {
  return (
    <div className='nav-container'> 
      <div className='nav-links'> 
        <Link to='/'>
          <div style={{ display: "flex"}}> {/* TODO: Fill out inline styles for the logo + title */}
            <img src='favicon.ico' alt='sortable logo' height ="40" width="40"></img> {/* Idk why this doesn't work */}
            <h2>Sortable</h2>
          </div>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/CompostBins'>Compost Bins</Link>
        <Link to='/RssFeed'>RSS Feed</Link>
      </div>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='CompostBins' element={<CompostBins />} />
        <Route path='RssFeed' element={<RssFeed />} />
      </Routes>
    </div>
  );
}


