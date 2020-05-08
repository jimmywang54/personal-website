import React, { Component } from "react";

import '../App.css';

import { Card, Button, Container, Row } from "react-bootstrap";

class Portolio extends Component {
  render() {
    const projects = [
      {
        name: "Movie Reservation System",
        imgUrl: process.env.PUBLIC_URL + "/images/movie.jpg",
        description: "",
      },
      {
        name: "Analyze Crimes in Boston",
        imgUrl: process.env.PUBLIC_URL + "/images/crimes.jpg",
        description: "",
      },
      {
        name: "Comments Map",
        imgUrl: process.env.PUBLIC_URL + "/images/map.jpg",
        description: "",
      },
      {
        name: "Coffee Shop App",
        imgUrl: process.env.PUBLIC_URL + "/images/coffee.jpg",
        description: "",
      },
    ];

    return (
      <div className="portolio">
          <Container>
              <Row>
              {projects.map((project) => (
          <Card className='portfolio-card' style={{ width: "18rem" }}>
            <Card.Img variant="top" src={project.imgUrl} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              <Button variant="primary">Take a Look</Button>
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
