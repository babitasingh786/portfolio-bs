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
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/portfolio.scss";
import { useEffect } from "react";
import Hero_Image from "../assests/Babita Portfolio.png";
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
import Contact from "./Contact";
import Services from "./Services";
import Skills from "./Skills";
import PortfilioContent from "./PortfilioContent";
import Header from "./Header";
import Footer from "./Footer";


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

      <Header />

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
   
      <Services  services={services} />
      <hr />

      {/* Skills Section */}

      <Skills skills={skills} />
      <hr />
      {/* Portfolio Section */}
     
      <PortfilioContent projects={projects}  />
      <hr />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
