
import React, { Component } from "react";
import '../App.css';

import { Container, Image } from 'react-bootstrap';


class Home extends Component {
  render() {
    
    return (
      <div className="home">
        <div className='home-intro'>
            <Container>
                <Image className='home-photo' src={process.env.PUBLIC_URL + '/images/IMG_me.jpg'} roundedCircle />
            </Container>
            <h3 className='home-name'>PinHo (Jimmy) Wang</h3>
            <h4 className='home-brief'>
                Motivated developer and learner with strong programming skills in Java, Javascript and Scala<br />
                Experienced creating custom websites through React.js, Node.js and Spring Boot<br />
                Seeking a full time position in Software Engineer, Full Stack Engineer
            </h4>
        </div>
      </div>
    );
  }
}

export default Home;
