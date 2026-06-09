const fs = require("fs");
const path = require("path");

const grahData = {
  surya: {
    tattva: "अग्नि", din: "रविवार", ratna: "माणिक्य",
    borderColor: "border-[#ffd8b3]", textColor: "text-[#9a3412]", valueColor: "text-[#7c2d12]"
  },
  chandra: {
    tattva: "जल", din: "सोमवार", ratna: "मोती",
    borderColor: "border-slate-200", textColor: "text-blue-600", valueColor: "text-slate-800"
  },
  mangal: {
    tattva: "अग्नि", din: "मंगलवार", ratna: "मूंगा",
    borderColor: "border-red-200", textColor: "text-red-600", valueColor: "text-red-900"
  },
  budh: {
    tattva: "पृथ्वी", din: "बुधवार", ratna: "पन्ना",
    borderColor: "border-[#d5f5df]", textColor: "text-[#138f66]", valueColor: "text-[#0b5d45]"
  },
  guru: {
    tattva: "आकाश", din: "गुरुवार", ratna: "पुखराज",
    borderColor: "border-[#fce0b0]", textColor: "text-[#c58a2d]", valueColor: "text-[#7a4d0b]"
  },
  shukra: {
    tattva: "जल", din: "शुक्रवार", ratna: "हीरा",
    borderColor: "border-pink-200", textColor: "text-pink-500", valueColor: "text-pink-800"
  },
  shani: {
    tattva: "वायु", din: "शनिवार", ratna: "नीलम",
    borderColor: "border-indigo-200/50", textColor: "text-indigo-400", valueColor: "text-indigo-200",
    bgColor: "bg-white/10"
  },
  rahu: {
    tattva: "वायु", din: "शनिवार", ratna: "गोमेद",
    borderColor: "border-zinc-500/30", textColor: "text-zinc-400", valueColor: "text-white",
    bgColor: "bg-white/5"
  },
  ketu: {
    tattva: "अग्नि", din: "मंगलवार", ratna: "लहसुनिया",
    borderColor: "border-slate-500/30", textColor: "text-slate-400", valueColor: "text-white",
    bgColor: "bg-white/5"
  }
};

const baseDir = path.join(__dirname, "app", "grah");

Object.keys(grahData).forEach(grah => {
  if (grah === 'surya' || grah === 'chandra') return; // already updated

  const pagePath = path.join(baseDir, grah, `${grah.charAt(0).toUpperCase() + grah.slice(1)}Page.jsx`);
  if (!fs.existsSync(pagePath)) {
    console.log(`Skipping ${grah}: file not found`);
    return;
  }

  let content = fs.readFileSync(pagePath, "utf-8");
  
  const data = grahData[grah];
  const bgColor = data.bgColor || "bg-white/95";
  
  const infoCardsHtml = `
              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-10 w-full max-w-md">
                {[
                  { label: "तत्व", value: "${data.tattva}" },
                  { label: "दिन", value: "${data.din}" },
                  { label: "रत्न", value: "${data.ratna}" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="${bgColor} border ${data.borderColor} rounded-2xl p-2 sm:p-5 text-center shadow-sm"
                  >
                    <p className="${data.textColor} text-xs sm:text-sm font-semibold">{item.label}</p>
                    <h3 className="${data.valueColor} font-bold text-sm sm:text-base md:text-xl mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>`;

  // Strip out old info cards if present
  content = content.replace(/{\/\* INFO \*\/}\s*<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">[\s\S]*?<\/div>\s*<\/div>/, "");
  content = content.replace(/<div className="grid grid-cols-3 gap-2 sm:gap-5 mt-12 w-full max-w-md">[\s\S]*?<\/div>\n\s*<\/div>/, "");

  // For most pages, buttons are under {/* BUTTONS */}
  // Let's replace {/* BUTTONS */} with infoCards + {/* BUTTONS */}
  if (content.includes("{/* BUTTONS */}")) {
    content = content.replace("{/* BUTTONS */}", `${infoCardsHtml}\n\n              {/* BUTTONS */}`);
    // also change mt-12 to mt-8 in the buttons wrapper right after
    content = content.replace(/{\/\* BUTTONS \*\/}\n\s*<div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-12"/, '{/* BUTTONS */}\n              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8"');
  } else {
    // If there is no {/* BUTTONS */}, find the div with class "flex flex-wrap justify-center lg:justify-start gap-5"
    content = content.replace(/<div className="flex flex-wrap justify-center lg:justify-start gap-5([^"]*)">/, `${infoCardsHtml}\n\n              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8">`);
  }
  
  fs.writeFileSync(pagePath, content);
  console.log(`Updated ${grah}`);
});
