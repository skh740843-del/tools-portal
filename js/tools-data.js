const toolsData = [
  // Finance & Business
  { id: "emi_calc", name: "Loan EMI Calculator", cat: "Finance & Tax", icon: "fa-calculator", desc: "Calculate Monthly EMI with breakdown", render: renderEmiCalc },
  { id: "sip_calc", name: "SIP Calculator", cat: "Finance & Tax", icon: "fa-chart-line", desc: "Calculate mutual fund SIP returns", render: renderSipCalc },
  { id: "ci_calc", name: "Compound Interest", cat: "Finance & Tax", icon: "fa-arrow-trend-up", desc: "Compound interest with annual rates", render: renderCiCalc },
  { id: "fd_calc", name: "Fixed Deposit (FD)", cat: "Finance & Tax", icon: "fa-piggy-bank", desc: "Calculate FD maturity and interest", render: renderFdCalc },
  { id: "salary_calc", name: "In-Hand Salary", cat: "Finance & Tax", icon: "fa-wallet", desc: "Calculate monthly take-home pay", render: renderSalaryCalc },
  { id: "cagr_calc", name: "CAGR Growth", cat: "Finance & Tax", icon: "fa-chart-pie", desc: "Compound Annual Growth Rate", render: renderCagrCalc },
  { id: "gst_calc", name: "GST Calculator", cat: "Finance & Tax", icon: "fa-percent", desc: "Calculate inclusive/exclusive GST", render: renderGstCalc },
  { id: "disc_calc", name: "Discount Calculator", cat: "Finance & Tax", icon: "fa-tags", desc: "Calculate discount and savings", render: renderDiscountCalc },

  // Calculators, Health & Fitness
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

  // Text, Content & Daily Utilities
  { id: "word_count", name: "Word Counter", cat: "Text & Media", icon: "fa-file-lines", desc: "Count words, characters, reading time", render: renderWordCounter },
  { id: "case_conv", name: "Case Converter", cat: "Text & Media", icon: "fa-font", desc: "UPPERCASE, lowercase, Title Case", render: renderCaseConv },
  { id: "dup_remover", name: "Remove Duplicate Lines", cat: "Text & Media", icon: "fa-filter", desc: "Filter out repeating text & list items", render: renderDupRemover },
  { id: "slug_gen", name: "Text to Slug URL", cat: "Text & Media", icon: "fa-link", desc: "Convert post titles to SEO URL slugs", render: renderSlugGen },
  { id: "find_replace", name: "Find and Replace", cat: "Text & Media", icon: "fa-arrows-rotate", desc: "Quickly find words and replace in text", render: renderFindReplace },
  { id: "lorem_gen", name: "Lorem Ipsum Generator", cat: "Text & Media", icon: "fa-paragraph", desc: "Generate placeholder dummy paragraphs", render: renderLoremGen },
  { id: "pdf_gen", name: "Text to PDF Export", cat: "Text & Media", icon: "fa-file-pdf", desc: "Export formatted notes directly into PDF", render: renderPdfMaker }
];

// === 1. HEALTH & FITNESS ENGINES ===

function renderCalorieCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Gender</label><select id="calGen"><option value="m">Male</option><option value="f">Female</option></select></div>
        <div><label>Age</label><input type="number" id="calAge" value="25"></div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div><label>Weight (KG)</label><input type="number" id="calW" value="70"></div>
        <div><label>Height (CM)</label><input type="number" id="calH" value="175"></div>
      </div>
      <div>
        <label>Activity Level</label>
        <select id="calAct">
          <option value="1.2">Sedentary (Little/No exercise)</option>
          <option value="1.375" selected>Lightly active (1-3 days/week)</option>
          <option value="1.55">Moderately active (3-5 days/week)</option>
          <option value="1.725">Very active (6-7 days/week)</option>
        </select>
      </div>
      <button onclick="calcCalories()">Calculate Daily Calories</button>
      <div id="calRes" class="text-xs space-y-1 hidden"></div>
    </div>
  `;
}
window.calcCalories = () => {
  const g = document.getElementById('calGen').value, a = parseFloat(document.getElementById('calAge').value);
  const w = parseFloat(document.getElementById('calW').value), h = parseFloat(document.getElementById('calH').value);
  const act = parseFloat(document.getElementById('calAct').value);
  if (!a || !w || !h) return;
  let bmr = g === 'm' ? (10 * w + 6.25 * h - 5 * a + 5) : (10 * w + 6.25 * h - 5 * a - 161);
  let tdee = Math.round(bmr * act);
  const res = document.getElementById('calRes');
  res.innerHTML = `
    <div>Maintain Weight: <b class="font-mono text-orange-700">${tdee} kcal/day</b></div>
    <div>Mild Weight Loss (-0.25kg/w): <b class="font-mono text-emerald-700">${tdee - 250} kcal</b></div>
    <div>Weight Loss (-0.5kg/w): <b class="font-mono text-blue-700">${tdee - 500} kcal</b></div>
  `;
  res.classList.remove('hidden');
};

function renderBmrCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Gender</label><select id="bmrGen"><option value="m">Male</option><option value="f">Female</option></select></div>
        <div><label>Age</label><input type="number" id="bmrAge" value="22"></div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div><label>Weight (KG)</label><input type="number" id="bmrW" value="65"></div>
        <div><label>Height (CM)</label><input type="number" id="bmrH" value="170"></div>
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
  let bmr = g === 'm' ? (10 * w + 6.25 * h - 5 * a + 5) : (10 * w + 6.25 * h - 5 * a - 161);
  const res = document.getElementById('bmrRes');
  res.innerText = `Your BMR: ${Math.round(bmr)} Calories/day`;
  res.classList.remove('hidden');
};

function renderWaterCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Your Body Weight (KG)</label><input type="number" id="watW" value="65"></div>
      <div>
        <label>Daily Activity</label>
        <select id="watAct"><option value="0">Normal Desk Work</option><option value="0.5">Moderate Exercise (30-60m)</option><option value="1">Heavy Workout / Athlete</option></select>
      </div>
      <button onclick="calcWater()">Calculate Daily Water Goal</button>
      <div id="watRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcWater = () => {
  const w = parseFloat(document.getElementById('watW').value);
  const act = parseFloat(document.getElementById('watAct').value);
  if (!w) return;
  const liters = ((w * 0.033) + act).toFixed(2);
  const glasses = Math.round(liters / 0.25);
  const res = document.getElementById('watRes');
  res.innerHTML = `Drink: <b class="text-orange-700">${liters} Liters</b> (~${glasses} Glasses/day)`;
  res.classList.remove('hidden');
};

function renderBodyFatCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Gender</label><select id="bfGen"><option value="1">Male</option><option value="0">Female</option></select></div>
        <div><label>Age</label><input type="number" id="bfAge" value="24"></div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div><label>Weight (KG)</label><input type="number" id="bfW" value="68"></div>
        <div><label>Height (CM)</label><input type="number" id="bfH" value="172"></div>
      </div>
      <button onclick="calcBodyFat()">Estimate Body Fat %</button>
      <div id="bfRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcBodyFat = () => {
  const sex = parseInt(document.getElementById('bfGen').value), age = parseFloat(document.getElementById('bfAge').value);
  const w = parseFloat(document.getElementById('bfW').value), h = parseFloat(document.getElementById('bfH').value) / 100;
  if (!age || !w || !h) return;
  const bmi = w / (h * h);
  const fat = (1.20 * bmi + 0.23 * age - 10.8 * sex - 5.4).toFixed(1);
  const res = document.getElementById('bfRes');
  res.innerText = `Estimated Body Fat: ${fat}%`;
  res.classList.remove('hidden');
};
// === 2. CONVERTER ENGINES ===

function renderTempConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Value</label><input type="number" id="tmpV" value="100" oninput="runTemp()"></div>
        <div>
          <label>Unit</label>
          <select id="tmpU" onchange="runTemp()">
            <option value="c">Celsius (°C)</option>
            <option value="f">Fahrenheit (°F)</option>
            <option value="k">Kelvin (K)</option>
          </select>
        </div>
      </div>
      <div id="tmpRes" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1"></div>
    </div>
  `;
  setTimeout(runTemp, 50);
}
window.runTemp = () => {
  const v = parseFloat(document.getElementById('tmpV').value);
  const u = document.getElementById('tmpU').value;
  if (isNaN(v)) return;
  let c = 0, f = 0, k = 0;
  if (u === 'c') { c = v; f = (v * 9/5) + 32; k = v + 273.15; }
  else if (u === 'f') { c = (v - 32) * 5/9; f = v; k = c + 273.15; }
  else { k = v; c = v - 273.15; f = (c * 9/5) + 32; }
  document.getElementById('tmpRes').innerHTML = `
    <div>Celsius: <b class="font-mono">${c.toFixed(2)} °C</b></div>
    <div>Fahrenheit: <b class="font-mono">${f.toFixed(2)} °F</b></div>
    <div>Kelvin: <b class="font-mono">${k.toFixed(2)} K</b></div>
  `;
};

function renderWeightConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Weight</label><input type="number" id="wVal" value="1" oninput="runWeight()"></div>
        <div>
          <label>Unit</label>
          <select id="wUnit" onchange="runWeight()">
            <option value="kg">Kilograms (kg)</option>
            <option value="lb">Pounds (lbs)</option>
            <option value="g">Grams (g)</option>
            <option value="oz">Ounces (oz)</option>
          </select>
        </div>
      </div>
      <div id="wRes" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1"></div>
    </div>
  `;
  setTimeout(runWeight, 50);
}
window.runWeight = () => {
  const v = parseFloat(document.getElementById('wVal').value);
  const u = document.getElementById('wUnit').value;
  if (isNaN(v)) return;
  let kg = u === 'kg' ? v : u === 'lb' ? v * 0.453592 : u === 'g' ? v / 1000 : v * 0.0283495;
  document.getElementById('wRes').innerHTML = `
    <div>Kilograms: <b class="font-mono">${kg.toFixed(3)} kg</b></div>
    <div>Pounds: <b class="font-mono">${(kg * 2.20462).toFixed(3)} lbs</b></div>
    <div>Grams: <b class="font-mono">${(kg * 1000).toFixed(1)} g</b></div>
    <div>Ounces: <b class="font-mono">${(kg * 35.274).toFixed(2)} oz</b></div>
  `;
};

function renderSpeedConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Speed</label><input type="number" id="spdVal" value="60" oninput="runSpeed()"></div>
        <div><label>Unit</label><select id="spdUnit" onchange="runSpeed()"><option value="kmh">km/h</option><option value="mph">mph</option><option value="ms">m/s</option></select></div>
      </div>
      <div id="spdRes" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1"></div>
    </div>
  `;
  setTimeout(runSpeed, 50);
}
window.runSpeed = () => {
  const v = parseFloat(document.getElementById('spdVal').value);
  const u = document.getElementById('spdUnit').value;
  if (isNaN(v)) return;
  let kmh = u === 'kmh' ? v : u === 'mph' ? v * 1.60934 : v * 3.6;
  document.getElementById('spdRes').innerHTML = `
    <div>km/h: <b class="font-mono">${kmh.toFixed(2)}</b></div>
    <div>mph: <b class="font-mono">${(kmh / 1.60934).toFixed(2)}</b></div>
    <div>m/s: <b class="font-mono">${(kmh / 3.6).toFixed(2)}</b></div>
  `;
};

function renderDataConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Storage Size</label><input type="number" id="dtVal" value="1024" oninput="runData()"></div>
        <div><label>Unit</label><select id="dtUnit" onchange="runData()"><option value="mb">Megabytes (MB)</option><option value="gb">Gigabytes (GB)</option><option value="tb">Terabytes (TB)</option><option value="kb">Kilobytes (KB)</option></select></div>
      </div>
      <div id="dtRes" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-1"></div>
    </div>
  `;
  setTimeout(runData, 50);
}
window.runData = () => {
  const v = parseFloat(document.getElementById('dtVal').value);
  const u = document.getElementById('dtUnit').value;
  if (isNaN(v)) return;
  let mb = u === 'mb' ? v : u === 'gb' ? v * 1024 : u === 'tb' ? v * 1024 * 1024 : v / 1024;
  document.getElementById('dtRes').innerHTML = `
    <div>Gigabytes (GB): <b class="font-mono">${(mb / 1024).toFixed(3)} GB</b></div>
    <div>Megabytes (MB): <b class="font-mono">${mb.toFixed(1)} MB</b></div>
    <div>Kilobytes (KB): <b class="font-mono">${(mb * 1024).toFixed(0)} KB</b></div>
  `;
};
function renderDupRemover(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="dupIn" placeholder="Paste lines with duplicates..." class="h-28"></textarea>
      <button onclick="cleanDuplicates()">Remove Duplicate Lines</button>
      <textarea id="dupOut" readonly placeholder="Unique lines..." class="h-28 font-mono"></textarea>
    </div>
  `;
}
window.cleanDuplicates = () => {
  const val = document.getElementById('dupIn').value;
  if (!val) return;
  const lines = val.split('\n');
  const unique = [...new Set(lines.map(l => l.trim()))].filter(l => l.length > 0);
  document.getElementById('dupOut').value = unique.join('\n');
};

function renderSlugGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="text" id="slugIn" placeholder="Post Title..." oninput="makeSlug()">
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl">
        <label class="text-[10px] text-stone-500 uppercase">Slug</label>
        <div id="slugOut" class="font-mono text-orange-700 font-bold text-sm select-all">slug-will-appear-here</div>
      </div>
    </div>
  `;
}
window.makeSlug = () => {
  const v = document.getElementById('slugIn').value;
  const slug = v.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
  document.getElementById('slugOut').innerText = slug || "slug-will-appear-here";
};

function renderFindReplace(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="frText" placeholder="Original text..." class="h-24"></textarea>
      <div class="grid grid-cols-2 gap-2">
        <input type="text" id="frFind" placeholder="Find...">
        <input type="text" id="frReplace" placeholder="Replace...">
      </div>
      <button onclick="doFindReplace()">Replace All</button>
      <textarea id="frOut" readonly placeholder="Updated text..." class="h-24"></textarea>
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
      <input type="number" id="loremParas" value="2" min="1" max="10" class="w-20 text-center font-bold">
      <button onclick="generateLorem()">Generate Lorem</button>
      <textarea id="loremOut" readonly class="h-32 text-xs"></textarea>
    </div>
  `;
}
window.generateLorem = () => {
  const count = parseInt(document.getElementById('loremParas').value) || 2;
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.";
  let res = [];
  for (let i = 0; i < count; i++) res.push(text);
  document.getElementById('loremOut').value = res.join('\n\n');
};

