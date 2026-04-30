import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// Faculty Coordinators
import jayanthi from '../../assets/team/Jayanthi.png';
import jayalakshmi from '../../assets/team/Jayalakshmi.png';

// Senior BOD
import dev from '../../assets/team/Dev.png';
import shreeja from '../../assets/team/Shreeja.png';
import prathik from '../../assets/team/Prathik.png';
import azhaar from '../../assets/team/Azhaar.png';
import adithi from '../../assets/team/Adithi.png';
import aayush from '../../assets/team/Aayush.png';
import charan from '../../assets/team/Charan.png';
import nancy from '../../assets/team/Nancy.png';
import nayel from '../../assets/team/Nayel.png';

// Junior BOD
import harshith from '../../assets/team/Harshith.png';
import joshika from '../../assets/team/Joshika.png';
import arjun from '../../assets/team/Arjun.png';
import anirudh from '../../assets/team/Anirudh.png';
import srinidhi from '../../assets/team/Srindhi.png';
import siddiqArya from '../../assets/team/Siddiq Arya.png';
import pranav from '../../assets/team/Pranav.png';

// Modal Images
import jayanthiModal from '../../assets/team/Jayanthi modal.png';
import jayalakshmiModal from '../../assets/team/Jayalakshmi modal.png';
import devModal from '../../assets/team/dev Modal.png';
import shreejaModal from '../../assets/team/Shreeja modal.png';
import prathikModal from '../../assets/team/Prathik Modal.png';
import azhaarModal from '../../assets/team/Azhaar modal.png';
import adithiModal from '../../assets/team/Adithi Modal.png';
import aayushModal from '../../assets/team/Aayush modal.png';
import charanModal from '../../assets/team/Charan Modal.png';
import nancyModal from '../../assets/team/Nancy modal.png';
import nayelModal from '../../assets/team/Nayel modal.png';
import harshithModal from '../../assets/team/Harshith Modal.png';
import joshikaModal from '../../assets/team/Joshika Modal.png';
import arjunModal from '../../assets/team/ArjunModal.png';
import anirudhModal from '../../assets/team/Anirudh Modal.png';
import srinidhiModal from '../../assets/team/Srinidhi Modal.png';
import siddiqAryaModal from '../../assets/team/Arya Modal.png';
import pranavModal from '../../assets/team/Pranav Modal.png';

const SectionHeading = ({ title }) => (
  <h2 style={{
    fontFamily: "'Hunters', sans-serif",
    color: 'white',
    fontSize: 'clamp(1.5rem, 4vw, 36px)',
    textTransform: 'uppercase',
    letterSpacing: '4px',
    textShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
    marginBottom: '40px',
    marginTop: '60px',
    textAlign: 'center',
  }}>
    {title}
  </h2>
);

const CardGrid = ({ members, columns = 3, onMemberClick }) => {
  const cardWidth = '310px';

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '120px',
      maxWidth: columns === 2 ? '900px' : '1400px',
      margin: '0 auto',
    }}>
      {members.map((member, i) => (
        <img
          key={i}
          src={member.src}
          alt={member.name}
          onClick={() => onMemberClick(member)}
          style={{
            width: cardWidth,
            height: 'auto',
            display: 'block',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, filter 0.3s ease',
            position: 'relative',
            zIndex: 10
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(255,0,0,0.4))';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'none';
          }}
        />
      ))}
    </div>
  );
};

