import React, { Component } from "react";
import ControlledCarousel from "./ControlledCarousel";

import { Link } from 'react-router-dom';

import "../App.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className='about-carousel-block'>
          <ControlledCarousel />
        </div>

        <div className="about-context">
            <h3>About Me</h3>
            <br/>
            <p>
                Pinho Wang loves programming, snowboarding, hiking, learning and sharing new things.
                He is currently seeking for software engineer position and desires to dedicate on 
                amazing products using by millions of people. <br/> Previously, he worked as a software engineer 
                intern at IBM majorly working on threat intelligence applications. 
                He also accomplished some web application projects and got his Masters at Northeastern University. 
                For more info, check out his <Link to='/portfolio'>projects</Link>, <a href={process.env.PUBLIC_URL + '/Resume.pdf'}>Resume</a> and <a href='https://www.linkedin.com/in/pinhowang/'>Linkedin</a>.
            </p>
        </div>
      </div>
    );
  }
}

export default About;
