const fs = require('fs');

const files = [
  'c:/Users/Dell/Downloads/Whhc/src/components/Home/TheCrew.js',
  'c:/Users/Dell/Downloads/Whhc/src/pages/TheTeam.js'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Add isSidebarOpen state
  if (!content.includes('const [isSidebarOpen')) {
    content = content.replace(
      'const [isFullscreen, setIsFullscreen] = useState(false);',
      'const [isFullscreen, setIsFullscreen] = useState(false);\n  const [isSidebarOpen, setIsSidebarOpen] = useState(false);'
    );
  }

  // Find the arrays
  const facultyStart = content.indexOf('members={[');
  const facultyEnd = content.indexOf(']}', facultyStart) + 2;
  const facultyArray = content.substring(facultyStart + 9, facultyEnd);

  const seniorStart = content.indexOf('members={[', facultyEnd);
  const seniorEnd = content.indexOf(']}', seniorStart) + 2;
  const seniorArray = content.substring(seniorStart + 9, seniorEnd);

  const juniorStart = content.indexOf('members={[', seniorEnd);
  const juniorEnd = content.indexOf(']}', juniorStart) + 2;
  const juniorArray = content.substring(juniorStart + 9, juniorEnd);

  // Insert the variables before the return statement
  const variables = `
  const facultyMembers = ${facultyArray};
  const seniorBodMembers = ${seniorArray};
  const juniorBodMembers = ${juniorArray};
  const allMembers = [...facultyMembers, ...seniorBodMembers, ...juniorBodMembers];
  `;

  // We only want to define variables once
  if (!content.includes('const allMembers =')) {
    content = content.replace(
      'return (',
      variables + '\n  return ('
    );
  }

  // Replace CardGrids
  content = content.replace(`members={${facultyArray}}`, 'members={facultyMembers}');
  content = content.replace(`members={${seniorArray}}`, 'members={seniorBodMembers}');
  content = content.replace(`members={${juniorArray}}`, 'members={juniorBodMembers}');

  // Add the sidebar inside AnimatePresence > motion.div (modal container)
  const sidebarContent = `
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
                  cursor: 'pointer'
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
                        <img src={m.src} alt={m.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
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
`;

  if (!content.includes('OTHER MEMBERS SIDEBAR')) {
    const animatePresenceStart = content.indexOf('<AnimatePresence>');
    const animatePresenceEnd = content.indexOf('</AnimatePresence>');
    let innerContent = content.substring(animatePresenceStart, animatePresenceEnd);
    
    const lastMotionDivClose = innerContent.lastIndexOf('</motion.div>');
    const newInnerContent = innerContent.slice(0, lastMotionDivClose) + sidebarContent + '\\n          ' + innerContent.slice(lastMotionDivClose);
    
    content = content.replace(innerContent, newInnerContent);
  }

  fs.writeFileSync(file, content);
}
console.log("Updated files!");
