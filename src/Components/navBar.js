import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BlogFeed from './feedPage/blogFeed';
import CompostBins from './homePage/compostBins';
import Intro from './homePage/intro';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import style from '../style.css';
const NavBarStyle = {
  height: "80px",
  //justifyContent: "left",
  borderRadius: "0px 0px 15px 15px",
  overflow: "hidden",
  color: "white",
  //paddingLeft: "50px"
}

export default function NavBar() {
  return (
    <div className='nav-container'> 
      <div className='nav-links' style={NavBarStyle}> 
        <Link to='/'>
          <div className = 'brandLogo'style={{ display: "flex", backgroundColor:'#C4D5C5', borderRadius:"5%", padding: "5px", borderRadius: '15px'}}> 
            <img className = 'favicon'src={process.env.PUBLIC_URL + '/favicon.ico'} alt='compostlogo' style={{ width: '30px', height: '30px'}} /> {/* Idk why this doesn't work */}
            <h2 className = 'brandName' style={{ color:"#357560", paddingLeft: '5px', display: 'flex', alignItems: 'center'}} >Sortable</h2>
          </div>
        </Link>
        <div className='pageLinks'>
          <Link to='/' style={{ marginLeft: "30px" }}>Home</Link>
          <Link to='/CompostBins' style={{ marginLeft: "30px" }}>Sort It!</Link>
          <Link to='/BlogFeed' className='test' style={{ marginLeft: "30px" }}>Blog Feed</Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='CompostBins' element={<CompostBins />} />
        <Route path='BlogFeed' element={<BlogFeed />} />
      </Routes>
    </div>
  );
}