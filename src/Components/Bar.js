
import React, { Component } from "react";
import "../App.css";
import DashLine from "./DashLine";

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Bar extends Component {
  render() {
    
    return (
      <div className="bar">
        <div className='bar-main'>
            <Link to='/'>
                <h3 className='bar-title'>Jimmy Wang</h3>
            </Link>
            <Link to='/contact'>
                <Button className='bar-item' variant="outline-info">Contact</Button>
            </Link>
            <Link to='/portfolio'>
                <Button className='bar-item' variant="outline-info">Portfolio</Button>
            </Link>
            <Link to='/about'>
                <Button className='bar-item' variant="outline-info">About</Button>
            </Link>
            <Link to='/'>
                <Button className='bar-item' variant="outline-info">Home</Button>
            </Link>
        </div>
        <DashLine />
      </div>
    );
  }
}

export default Bar;
