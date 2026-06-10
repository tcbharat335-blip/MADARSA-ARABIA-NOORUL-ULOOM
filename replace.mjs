import fs from 'fs';

let content = fs.readFileSync('src/components/PrincipalDashboard.tsx', 'utf-8');
content = content.replace(/getClassSubjects\(([\w.]+)\)/g, 'getClassSubjects($1, schoolConfig)');
fs.writeFileSync('src/components/PrincipalDashboard.tsx', content);

console.log('Done!');