function renderRandomPicker(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Min</label><input type="number" id="rMin" value="1"></div>
        <div><label>Max</label><input type="number" id="rMax" value="100"></div>
      </div>
      <button onclick="pickRandom()">Generate Number</button>
      <div id="rPickOut" class="text-center font-mono text-2xl font-black text-orange-700 p-3 bg-orange-50 border border-orange-200 rounded-xl">--</div>
    </div>
  `;
}
window.pickRandom = () => {
  const min = parseInt(document.getElementById('rMin').value) || 0, max = parseInt(document.getElementById('rMax').value) || 100;
  document.getElementById('rPickOut').innerText = Math.floor(Math.random() * (max - min + 1)) + min;
};

function renderSipCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Monthly (₹)</label><input type="number" id="sipAmt" value="5000" oninput="runSip()"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label>Return (%)</label><input type="number" id="sipRate" value="12" step="0.5" oninput="runSip()"></div>
        <div><label>Years</label><input type="number" id="sipYears" value="10" oninput="runSip()"></div>
      </div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between text-xs"><span>Invested:</span><b id="sipInv" class="font-mono">₹ 0</b></div>
        <div class="flex justify-between text-xs"><span>Returns:</span><b id="sipRet" class="font-mono text-emerald-700">₹ 0</b></div>
        <div class="flex justify-between text-xs border-t border-stone-200 pt-2"><span class="font-bold">Total:</span><b id="sipTot" class="font-mono text-orange-700 text-base">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runSip, 50);
}
window.runSip = () => {
  const p = parseFloat(document.getElementById('sipAmt').value) || 0, i = (parseFloat(document.getElementById('sipRate').value) || 0) / 12 / 100, n = (parseFloat(document.getElementById('sipYears').value) || 0) * 12;
  if (!p || !i || !n) return;
  const tot = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i), inv = p * n;
  document.getElementById('sipInv').innerText = "₹ " + Math.round(inv).toLocaleString('en-IN');
  document.getElementById('sipRet').innerText = "₹ " + Math.round(tot - inv).toLocaleString('en-IN');
  document.getElementById('sipTot').innerText = "₹ " + Math.round(tot).toLocaleString('en-IN');
};

function renderCiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Principal (₹)</label><input type="number" id="ciP" value="100000" oninput="runCi()"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label>Rate (%)</label><input type="number" id="ciR" value="8" step="0.1" oninput="runCi()"></div>
        <div><label>Years</label><input type="number" id="ciT" value="5" oninput="runCi()"></div>
      </div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between text-xs"><span>Interest:</span><b id="ciInt" class="font-mono text-emerald-700">₹ 0</b></div>
        <div class="flex justify-between text-xs border-t border-stone-200 pt-2"><span class="font-bold">Total:</span><b id="ciTot" class="font-mono text-orange-700 text-base">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runCi, 50);
}
window.runCi = () => {
  const p = parseFloat(document.getElementById('ciP').value) || 0, r = (parseFloat(document.getElementById('ciR').value) || 0) / 100, t = parseFloat(document.getElementById('ciT').value) || 0;
  if (!p || !r || !t) return;
  const a = p * Math.pow((1 + r), t);
  document.getElementById('ciInt').innerText = "₹ " + Math.round(a - p).toLocaleString('en-IN');
  document.getElementById('ciTot').innerText = "₹ " + Math.round(a).toLocaleString('en-IN');
};

function renderFdCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Amount (₹)</label><input type="number" id="fdP" value="200000" oninput="runFd()"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label>Rate (%)</label><input type="number" id="fdR" value="7.1" step="0.1" oninput="runFd()"></div>
        <div><label>Years</label><input type="number" id="fdT" value="3" oninput="runFd()"></div>
      </div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between text-xs"><span>Interest:</span><b id="fdInt" class="font-mono text-emerald-700">₹ 0</b></div>
        <div class="flex justify-between text-xs border-t border-stone-200 pt-2"><span class="font-bold">Maturity:</span><b id="fdTot" class="font-mono text-orange-700 text-base">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runFd, 50);
}
window.runFd = () => {
  const p = parseFloat(document.getElementById('fdP').value) || 0, r = (parseFloat(document.getElementById('fdR').value) || 0) / 100, t = parseFloat(document.getElementById('fdT').value) || 0;
  if (!p || !r || !t) return;
  const mat = p * Math.pow((1 + r/4), 4 * t);
  document.getElementById('fdInt').innerText = "₹ " + Math.round(mat - p).toLocaleString('en-IN');
  document.getElementById('fdTot').innerText = "₹ " + Math.round(mat).toLocaleString('en-IN');
};

function renderSalaryCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>CTC (₹)</label><input type="number" id="ctcAmt" value="600000" oninput="runSalary()"></div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between text-xs"><span>In-Hand Monthly:</span><b id="salMonth" class="font-mono text-orange-700 text-base">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runSalary, 50);
}
window.runSalary = () => {
  const c = parseFloat(document.getElementById('ctcAmt').value) || 0;
  if (!c) return;
  const m = c / 12, inHand = m - Math.min(m * 0.12, 1800) - 200;
  document.getElementById('salMonth').innerText = "₹ " + Math.round(inHand).toLocaleString('en-IN');
};

function renderCagrCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="cagrInit" value="50000" placeholder="Initial">
      <input type="number" id="cagrFin" value="120000" placeholder="Final">
      <input type="number" id="cagrY" value="5" placeholder="Years">
      <button onclick="calcCagr()">Calculate</button>
      <div id="cagrRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcCagr = () => {
  const i = parseFloat(document.getElementById('cagrInit').value), f = parseFloat(document.getElementById('cagrFin').value), y = parseFloat(document.getElementById('cagrY').value);
  if (!i || !f || !y) return;
  const res = document.getElementById('cagrRes');
  res.innerText = `CAGR: ${((Math.pow(f / i, 1 / y) - 1) * 100).toFixed(2)}% per year`;
  res.classList.remove('hidden');
};

function renderEmiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Loan Amount (₹ / $)</label><input type="number" id="loanAmount" value="500000" oninput="runEmi()"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label>Rate (%)</label><input type="number" id="interestRate" step="0.1" value="9.5" oninput="runEmi()"></div>
        <div><label>Years</label><input type="number" id="tenureYears" value="5" oninput="runEmi()"></div>
      </div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between items-center"><span class="text-xs">Monthly EMI</span><span id="emiMonthly" class="text-base font-mono font-bold text-orange-700">₹ 0</span></div>
        <div class="flex justify-between items-center text-xs"><span>Total Interest</span><span id="emiInterest" class="font-mono font-bold">₹ 0</span></div>
        <div class="flex justify-between items-center text-xs border-t border-stone-200 pt-2"><span class="font-bold">Total Payable</span><span id="emiTotal" class="font-mono font-bold">₹ 0</span></div>
      </div>
    </div>
  `;
  setTimeout(runEmi, 50);
}
window.runEmi = () => {
  const p = parseFloat(document.getElementById('loanAmount').value) || 0, r = (parseFloat(document.getElementById('interestRate').value) || 0) / 12 / 100, n = (parseFloat(document.getElementById('tenureYears').value) || 0) * 12;
  if (p <= 0 || r <= 0 || n <= 0) return;
  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1), tot = emi * n;
  document.getElementById('emiMonthly').innerText = "₹ " + Math.round(emi).toLocaleString('en-IN');
  document.getElementById('emiInterest').innerText = "₹ " + Math.round(tot - p).toLocaleString('en-IN');
  document.getElementById('emiTotal').innerText = "₹ " + Math.round(tot).toLocaleString('en-IN');
};

function renderPctCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>What is (%)</label><input type="number" id="pVal" placeholder="20"></div>
        <div><label>Of</label><input type="number" id="pTotal" placeholder="500"></div>
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
  res.innerText = `${v}% of ${t} is ${(v * t) / 100}`;
  res.classList.remove('hidden');
};

function renderGstCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Amount (₹)</label><input type="number" id="gstAmt" placeholder="10000"></div>
      <div class="grid grid-cols-2 gap-3">
        <select id="gstRate"><option value="5">5%</option><option value="12">12%</option><option value="18" selected>18%</option><option value="28">28%</option></select>
        <select id="gstType"><option value="exclusive">Exclusive (+)</option><option value="inclusive">Inclusive (-)</option></select>
      </div>
      <button onclick="calcGst()">Compute Tax</button>
      <div id="gstRes" class="text-xs space-y-1 hidden"></div>
    </div>
  `;
}
window.calcGst = () => {
  const a = parseFloat(document.getElementById('gstAmt').value), r = parseFloat(document.getElementById('gstRate').value), t = document.getElementById('gstType').value;
  if (!a) return;
  const tax = t === 'exclusive' ? (a * r) / 100 : a - (a * (100 / (100 + r)));
  const tot = t === 'exclusive' ? a + tax : a;
  const res = document.getElementById('gstRes');
  res.innerHTML = `<div>Tax: <b>₹${tax.toFixed(2)}</b></div><div>Total: <b>₹${tot.toFixed(2)}</b></div>`;
  res.classList.remove('hidden');
};

function renderDiscountCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="dp" placeholder="Original Price">
      <input type="number" id="dd" placeholder="Discount %">
      <button onclick="calcDisc()">Calculate</button>
      <div id="discRes" class="text-xs space-y-1 hidden"></div>
    </div>
  `;
}
window.calcDisc = () => {
  const p = parseFloat(document.getElementById('dp').value), d = parseFloat(document.getElementById('dd').value);
  if (!p || isNaN(d)) return;
  const s = (p * d) / 100;
  const res = document.getElementById('discRes');
  res.innerHTML = `<div>Save: <b>₹${s.toFixed(2)}</b></div><div>Price: <b>₹${(p - s).toFixed(2)}</b></div>`;
  res.classList.remove('hidden');
};

function renderAgeCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <label>Birth Date</label><input type="date" id="dob">
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
  res.innerText = `${Math.abs(diff.getUTCFullYear() - 1970)} Years, ${diff.getUTCMonth()} Months old`;
  res.classList.remove('hidden');
};

function renderBmiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Weight (KG)</label><input type="number" id="bw" placeholder="65"></div>
      <div><label>Height (CM)</label><input type="number" id="bh" placeholder="175"></div>
      <button onclick="calcBmi()">Calculate BMI</button>
      <div id="bmiRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcBmi = () => {
  const w = parseFloat(document.getElementById('bw').value), h = parseFloat(document.getElementById('bh').value) / 100;
  if (!w || !h) return;
  const bmi = (w / (h * h)).toFixed(1);
  const res = document.getElementById('bmiRes');
  res.innerHTML = `BMI: ${bmi}`;
  res.classList.remove('hidden');
};

function renderUnitConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <label>Meters</label><input type="number" id="uv" placeholder="500">
      <button onclick="calcUnit()">Convert</button>
      <div id="uRes" class="text-xs space-y-1 hidden"></div>
    </div>
  `;
}
window.calcUnit = () => {
  const m = parseFloat(document.getElementById('uv').value);
  if (isNaN(m)) return;
  const res = document.getElementById('uRes');
  res.innerHTML = `<div>Kilometers: <b>${m / 1000} km</b></div><div>Feet: <b>${(m * 3.28084).toFixed(2)} ft</b></div>`;
  res.classList.remove('hidden');
};

function renderWordCounter(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="wb" oninput="runWc()" placeholder="Type here..." class="h-28"></textarea>
      <div class="text-xs font-bold text-center">Words: <span id="wCount">0</span> | Characters: <span id="cCount">0</span></div>
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
      <textarea id="cb" placeholder="Enter text..." class="h-24"></textarea>
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
