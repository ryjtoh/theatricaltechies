import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RssFeed from './feedPage/rssFeed';
import CompostBins from './homePage/compostBins';
import Intro from './homePage/intro';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='nav-container'> 
      <div className='nav-links'>
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
