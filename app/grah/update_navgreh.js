const fs = require('fs');
const path = require('path');

const files = [
  'chandra/ChandraPage.jsx',
  'guru/GuruPage.jsx',
  'ketu/KetuPage.jsx',
  'mangal/MangalPage.jsx',
  'rahu/RahuPage.jsx',
  'shani/ShaniPage.jsx',
  'shukra/ShukraPage.jsx',
  'surya/SuryaPage.jsx'
];

files.forEach(file => {
  const fullPath = path.join('c:/Users/aayus/OneDrive/javascript/Desktop/baba-ratan/Baba-ratan/app/grah', file);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Try to find the span element containing "नवग्रह • <greh_name>"
  const regex = /<span\s+className="([^"]+)">\s*(?:•\s*)?नवग्रह\s*•\s*(.+?)\s*<\/span>/g;
  
  let newContent = content.replace(regex, (match, classes, grahName) => {
    // In SuryaPage it might be "• नवग्रह • सूर्य देव"
    // In others it might be "नवग्रह • चंद्र देव"
    
    // We want to replace it with:
    // <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[color]/10 border border-[color]/20 backdrop-blur-xl">
    //   <div className="w-2 h-2 rounded-full bg-[color]" />
    //   <span className="text-[color] text-sm tracking-[3px] uppercase font-semibold">
    //     नवग्रह • <grahName>
    //   </span>
    // </div>
    
    // We can extract the bg color and text color from the existing classes.
    // e.g. "bg-[#f97316]/10 text-[#d97706] border border-[#f97316]/20 px-5 py-2 rounded-full text-sm tracking-wide font-semibold"
    // Let's use the text color for the dot.
    const textColorMatch = classes.match(/text-\[([^\]]+)\]/);
    let dotColorClass = "bg-white"; // default
    if (textColorMatch) {
      dotColorClass = `bg-[${textColorMatch[1]}]`;
    } else {
        const textClassMatch = classes.match(/text-([a-z]+-\d+)/);
        if (textClassMatch) {
            dotColorClass = `bg-${textClassMatch[1]}`;
        }
    }
    
    // Remove inline block from classes, we will use inline-flex
    let newClasses = classes.replace(/\binline-block\b/g, '').trim();
    if (!newClasses.includes('inline-flex')) {
       newClasses = 'inline-flex items-center gap-3 ' + newClasses;
    }
    // Remove px-5 py-2 rounded-full from span inner, put them in outer if not present, actually the existing span has them.
    // The existing span is used as the container. So we change it to a div, and put a span inside.
    
    // Actually, just change the <span ...> to <div className="..."> and add the dot div inside, then wrap the text in a span.
    // Wait, the inner text doesn't need all the background/border classes.
    // Let's just convert it to:
    return `<div className="${newClasses}">\n                <div className="w-2 h-2 rounded-full ${dotColorClass}" />\n                <span>नवग्रह • ${grahName}</span>\n              </div>`;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(file, 'updated');
  } else {
    console.log(file, 'no change');
  }
});
