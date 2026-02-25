import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap"; // Imported the grid system

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(0, 0, 0)', padding: '40px 0 20px 0', marginTop: '40px' }}>
      <Container>
        {/* Top Section: Motto and Links */}
        <Row className="justify-content-between">
          
          {/* Column 1: WHHC Motto */}
          {/* xs={12} makes it full width on mobile, md={6} makes it half width on desktop */}
          <Col xs={12} md={6} className="mb-4 mb-md-0" style={{ textAlign: 'left' }}>
            <h6 style={{ fontWeight: 'bold', marginBottom: '5px', color: 'red', fontSize: 20 }}>
              WHHC
            </h6>
            <p style={{ margin: 0, color: 'white', fontStyle: 'italic', paddingRight: '20px' }}>
              SECURING THE CYBER WORLD ONE BYTE AT A TIME
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          {/* d-flex and justify-content-md-end pushes it to the right on desktop, but keeps it left on mobile! */}
          <Col xs={12} md={6} className="d-flex justify-content-md-end" style={{ textAlign: 'left' }}>
            <div>
              <h6 style={{ fontWeight: 'bold', marginBottom: '10px', color: 'red', fontSize: 20 }}>
                QUICK LINKS
              </h6>
              <p style={{ margin: '0 0 5px' }}>
                <a href="/technozarre" style={{ textDecoration: 'none', color: 'red', fontSize: '18px' }}>Technozarre2k26</a>
              </p>
              <p style={{ margin: '0 0 5px' }}>
                <a href="/photogallery" style={{ textDecoration: 'none', color: '#6c757d' }} onMouseOver={(e) => e.target.style.color = 'rgb(228, 37, 37)'} onMouseOut={(e) => e.target.style.color = '#6c757d'}>Events</a>
              </p>
              <p style={{ margin: 0 }}>
                <a href="/team" style={{ textDecoration: 'none', color: '#6c757d' }} onMouseOver={(e) => e.target.style.color = 'rgb(228, 37, 37)'} onMouseOut={(e) => e.target.style.color = '#6c757d'}>Team</a>
              </p>
            </div>
          </Col>
        </Row>

        {/* Divider Line */}
        <hr style={{ borderTop: '1px solid #333', width: '100%', margin: '30px 0' }} />

        {/* Bottom Section: Copyright and Socials */}
        <Row className="align-items-center">
          
          {/* Copyright Text */}
          <Col xs={12} md={6} className="mb-3 mb-md-0 text-center text-md-start" style={{ color: 'white' }}>
            Copyright © 2026 WHHC
          </Col>

          {/* Social Icons */}
          <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
            <a href="https://www.instagram.com/whhc.srm.vdp/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = 'red'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <FaInstagram style={{ fontSize: '24px', color: 'inherit' }} />
            </a>
            <a href="https://www.linkedin.com/in/white-hat-hackers-club-638389212/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = 'red'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <FaLinkedin style={{ fontSize: '24px', color: 'inherit' }} />
            </a>
            <a href="https://www.facebook.com/WHHC.SRM/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.color = 'red'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
              <FaFacebook style={{ fontSize: '24px', color: 'inherit' }} />
            </a>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;