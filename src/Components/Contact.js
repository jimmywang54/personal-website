import React, { Component } from "react";

import { Button } from "react-bootstrap";

import "../App.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Button className='contact-button' variant="primary" href="https://www.linkedin.com/in/pinhowang/" target="_blank">Linkedin</Button><br/>
        <Button className='contact-button' variant="dark" href="https://github.com/PinHoWang" target="_blank">Github</Button><br/>
        <Button className='contact-button' variant="danger" href="mailto: wangpinh@northeastern.edu" target="_blank">Email</Button>
      </div>
    );
  }
}

export default Contact;
