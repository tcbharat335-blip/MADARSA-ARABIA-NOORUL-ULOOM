import fs from 'fs';

let content = fs.readFileSync('src/components/ResultPortal.tsx', 'utf-8');
content = content.replace(/getClassSubjects\(([\w\.\s]+)\)/g, 'getClassSubjects($1, schoolConfig)');
content = content.replace(/getClassSubjects\(([\w\.\s]+), schoolConfig, schoolConfig\)/g, 'getClassSubjects($1, schoolConfig)'); // prevent double replace
fs.writeFileSync('src/components/ResultPortal.tsx', content);

console.log('Done!');
