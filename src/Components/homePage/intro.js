import React from 'react';


export default function Intro() {
  return (
    <div className='pageTitle'>
      <div className='introContainer'>           
          <div className='introParagraph'>
            <p className="introTag">
              Composting is a global issue.
            </p>
            <p className="introTag2">
              Sortable aims to ensure sustainable and informed consumption and production patterns.
            </p>
            <p className='introText'>
              Use Sortable to put your composting knowledge to the test!
              Drag and drop each item into the bin based on how long you think it will take to compost.
              You will only be able to drop items into a bin if it is the correct one.  
            </p>
          </div>
      </div>
      <div className='whyItMatters'>               
            <img src='undraw_Throw_away_re_x60k.png' alt='image of someone throwing something away in a trash can' height="300" width="450" />
          <div className='sectionParagraph'>
            <h1>Why it Matters?</h1>
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
            <p>place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder place holder</p>
          </div>
      </div> 
    </div>
  );
}