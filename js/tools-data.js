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

  // Calculators & Health
  { id: "pct_calc", name: "Percentage Calculator", cat: "Calculators", icon: "fa-divide", desc: "Find percentage and differences", render: renderPctCalc },
  { id: "age_calc", name: "Exact Age Calculator", cat: "Calculators", icon: "fa-calendar-days", desc: "Exact age in years, months, days", render: renderAgeCalc },
  { id: "bmi_calc", name: "BMI Calculator", cat: "Calculators", icon: "fa-weight-scale", desc: "Body Mass Index & weight category", render: renderBmiCalc },
  { id: "unit_conv", name: "Unit Converter", cat: "Calculators", icon: "fa-ruler-combined", desc: "Convert meters, feet, inches, km", render: renderUnitConv },

  // Text, Content & Daily Utilities
  { id: "word_count", name: "Word Counter", cat: "Text & Media", icon: "fa-file-lines", desc: "Count words, characters, reading time", render: renderWordCounter },
  { id: "case_conv", name: "Case Converter", cat: "Text & Media", icon: "fa-font", desc: "UPPERCASE, lowercase, Title Case", render: renderCaseConv },
  { id: "dup_remover", name: "Remove Duplicate Lines", cat: "Text & Media", icon: "fa-filter", desc: "Filter out repeating text & list items", render: renderDupRemover },
  { id: "slug_gen", name: "Text to Slug URL", cat: "Text & Media", icon: "fa-link", desc: "Convert post titles to SEO URL slugs", render: renderSlugGen },
  { id: "find_replace", name: "Find and Replace", cat: "Text & Media", icon: "fa-arrows-rotate", desc: "Quickly find words and replace in text", render: renderFindReplace },
  { id: "lorem_gen", name: "Lorem Ipsum Generator", cat: "Text & Media", icon: "fa-paragraph", desc: "Generate placeholder dummy paragraphs", render: renderLoremGen },
  { id: "pdf_gen", name: "Text to PDF Export", cat: "Text & Media", icon: "fa-file-pdf", desc: "Export formatted notes directly into PDF", render: renderPdfMaker },
  { id: "rand_picker", name: "Random Number / Draw", cat: "Calculators", icon: "fa-dice", desc: "Pick random numbers or winner draw", render: renderRandomPicker }
];

// === 1. TEXT, CONTENT & DAILY UTILITIES ===

function renderDupRemover(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="dupIn" placeholder="Paste your list or lines with duplicates..." class="h-28"></textarea>
      <button onclick="cleanDuplicates()">Remove Duplicate Lines</button>
      <textarea id="dupOut" readonly placeholder="Clean unique lines will appear here..." class="h-28 font-mono"></textarea>
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
      <input type="text" id="slugIn" placeholder="e.g. My Amazing Blog Post Title 2026!" oninput="makeSlug()">
      <div class="p-3 bg-stone-50 border border-stone-200 rounded-xl">
        <label class="text-[10px] text-stone-500 uppercase">Generated URL Slug</label>
        <div id="slugOut" class="font-mono text-orange-700 font-bold text-sm select-all">slug-will-appear-here</div>
      </div>
    </div>
  `;
}
window.makeSlug = () => {
  const v = document.getElementById('slugIn').value;
  const slug = v.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  document.getElementById('slugOut').innerText = slug || "slug-will-appear-here";
};

function renderFindReplace(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="frText" placeholder="Paste original text here..." class="h-24"></textarea>
      <div class="grid grid-cols-2 gap-2">
        <input type="text" id="frFind" placeholder="Find word...">
        <input type="text" id="frReplace" placeholder="Replace with...">
      </div>
      <button onclick="doFindReplace()">Replace All</button>
      <textarea id="frOut" readonly placeholder="Updated text..." class="h-24"></textarea>
    </div>
  `;
}
window.doFindReplace = () => {
  const t = document.getElementById('frText').value;
  const f = document.getElementById('frFind').value;
  const r = document.getElementById('frReplace').value;
  if (!t || !f) return;
  const regex = new RegExp(f, 'gi');
  document.getElementById('frOut').value = t.replace(regex, r);
};

function renderLoremGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <input type="number" id="loremParas" value="2" min="1" max="10" class="w-20 text-center font-bold">
        <span class="text-xs text-stone-500 font-semibold">Paragraphs</span>
      </div>
      <button onclick="generateLorem()">Generate Lorem Ipsum</button>
      <textarea id="loremOut" readonly class="h-32 text-xs"></textarea>
    </div>
  `;
}
window.generateLorem = () => {
  const count = parseInt(document.getElementById('loremParas').value) || 2;
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  let res = [];
  for (let i = 0; i < count; i++) res.push(text);
  document.getElementById('loremOut').value = res.join('\n\n');
};

function renderRandomPicker(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>Min Value</label><input type="number" id="rMin" value="1"></div>
        <div><label>Max Value</label><input type="number" id="rMax" value="100"></div>
      </div>
      <button onclick="pickRandom()">Generate Random Number</button>
      <div id="rPickOut" class="text-center font-mono text-2xl font-black text-orange-700 p-3 bg-orange-50 border border-orange-200 rounded-xl">--</div>
    </div>
  `;
}
window.pickRandom = () => {
  const min = parseInt(document.getElementById('rMin').value) || 0;
  const max = parseInt(document.getElementById('rMax').value) || 100;
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('rPickOut').innerText = num;
};
function renderSipCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Monthly Investment (₹)</label><input type="number" id="sipAmt" value="5000" oninput="runSip()"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label>Expected Return (%)</label><input type="number" id="sipRate" value="12" step="0.5" oninput="runSip()"></div>
        <div><label>Time Period (Years)</label><input type="number" id="sipYears" value="10" oninput="runSip()"></div>
      </div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between items-center text-xs"><span>Invested Amount:</span><b id="sipInv" class="font-mono">₹ 0</b></div>
        <div class="flex justify-between items-center text-xs"><span>Est. Returns:</span><b id="sipRet" class="font-mono text-emerald-700">₹ 0</b></div>
        <div class="flex justify-between items-center text-xs border-t border-stone-200 pt-2"><span class="font-bold">Total Maturity:</span><b id="sipTot" class="font-mono text-orange-700 text-base">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runSip, 50);
}
window.runSip = () => {
  const p = parseFloat(document.getElementById('sipAmt').value) || 0;
  const i = (parseFloat(document.getElementById('sipRate').value) || 0) / 12 / 100;
  const n = (parseFloat(document.getElementById('sipYears').value) || 0) * 12;
  if (!p || !i || !n) return;
  const total = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const invested = p * n;
  document.getElementById('sipInv').innerText = "₹ " + Math.round(invested).toLocaleString('en-IN');
  document.getElementById('sipRet').innerText = "₹ " + Math.round(total - invested).toLocaleString('en-IN');
  document.getElementById('sipTot').innerText = "₹ " + Math.round(total).toLocaleString('en-IN');
};

function renderCiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Principal Amount (₹)</label><input type="number" id="ciP" value="100000" oninput="runCi()"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label>Annual Rate (%)</label><input type="number" id="ciR" value="8" step="0.1" oninput="runCi()"></div>
        <div><label>Time (Years)</label><input type="number" id="ciT" value="5" oninput="runCi()"></div>
      </div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between text-xs"><span>Total Interest:</span><b id="ciInt" class="font-mono text-emerald-700">₹ 0</b></div>
        <div class="flex justify-between text-xs border-t border-stone-200 pt-2"><span class="font-bold">Total Amount:</span><b id="ciTot" class="font-mono text-orange-700 text-base">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runCi, 50);
}
window.runCi = () => {
  const p = parseFloat(document.getElementById('ciP').value) || 0;
  const r = (parseFloat(document.getElementById('ciR').value) || 0) / 100;
  const t = parseFloat(document.getElementById('ciT').value) || 0;
  if (!p || !r || !t) return;
  const amount = p * Math.pow((1 + r), t);
  document.getElementById('ciInt').innerText = "₹ " + Math.round(amount - p).toLocaleString('en-IN');
  document.getElementById('ciTot').innerText = "₹ " + Math.round(amount).toLocaleString('en-IN');
};

function renderFdCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Total Investment (₹)</label><input type="number" id="fdP" value="200000" oninput="runFd()"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label>Interest Rate (% p.a.)</label><input type="number" id="fdR" value="7.1" step="0.1" oninput="runFd()"></div>
        <div><label>Tenure (Years)</label><input type="number" id="fdT" value="3" oninput="runFd()"></div>
      </div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between text-xs"><span>Interest Earned:</span><b id="fdInt" class="font-mono text-emerald-700">₹ 0</b></div>
        <div class="flex justify-between text-xs border-t border-stone-200 pt-2"><span class="font-bold">Maturity Value:</span><b id="fdTot" class="font-mono text-orange-700 text-base">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runFd, 50);
}
window.runFd = () => {
  const p = parseFloat(document.getElementById('fdP').value) || 0;
  const r = (parseFloat(document.getElementById('fdR').value) || 0) / 100;
  const t = parseFloat(document.getElementById('fdT').value) || 0;
  if (!p || !r || !t) return;
  const mat = p * Math.pow((1 + r/4), 4 * t);
  document.getElementById('fdInt').innerText = "₹ " + Math.round(mat - p).toLocaleString('en-IN');
  document.getElementById('fdTot').innerText = "₹ " + Math.round(mat).toLocaleString('en-IN');
};

function renderSalaryCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Annual CTC (₹)</label><input type="number" id="ctcAmt" value="600000" oninput="runSalary()"></div>
      <div class="p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-2 mt-4">
        <div class="flex justify-between text-xs"><span>Estimated In-Hand (Monthly):</span><b id="salMonth" class="font-mono text-orange-700 text-base">₹ 0</b></div>
        <div class="flex justify-between text-xs text-stone-500"><span>Estimated Deductions:</span><b id="salDed" class="font-mono">₹ 0</b></div>
      </div>
    </div>
  `;
  setTimeout(runSalary, 50);
}
window.runSalary = () => {
  const ctc = parseFloat(document.getElementById('ctcAmt').value) || 0;
  if (!ctc) return;
  const monthly = ctc / 12;
  const epf = Math.min(monthly * 0.12, 1800);
  const tax = ctc > 700000 ? (ctc * 0.05) / 12 : 0;
  const inHand = monthly - epf - tax - 200;
  document.getElementById('salMonth').innerText = "₹ " + Math.round(inHand).toLocaleString('en-IN');
  document.getElementById('salDed').innerText = "₹ " + Math.round(epf + tax + 200).toLocaleString('en-IN');
};

function renderCagrCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Initial Investment (₹)</label><input type="number" id="cagrInit" value="50000"></div>
      <div><label>Final Value (₹)</label><input type="number" id="cagrFin" value="120000"></div>
      <div><label>Duration (Years)</label><input type="number" id="cagrY" value="5"></div>
      <button onclick="calcCagr()">Calculate CAGR</button>
      <div id="cagrRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcCagr = () => {
  const i = parseFloat(document.getElementById('cagrInit').value);
  const f = parseFloat(document.getElementById('cagrFin').value);
  const y = parseFloat(document.getElementById('cagrY').value);
  if (!i || !f || !y) return;
  const cagr = ((Math.pow(f / i, 1 / y) - 1) * 100).toFixed(2);
  const res = document.getElementById('cagrRes');
  res.innerText = `CAGR Growth Rate: ${cagr}% per year`;
  res.classList.remove('hidden');
};

function renderEmiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div><label>Loan Amount (₹ / $)</label><input type="number" id="loanAmount" value="500000" oninput="runEmi()"></div>
      <div class="grid grid-cols-2 gap-3">
        <div><label>Interest Rate (%)</label><input type="number" id="interestRate" step="0.1" value="9.5" oninput="runEmi()"></div>
        <div><label>Tenure (Years)</label><input type="number" id="tenureYears" value="5" oninput="runEmi()"></div>
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
  const p = parseFloat(document.getElementById('loanAmount').value) || 0;
  const r = (parseFloat(document.getElementById('interestRate').value) || 0) / 12 / 100;
  const n = (parseFloat(document.getElementById('tenureYears').value) || 0) * 12;
  if (p <= 0 || r <= 0 || n <= 0) return;
  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = emi * n;
  document.getElementById('emiMonthly').innerText = "₹ " + Math.round(emi).toLocaleString('en-IN');
  document.getElementById('emiInterest').innerText = "₹ " + Math.round(total - p).toLocaleString('en-IN');
  document.getElementById('emiTotal').innerText = "₹ " + Math.round(total).toLocaleString('en-IN');
};

function renderPctCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-2">
        <div><label>What is (%)</label><input type="number" id="pVal" placeholder="20"></div>
        <div><label>Of Number</label><input type="number" id="pTotal" placeholder="500"></div>
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
      <div><label>Original Price (₹)</label><input type="number" id="dp" placeholder="2499"></div>
      <div><label>Discount (%)</label><input type="number" id="dd" placeholder="20"></div>
      <button onclick="calcDisc()">Calculate Savings</button>
      <div id="discRes" class="text-xs space-y-1 hidden"></div>
    </div>
  `;
}
window.calcDisc = () => {
  const p = parseFloat(document.getElementById('dp').value), d = parseFloat(document.getElementById('dd').value);
  if (!p || isNaN(d)) return;
  const s = (p * d) / 100;
  const res = document.getElementById('discRes');
  res.innerHTML = `<div>You Save: <b>₹${s.toFixed(2)}</b></div><div>Final Price: <b>₹${(p - s).toFixed(2)}</b></div>`;
  res.classList.remove('hidden');
};

function renderAgeCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <label>Date of Birth</label><input type="date" id="dob">
      <button onclick="calcAge()">Calculate Exact Age</button>
      <div id="ageRes" class="text-center font-bold text-sm hidden"></div>
    </div>
  `;
}
window.calcAge = () => {
  const d = new Date(document.getElementById('dob').value);
  if (isNaN(d.getTime())) return;
  const diff = new Date(Date.now() - d.getTime());
  const res = document.getElementById('ageRes');
  res.innerText = `${Math.abs(diff.getUTCFullYear() - 1970)} Years, ${diff.getUTCMonth()} Months, ${diff.getUTCDate() - 1} Days old`;
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
  let status = bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal weight" : "Overweight";
  res.innerHTML = `BMI: ${bmi} (${status})`;
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
  res.innerHTML = `<div>Kilometers: <b>${m / 1000} km</b></div><div>Feet: <b>${(m * 3.28084).toFixed(2)} ft</b></div><div>Inches: <b>${(m * 39.3701).toFixed(2)} in</b></div>`;
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
      <textarea id="pt" placeholder="Write text for PDF..." class="h-28"></textarea>
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
