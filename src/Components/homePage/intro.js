import React from 'react';


export default function Intro() {
  return (
    <div className='pageTitle'>
      <div className='introContainer'>
{/*           <div className='introImage'>               COMMENTING OUT FOR NOW KINDA UGLY
            <img src='intropage.png' height="200" width="280" alt='picture of heart shaped composted dirt'/>
          </div> */} 
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
    </div>
  );
}