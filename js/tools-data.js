const toolsData = [
  // Finance & Business
  { id: "emi_calc", name: "Loan EMI Calculator", cat: "Finance & Tax", icon: "fa-calculator", desc: "Calculate Monthly EMI with Principal & Interest breakdown", render: renderEmiCalc },
  { id: "sip_calc", name: "SIP Investment Calculator", cat: "Finance & Tax", icon: "fa-chart-line", desc: "Calculate mutual fund SIP returns and wealth growth", render: renderSipCalc },
  { id: "ci_calc", name: "Compound Interest Calculator", cat: "Finance & Tax", icon: "fa-arrow-trend-up", desc: "Compound interest with annual/monthly compounding", render: renderCiCalc },
  { id: "fd_calc", name: "Fixed Deposit (FD) Calculator", cat: "Finance & Tax", icon: "fa-piggy-bank", desc: "Calculate FD maturity amount and total interest", render: renderFdCalc },
  { id: "salary_calc", name: "In-Hand Salary Calculator", cat: "Finance & Tax", icon: "fa-wallet", desc: "Calculate monthly take-home salary from annual CTC", render: renderSalaryCalc },
  { id: "cagr_calc", name: "CAGR Growth Calculator", cat: "Finance & Tax", icon: "fa-chart-pie", desc: "Compound Annual Growth Rate of investments", render: renderCagrCalc },
  { id: "gst_calc", name: "GST & Tax Calculator", cat: "Finance & Tax", icon: "fa-percent", desc: "Calculate inclusive/exclusive GST with custom rates", render: renderGstCalc },
  { id: "disc_calc", name: "Discount & Sale Calculator", cat: "Finance & Tax", icon: "fa-tags", desc: "Calculate discount amount and real savings", render: renderDiscountCalc },

  // Calculators & Math
  { id: "pct_calc", name: "Percentage Calculator", cat: "Calculators", icon: "fa-divide", desc: "Find percentage, increases, and differences", render: renderPctCalc },
  { id: "age_calc", name: "Exact Age Calculator", cat: "Calculators", icon: "fa-calendar-days", desc: "Exact age in years, months, and days", render: renderAgeCalc },
  { id: "bmi_calc", name: "BMI & Health Calculator", cat: "Calculators", icon: "fa-weight-scale", desc: "Body Mass Index & weight category", render: renderBmiCalc },
  { id: "unit_conv", name: "Unit & Length Converter", cat: "Calculators", icon: "fa-ruler-combined", desc: "Convert meters, feet, inches, kilometers", render: renderUnitConv },

  // Text & Media
  { id: "word_count", name: "Word Counter", cat: "Text & Media", icon: "fa-file-lines", desc: "Count words, characters, and reading time", render: renderWordCounter },
  { id: "case_conv", name: "Text Case Converter", cat: "Text & Media", icon: "fa-font", desc: "UPPERCASE, lowercase, Title Case", render: renderCaseConv },
  { id: "pdf_gen", name: "Quick Text to PDF", cat: "Text & Media", icon: "fa-file-pdf", desc: "Export formatted notes directly into PDF", render: renderPdfMaker },

  // Developer Utilities
  { id: "qr_gen", name: "Custom QR Code Generator", cat: "Developer", icon: "fa-qrcode", desc: "High-resolution scannable QR codes", render: renderQrGen },
  { id: "base64_tool", name: "Base64 Tool", cat: "Developer", icon: "fa-code", desc: "Encode or decode Base64 data", render: renderBase64Tool },
  { id: "uuid_gen", name: "UUID v4 Generator", cat: "Developer", icon: "fa-fingerprint", desc: "Generate cryptographically secure UUID v4", render: renderUuidGen },
  { id: "pass_gen", name: "Password Generator", cat: "Developer", icon: "fa-key", desc: "Create ultra-secure random passwords", render: renderPassGen }
];

// === 1. INVESTMENT & FINANCE ENGINES ===

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
        <div class="flex justify-between text-xs text-stone-500"><span>Estimated EPF + Deductions:</span><b id="salDed" class="font-mono">₹ 0</b></div>
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

function renderQrGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="text" id="qt" placeholder="URL or text...">
      <button onclick="makeQr()">Generate QR Code</button>
      <div id="qBox" class="p-3 bg-white rounded-xl hidden w-fit mx-auto"></div>
    </div>
  `;
}
window.makeQr = () => {
  const v = document.getElementById('qt').value;
  if (!v) return;
  const b = document.getElementById('qBox');
  b.innerHTML = "";
  b.classList.remove('hidden');
  new QRCode(b, { text: v, width: 130, height: 130 });
};

function renderBase64Tool(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="bt" placeholder="Text..." class="h-16"></textarea>
      <div class="grid grid-cols-2 gap-2">
        <button onclick="document.getElementById('bo').value = btoa(document.getElementById('bt').value)">Encode</button>
        <button onclick="try{document.getElementById('bo').value = atob(document.getElementById('bt').value)}catch(e){alert('Invalid')}">Decode</button>
      </div>
      <textarea id="bo" readonly placeholder="Output..." class="h-16 font-mono"></textarea>
    </div>
  `;
}

function renderUuidGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div id="uo" class="text-center font-mono text-sm font-bold">-</div>
      <button onclick="document.getElementById('uo').innerText = crypto.randomUUID()">Generate UUID</button>
    </div>
  `;
}

function renderPassGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <button onclick="genP()">Generate 16-char Password</button>
      <input type="text" id="po" readonly class="text-center font-mono font-bold">
    </div>
  `;
}
window.genP = () => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
  let res = "";
  for (let i = 0; i < 16; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
  document.getElementById('po').value = res;
};
