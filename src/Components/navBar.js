import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogFeed from './feedPage/blogFeed';
import CompostBins from './homePage/compostBins';
import Intro from './homePage/intro';
import { NavLink } from 'react-router-dom';

const NavBarStyle = {
  height: "80px",
  justifyContent: "left",
  borderRadius: "0px 0px 15px 15px",
  overflow: "hidden",
  color: "white",
  paddingLeft: "50px"
}

export default function NavBar() {
  return (
    <div className='nav-container'> 
      <div className='nav-links' style={NavBarStyle}> 
        <Link to='/'>
          <div style={{ display: "flex", backgroundColor: "#e9ede6", borderRadius:"5%", padding: "10px" }}> {/* TODO: Fill out inline styles for the logo + title */}
          <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt='compostlogo' style={{ width: '30px', height: '30px' }} /> {/* Idk why this doesn't work */}
            <h2 style={{ color:"#303b2a"}} >Sortable</h2>
          </div>
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/CompostBins'>Compost Bins</Link>
        <Link to='/BlogFeed'>Blog Feed</Link>
      </div>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='CompostBins' element={<CompostBins />} />
        <Route path='BlogFeed' element={<BlogFeed />} />
      </Routes>
    </div>
  );
}
