import React, { useState } from 'react'
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
import { RiMessage2Line } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TbBrandLinkedin } from "react-icons/tb";


function Contact() {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })
  const [message,setMessage] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault();
    // alert(`Thank you ${formData.name} for your message. I will get back to you soon`)
    setMessage(`Thank you ${formData.name} for your message. I will get back to you soon`);
    setTimeout(()=>{
      setMessage("");
    },5000)
    setFormData({
      name:"",
      email:"",
      message:""
    })
    }
  return (
    <div>
        <section id="contact" className="contact py-5">
        <Container>
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <Row className="my-5">
            <Col md={6} className="p-4">
              <div className="contact-left-section">
                <h2 className="gradient-text text-uppercase text-break pe-lg-5">
                  Do you have project to discuss?
                </h2>
                <h1 className="my-3">
                  GET IN TOUCH <RiMessage2Line />
                </h1>

                <Row className="my-4">
                  <Col md={6} className="pb-sm-4">
                    <h4 className="mb-3">CONTACT</h4>
                    <a
                      href="mailto:babitasingh7860@gmail.com"
                      style={{ "text-decoration": "none", color: "white" }}
                    >
                      babitasingh7860@gmail.com
                    </a>
                  </Col>
                  <Col md={6} className=" ps-lg-5">
                    <h4 className="mb-3">SOCIAL MEDIA</h4>
                    <div className="social-media-icons">
                      <a href="https://www.linkedin.com/in/babita-singh/">
                        <TbBrandLinkedin className="social-icon" />
                      </a>
                      <a href="https://www.linkedin.com/in/babita-singh/">
                        <FaGithubSquare className="social-icon" />
                      </a>
                      <a href="https://www.linkedin.com/in/babita-singh/">
                        <SiLeetcode className="social-icon" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6}>
              <Form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="mb-4">Send Me A Message</h3>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={formData.name} onChange={((e)=>setFormData({...formData,name:e.target.value}))}
                    type="text"
                    placeholder="Your Name"
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={formData.email} onChange={((e)=>setFormData({...formData,email:e.target.value}))}
                    type="email"
                    placeholder="Your Email"
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control value={formData.message} onChange={((e)=>setFormData({...formData,message :e.target.value}))}
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    className="contact-input"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="contact-btn">
                  Send Message
                </Button>
                {message && <p className='message ' >{message}</p>}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Contact
