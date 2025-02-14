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

function Skills({skills}) {
  return (
    <div>
       <section id="skills" className="skills py-5 text-center">
        <Container>
          <h2 className="section-title">
            {" "}
            <span className="highlight"> Skills </span>
          </h2>
          <h3 className="my-5">The skills ,tools and technologies I use</h3>
          <Row>
            {skills.map((skill, index) => (
              <Col md={2} xs={6} sm={6} key={index} className="mb-4">
                <div className="skill-card">
                  {typeof skill.image === "string" ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-icon"
                    />
                  ) : (
                    skill.image
                  )}

                  <h5>{skill.name}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Skills
