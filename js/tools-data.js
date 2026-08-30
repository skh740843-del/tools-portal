const toolsData = [
  // Image & Media Utilities
  { id: "img_resizer", name: "Image Resizer", cat: "Text & Media", icon: "fa-image", desc: "Resize image dimensions directly in browser", render: renderImgResizer },
  { id: "img_to_b64", name: "Image to Base64", cat: "Text & Media", icon: "fa-file-image", desc: "Convert images to Base64 data URI", render: renderImgToBase64 },
  { id: "color_picker", name: "HEX to RGB Color Tool", cat: "Text & Media", icon: "fa-palette", desc: "Convert HEX, RGB, and view color codes", render: renderColorPicker },

  // Social & SEO Marketing
  { id: "meta_gen", name: "SEO Meta Tag Generator", cat: "Text & Media", icon: "fa-tags", desc: "Generate OpenGraph, SEO & Twitter card meta tags", render: renderMetaGen },
  { id: "robots_gen", name: "Robots.txt Generator", cat: "Text & Media", icon: "fa-robot", desc: "Create search engine crawler rules for websites", render: renderRobotsGen },
  { id: "utm_builder", name: "UTM Campaign Builder", cat: "Text & Media", icon: "fa-bullhorn", desc: "Generate Google Analytics tracking campaign URLs", render: renderUtmBuilder },
  { id: "social_counter", name: "Social Bio & Character Limit", cat: "Text & Media", icon: "fa-hashtag", desc: "Check character limits for X, Instagram, LinkedIn", render: renderSocialCounter },
  { id: "hashtag_gen", name: "Hashtag Extractor", cat: "Text & Media", icon: "fa-wand-magic-sparkles", desc: "Extract and format clean hashtags from text", render: renderHashtagGen },

  // Finance & Business
  { id: "emi_calc", name: "Loan EMI Calculator", cat: "Finance & Tax", icon: "fa-calculator", desc: "Calculate Monthly EMI with breakdown", render: renderEmiCalc },
  { id: "sip_calc", name: "SIP Calculator", cat: "Finance & Tax", icon: "fa-chart-line", desc: "Calculate mutual fund SIP returns", render: renderSipCalc },
  { id: "ci_calc", name: "Compound Interest", cat: "Finance & Tax", icon: "fa-arrow-trend-up", desc: "Compound interest with annual rates", render: renderCiCalc },
  { id: "fd_calc", name: "Fixed Deposit (FD)", cat: "Finance & Tax", icon: "fa-piggy-bank", desc: "Calculate FD maturity and interest", render: renderFdCalc },
  { id: "salary_calc", name: "In-Hand Salary", cat: "Finance & Tax", icon: "fa-wallet", desc: "Calculate monthly take-home pay", render: renderSalaryCalc },
  { id: "cagr_calc", name: "CAGR Growth", cat: "Finance & Tax", icon: "fa-chart-pie", desc: "Compound Annual Growth Rate", render: renderCagrCalc },
  { id: "gst_calc", name: "GST Calculator", cat: "Finance & Tax", icon: "fa-percent", desc: "Calculate inclusive/exclusive GST", render: renderGstCalc },
  { id: "disc_calc", name: "Discount Calculator", cat: "Finance & Tax", icon: "fa-tags", desc: "Calculate discount and savings", render: renderDiscountCalc },

  // Calculators & Health
  { id: "calorie_calc", name: "Daily Calorie (TDEE)", cat: "Calculators", icon: "fa-fire", desc: "Calculate daily calories to lose/maintain weight", render: renderCalorieCalc },
  { id: "bmr_calc", name: "BMR Calculator", cat: "Calculators", icon: "fa-heart-pulse", desc: "Basal Metabolic Rate calories burned at rest", render: renderBmrCalc },
  { id: "water_calc", name: "Daily Water Intake", cat: "Calculators", icon: "fa-bottle-water", desc: "Daily recommended water intake based on weight", render: renderWaterCalc },
  { id: "bodyfat_calc", name: "Body Fat Estimator", cat: "Calculators", icon: "fa-person", desc: "Estimate body fat percentage from BMI", render: renderBodyFatCalc },
  { id: "bmi_calc", name: "BMI Calculator", cat: "Calculators", icon: "fa-weight-scale", desc: "Body Mass Index & weight category", render: renderBmiCalc },
  { id: "age_calc", name: "Exact Age Calculator", cat: "Calculators", icon: "fa-calendar-days", desc: "Exact age in years, months, days", render: renderAgeCalc },
  { id: "pct_calc", name: "Percentage Calculator", cat: "Calculators", icon: "fa-divide", desc: "Find percentage and differences", render: renderPctCalc },
  { id: "rand_picker", name: "Random Number Picker", cat: "Calculators", icon: "fa-dice", desc: "Pick random numbers or winner draw", render: renderRandomPicker },

  // Converters
  { id: "temp_conv", name: "Temperature Converter", cat: "Calculators", icon: "fa-temperature-high", desc: "Convert Celsius, Fahrenheit, Kelvin", render: renderTempConv },
  { id: "weight_conv", name: "Weight & Mass Converter", cat: "Calculators", icon: "fa-scale-balanced", desc: "Convert KG, Lbs, Grams, Ounces", render: renderWeightConv },
  { id: "speed_conv", name: "Speed Converter", cat: "Calculators", icon: "fa-gauge-high", desc: "Convert km/h, mph, m/s, knots", render: renderSpeedConv },
  { id: "data_conv", name: "Data Storage Converter", cat: "Calculators", icon: "fa-hard-drive", desc: "Convert MB, GB, TB, KB, Bytes", render: renderDataConv },
  { id: "unit_conv", name: "Length Converter", cat: "Calculators", icon: "fa-ruler-combined", desc: "Convert meters, feet, inches, km", render: renderUnitConv },

  // Text & Daily Utilities
  { id: "word_count", name: "Word Counter", cat: "Text & Media", icon: "fa-file-lines", desc: "Count words, characters, reading time", render: renderWordCounter },
  { id: "case_conv", name: "Case Converter", cat: "Text & Media", icon: "fa-font", desc: "UPPERCASE, lowercase, Title Case", render: renderCaseConv },
  { id: "dup_remover", name: "Remove Duplicate Lines", cat: "Text & Media", icon: "fa-filter", desc: "Filter out repeating text & list items", render: renderDupRemover },
  { id: "slug_gen", name: "Text to Slug URL", cat: "Text & Media", icon: "fa-link", desc: "Convert post titles to SEO URL slugs", render: renderSlugGen },
  { id: "find_replace", name: "Find and Replace", cat: "Text & Media", icon: "fa-arrows-rotate", desc: "Quickly find words and replace in text", render: renderFindReplace },
  { id: "lorem_gen", name: "Lorem Ipsum Generator", cat: "Text & Media", icon: "fa-paragraph", desc: "Generate placeholder dummy paragraphs", render: renderLoremGen },
  { id: "pdf_gen", name: "Text to PDF Export", cat: "Text & Media", icon: "fa-file-pdf", desc: "Export formatted notes directly into PDF", render: renderPdfMaker }
];

