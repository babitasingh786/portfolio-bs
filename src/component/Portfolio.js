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
import {Link} from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/portfolio.scss";
import { useEffect } from "react";
import Hero_Image from "../assests/Babita Portfolio.png";
import { RiMessage2Line } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
import { SiSap } from "react-icons/si";
import { IoMdGitBranch } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";

import { FaPenNib } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import bollyyogas from "../assests/BollyYogas.png";
import navansh from "../assests/navaansh.png";
import svvclinic from "../assests/svvclinic.png";
import Marquee from "react-fast-marquee";
import Typical from "react-typical";
import Typewriter from "react-typewriter-effect";


const Portfolio = () => {
  const projects = [
    {
      title: "Navaansh Physio",
      description:
        "A fully responsive website skills Wordpress , Elementor  ,HTML CSS .",
      image: navansh,
      link : "https://navaanshphysio.in/"
    },
    {
      title: "Bollyyogas Yoga Website",
      description:
        "A fully responsive website skills Wordpress , Elementor  ,HTML CSS .",
      image: bollyyogas,
      link:"https://bollyyogas.com/"
    },
    {
      title: "Svv Ayurveda Clinic",
      description:
        "A fully responsive website skills Wordpress , Elementor  ,HTML CSS ",
      image: svvclinic,
      link : "https://svvayurhealthcare.com/"
    },
  ];

  const skills = [
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Bootstrap",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Tailwind",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "SAPUI5",
      image: <SiSap className="skill-icon" />,
    },
    {
      name: "Shopify",
      image: <FaShopify className="skill-icon" />,
    },
    {
      name: "Wordpress",
      image: <BsWordpress className="skill-icon" />,
    },
    {
      name: "Figma",
      image: <PiFigmaLogoFill className="skill-icon" />,
    },
    {
      name: "Git",
      image: <IoMdGitBranch className="skill-icon" />,
    },
  ];
  const services = [
    {
      title: "Web Development",
      description:
        "I create websites based on your ready-made design. Whether it’s a landing page or a business card website, I will make it look great and work smoothly on any device.",
      image: <FaLaptopCode className="service-icon" />,
    },
    {
      title: "Web Design",
      description:
        "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals",
      image: <FaPenNib className="service-icon" />,
    },
    {
      title: "WordPress Development",
      description:
        "I build websites on WordPress, making them easy to update and manage. It’s a great choice for blogs, small businesses, or portfolios.",
      image: <FaWordpress className="service-icon" />,
    },
  ];
  const handleScroll = () => {
    const elements = document.querySelectorAll(".service-item");
    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <Navbar expand="lg" className="px-4 navbar">
        <Navbar.Brand href="#" className="nav-link">
          Babita Singh
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#skills" className="nav-link">
              Technologies
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav-link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-left">
             
                <h1 className="hero-title">
                  I am a {" "}
                  <span className="gradient-text">
                    {/* {" "} */}
                    <Typical
                      loop={Infinity}
                      wrapper="span"
                      steps={[
                        "React Developer 👨‍💻",
                        1500,
                        "Frontend Engineer 👨‍💻",
                        1500,
                        "Web Developer 👨‍💻",
                        1500,
                        "JavaScript Enthusiast  👨‍💻",
                        1500,
                      ]}
                    />
                  </span>
                </h1>
           
              <p className="hero-subtitle">
                Hi , I am Babita Singh{" "}
                <span className="gradient-text">A Web Developer</span> with a
                passion for creating beautiful responsive websites.
                {/* I build beautiful and high-performing web applications with cutting-edge technologies. */}
              </p>
              <Link to="portfolio" smooth={true} duration={500}>
              <Button variant="primary" className="hero-btn" >
                View My Work
              </Button>
      </Link>
            
            </Col>
            <Col md={6} className="text-center">
              <div className="hero-image">
                <img src={Hero_Image} alt="Babita Singh Portfolio" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />

      {/* Services Section */}
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
      <hr />

      {/* Skills Section */}

      <section id="skills" className="skills py-5 text-center">
        <Container>
          <h2 className="section-title">
            {" "}
            <span className="highlight"> Skills </span>
          </h2>
          <h3 className="my-5">The skills ,tools and technologies I use</h3>
          <Row>
            {skills.map((skill, index) => (
              <Col md={2} key={index} className="mb-4">
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
      <hr />
      {/* Portfolio Section */}
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
      <hr />

      {/* Contact Section */}
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
              <Form className="contact-form">
                <h3 className="mb-4">Send Me A Message</h3>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="contact-input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                    className="contact-input"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="contact-btn">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4 text-center">
        <p>&copy; 2025 Babita Singh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
