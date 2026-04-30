const fs = require('fs');

const files = [
  'c:/Users/Dell/Downloads/Whhc/src/components/Home/TheCrew.js',
  'c:/Users/Dell/Downloads/Whhc/src/pages/TheTeam.js'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Regex to match the arrays with the trailing };
  const facultyRegex = /const facultyMembers = (\[[\s\S]*?\])\};/g;
  const seniorRegex = /const seniorBodMembers = (\[[\s\S]*?\])\};/g;
  const juniorRegex = /const juniorBodMembers = (\[[\s\S]*?\])\};/g;

  const facultyMatch = facultyRegex.exec(content);
  const seniorMatch = seniorRegex.exec(content);
  const juniorMatch = juniorRegex.exec(content);

  if (facultyMatch && seniorMatch && juniorMatch) {
    const facultyArray = facultyMatch[1] + ';';
    const seniorArray = seniorMatch[1] + ';';
    const juniorArray = juniorMatch[1] + ';';

    // Remove them from current misplaced locations
    content = content.replace(facultyMatch[0], '');
    content = content.replace(seniorMatch[0], '');
    content = content.replace(juniorMatch[0], '');
    content = content.replace(/const allMembers = \[\.\.\.facultyMembers, \.\.\.seniorBodMembers, \.\.\.juniorBodMembers\];/g, '');

    // Find the main component start
    const compName = file.includes('TheCrew') ? 'TheCrew' : 'TheTeam';
    const compStart = content.indexOf(`const ${compName} = () => {`);
    
    if (compStart !== -1) {
        // Insert them inside the component, before the return
        // We find the return ( that belongs to the component (after compStart)
        const insertionPoint = content.indexOf('return (', compStart);
        const variables = `
  const facultyMembers = ${facultyArray}
  const seniorBodMembers = ${seniorArray}
  const juniorBodMembers = ${juniorArray}
  const allMembers = [...facultyMembers, ...seniorBodMembers, ...juniorBodMembers];
`;
        content = content.slice(0, insertionPoint) + variables + '\n  ' + content.slice(insertionPoint);
    }
  }

  // Cleanup any potential stray characters or multiple definitions
  content = content.replace(/\]\};/g, '];');
  
  // Also clean up double newlines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(file, content);
}
console.log("Fixed syntax and moved variables!");