// === IMAGE & MEDIA ENGINES ===

function renderImgResizer(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="file" id="imgUpload" accept="image/*" class="text-xs">
      <div class="grid grid-cols-2 gap-2">
        <div><label>New Width (px)</label><input type="number" id="imgW" value="500"></div>
        <div><label>New Height (px)</label><input type="number" id="imgH" value="500"></div>
      </div>
      <button onclick="resizeImage()">Resize & Download</button>
      <canvas id="resCanvas" class="hidden"></canvas>
    </div>
  `;
}
window.resizeImage = () => {
  const f = document.getElementById('imgUpload').files[0];
  const w = parseInt(document.getElementById('imgW').value);
  const h = parseInt(document.getElementById('imgH').value);
  if (!f || !w || !h) return alert('Select image & enter valid dimensions');
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.getElementById('resCanvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const link = document.createElement('a');
      link.download = `resized_${w}x${h}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(f);
};

function renderImgToBase64(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="file" id="b64File" accept="image/*" class="text-xs" onchange="runImgToBase64()">
      <textarea id="b64Out" readonly placeholder="Base64 Data URI output..." class="h-28 font-mono text-[10px] select-all"></textarea>
    </div>
  `;
}
window.runImgToBase64 = () => {
  const f = document.getElementById('b64File').files[0];
  if (!f) return;
  const reader = new FileReader();
  reader.onload = e => document.getElementById('b64Out').value = e.target.result;
  reader.readAsDataURL(f);
};

function renderColorPicker(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <input type="color" id="clrPick" value="#ea580c" oninput="runColor(this.value)" class="w-14 h-10 border-0 p-0 rounded-xl cursor-pointer">
        <input type="text" id="clrHex" value="#ea580c" oninput="runColor(this.value)" class="font-mono">
      </div>
      <div id="clrInfo" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1 font-mono"></div>
    </div>
  `;
  setTimeout(() => runColor('#ea580c'), 50);
}
window.runColor = (hex) => {
  if (!hex.startsWith('#')) hex = '#' + hex;
  document.getElementById('clrPick').value = hex;
  document.getElementById('clrHex').value = hex;
  let c = hex.substring(1);
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  if (isNaN(num)) return;
  const r = (num >> 16) & 255, g = (num >> 8) & 255, b = num & 255;
  document.getElementById('clrInfo').innerHTML = `
    <div>HEX: <b>${hex.toUpperCase()}</b></div>
    <div>RGB: <b>rgb(${r}, ${g}, ${b})</b></div>
    <div>CSS: <b>rgb(${r} ${g} ${b})</b></div>
  `;
};
function renderMetaGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Site / Page Title</label><input type="text" id="metaT" placeholder="HabiTools" oninput="genMeta()"></div>
      <div><label>Meta Description</label><textarea id="metaD" placeholder="Description" oninput="genMeta()" class="h-20"></textarea></div>
      <div><label>Canonical URL</label><input type="text" id="metaU" placeholder="https://example.com" oninput="genMeta()"></div>
      <textarea id="metaOut" readonly class="h-24 font-mono text-xs"></textarea>
    </div>
  `;
}
window.genMeta = () => {
  const t = document.getElementById('metaT').value || "Title", d = document.getElementById('metaD').value || "Description", u = document.getElementById('metaU').value || "https://example.com";
  document.getElementById('metaOut').value = `<title>${t}</title>\n<meta name="description" content="${d}">\n<meta property="og:title" content="${t}">\n<meta property="og:description" content="${d}">\n<meta property="og:url" content="${u}">`;
};

function renderRobotsGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <select id="robAllow"><option value="allow">Allow All</option><option value="disallow">Disallow All</option></select>
      <input type="text" id="robSite" placeholder="Sitemap URL">
      <button onclick="genRobots()">Generate</button>
      <textarea id="robOut" readonly class="h-20 font-mono text-xs"></textarea>
    </div>
  `;
}
window.genRobots = () => {
  const a = document.getElementById('robAllow').value, s = document.getElementById('robSite').value;
  document.getElementById('robOut').value = `User-agent: *\n${a === 'disallow' ? 'Disallow: /\n' : ''}${s ? 'Sitemap: ' + s : ''}`;
};