const TheCrew = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const facultyMembers = [
          { src: jayanthi, name: "Jayanthi", role: "Faculty Coordinator", modalImage: jayanthiModal, modalContent: "Introducing the backbone of our club’s operations, Dr. P. Jayanthi, our Faculty Coordinator!  With a sharp analytical mind and a passion for innovation, Dr. Jayanthi plays a pivotal role in shaping the strategic direction of our club. She is the mentor who challenges us to think deeper and push the boundaries of what we can achieve. Her dedication to excellence and her ability to simplify complex problems make her an invaluable asset to our leadership team. We are incredibly grateful for her wisdom and her unwavering belief in our potential!" },
          { src: jayalakshmi, name: "Jayalakshmi", role: "Faculty Coordinator", modalImage: jayalakshmiModal, modalContent: "Introducing the pillar of our club, Dr. S. Jayalaksmi, our Faculty Coordinator!  With a wealth of wisdom and a heart for student growth, Dr. Jayalaksmi is the steady hand that guides our wildest ideas into successful realities. She doesn’t just oversee our projects; she mentors our minds and empowers us to lead with integrity. Patient, insightful, and always encouraging, she is the true north that keeps our club moving in the right direction. We are honored to have her leadership and support as we reach for new heights!" }
        ];
  const seniorBodMembers = [
          { src: dev, name: "Dev", role: "Senior Board of Directors", modalImage: devModal, modalContent: "Meet Dev Shah, our Vice President! A dedicated leader with a passion for technology, Dev brings focus and innovation to everything he takes on. His problem-solving mindset and technical skills earned him recognition as a Smart India Hackathon winner. Off the screen, he shines as a sportsman, carrying the same discipline and drive from the field into his leadership role. Confident and dependable, Dev continues to inspire through his commitment, adaptability, and balanced approach." },
          { src: shreeja, name: "Shreeja", role: "Senior Board of Directors", modalImage: shreejaModal, modalContent: "Meet Shreeja Katama, our inspiring President! A natural leader with a passion for excellence, Shreeja continues to raise the bar in everything she takes on. From her strong technical expertise to her creative flair, she blends innovation with precision. An accomplished student and a dedicated organizer, she has successfully led flagship events and initiatives that showcased her vision and commitment. Beyond her professional strengths, Shreeja’s love for music, reading, and sports highlights her versatility, making her an all-rounder and a driving force for our team." },
          { src: prathik, name: "Prathik", role: "Senior Board of Directors", modalImage: prathikModal, modalContent: "Meet Prathik, our Secretary! With a sharp focus and calm determination, Prathik ensures every task is managed with efficiency and precision. His ability to stay composed under pressure makes him a dependable leader and a strong team player. A confident speaker and skilled communicator, he brings clarity and direction wherever needed. Beyond his role, he enjoys cricket, table tennis, pickleball, and movies, reflecting a balance of energy and a lively spirit." },
          { src: azhaar, name: "Azhaar", role: "Senior Board of Directors", modalImage: azhaarModal, modalContent: "Meet Mohammed Azhaar, our meticulous Treasurer! A cricket enthusiast with a love for stats and strategy, Azhaar channels the same analytical mindset into managing finances with precision. Calm under pressure and thoughtful in decision-making, he keeps operations running smoothly while balancing responsibility with ease. Beyond numbers, he enjoys pickleball, table tennis, and snooker, reflecting a mix of focus, skill, and fun that makes him a well-rounded and reliable member of our team." },
          { src: adithi, name: "Adithi", role: "Senior Board of Directors", modalImage: adithiModal, modalContent: "Meet Adithi, our Head of Social Media & Content and People Officer! A true all-rounder, Adithi blends creativity, technical skill, and excellent interpersonal abilities with ease. A Smart India Hackathon winner, she tackles challenges with confidence and curiosity. Beyond her professional achievements, she’s passionate about F1 racing, cricket, tennis, and basketball. With her versatility, approachability, and drive, Adithi adds energy, balance, and inspiration to every project and team she’s part of." },
          { src: aayush, name: "Aayush", role: "Senior Board of Directors", modalImage: aayushModal, modalContent: "Meet Ayush, our Head of Working Committee! A proactive and versatile leader, Ayush brings precision and focus to every project. From mentoring peers to guiding major events, he balances technical insight with strong organizational skills. A sports enthusiast and avid reader, he enjoys cricket and swimming. With his collaborative mindset and steady focus, Ayush keeps initiatives running smoothly while inspiring everyone around him." },
          { src: charan, name: "Charan", role: "Senior Board of Directors", modalImage: charanModal, modalContent: "Meet Charan, our Technical Head . He is the go-to when innovation meets execution. With a strong grip on technology and an eye for detail, he ensures every challenge finds a smart solution . Off the screen, his love for cricket sports  and adventurous pursuits keeps his competitive and spirited nature alive. Tech-savvy, disciplined, and always curious, he blends logical thinking with a sportsman’s spirit. Whether leading projects or leading runs, Charan shows that problem-solving and performance go hand in hand, making him a true all-rounder." },
          { src: nancy, name: "Nancy", role: "Senior Board of Directors", modalImage: nancyModal, modalContent: "Meet Nancy Christina K V, our PR & Outreach Head! A natural connector with a confident and engaging personality, Nancy thrives on building relationships and bringing ideas to life. She excels in communication and creative expression, with a flair for debates, speeches, and storytelling. A true enthusiast of reading, dancing, writing poems, and diving into true crime books and podcasts, Nancy combines creativity, warmth, and energy to inspire the team and elevate every project she leads." },
          { src: nayel, name: "Nayel", role: "Senior Board of Directors", modalImage: nayelModal, modalContent: "Meet Chiya Nayel Ahmed, our Head of Operations & Logistics and Head of Resource Management! Fueled by curiosity and ambition, Nayel embraces every challenge with fresh ideas and unwavering focus. His problem-solving mindset and eagerness to learn make him a reliable force behind the scenes. With prior experience as a Cultural Secretary in school, he builds collaboration effortlessly and ensures smooth coordination. Beyond his role, Nayel enjoys F1, cricket, tennis, and pickleball a mix of speed, strategy, and fun that matches his dynamic personality." }
        ];
  const juniorBodMembers = [
          { src: harshith, name: "Harshith", role: "Junior Board of Directors", modalImage: harshithModal, modalContent: "Meet Harshith, our Joint Treasurer! The club wallet's bodyguard, he has a superpower for knowing exactly where every rupee goes and why it shouldn’t go there. From tracking expenses to guarding the budget like a dragon guards gold, they make sure our finances stay balanced and drama-free.Detail-oriented and deadline-conscious, Harshith believes receipts are sacred and Excel sheets are a work of art. Calm under pressure and always practical, they somehow manage to say “we can afford it” and “maybe let’s not” in the same sentence. Guided by the motto, “We start with a budget and end with hope”, Harshith keeps our funds safe, our plans realistic, and our bank balance breathing." },
          { src: joshika, name: "Joshika", role: "Junior Board of Directors", modalImage: joshikaModal, modalContent: "Armed with a keyboard, caffeine, and a dangerously good sense of humor, Joshika Yuvaraj is the chaos coordinator behind our captions, posts, and questionable posting times. If the caption looks simple, that’s because the chaos stayed in the drafts.Chronically online (for the club, obviously), She knows the algorithm better than their own sleep cycle, and knows exactly when to post because “7:43 PM just feels right”. From captions written half-asleep to posts timed purely on vibes, they magically convert chaos into engagement.Firmly believing in “Blame the algorithm\", Joshika combines creativity, strategy, and unfiltered internet energy to keep our socials chaotic, iconic, and permanently living rent-free on your feed" },
          { src: arjun, name: "Arjun", role: "Junior Board of Directors", modalImage: arjunModal, modalContent: "Meet Arjun, our Joint Head of Working Committee!  The heartbeat of our operations, Arjun is the bridge between grand visions and ground-level execution. A Smart India Hackathon (SIH) winner and a passionate cricketer, he brings championship-level discipline and a 'team-first' mentality to everything he does on and off pitch. Known for his tactical mindset, he ensures every moving part of the organization is perfectly synchronized. Arjun combines the strategic focus of an innovator with the reflexes of an athlete to turn every plan into a win!" },
          { src: anirudh, name: "Anirudh", role: "Junior Board of Directors", modalImage: anirudhModal, modalContent: "Meet Anirudh Sarkar, our Joint Technical Head! With a passion for clean code and a knack for complex problem-solving, Anirudh turns ambitious ideas into seamless digital reality. A Smart India Hackathon (SIH) winner, he has proven his ability to innovate under pressure and build high-impact solutions. Analytical and structured, he approaches every line of code with precision, yet remains a dedicated mentor and collaborator, always eager to brainstorm with the team. Anirudh combines technical depth with a forward-thinking mindset to build systems that are as robust as they are innovative." },
          { src: srinidhi, name: "Srinidhi", role: "Junior Board of Directors", modalImage: srinidhiModal, modalContent: "Meet Srinidhi, our Joint Head of PR and Outreach! With a natural flair for communication and coordination, Srinidhi thrives at the intersection of ideas and execution. She draws energy from fast-paced environments and knows how to turn pressure into progress . Thoughtful, proactive, and people-focused, she approaches outreach and event planning with clarity and purpose, while always staying open to collaboration and new perspectives. Driven by impact and connection, Srinidhi ensures every initiative resonates, builds relationships, and leaves a lasting impression." },
          { src: siddiqArya, name: "Siddiq Arya", role: "Junior Board of Directors", modalImage: siddiqAryaModal, modalContent: "Meet Siddiq Arya, our Joint Head of Logistics & Operations and Resource Management! The logistical backbone of our team, Siddiq ensures that every resource is in the right place at exactly the right time. With an analytical mind and a talent for optimization, he manages the complex flow of operations with calm and precision. A problem-solver who thrives on determination, Siddiq stays open-minded and adaptable, making sure the team has everything they need to succeed. He combines strategic foresight with hands-on execution to keep our engine running perfectly!" },
          { src: pranav, name: "Raj Pranav", role: "Junior Board of Directors", modalImage: pranavModal, modalContent: "Meet Raj Pranav, our Joint Head of Design! With a sharp eye for detail and a strong love for aesthetics, he draws inspiration from everywhere to craft standout designs. Meticulous and well-organized, Raj Pranav approaches every project with precision while remaining open-minded and collaborative. There are moments when he says, “I can’t do this anymore” and then he does it anyway, pushing through and get’s the work done. Guided by his motto, “expect the worst so you won’t be disappointed,” he blends creativity, adaptability, and resilience to bring every vision to life." }
        ];
  const allMembers = [...facultyMembers, ...seniorBodMembers, ...juniorBodMembers];


  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  return (
    <div id="crew" style={{ padding: '60px 40px 80px', backgroundColor: 'transparent', position: 'relative' }}>

      <h1 style={{
        fontFamily: "'Hunters', sans-serif",
        color: 'white',
        fontSize: 'clamp(2rem, 5vw, 50px)',
        textShadow: '0 0 20px rgba(255,0,0,0.5)',
        marginBottom: '20px',
        letterSpacing: '4px',
        textAlign: 'center',
      }}>
        WHHC <span style={{ color: '#cc0000' }}>THE CREW</span>
      </h1>

      <div style={{
        width: '200px',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(255,50,50,0.8), transparent)',
        margin: '0 auto 10px',
      }} />

      <SectionHeading title="Faculty Coordinators" />
      <CardGrid
        columns={2}
        onMemberClick={setSelectedMember}
        members={[
          { src: jayanthi, name: "Jayanthi", role: "Faculty Coordinator", modalImage: jayanthiModal, modalContent: "Introducing the backbone of our club’s operations, Dr. P. Jayanthi, our Faculty Coordinator!  With a sharp analytical mind and a passion for innovation, Dr. Jayanthi plays a pivotal role in shaping the strategic direction of our club. She is the mentor who challenges us to think deeper and push the boundaries of what we can achieve. Her dedication to excellence and her ability to simplify complex problems make her an invaluable asset to our leadership team. We are incredibly grateful for her wisdom and her unwavering belief in our potential!" },
          { src: jayalakshmi, name: "Jayalakshmi", role: "Faculty Coordinator", modalImage: jayalakshmiModal, modalContent: "Introducing the pillar of our club, Dr. S. Jayalaksmi, our Faculty Coordinator!  With a wealth of wisdom and a heart for student growth, Dr. Jayalaksmi is the steady hand that guides our wildest ideas into successful realities. She doesn’t just oversee our projects; she mentors our minds and empowers us to lead with integrity. Patient, insightful, and always encouraging, she is the true north that keeps our club moving in the right direction. We are honored to have her leadership and support as we reach for new heights!" }
        ]}
      />

      <SectionHeading title="Senior Board of Directors" />
      <CardGrid
        onMemberClick={setSelectedMember}
        members={[
          { src: dev, name: "Dev", role: "Senior Board of Directors", modalImage: devModal, modalContent: "Meet Dev Shah, our Vice President! A dedicated leader with a passion for technology, Dev brings focus and innovation to everything he takes on. His problem-solving mindset and technical skills earned him recognition as a Smart India Hackathon winner. Off the screen, he shines as a sportsman, carrying the same discipline and drive from the field into his leadership role. Confident and dependable, Dev continues to inspire through his commitment, adaptability, and balanced approach." },
          { src: shreeja, name: "Shreeja", role: "Senior Board of Directors", modalImage: shreejaModal, modalContent: "Meet Shreeja Katama, our inspiring President! A natural leader with a passion for excellence, Shreeja continues to raise the bar in everything she takes on. From her strong technical expertise to her creative flair, she blends innovation with precision. An accomplished student and a dedicated organizer, she has successfully led flagship events and initiatives that showcased her vision and commitment. Beyond her professional strengths, Shreeja’s love for music, reading, and sports highlights her versatility, making her an all-rounder and a driving force for our team." },
          { src: prathik, name: "Prathik", role: "Senior Board of Directors", modalImage: prathikModal, modalContent: "Meet Prathik, our Secretary! With a sharp focus and calm determination, Prathik ensures every task is managed with efficiency and precision. His ability to stay composed under pressure makes him a dependable leader and a strong team player. A confident speaker and skilled communicator, he brings clarity and direction wherever needed. Beyond his role, he enjoys cricket, table tennis, pickleball, and movies, reflecting a balance of energy and a lively spirit." },
          { src: azhaar, name: "Azhaar", role: "Senior Board of Directors", modalImage: azhaarModal, modalContent: "Meet Mohammed Azhaar, our meticulous Treasurer! A cricket enthusiast with a love for stats and strategy, Azhaar channels the same analytical mindset into managing finances with precision. Calm under pressure and thoughtful in decision-making, he keeps operations running smoothly while balancing responsibility with ease. Beyond numbers, he enjoys pickleball, table tennis, and snooker, reflecting a mix of focus, skill, and fun that makes him a well-rounded and reliable member of our team." },
          { src: adithi, name: "Adithi", role: "Senior Board of Directors", modalImage: adithiModal, modalContent: "Meet Adithi, our Head of Social Media & Content and People Officer! A true all-rounder, Adithi blends creativity, technical skill, and excellent interpersonal abilities with ease. A Smart India Hackathon winner, she tackles challenges with confidence and curiosity. Beyond her professional achievements, she’s passionate about F1 racing, cricket, tennis, and basketball. With her versatility, approachability, and drive, Adithi adds energy, balance, and inspiration to every project and team she’s part of." },
          { src: aayush, name: "Aayush", role: "Senior Board of Directors", modalImage: aayushModal, modalContent: "Meet Ayush, our Head of Working Committee! A proactive and versatile leader, Ayush brings precision and focus to every project. From mentoring peers to guiding major events, he balances technical insight with strong organizational skills. A sports enthusiast and avid reader, he enjoys cricket and swimming. With his collaborative mindset and steady focus, Ayush keeps initiatives running smoothly while inspiring everyone around him." },
          { src: charan, name: "Charan", role: "Senior Board of Directors", modalImage: charanModal, modalContent: "Meet Charan, our Technical Head . He is the go-to when innovation meets execution. With a strong grip on technology and an eye for detail, he ensures every challenge finds a smart solution . Off the screen, his love for cricket sports  and adventurous pursuits keeps his competitive and spirited nature alive. Tech-savvy, disciplined, and always curious, he blends logical thinking with a sportsman’s spirit. Whether leading projects or leading runs, Charan shows that problem-solving and performance go hand in hand, making him a true all-rounder." },
          { src: nancy, name: "Nancy", role: "Senior Board of Directors", modalImage: nancyModal, modalContent: "Meet Nancy Christina K V, our PR & Outreach Head! A natural connector with a confident and engaging personality, Nancy thrives on building relationships and bringing ideas to life. She excels in communication and creative expression, with a flair for debates, speeches, and storytelling. A true enthusiast of reading, dancing, writing poems, and diving into true crime books and podcasts, Nancy combines creativity, warmth, and energy to inspire the team and elevate every project she leads." },
          { src: nayel, name: "Nayel", role: "Senior Board of Directors", modalImage: nayelModal, modalContent: "Meet Chiya Nayel Ahmed, our Head of Operations & Logistics and Head of Resource Management! Fueled by curiosity and ambition, Nayel embraces every challenge with fresh ideas and unwavering focus. His problem-solving mindset and eagerness to learn make him a reliable force behind the scenes. With prior experience as a Cultural Secretary in school, he builds collaboration effortlessly and ensures smooth coordination. Beyond his role, Nayel enjoys F1, cricket, tennis, and pickleball a mix of speed, strategy, and fun that matches his dynamic personality." }
        ]}
      />

      <SectionHeading title="Junior Board of Directors" />
      <CardGrid
        onMemberClick={setSelectedMember}
        members={[
          { src: harshith, name: "Harshith", role: "Junior Board of Directors", modalImage: harshithModal, modalContent: "Meet Harshith, our Joint Treasurer! The club wallet's bodyguard, he has a superpower for knowing exactly where every rupee goes and why it shouldn’t go there. From tracking expenses to guarding the budget like a dragon guards gold, they make sure our finances stay balanced and drama-free.Detail-oriented and deadline-conscious, Harshith believes receipts are sacred and Excel sheets are a work of art. Calm under pressure and always practical, they somehow manage to say “we can afford it” and “maybe let’s not” in the same sentence. Guided by the motto, “We start with a budget and end with hope”, Harshith keeps our funds safe, our plans realistic, and our bank balance breathing." },
          { src: joshika, name: "Joshika", role: "Junior Board of Directors", modalImage: joshikaModal, modalContent: "Armed with a keyboard, caffeine, and a dangerously good sense of humor, Joshika Yuvaraj is the chaos coordinator behind our captions, posts, and questionable posting times. If the caption looks simple, that’s because the chaos stayed in the drafts.Chronically online (for the club, obviously), She knows the algorithm better than their own sleep cycle, and knows exactly when to post because “7:43 PM just feels right”. From captions written half-asleep to posts timed purely on vibes, they magically convert chaos into engagement.Firmly believing in “Blame the algorithm\", Joshika combines creativity, strategy, and unfiltered internet energy to keep our socials chaotic, iconic, and permanently living rent-free on your feed" },
          { src: arjun, name: "Arjun", role: "Junior Board of Directors", modalImage: arjunModal, modalContent: "Meet Arjun, our Joint Head of Working Committee!  The heartbeat of our operations, Arjun is the bridge between grand visions and ground-level execution. A Smart India Hackathon (SIH) winner and a passionate cricketer, he brings championship-level discipline and a 'team-first' mentality to everything he does on and off pitch. Known for his tactical mindset, he ensures every moving part of the organization is perfectly synchronized. Arjun combines the strategic focus of an innovator with the reflexes of an athlete to turn every plan into a win!" },
          { src: anirudh, name: "Anirudh", role: "Junior Board of Directors", modalImage: anirudhModal, modalContent: "Meet Anirudh Sarkar, our Joint Technical Head! With a passion for clean code and a knack for complex problem-solving, Anirudh turns ambitious ideas into seamless digital reality. A Smart India Hackathon (SIH) winner, he has proven his ability to innovate under pressure and build high-impact solutions. Analytical and structured, he approaches every line of code with precision, yet remains a dedicated mentor and collaborator, always eager to brainstorm with the team. Anirudh combines technical depth with a forward-thinking mindset to build systems that are as robust as they are innovative." },
          { src: srinidhi, name: "Srinidhi", role: "Junior Board of Directors", modalImage: srinidhiModal, modalContent: "Meet Srinidhi, our Joint Head of PR and Outreach! With a natural flair for communication and coordination, Srinidhi thrives at the intersection of ideas and execution. She draws energy from fast-paced environments and knows how to turn pressure into progress . Thoughtful, proactive, and people-focused, she approaches outreach and event planning with clarity and purpose, while always staying open to collaboration and new perspectives. Driven by impact and connection, Srinidhi ensures every initiative resonates, builds relationships, and leaves a lasting impression." },
          { src: siddiqArya, name: "Siddiq Arya", role: "Junior Board of Directors", modalImage: siddiqAryaModal, modalContent: "Meet Siddiq Arya, our Joint Head of Logistics & Operations and Resource Management! The logistical backbone of our team, Siddiq ensures that every resource is in the right place at exactly the right time. With an analytical mind and a talent for optimization, he manages the complex flow of operations with calm and precision. A problem-solver who thrives on determination, Siddiq stays open-minded and adaptable, making sure the team has everything they need to succeed. He combines strategic foresight with hands-on execution to keep our engine running perfectly!" },
          { src: pranav, name: "Raj Pranav", role: "Junior Board of Directors", modalImage: pranavModal, modalContent: "Meet Raj Pranav, our Joint Head of Design! With a sharp eye for detail and a strong love for aesthetics, he draws inspiration from everywhere to craft standout designs. Meticulous and well-organized, Raj Pranav approaches every project with precision while remaining open-minded and collaborative. There are moments when he says, “I can’t do this anymore” and then he does it anyway, pushing through and get’s the work done. Guided by his motto, “expect the worst so you won’t be disappointed,” he blends creativity, adaptability, and resilience to bring every vision to life." }
        ]}
      />

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999
            }}
            onClick={() => setSelectedMember(null)}
          >
            {/* macOS style control buttons & Modal Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              style={{
                position: 'relative',
                width: isFullscreen ? '100vw' : '80%',
                maxWidth: isFullscreen ? 'none' : '1100px',
                height: isFullscreen ? '100vh' : '80vh',
                maxHeight: isFullscreen ? 'none' : '700px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: isFullscreen ? '0' : '20px',
                overflow: 'hidden',
                boxShadow: isFullscreen ? 'none' : '0 25px 50px rgba(0,0,0,0.6)',
                backgroundColor: '#000',
                transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.4s'
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* macOS Buttons */}
              <div className="mac-btn-group" style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                gap: '8px',
                zIndex: 1002
              }}>
                {/* Fullscreen (Green) */}
                <button
                  className="mac-btn"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#28c940',
                    border: '1px solid rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    padding: 0,
                    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)'
                  }}
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  &#43;
                </button>
                {/* Close (Red) */}
                <button
                  className="mac-btn"
                  onClick={() => {
                    setSelectedMember(null);
                    setIsFullscreen(false);
                  }}
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#ff5f56',
                    border: '1px solid rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    padding: 0,
                    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)'
                  }}
                  title="Close"
                >
                  &#10005;
                </button>
              </div>
              <style>
                {`
                .mac-btn {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: transparent;
                  font-size: 10px;
                  line-height: 1;
                  font-weight: 800;
                  transition: all 0.2s;
                }
                .mac-btn-group:hover .mac-btn {
                  color: rgba(0,0,0,0.6);
                }
              `}
              </style>
              <img
                src={selectedMember.modalImage || selectedMember.src}
                alt={selectedMember.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Glass Box */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '5%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '20px 40px',
                  borderRadius: '35px',
                  color: 'white',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: '0 15px 45px rgba(0, 0, 0, 0.6)',
                  width: '92%',
                  maxWidth: '1000px'
                }}
              >
                <h3 style={{
                  margin: '0 0 15px 0',
                  fontSize: '32px',
                  fontFamily: "'Hunters', sans-serif",
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  color: '#cc0000',
                  textShadow: '0 0 20px rgba(255,0,0,0.5)'
                }}>
                  {selectedMember.name}
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '14.5px',
                  lineHeight: '1.6',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '400',
                  opacity: 0.9,
                }}>
                  {selectedMember.modalContent ? (
                    typeof selectedMember.modalContent === 'string' ? (
                      selectedMember.modalContent.split(new RegExp(`(${selectedMember.name}|Raj Pranav)`, 'gi')).map((part, i) => 
                        (part.toLowerCase() === selectedMember.name.toLowerCase() || part.toLowerCase() === 'raj pranav') ? 
                          <span key={i} style={{ color: '#cc0000', fontWeight: '600' }}>{part}</span> : part
                      )
                    ) : selectedMember.modalContent
                  ) : selectedMember.role}
                </p>
              </div>
            </motion.div>
          
            {/* OTHER MEMBERS SIDEBAR */}
            <motion.div
              onMouseEnter={() => setIsSidebarOpen(true)}
              onMouseLeave={() => setIsSidebarOpen(false)}
              initial={{ width: '40px' }}
              animate={{ width: isSidebarOpen ? '320px' : '40px' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: 'absolute',
                right: 0,
                top: '10%',
                height: '80%',
                backgroundColor: 'rgba(15, 15, 15, 0.95)',
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px',
                border: '1px solid rgba(255, 0, 0, 0.3)',
                borderRight: 'none',
                overflow: 'hidden',
                zIndex: 10005,
                boxShadow: '-10px 0 30px rgba(0,0,0,0.8)',
                display: 'flex',
                flexDirection: isSidebarOpen ? 'column' : 'row',
                alignItems: isSidebarOpen ? 'stretch' : 'center',
                justifyContent: isSidebarOpen ? 'flex-start' : 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {!isSidebarOpen ? (
                <div style={{
                  writingMode: 'vertical-rl',
                  color: 'white',
                  letterSpacing: '4px',
                  fontWeight: '800',
                  fontSize: '14px',
                  fontFamily: "'Poppins', sans-serif",
                  transform: 'rotate(180deg)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  paddingLeft: '12px'
                }}>
                  OTHER MEMBERS
                </div>
              ) : (
                <div style={{ padding: '25px 20px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box', minWidth: '320px' }}>
                  <h4 style={{
                    color: 'white',
                    fontFamily: "'Hunters', sans-serif",
                    letterSpacing: '2px',
                    fontSize: '20px',
                    margin: '0 0 20px 0',
                    borderBottom: '1px solid rgba(255,0,0,0.3)',
                    paddingBottom: '10px'
                  }}>
                    OTHER MEMBERS
                  </h4>
                  <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    paddingRight: '10px'
                  }}>
                    {allMembers.filter(m => m.name !== selectedMember.name).map((m, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedMember(m)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px',
                          cursor: 'pointer',
                          padding: '10px',
                          borderRadius: '10px',
                          transition: 'background-color 0.2s',
                          backgroundColor: 'rgba(255,255,255,0.05)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,0,0,0.2)'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                      >
                        <img src={m.src} alt={m.name} style={{ width: '60px', height: '80px', borderRadius: '5px', objectFit: 'cover' }} />
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                          <div style={{ color: 'white', fontSize: '14px', fontWeight: 'bold', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{m.name}</div>
                          <div style={{ color: '#aaa', fontSize: '11px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{m.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
\n          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TheCrew;
