import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RssFeed from './feedPage/RssFeed';
import CompostBins from './homePage/CompostBins';
import Intro from './homePage/Intro';

export default function NavBar() {
  return (
    <div className='nav-container'>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/compostBins'>Compost Bins</Link>
        <Link to='/rssFeed'>RSS Feed</Link>
      </div>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='compostBins' element={<CompostBins />} />
        <Route path='rssFeed' element={<RssFeed />} />
      </Routes>
    </div>
  );
}

// Path: src/Components/navBar.css
// .nav-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// }

// .nav-links {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   margin-top: 10px;
// }

// .nav-links > a {
//   margin: 10px;
//   text-decoration: none;
//   color: black;
//   font-size: 1.5rem;
// }