import React, { useState, useEffect } from "react";
import Navigation from '../components/Navigation'
import WhatWeDoCard from "../components/Home/WhatWeDoCard";
import FlagShipEvent from "../components/Home/FlagshipEvent";
import Footer from "../components/Home/Footer";
import MatrixRain from "../components/Home/MatrixRain";
import { motion } from "framer-motion";

const Home = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home" style={{ width: '100%', overflowX: 'hidden' }}>
      
      {/* The Animated Navbar */}
      <motion.div
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ 
          y: isNavVisible ? 0 : '-100%', 
          opacity: isNavVisible ? 1 : 0 
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          backgroundColor: 'rgba(0, 0, 0, 0.85)', 
          backdropFilter: 'blur(5px)', 
          borderBottom: '1px solid rgba(255, 0, 0, 0.3)' 
        }}
      >
        <Navigation />
      </motion.div>

      {/* 3. The Matrix Rain Container */}
      <div className="video-container" style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'black', minHeight: '100vh', width: '100%' }}>
        
        <MatrixRain />
        
        {/* The Text Floating Over It */}
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 10, 
          textAlign: 'center', 
          width: '100%',
          pointerEvents: 'none',
          padding: '0 20px' // Added padding so it doesn't touch the screen edges on mobile
        }}>
          {/* Glitching, Massive WHHC Title */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0, 1, 0.3, 1], 
              x: [-20, 20, -10, 10, -5, 0], 
              skewX: [20, -20, 10, -10, 0, 0], 
              filter: ['blur(10px)', 'blur(0px)', 'blur(5px)', 'blur(0px)', 'blur(2px)', 'blur(0px)']
            }}
            transition={{ 
              duration: 0.7, 
              times: [0, 0.2, 0.4, 0.6, 0.8, 1], 
              ease: "easeInOut" 
            }}
            style={{ 
              color: 'white', 
              fontSize: 'clamp(3.5rem, 15vw, 12rem)', // 🛑 FIX: Lowered minimum to 3.5rem so it fits on tiny phones
              fontFamily: "'Akira', sans-serif",
              fontWeight: '900', 
              textShadow: '0px 0px 30px rgba(255, 0, 0, 0.8)',
              margin: 0,
              lineHeight: '1'
            }}
          >
            WHHC
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            style={{ 
              color: 'rgb(255, 50, 50)', 
              fontSize: 'clamp(0.8rem, 3vw, 1.5rem)', // 🛑 FIX: Scaled for mobile
              fontWeight: 'bold', 
              letterSpacing: 'clamp(2px, 1vw, 5px)', // 🛑 FIX: Shrinks letter spacing on phones
              marginTop: '10px',
              margin: '10px auto 0 auto',
              maxWidth: '800px'
            }}
          >
            SECURING THE CYBER WORLD ONE BYTE AT A TIME
          </motion.p>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="home-background" style={{ paddingBottom: '40px', backgroundColor: 'black' }}>
      
        
        {/* About The Department */}
        {/* 🛑 FIX: Replaced margin % with responsive clamp padding so text doesn't squish! */}
        {/* 🛑 FIX: Changed marginTop to paddingTop to kill the white gap! */}
        <div style={{ textAlign: 'center', padding: '0 clamp(20px, 8vw, 10%)', paddingTop: '60px' }}>
          <div>
            <h2 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 45px)', fontWeight: '700', margin: '0 0 20px 0'}}>
              About The Department
            </h2>
            
            <p className="home-paragraphtext" style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', lineHeight: '1.8' }}>
              Our club is based out of the <span style={{color: 'rgb(255, 50, 50)'}}>DCSE, SRM Vadapalani, Chennai</span>. Our department boasts a renowned faculty known for their 
              <span style={{color: 'rgb(255, 50, 50)'}}> expertise in a wide range of fields</span>. A substantial portion of our esteemed faculty members bring extensive experience,
              with many having dedicated over a decade to their respective fields. Our research initiatives revolve around crucial
              domains such as <span style={{color: 'rgb(255, 50, 50)'}}>network security, cryptography, wireless sensor networks, data mining, and cloud computing</span>. This steadfast
              dedication to research is exemplified by the productive contributions of both our faculty and students, as they continually
              showcase and publish their work at esteemed national and international conferences.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ margin: '40px 0' }}>
          <hr style={{ borderTop: '1px solid rgba(255, 0, 0, 0.4)', boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)', width: '50px', margin: '0 auto' }} />
        </div>

        {/* About Us */}
        <div style={{ textAlign: 'center', padding: '0 clamp(20px, 8vw, 10%)' }}>
            <h2 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 45px)', fontWeight: '700', margin: '0 0 20px 0'}}>
              About Us
            </h2>
            
            <p className="home-paragraphtext" style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', lineHeight: '1.8' }}>
              <span style={{color: 'rgb(255, 50, 50)'}}>White Hat Hackers Club</span> is a student-driven technical organization headquartered at  
              <span style={{color: 'rgb(255, 50, 50)'}}> SRMIST, Vadapalani Campus</span>. The club’s primary objective is to inspire students to delve into the realm of 
              <span style={{color: 'rgb(255, 50, 50)'}}> cybersecurity and ethical hacking</span>, equipping them with the essential skills for success in this field. We
              welcome students from diverse backgrounds and skill levels, ranging from beginners to advanced, to refine
              their abilities. Our main goal is to establish a space where like-minded individuals can initiate discussions
              about ethical hacking and cybersecurity, leveraging their knowledge to drive meaningful progress.
            </p>
        </div>

        {/* Divider */}
        <div style={{ margin: '40px 0' }}>
          <hr style={{ borderTop: '1px solid rgba(255, 0, 0, 0.4)', boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)', width: '50px', margin: '0 auto' }} />
        </div>

        {/* What We Do */}
        <div>
          <div style={{ textAlign: 'center', padding: '0 clamp(20px, 8vw, 10%)' }}>
            <h2 style={{color: 'white', fontSize: 'clamp(2rem, 5vw, 45px)', fontWeight: '700', margin: '0 0 20px 0'}}>
              What we do
            </h2>
            
            <p className="home-paragraphtext" style={{ fontSize: 'clamp(1rem, 3vw, 23px)', textAlign: 'center', lineHeight: '1.8' }}>
              Through our lineup of workshops and events, along with our online publications of articles on our website and social media,
              we aim to impart knowledge about the applications, advancements, and future prospects in the world of ethical hacking and cybersecurity.
            </p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20px', marginTop: '50px' }}>
            <WhatWeDoCard />
          </div>
        </div>

        {/* Divider */}
        <div style={{ margin: '60px 0' }}>
          <hr style={{ borderTop: '1px solid rgba(255, 0, 0, 0.4)', boxShadow: '0px 0px 10px rgba(255, 0, 0, 0.5)', width: '50px', margin: '0 auto' }} />
        </div>

        {/* Flagship Event */}
        <div style={{ textAlign: 'center', padding: '0 clamp(10px, 5vw, 10%)' }}>
          <FlagShipEvent />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;