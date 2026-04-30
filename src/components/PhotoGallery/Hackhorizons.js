import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navigation from "../Navigation";
import Footer from "../Home/Footer";
// 1. Import your 6 images here
import hh1 from "../../assets/hh25/hh1.JPG";
import hh2 from "../../assets/hh25/hh2.JPG";
import hh3 from "../../assets/hh25/hh3.JPG";
import hh4 from "../../assets/hh25/hh4.JPG";
import hh5 from "../../assets/hh25/hh5.JPG";
import hh6 from "../../assets/hh25/hh6.JPG";
const Photogallery = () => {
  // Put the images into an array so we can map through them cleanly
  const hhImages = [hh1, hh2, hh3, hh4, hh5, hh6];

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white' }}>

      {/* Sticky Navbar */}
      <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <Navigation />
      </div>

      <Container style={{ paddingTop: '120px', paddingBottom: '40px' }}>

        {/* =========================================
            HACK HORIZONS 2025 SECTION
            ========================================= */}
        <div style={{ marginBottom: '60px' }}>
          <h1 style={{
            fontFamily: "'Hunters', sans-serif",
            color: 'rgb(255, 50, 50)',
            textShadow: '0px 0px 15px rgba(255, 0, 0, 0.6)',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            HACK HORIZONS'25
          </h1>

          {/* The Updated Text */}
          <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgb(220, 220, 220)', textAlign: 'justify', marginBottom: '40px' }}>
            <p>
              <strong style={{ color: 'rgb(255, 50, 50)' }}>White Hat Hackers Club</strong> of the Department of Computer Science and Engineering, SRMIST Vadapalani has proudly hosted "HackHorizons 2025," a rigorous 12-hour innovation marathon on October 9th-10th, 2025. With a massive turnout of 265 participants from both internal and external institutions, the competition saw strong and enthusiastic engagement. This high-energy hackathon focused on cutting-edge problem statements related to <strong style={{ color: 'white' }}>Generative AI, Agentic AI, and Cybersecurity</strong>. Participants brought their best ideas to the table, and the top teams were evaluated on foundational quality, technical rigor, and market potential, making HackHorizons 2025 not just a competition but a celebration of vision, skill, and architectural integrity!
            </p>
            <p>
              The event kicked off early on Day 1 with the problem statement release and theme reveal, setting the tone for an intense 12-hour coding window. Each team worked relentlessly, transforming early concepts into functional, high-quality Minimum Viable Products (MVPs) with the help of dedicated internal mentoring rounds. Judges utilized a strict two-stage rubric and praised the elevated technical standards of the solutions, commending teams for producing clean, maintainable code and showcasing excellent storytelling proficiency in their chosen domains. During the valedictory ceremony on Day 2, winners and participants were celebrated for their dedication, effective time management, and innovative spirit. HackHorizons 2025 provided a vital platform for students to translate theoretical knowledge into practical solutions, cementing its role as a premier technical competition!
            </p>
          </div>

          {/* The 6-Image Grid */}
          <Row className="g-4">
            {hhImages.map((img, index) => (
              <Col md={4} sm={6} xs={12} key={index}>
                <div style={{
                  width: '100%',
                  height: '250px',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 50, 50, 0.3)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 50, 50, 0.6)';
                    e.currentTarget.style.zIndex = '10';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
                    e.currentTarget.style.zIndex = '1';
                  }}
                />
              </Col>
            ))}
          </Row>
        </div>

      </Container>

      <Footer />
    </div>
  );
};

export default Photogallery;