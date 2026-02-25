
import EventCard from "./EventCard";

// Later, you can import your real images here!
// import scifi from "../../assets/technozarre2k26/scifi.png";

const TechnicalEvents = () => {
  
  // THE MASTER CONFIGURATION LIST
  // Right now, we just drop in 6 "Coming Soon" placeholders.
  const eventsList = [
    { id: 1, isComingSoon: true },
    { id: 2, isComingSoon: true },
    { id: 3, isComingSoon: true },
    { id: 4, isComingSoon: true },
    { id: 5, isComingSoon: true },
    { id: 6, isComingSoon: true },

    /* HOW TO ADD A REAL EVENT LATER:
      Just change `isComingSoon: false` and fill in the blanks!

      { 
        id: 7, 
        isComingSoon: false, 
        title: "Sci-Fi Debate",
        frontBg: scifi,           // The imported front image
        backBg: scifi_bg,         // The imported back image
        themeColor: "#dde67b",    // Controls the glowing button border!
        description: [
          "🚀🗣️ Ready to journey into the future? Join us for the SCI-FI DEBATE! 🛸✨",
          "Bring your best arguments, futuristic flair, and a dash of imagination!"
        ],
        registerLink: "https://forms.gle/..."
      }
    */
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