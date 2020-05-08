import React, { Component } from "react";

import "../App.css";

import { Card, Button, Container, Row, Badge } from "react-bootstrap";

class Portolio extends Component {
  render() {
    const projects = [
      {
        name: "Movie Reservation System",
        imgUrl: process.env.PUBLIC_URL + "/images/movie.png",
        description: "",
        webUrl: "https://github.com/PinHoWang/MovieBookingSystem",
      },
      {
        name: "Analyze Crimes in Boston",
        imgUrl: process.env.PUBLIC_URL + "/images/crimes.png",
        description: "",
        webUrl: "https://github.com/CSYE7200/Analyze-Crimes-Boston",
      },
      {
        name: "Comments Map",
        imgUrl: process.env.PUBLIC_URL + "/images/map.png",
        description: "",
        webUrl: "https://github.com/PinHoWang/Map",
      },
      {
        name: "Chat Bot",
        imgUrl: process.env.PUBLIC_URL + "/images/chatbot.png",
        description: "",
        webUrl: "https://github.com/PinHoWang/ChatBox",
      },
      {
        name: "Day Care System",
        imgUrl: process.env.PUBLIC_URL + "/images/daycare.png",
        description: "",
        webUrl: "https://github.com/PinHoWang/DayCareProject",
      }
    ];

    return (
      <div className="portolio">
        <div className='portfolio-stacks'>
            <h3>TEch Stacks</h3>
            <Badge className='portfolio-badge' variant='primary'>React</Badge>
            <Badge className='portfolio-badge' variant='success'>Play</Badge>
            <Badge className='portfolio-badge' variant='danger'>Scala</Badge>
            <Badge className='portfolio-badge' variant='warning'>Spark</Badge>
            <Badge className='portfolio-badge' variant='success'>Node.js</Badge>
            <Badge className='portfolio-badge' variant='dark'>Flask</Badge>
            <Badge className='portfolio-badge' variant='success'>Spring Boot</Badge>
            <Badge className='portfolio-badge' variant='info'>SQL</Badge>
            <Badge className='portfolio-badge' variant='success'>MongoDB</Badge>
        </div>
        <Container>
          <Row className='portfolio-row'>
            {projects.map((project) => (
              <Card className="portfolio-card" style={{ width: "18rem" }}>
                <Card.Img className='protfolio-card-img' variant="top" src={project.imgUrl} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button href={project.webUrl} target='_blank' variant="outline-info">
                    Take a Look
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portolio;
