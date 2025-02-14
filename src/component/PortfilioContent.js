import React from 'react'

import {
    Container,
    Navbar,
    Nav,
    Button,
    Form,
    Row,
    Col,
    Card,
  } from "react-bootstrap";

function PortfilioContent({projects}) {
  return (
    <div>
       <section id="portfolio" className="portfolio py-5">
        <Container>
          <h2 className="section-title">
            {" "}
            <span className="gradient-text">Portfolio </span>
          </h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="project-card">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <a href={project.link} target="_blank" rel="noreferrer">
                    <Button variant="outline-light"> View Project</Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default PortfilioContent