function renderUtmBuilder(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="text" id="utmUrl" placeholder="https://website.com" oninput="buildUtm()">
      <div class="grid grid-cols-2 gap-2">
        <input type="text" id="utmSrc" placeholder="Source (google)" oninput="buildUtm()">
        <input type="text" id="utmMed" placeholder="Medium (cpc)" oninput="buildUtm()">
      </div>
      <textarea id="utmOut" readonly class="h-20 font-mono text-xs select-all"></textarea>
    </div>
  `;
}
window.buildUtm = () => {
  const u = document.getElementById('utmUrl').value.trim(), s = document.getElementById('utmSrc').value.trim(), m = document.getElementById('utmMed').value.trim();
  if (!u) { document.getElementById('utmOut').value = ""; return; }
  const params = new URLSearchParams();
  if (s) params.append('utm_source', s);
  if (m) params.append('utm_medium', m);
  const q = params.toString();
  document.getElementById('utmOut').value = q ? `${u}${u.includes('?') ? '&' : '?'}${q}` : u;
};

function renderSocialCounter(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="socTxt" oninput="runSocialCount()" placeholder="Type here..." class="h-28"></textarea>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
        <div class="p-2 bg-stone-50 border border-stone-200 rounded-xl"><div>X</div><b id="scX">280</b></div>
        <div class="p-2 bg-stone-50 border border-stone-200 rounded-xl"><div>Insta</div><b id="scIg">150</b></div>
        <div class="p-2 bg-stone-50 border border-stone-200 rounded-xl"><div>LinkedIn</div><b id="scLi">3000</b></div>
        <div class="p-2 bg-stone-50 border border-stone-200 rounded-xl"><div>Total</div><b id="scTot" class="text-orange-700">0</b></div>
      </div>
    </div>
  `;
}
window.runSocialCount = () => {
  const l = document.getElementById('socTxt').value.length;
  document.getElementById('scX').innerText = 280 - l;
  document.getElementById('scIg').innerText = 150 - l;
  document.getElementById('scLi').innerText = 3000 - l;
  document.getElementById('scTot').innerText = l;
};

function renderHashtagGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="hashIn" placeholder="Enter text..." class="h-24"></textarea>
      <div class="grid grid-cols-2 gap-2">
        <button onclick="extractHash()">Extract #</button>
        <button onclick="wordsToHash()">Words to #</button>
      </div>
      <textarea id="hashOut" readonly class="h-24 font-mono text-xs"></textarea>
    </div>
  `;
}
window.extractHash = () => {
  const m = document.getElementById('hashIn').value.match(/#[a-zA-Z0-9_]+/g);
  document.getElementById('hashOut').value = m ? [...new Set(m)].join(' ') : "None";
};
window.wordsToHash = () => {
  const w = document.getElementById('hashIn').value.replace(/[^\w\s]/gi, '').split(/\s+/).filter(x => x.length > 2);
  document.getElementById('hashOut').value = [...new Set(w)].map(x => '#' + x.toLowerCase()).join(' ');
};

function renderTempConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="tmpV" value="100" oninput="runTemp()">
        <select id="tmpU" onchange="runTemp()"><option value="c">Celsius</option><option value="f">Fahrenheit</option></select>
      </div>
      <div id="tmpRes" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1"></div>
    </div>
  `;
  setTimeout(runTemp, 50);
}
window.runTemp = () => {
  const v = parseFloat(document.getElementById('tmpV').value), u = document.getElementById('tmpU').value;
  if (isNaN(v)) return;
  const c = u === 'c' ? v : (v - 32) * 5/9, f = u === 'c' ? (v * 9/5) + 32 : v;
  document.getElementById('tmpRes').innerHTML = `<div>Celsius: <b>${c.toFixed(2)} °C</b></div><div>Fahrenheit: <b>${f.toFixed(2)} °F</b></div>`;
};

function renderWeightConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="wVal" value="1" oninput="runWeight()">
        <select id="wUnit" onchange="runWeight()"><option value="kg">KG</option><option value="lb">Lbs</option></select>
      </div>
      <div id="wRes" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs"></div>
    </div>
  `;
  setTimeout(runWeight, 50);
}
window.runWeight = () => {
  const v = parseFloat(document.getElementById('wVal').value), u = document.getElementById('wUnit').value;
  if (isNaN(v)) return;
  const kg = u === 'kg' ? v : v * 0.453592;
  document.getElementById('wRes').innerHTML = `<div>KG: <b>${kg.toFixed(3)}</b> | LBS: <b>${(kg * 2.20462).toFixed(3)}</b></div>`;
};

function renderSpeedConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="spdVal" value="60" oninput="runSpeed()">
        <select id="spdUnit" onchange="runSpeed()"><option value="kmh">km/h</option><option value="mph">mph</option></select>
      </div>
      <div id="spdRes" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs"></div>
    </div>
  `;
  setTimeout(runSpeed, 50);
}
window.runSpeed = () => {
  const v = parseFloat(document.getElementById('spdVal').value), u = document.getElementById('spdUnit').value;
  if (isNaN(v)) return;
  const kmh = u === 'kmh' ? v : v * 1.60934;
  document.getElementById('spdRes').innerHTML = `<div>km/h: <b>${kmh.toFixed(2)}</b> | mph: <b>${(kmh / 1.60934).toFixed(2)}</b></div>`;
};

function renderDataConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="dtVal" value="1024" oninput="runData()">
        <select id="dtUnit" onchange="runData()"><option value="mb">MB</option><option value="gb">GB</option></select>
      </div>
      <div id="dtRes" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs"></div>
    </div>
  `;
  setTimeout(runData, 50);
}
window.runData = () => {
  const v = parseFloat(document.getElementById('dtVal').value), u = document.getElementById('dtUnit').value;
  if (isNaN(v)) return;
  const mb = u === 'mb' ? v : v * 1024;
  document.getElementById('dtRes').innerHTML = `<div>GB: <b>${(mb / 1024).toFixed(3)}</b> | MB: <b>${mb.toFixed(1)}</b></div>`;
};
function renderCalorieCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <select id="calGen"><option value="m">Male</option><option value="f">Female</option></select>
        <input type="number" id="calAge" value="25" placeholder="Age">
      </div>
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="calW" value="70" placeholder="KG">
        <input type="number" id="calH" value="175" placeholder="CM">
      </div>
      <button onclick="calcCalories()">Calculate</button>
      <div id="calRes" class="text-xs space-y-1 hidden"></div>
    </div>
  `;
}
window.calcCalories = () => {
  const g = document.getElementById('calGen').value, a = parseFloat(document.getElementById('calAge').value);
  const w = parseFloat(document.getElementById('calW').value), h = parseFloat(document.getElementById('calH').value);
  if (!a || !w || !h) return;
  const bmr = g === 'm' ? (10 * w + 6.25 * h - 5 * a + 5) : (10 * w + 6.25 * h - 5 * a - 161);
  const tdee = Math.round(bmr * 1.375);
  const res = document.getElementById('calRes');
  res.innerHTML = `<div>Maintenance: <b>${tdee} kcal</b></div><div>Weight Loss: <b>${tdee - 500} kcal</b></div>`;
  res.classList.remove('hidden');
};

function renderBmrCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <select id="bmrGen"><option value="m">Male</option><option value="f">Female</option></select>
        <input type="number" id="bmrAge" value="22">
      </div>
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="bmrW" value="65">
        <input type="number" id="bmrH" value="170">
      </div>
      <button onclick="calcBmr()">Calculate BMR</button>
      <div id="bmrRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcBmr = () => {
  const g = document.getElementById('bmrGen').value, a = parseFloat(document.getElementById('bmrAge').value);
  const w = parseFloat(document.getElementById('bmrW').value), h = parseFloat(document.getElementById('bmrH').value);
  if (!a || !w || !h) return;
  const bmr = g === 'm' ? (10 * w + 6.25 * h - 5 * a + 5) : (10 * w + 6.25 * h - 5 * a - 161);
  const res = document.getElementById('bmrRes');
  res.innerText = `BMR: ${Math.round(bmr)} Calories/day`;
  res.classList.remove('hidden');
};

function renderWaterCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="watW" value="65" placeholder="Weight (KG)">
      <button onclick="calcWater()">Calculate Goal</button>
      <div id="watRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcWater = () => {
  const w = parseFloat(document.getElementById('watW').value);
  if (!w) return;
  const liters = (w * 0.033).toFixed(2);
  const res = document.getElementById('watRes');
  res.innerHTML = `Drink: <b>${liters} Liters</b> (~${Math.round(liters/0.25)} Glasses)`;
  res.classList.remove('hidden');
};

function renderBodyFatCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <select id="bfGen"><option value="1">Male</option><option value="0">Female</option></select>
        <input type="number" id="bfAge" value="24">
      </div>
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="bfW" value="68">
        <input type="number" id="bfH" value="172">
      </div>
      <button onclick="calcBodyFat()">Estimate</button>
      <div id="bfRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcBodyFat = () => {
  const s = parseInt(document.getElementById('bfGen').value), a = parseFloat(document.getElementById('bfAge').value);
  const w = parseFloat(document.getElementById('bfW').value), h = parseFloat(document.getElementById('bfH').value) / 100;
  if (!a || !w || !h) return;
  const fat = (1.20 * (w / (h * h)) + 0.23 * a - 10.8 * s - 5.4).toFixed(1);
  const res = document.getElementById('bfRes');
  res.innerText = `Body Fat: ${fat}%`;
  res.classList.remove('hidden');
};

function renderSipCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="sipAmt" value="5000" placeholder="Monthly ₹" oninput="runSip()">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="sipRate" value="12" step="0.5" oninput="runSip()">
        <input type="number" id="sipYears" value="10" oninput="runSip()">
      </div>
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1">
        <div>Invested: <b id="sipInv">₹ 0</b></div>
        <div>Maturity: <b id="sipTot" class="text-orange-700">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runSip, 50);
}
window.runSip = () => {
  const p = parseFloat(document.getElementById('sipAmt').value) || 0, i = (parseFloat(document.getElementById('sipRate').value) || 0) / 12 / 100, n = (parseFloat(document.getElementById('sipYears').value) || 0) * 12;
  if (!p || !i || !n) return;
  const tot = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  document.getElementById('sipInv').innerText = "₹ " + Math.round(p * n).toLocaleString('en-IN');
  document.getElementById('sipTot').innerText = "₹ " + Math.round(tot).toLocaleString('en-IN');
};

function renderCiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="ciP" value="100000" oninput="runCi()">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="ciR" value="8" step="0.1" oninput="runCi()">
        <input type="number" id="ciT" value="5" oninput="runCi()">
      </div>
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1">
        <div>Total: <b id="ciTot" class="text-orange-700">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runCi, 50);
}
window.runCi = () => {
  const p = parseFloat(document.getElementById('ciP').value) || 0, r = (parseFloat(document.getElementById('ciR').value) || 0) / 100, t = parseFloat(document.getElementById('ciT').value) || 0;
  if (!p || !r || !t) return;
  document.getElementById('ciTot').innerText = "₹ " + Math.round(p * Math.pow((1 + r), t)).toLocaleString('en-IN');
};

function renderFdCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="fdP" value="200000" oninput="runFd()">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="fdR" value="7.1" step="0.1" oninput="runFd()">
        <input type="number" id="fdT" value="3" oninput="runFd()">
      </div>
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1">
        <div>Maturity: <b id="fdTot" class="text-orange-700">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runFd, 50);
}
window.runFd = () => {
  const p = parseFloat(document.getElementById('fdP').value) || 0, r = (parseFloat(document.getElementById('fdR').value) || 0) / 100, t = parseFloat(document.getElementById('fdT').value) || 0;
  if (!p || !r || !t) return;
  document.getElementById('fdTot').innerText = "₹ " + Math.round(p * Math.pow((1 + r/4), 4 * t)).toLocaleString('en-IN');
};

function renderSalaryCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="ctcAmt" value="600000" oninput="runSalary()">
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">
        <div>Monthly In-Hand: <b id="salMonth" class="text-orange-700">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runSalary, 50);
}
window.runSalary = () => {
  const c = parseFloat(document.getElementById('ctcAmt').value) || 0;
  if (!c) return;
  const inHand = (c / 12) - Math.min((c / 12) * 0.12, 1800) - 200;
  document.getElementById('salMonth').innerText = "₹ " + Math.round(inHand).toLocaleString('en-IN');
};

function renderCagrCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="cagrInit" value="50000">
      <input type="number" id="cagrFin" value="120000">
      <input type="number" id="cagrY" value="5">
      <button onclick="calcCagr()">Calculate</button>
      <div id="cagrRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcCagr = () => {
  const i = parseFloat(document.getElementById('cagrInit').value), f = parseFloat(document.getElementById('cagrFin').value), y = parseFloat(document.getElementById('cagrY').value);
  if (!i || !f || !y) return;
  const res = document.getElementById('cagrRes');
  res.innerText = `CAGR: ${((Math.pow(f / i, 1 / y) - 1) * 100).toFixed(2)}%`;
  res.classList.remove('hidden');
};

function renderEmiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="loanAmount" value="500000" oninput="runEmi()">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="interestRate" step="0.1" value="9.5" oninput="runEmi()">
        <input type="number" id="tenureYears" value="5" oninput="runEmi()">
      </div>
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">
        <div>Monthly EMI: <b id="emiMonthly" class="text-orange-700">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runEmi, 50);
}
window.runEmi = () => {
  const p = parseFloat(document.getElementById('loanAmount').value) || 0, r = (parseFloat(document.getElementById('interestRate').value) || 0) / 12 / 100, n = (parseFloat(document.getElementById('tenureYears').value) || 0) * 12;
  if (p <= 0 || r <= 0 || n <= 0) return;
  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  document.getElementById('emiMonthly').innerText = "₹ " + Math.round(emi).toLocaleString('en-IN');
};

function renderPctCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="pVal" placeholder="%">
        <input type="number" id="pTotal" placeholder="Total">
      </div>
      <button onclick="calcPct()">Calculate</button>
      <div id="pctRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcPct = () => {
  const v = parseFloat(document.getElementById('pVal').value), t = parseFloat(document.getElementById('pTotal').value);
  if (isNaN(v) || isNaN(t)) return;
  const res = document.getElementById('pctRes');
  res.innerText = `${v}% of ${t} = ${(v * t) / 100}`;
  res.classList.remove('hidden');
};

function renderGstCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="gstAmt" placeholder="Amount">
      <div class="grid grid-cols-2 gap-2">
        <select id="gstRate"><option value="18">18%</option><option value="12">12%</option><option value="5">5%</option></select>
        <select id="gstType"><option value="exclusive">Exclusive (+)</option><option value="inclusive">Inclusive (-)</option></select>
      </div>
      <button onclick="calcGst()">Compute Tax</button>
      <div id="gstRes" class="text-xs hidden"></div>
    </div>
  `;
}
window.calcGst = () => {
  const a = parseFloat(document.getElementById('gstAmt').value), r = parseFloat(document.getElementById('gstRate').value), t = document.getElementById('gstType').value;
  if (!a) return;
  const tax = t === 'exclusive' ? (a * r) / 100 : a - (a * (100 / (100 + r)));
  const res = document.getElementById('gstRes');
  res.innerHTML = `<div>Tax: <b>₹${tax.toFixed(2)}</b> | Total: <b>₹${(t === 'exclusive' ? a + tax : a).toFixed(2)}</b></div>`;
  res.classList.remove('hidden');
};

function renderDiscountCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="dp" placeholder="Price">
      <input type="number" id="dd" placeholder="Discount %">
      <button onclick="calcDisc()">Calculate</button>
      <div id="discRes" class="text-xs hidden"></div>
    </div>
  `;
}
window.calcDisc = () => {
  const p = parseFloat(document.getElementById('dp').value), d = parseFloat(document.getElementById('dd').value);
  if (!p || isNaN(d)) return;
  const s = (p * d) / 100;
  const res = document.getElementById('discRes');
  res.innerHTML = `<div>Save: <b>₹${s.toFixed(2)}</b> | Final: <b>₹${(p - s).toFixed(2)}</b></div>`;
  res.classList.remove('hidden');
};

function renderAgeCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="date" id="dob">
      <button onclick="calcAge()">Calculate</button>
      <div id="ageRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcAge = () => {
  const d = new Date(document.getElementById('dob').value);
  if (isNaN(d.getTime())) return;
  const diff = new Date(Date.now() - d.getTime());
  const res = document.getElementById('ageRes');
  res.innerText = `${Math.abs(diff.getUTCFullYear() - 1970)} Years, ${diff.getUTCMonth()} Months`;
  res.classList.remove('hidden');
};

function renderBmiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="bw" placeholder="Weight (KG)">
      <input type="number" id="bh" placeholder="Height (CM)">
      <button onclick="calcBmi()">Calculate</button>
      <div id="bmiRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcBmi = () => {
  const w = parseFloat(document.getElementById('bw').value), h = parseFloat(document.getElementById('bh').value) / 100;
  if (!w || !h) return;
  const res = document.getElementById('bmiRes');
  res.innerText = `BMI: ${(w / (h * h)).toFixed(1)}`;
  res.classList.remove('hidden');
};

function renderUnitConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="uv" placeholder="Meters">
      <button onclick="calcUnit()">Convert</button>
      <div id="uRes" class="text-xs hidden"></div>
    </div>
  `;
}
window.calcUnit = () => {
  const m = parseFloat(document.getElementById('uv').value);
  if (isNaN(m)) return;
  const res = document.getElementById('uRes');
  res.innerHTML = `<div>KM: <b>${m / 1000}</b> | Feet: <b>${(m * 3.28084).toFixed(2)}</b></div>`;
  res.classList.remove('hidden');
};

function renderDupRemover(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="dupIn" placeholder="Paste lines..." class="h-28"></textarea>
      <button onclick="cleanDuplicates()">Remove Duplicates</button>
      <textarea id="dupOut" readonly class="h-28 font-mono"></textarea>
    </div>
  `;
}
window.cleanDuplicates = () => {
  const v = document.getElementById('dupIn').value;
  if (!v) return;
  document.getElementById('dupOut').value = [...new Set(v.split('\n').map(l => l.trim()))].filter(l => l.length > 0).join('\n');
};

function renderSlugGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="text" id="slugIn" placeholder="Post Title" oninput="makeSlug()">
      <div id="slugOut" class="font-mono text-orange-700 font-bold text-sm select-all">slug-preview</div>
    </div>
  `;
}
window.makeSlug = () => {
  const v = document.getElementById('slugIn').value;
  document.getElementById('slugOut').innerText = v.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-');
};

function renderFindReplace(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="frText" placeholder="Text..." class="h-20"></textarea>
      <div class="grid grid-cols-2 gap-2">
        <input type="text" id="frFind" placeholder="Find">
        <input type="text" id="frReplace" placeholder="Replace">
      </div>
      <button onclick="doFindReplace()">Replace All</button>
      <textarea id="frOut" readonly class="h-20"></textarea>
    </div>
  `;
}
window.doFindReplace = () => {
  const t = document.getElementById('frText').value, f = document.getElementById('frFind').value, r = document.getElementById('frReplace').value;
  if (!t || !f) return;
  document.getElementById('frOut').value = t.replace(new RegExp(f, 'gi'), r);
};

function renderLoremGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="loremParas" value="2" min="1" max="10">
      <button onclick="generateLorem()">Generate Lorem</button>
      <textarea id="loremOut" readonly class="h-28 text-xs"></textarea>
    </div>
  `;
}
window.generateLorem = () => {
  const count = parseInt(document.getElementById('loremParas').value) || 2;
  const t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  document.getElementById('loremOut').value = Array(count).fill(t).join('\n\n');
};

function renderRandomPicker(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <input type="number" id="rMin" value="1">
        <input type="number" id="rMax" value="100">
      </div>
      <button onclick="pickRandom()">Pick</button>
      <div id="rPickOut" class="text-center font-mono text-2xl font-black text-orange-700">--</div>
    </div>
  `;
}
window.pickRandom = () => {
  const min = parseInt(document.getElementById('rMin').value) || 0, max = parseInt(document.getElementById('rMax').value) || 100;
  document.getElementById('rPickOut').innerText = Math.floor(Math.random() * (max - min + 1)) + min;
};

function renderWordCounter(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="wb" oninput="runWc()" placeholder="Type here..." class="h-28"></textarea>
      <div class="text-xs font-bold text-center">Words: <span id="wCount">0</span> | Chars: <span id="cCount">0</span></div>
    </div>
  `;
}
window.runWc = () => {
  const v = document.getElementById('wb').value.trim();
  document.getElementById('wCount').innerText = v ? v.split(/\s+/).length : 0;
  document.getElementById('cCount').innerText = v.length;
};

function renderCaseConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="cb" placeholder="Text..." class="h-24"></textarea>
      <div class="grid grid-cols-3 gap-2 text-xs font-bold">
        <button onclick="document.getElementById('cb').value = document.getElementById('cb').value.toUpperCase()">UPPER</button>
        <button onclick="document.getElementById('cb').value = document.getElementById('cb').value.toLowerCase()">lower</button>
        <button onclick="document.getElementById('cb').value = document.getElementById('cb').value.replace(/\\w\\S*/g, w => w.replace(/^\\w/, c => c.toUpperCase()))">Title</button>
      </div>
    </div>
  `;
}

function renderPdfMaker(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="pt" placeholder="Write text..." class="h-28"></textarea>
      <button onclick="dlPdf()">Export PDF</button>
    </div>
  `;
}
window.dlPdf = () => {
  const t = document.getElementById('pt').value;
  if (!t) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(t, 10, 10);
  doc.save("document.pdf");
};
