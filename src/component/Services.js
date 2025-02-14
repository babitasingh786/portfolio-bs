import React from "react";

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
function Services({ services }) {
  return (
    <div>
      <section id="services" className="services py-5">
        <Container>
          <h2 className="section-title">
            <span className="highlight"> My Services</span>
          </h2>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              {services.map((service, index) => (
                <Col
                  // lg={6}
                  lg={`index % 2=== 0? 3:6`}
                  key={index}
                  className={`mb-4 service-item ${
                    index % 2 === 0 ? "zigzag-left" : "zigzag-right"
                  }`}
                >
                  <Card className="service-card">
                    <Card.Body className="flex-column">
                      <Card.Title className="service-title">
                        {service.image}
                        {service.title}
                      </Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Services;
