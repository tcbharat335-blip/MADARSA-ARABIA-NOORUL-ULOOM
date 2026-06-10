import fs from 'fs';

let content = fs.readFileSync('src/components/PrincipalDashboard.tsx', 'utf-8');

// Replace standard file extension strings
content = content.replace(/accept="image\/png"/g, 'accept="image/png, image/jpeg, image/jpg"');
content = content.replace(/if \(file\.type !== "image\/png"\) {/g, 'if (file.type !== "image/png" && file.type !== "image/jpeg" && file.type !== "image/jpg") {');
content = content.replace(/Please upload a transparent \.png format logo only/g, 'Please upload a .png or .jpg format logo');
content = content.replace(/Please upload a transparent \.png format Urdu name logo only!/g, 'Please upload a .png or .jpg format Urdu name logo!');
content = content.replace(/Please select a transparent \.png format photo only!/g, 'Please select a .png or .jpg format photo!');
content = content.replace(/\(Transparent PNG \.png only prefer so back-ground behind looks pristine\)/g, '(PNG or JPG)');
content = content.replace(/\(Transparent PNG \.png folder so backend doesn't black\)/g, '(PNG or JPG)');

fs.writeFileSync('src/components/PrincipalDashboard.tsx', content);

console.log('Update complete!');
