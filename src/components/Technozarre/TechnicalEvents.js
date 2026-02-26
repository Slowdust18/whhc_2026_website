
import EventCard from "./EventCard";
import tz_tech_1 from "../../assets/technozarre2k26/tz_tech_1.png";
import tz_tech_2 from "../../assets/technozarre2k26/tz_tech_2.png";
import tz_tech_3 from "../../assets/technozarre2k26/tz_tech_3.png";
import tz_tech_4 from "../../assets/technozarre2k26/tz_tech_4.png";
import tz_tech_5 from "../../assets/technozarre2k26/tz_tech_5.png";
import tz_tech_6 from "../../assets/technozarre2k26/tz_tech_6.png";
// Later, you can import your real images here!
// import scifi from "../../assets/technozarre2k26/scifi.png";

const TechnicalEvents = () => {
  
  // THE MASTER CONFIGURATION LIST
  // Right now, we just drop in 6 "Coming Soon" placeholders.
  const eventsList = [
    {
    id: 1,
    isComingSoon: false,
    title: "E - Treasure Hunt",
    date: "5/3/2026",
    time: "TBA", // You can update this when you have the exact time!
    venue: "BW207",
    category: "Technical",
    description: [
      "E-Treasure Hunt is a fun online game where you will solve clues to move from one level to the next. Each clue will help you find the next step.",
      "Coordinators:",
      "Arindam Jaiman: 8999924468",
      "Sakshyam Verma: 8709531481"
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSf7zxhH2OTIxxa9njRwn1wMhIpd6YuV3H4Bgrxg-VzsLqNANg/viewform",
    themeColor: "red",
    frontBg: tz_tech_1,
    backBg: null
  },
  {
    id: 2,
    isComingSoon: false,
    title: "SQLize",
    date: "5/3/2026",
    time: "TBA",
    venue: "APJ Lab",
    category: "Technical",
    description: [
      "SQLize is a technical event focused on databases and SQL queries. In this event, participants will solve problems by writing SQL queries based on given data and questions.",
      "Coordinators:",
      "Kolamala SaiDivya: 9014867914",
      "Sujithra Raj: 7200727307"
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfen50jz0VHnKlxhuDTRxtRXJjfy_Cav1wVH7U8co8oWyAmSQ/viewform",
    themeColor: "red",
    frontBg: tz_tech_2,
    backBg: null
  },
  {
    id: 3,
    isComingSoon: false,
    title: "Python Puzzle Hunt",
    date: "5/3/2026",
    time: "TBA",
    venue: "BW202",
    category: "Technical",
    description: [
      "Python Puzzle Hunt is a fun and interactive event where you get to solve a series of interesting Python puzzles. The questions will begin at an easy level and slowly become more challenging as you move ahead.",
      "Coordinators:",
      "Sivaraman: 8610074692",
      "Aditya Ganesh: 9952940966"
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdrdMPtZVjkuD-E6QipsOZG13dQBYFaKqsN3oL0du3QXpUAuA/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_tech_3,
    backBg: null
  },
  {
    id: 4,
    isComingSoon: false,
    title: "Code in The Dark",
    date: "6/3/2026",
    time: "TBA",
    venue: "Lab 3",
    category: "Technical",
    description: [
      "Code in the Dark is an exciting coding challenge where participants must write code without seeing the output or test case results while coding — yes, you code “in the dark”!",
      "Coordinators:",
      "Sumit Kumar Panja 7980775840",
      "Shirin Anna Viju 9003090905",
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScvxAW47kNCVUcNdj67BGt9GTWyqUzZAFmdDcK6ZVpsmuqfiw/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_tech_4,
    backBg: null
  },
  {
    id: 5,
    isComingSoon: false,
    title: "AI Jailbreak",
    date: "6/3/2026",
    time: "TBA",
    venue: "NS Lab",
    category: "Technical",
    description: [
      "AI Jail Break is an exciting and creative event where participants explore how AI systems respond to different types of prompts. The goal is to think smartly and frame questions or instructions in a clever way to achieve a specific outcome.",
      "Coordinators:",
      "Ramswaroop Patel 9080076065",
      "Swathi 9360236511"
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdQgzS-U1Kqf56xtAqcL8xnithWOvp7M8yda0I4SendpZ8udg/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_tech_5,
    backBg: null
  },
  {
    id: 6,
    isComingSoon: false,
    title: "Code in The Dark",
    date: "6/3/2026",
    time: "TBA",
    venue: "APJ Lab",
    category: "Technical",
    description: [
      "Competitive Programming is a coding event where participants solve programming problems within a given time limit. You will be given different questions, and you need to write correct and efficient code to solve them.",
      "Coordinators:",
      "A. Braxton Elmer 9884493264",
      "Athithya S A 8838101969"
    ],
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdlV72yMOZ4I1w1jBu9EAxqDL0clvk0SYDSSUzcVYroF1ULmQ/viewform?usp=header",
    themeColor: "red",
    frontBg: tz_tech_6,
    backBg: null
  }
  ];

  return (
    <div>
      <div style={{color: 'white', fontSize:'45px', fontWeight:'700', textAlign:'center'}}>
        <span className="technozarre-subtitle" style={{color: 'rgb(255, 50, 50)'}}>TECHNICAL EVENTS</span>
      </div>

      <div className="flip-card-wrapper" >
        {/* This magic loop dynamically generates all your cards! */}
        {eventsList.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default TechnicalEvents;