import React from 'react';
import { Link } from 'react-router-dom';



export default function Intro() {
  return (
    <div className='pageTitle'>
      <div className='introContainer'>           
          <div className='introParagraph'>
            <h1 className="introTag">
              <img src ='favicon.ico' height='100' width = '100'/>SORTABLE
            </h1>
            <p className="introTag2">
              Sortable aims to serve as a resource to educate and support sustainable and informed consumption and production patterns. 
              Try our composting game <i>Sort It</i> to learn more about sustainable composting practices.
            </p>
            <div className='buttonDiv'>
              <Link to='/compostBins'>
                <button className='button'><u>Play Sort It!</u></button>
              </Link>
            </div>
          </div>
      </div>
      <div className='whyItMatters'>               
            <img src='undraw_Throw_away_re_x60k.png' alt='image of someone throwing something away in a trash can' height="300" width="450" />
          <div className='sectionParagraph'>
            <h1>Why does it Matter?</h1>
            <p>place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder</p>
          </div>
      </div> 
      <div className='ourGoal'> 
        <div className='sectionParagraphRight'>
            <h1>What is Our Goal?</h1>
            <p>place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder</p>
        </div>              
        <img src='goalImage.png' alt='image of people throwing at a target' height="350" width="400" />
      </div> 
      <div className='ourInspiration'>               
            <img src='inspirationImage.png' alt='image of someone person being inspired' height="350" width="600" />
          <div className='sectionParagraph'>
            <h1>Our Insipiration</h1>
            <p>SDG INFO HERE place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder</p>
          </div>
      </div> 
    </div>
  );
}