const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'app', 'rashi');

function removeWatermarks(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      removeWatermarks(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const regex = /<div className="absolute top-0 left-0 w-full h-full opacity-10">\s*<div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-\[100px\] sm:text-\[180px\] text-\[#[a-fA-F0-9]+\]">\s*.*?\s*<\/div>\s*<\/div>/g;
      
      const newContent = content.replace(regex, '');
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${file}`);
      }
    }
  }
}

removeWatermarks(dir);
console.log('Done');
