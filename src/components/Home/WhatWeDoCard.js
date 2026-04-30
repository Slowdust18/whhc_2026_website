

const WhatWeDoCard = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: "'Poppins', sans-serif"
    }}>
      {[
        { title: "100+", text: "Events Conducted" },
        { title: "100+", text: "Club Members" },
        { title: "5", text: "Campus Ambassadors" },
        { title: "3", text: "Meetups" }
      ].map((item, index) => (
        <div key={index} style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid rgba(255, 50, 50, 0.3)',
          borderRadius: '16px',
          padding: '30px',
          textAlign: 'center',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'default'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 50, 50, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <div style={{ 
            color: '#ff3232', 
            fontSize: '36px', 
            fontFamily: "'Hunters', sans-serif",
            fontWeight: '800', 
            marginBottom: '10px' 
          }}>
            {item.title}
          </div>
          <div style={{ 
            color: '#ffffff', 
            fontSize: '14px', 
            fontWeight: '600', 
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            {item.text}
          </div>
        </div>
      ))}
    </div>

  )
}

export default WhatWeDoCard;