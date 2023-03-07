import React from 'react';
import { Link } from 'react-router-dom';
import style from "../../style.css";


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
            <p>According to Indiana University, 28% of waste deposited in landfills could be composted, resulting in increased emissions of methane, a greenhouse gas.
              Furthermore, if the entire United States population composted, the impact on the environment would be equivalent to removing 7.8 million cars from the road. 
              Effective and proper composting practices has immense potential to make a large positive impact on the environment, but our lack of proper composting has limited this potential.
            </p>
          </div>
      </div> 
      <div className='ourGoal'> 
        <div className='sectionParagraphRight'>
            <h1>What is Our Goal?</h1>
            <p>Our goal is to improve education around composting practices in a fun, approachable manner. Most people already believe and know composting is important and helpful to the environment, but there seems to be a large gap between knowledge and daily practice,
              Thus, our team aims to bridge this gap by gamifying the composting process to further inform individuals on sustainable composting practices.
            </p>
        </div>              
        <img src='goalImage.png' alt='image of people throwing at a target' height="350" width="400" />
      </div> 
      <div className='ourInspiration'>               
            <img src='inspirationImage.png' alt='image of someone person being inspired' height="350" width="400" />
          <div className='sectionParagraph'>
            <h1>Our Insipiration</h1>
            <p>Our projet was inspired by the United Nation's Sustainable Development Goals (SDG), specifically SDG 12: Ensuring Sustainable Consumption and Production Patterns. This SDG illustrates our increased reliance on natural resources despite their dwindling supply due to wasteful practices.
              Our team felt this was an essential issue to address because it is fundamental to human life and the overall quality of life.
            </p>
          </div>
      </div> 
    </div>
  );
}