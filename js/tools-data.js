const toolsData = [
  // Finance & Tax
  {
    id: "emi_calc",
    name: "Loan EMI Calculator",
    cat: "Finance & Tax",
    icon: "fa-calculator",
    desc: "Calculate Monthly Loan EMI with Principal & Interest breakdown",
    render: renderEmiCalc
  },
  {
    id: "gst_calc",
    name: "GST & Tax Calculator",
    cat: "Finance & Tax",
    icon: "fa-percent",
    desc: "Calculate inclusive/exclusive GST instantly with custom rates",
    render: renderGstCalc
  },
  {
    id: "disc_calc",
    name: "Discount & Sale Calculator",
    cat: "Finance & Tax",
    icon: "fa-tags",
    desc: "Calculate final discount amount and real savings",
    render: renderDiscountCalc
  },

  // Calculators
  {
    id: "age_calc",
    name: "Exact Age Calculator",
    cat: "Calculators",
    icon: "fa-calendar-days",
    desc: "Find exact age in years, months, days and upcoming birthday",
    render: renderAgeCalc
  },
  {
    id: "bmi_calc",
    name: "BMI & Health Calculator",
    cat: "Calculators",
    icon: "fa-weight-scale",
    desc: "Check Body Mass Index and ideal weight category",
    render: renderBmiCalc
  },
  {
    id: "unit_conv",
    name: "Unit & Length Converter",
    cat: "Calculators",
    icon: "fa-ruler-combined",
    desc: "Convert meters, feet, inches, kilometers and miles",
    render: renderUnitConv
  },

  // Text & Media
  {
    id: "word_count",
    name: "Word & Character Counter",
    cat: "Text & Media",
    icon: "fa-file-lines",
    desc: "Count words, characters, sentences and reading time",
    render: renderWordCounter
  },
  {
    id: "case_conv",
    name: "Text Case Converter",
    cat: "Text & Media",
    icon: "fa-font",
    desc: "UPPERCASE, lowercase, Title Case, Capitalized Case",
    render: renderCaseConv
  },
  {
    id: "pdf_gen",
    name: "Quick Text to PDF",
    cat: "Text & Media",
    icon: "fa-file-pdf",
    desc: "Export formatted notes directly into a downloadable PDF",
    render: renderPdfMaker
  },

  // Developer & Utilities
  {
    id: "qr_gen",
    name: "Custom QR Code Generator",
    cat: "Developer",
    icon: "fa-qrcode",
    desc: "Generate high-resolution scannable QR codes for links & text",
    render: renderQrGen
  },
  {
    id: "base64_tool",
    name: "Base64 Encoder / Decoder",
    cat: "Developer",
    icon: "fa-code",
    desc: "Encode plain text or decode Base64 data safely",
    render: renderBase64Tool
  },
  {
    id: "uuid_gen",
    name: "UUID v4 Generator",
    cat: "Developer",
    icon: "fa-fingerprint",
    desc: "Generate cryptographically secure v4 GUID/UUID strings",
    render: renderUuidGen
  },
  {
    id: "pass_gen",
    name: "Strong Password Generator",
    cat: "Developer",
    icon: "fa-key",
    desc: "Create ultra-secure random passwords with custom rules",
    render: renderPassGen
  }
];

// === TOOL IMPLEMENTATIONS ===

function renderEmiCalc(c) {
  c.innerHTML = `
    <div class="space-y-4">
      <div>
        <label class="flex justify-between text-xs text-slate-300 font-medium mb-1">
          <span>Loan Amount (₹ / $)</span>
          <span id="loanValTxt" class="text-cyan-400 font-bold">500000</span>
        </label>
        <input type="number" id="loanAmount" value="500000" oninput="runEmi()" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm focus:border-cyan-500 focus:outline-none">
      </div>
      <div>
        <label class="flex justify-between text-xs text-slate-300 font-medium mb-1">
          <span>Interest Rate (% per annum)</span>
          <span id="rateValTxt" class="text-cyan-400 font-bold">9.5%</span>
        </label>
        <input type="number" id="interestRate" step="0.1" value="9.5" oninput="runEmi()" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm focus:border-cyan-500 focus:outline-none">
      </div>
      <div>
        <label class="flex justify-between text-xs text-slate-300 font-medium mb-1">
          <span>Tenure (Years)</span>
          <span id="tenureValTxt" class="text-cyan-400 font-bold">5 Years</span>
        </label>
        <input type="number" id="tenureYears" value="5" min="1" max="40" oninput="runEmi()" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm focus:border-cyan-500 focus:outline-none">
      </div>

      <div class="p-4 bg-slate-950/80 border border-slate-800/80 rounded-2xl space-y-3 mt-4">
        <div class="flex justify-between items-center">
          <span class="text-xs text-slate-400">Monthly EMI:</span>
          <span id="emiMonthly" class="text-lg font-extrabold text-cyan-400">₹ 0</span>
        </div>
        <div class="flex justify-between items-center text-xs">
          <span class="text-slate-400">Total Interest Payable:</span>
          <span id="emiInterest" class="font-bold text-amber-400">₹ 0</span>
        </div>
        <div class="flex justify-between items-center text-xs border-t border-slate-800 pt-2">
          <span class="text-slate-400">Total Payment (Principal + Interest):</span>
          <span id="emiTotal" class="font-bold text-emerald-400">₹ 0</span>
        </div>
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
  const totalPayment = emi * n;
  const totalInterest = totalPayment - p;

  document.getElementById('emiMonthly').innerText = "₹ " + Math.round(emi).toLocaleString('en-IN');
  document.getElementById('emiInterest').innerText = "₹ " + Math.round(totalInterest).toLocaleString('en-IN');
  document.getElementById('emiTotal').innerText = "₹ " + Math.round(totalPayment).toLocaleString('en-IN');
};

function renderGstCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="gstAmt" placeholder="Enter Net Amount" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm focus:outline-none focus:border-cyan-500">
      <div class="flex gap-2">
        <select id="gstRate" class="w-1/2 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200">
          <option value="5">5% GST</option>
          <option value="12">12% GST</option>
          <option value="18" selected>18% GST</option>
          <option value="28">28% GST</option>
        </select>
        <select id="gstType" class="w-1/2 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200">
          <option value="exclusive">GST Exclusive (+)</option>
          <option value="inclusive">GST Inclusive (-)</option>
        </select>
      </div>
      <button onclick="calcGst()" class="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold rounded-xl text-sm shadow-lg shadow-cyan-500/20">Compute Tax</button>
      <div id="gstRes" class="p-3 bg-slate-950 rounded-xl text-xs space-y-1.5 hidden border border-slate-800"></div>
    </div>
  `;
}
window.calcGst = () => {
  const amt = parseFloat(document.getElementById('gstAmt').value);
  const rate = parseFloat(document.getElementById('gstRate').value);
  const type = document.getElementById('gstType').value;
  if (!amt) return alert('Enter amount');
  let tax = 0, finalAmt = 0;
  if (type === 'exclusive') {
    tax = (amt * rate) / 100;
    finalAmt = amt + tax;
  } else {
    tax = amt - (amt * (100 / (100 + rate)));
    finalAmt = amt;
  }
  const res = document.getElementById('gstRes');
  res.innerHTML = `
    <div class="flex justify-between"><span>Tax Amount:</span><b class="text-cyan-400">₹${tax.toFixed(2)}</b></div>
    <div class="flex justify-between"><span>CGST + SGST:</span><b>₹${(tax/2).toFixed(2)} each</b></div>
    <div class="flex justify-between border-t border-slate-800 pt-1 text-sm font-bold"><span>Total Amount:</span><b class="text-emerald-400">₹${finalAmt.toFixed(2)}</b></div>
  `;
  res.classList.remove('hidden');
};

function renderDiscountCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="dPrice" placeholder="Original Price (₹)" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">
      <input type="number" id="dPercent" placeholder="Discount Percentage (%)" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">
      <button onclick="calcDisc()" class="w-full py-3 bg-cyan-600 rounded-xl text-sm font-semibold">Calculate Savings</button>
      <div id="dRes" class="p-3 bg-slate-950 rounded-xl text-xs space-y-1 hidden border border-slate-800"></div>
    </div>
  `;
}
window.calcDisc = () => {
  const p = parseFloat(document.getElementById('dPrice').value);
  const d = parseFloat(document.getElementById('dPercent').value);
  if (!p || isNaN(d)) return alert('Enter valid numbers');
  const save = (p * d) / 100;
  const res = document.getElementById('dRes');
  res.innerHTML = `
    <div class="flex justify-between"><span>You Save:</span><b class="text-emerald-400">₹${save.toFixed(2)}</b></div>
    <div class="flex justify-between text-sm font-bold"><span>Final Price:</span><b class="text-cyan-400">₹${(p - save).toFixed(2)}</b></div>
  `;
  res.classList.remove('hidden');
};

function renderAgeCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <label class="text-xs text-slate-400">Date of Birth</label>
      <input type="date" id="dob" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">
      <button onclick="calcAge()" class="w-full py-3 bg-cyan-600 rounded-xl text-sm font-semibold">Calculate Age</button>
      <div id="ageRes" class="text-center font-bold text-cyan-400 p-3 text-sm bg-slate-950 rounded-xl border border-slate-800 hidden"></div>
    </div>
  `;
}
window.calcAge = () => {
  const d = new Date(document.getElementById('dob').value);
  if (isNaN(d.getTime())) return alert('Choose date');
  const diff = new Date(Date.now() - d.getTime());
  const years = Math.abs(diff.getUTCFullYear() - 1970);
  const months = diff.getUTCMonth();
  const days = diff.getUTCDate() - 1;
  const res = document.getElementById('ageRes');
  res.innerText = `${years} Years, ${months} Months, ${days} Days old`;
  res.classList.remove('hidden');
};

function renderBmiCalc(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="bw" placeholder="Weight (in kg)" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">
      <input type="number" id="bh" placeholder="Height (in cm)" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">
      <button onclick="calcBmi()" class="w-full py-3 bg-cyan-600 rounded-xl text-sm font-semibold">Calculate BMI</button>
      <div id="bmiRes" class="text-center font-bold text-sm bg-slate-950 p-3 rounded-xl border border-slate-800 hidden"></div>
    </div>
  `;
}
window.calcBmi = () => {
  const w = parseFloat(document.getElementById('bw').value);
  const h = parseFloat(document.getElementById('bh').value) / 100;
  if (!w || !h) return alert('Enter valid height & weight');
  const bmi = (w / (h * h)).toFixed(1);
  const res = document.getElementById('bmiRes');
  let status = bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal weight" : "Overweight";
  res.innerHTML = `BMI: <span class="text-cyan-400">${bmi}</span> <span class="text-xs text-slate-400">(${status})</span>`;
  res.classList.remove('hidden');
};

function renderUnitConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="number" id="uVal" placeholder="Enter Meters" class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">
      <button onclick="calcUnit()" class="w-full py-3 bg-cyan-600 rounded-xl text-sm font-semibold">Convert</button>
      <div id="uRes" class="p-3 bg-slate-950 rounded-xl text-xs space-y-1.5 hidden border border-slate-800"></div>
    </div>
  `;
}
window.calcUnit = () => {
  const m = parseFloat(document.getElementById('uVal').value);
  if (isNaN(m)) return alert('Enter value');
  const res = document.getElementById('uRes');
  res.innerHTML = `
    <div class="flex justify-between"><span>Kilometers:</span><b>${m / 1000} km</b></div>
    <div class="flex justify-between"><span>Feet:</span><b>${(m * 3.28084).toFixed(2)} ft</b></div>
    <div class="flex justify-between"><span>Inches:</span><b>${(m * 39.3701).toFixed(2)} in</b></div>
  `;
  res.classList.remove('hidden');
};

function renderWordCounter(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="wBox" oninput="runWc()" placeholder="Type or paste your text here..." class="w-full h-32 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm resize-none focus:outline-none focus:border-cyan-500"></textarea>
      <div class="grid grid-cols-2 gap-2 text-center text-xs bg-slate-950 p-3 rounded-xl border border-slate-800">
        <div>Words: <b id="wcW" class="text-cyan-400">0</b></div>
        <div>Characters: <b id="wcC" class="text-cyan-400">0</b></div>
      </div>
    </div>
  `;
}
window.runWc = () => {
  const v = document.getElementById('wBox').value.trim();
  document.getElementById('wcW').innerText = v ? v.split(/\s+/).length : 0;
  document.getElementById('wcC').innerText = v.length;
};

function renderCaseConv(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="cBox" placeholder="Enter text..." class="w-full h-24 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm resize-none"></textarea>
      <div class="grid grid-cols-3 gap-2 text-xs">
        <button onclick="document.getElementById('cBox').value = document.getElementById('cBox').value.toUpperCase()" class="py-2 bg-slate-800 hover:bg-slate-700 rounded-lg">UPPERCASE</button>
        <button onclick="document.getElementById('cBox').value = document.getElementById('cBox').value.toLowerCase()" class="py-2 bg-slate-800 hover:bg-slate-700 rounded-lg">lowercase</button>
        <button onclick="document.getElementById('cBox').value = document.getElementById('cBox').value.replace(/\\w\\S*/g, w => w.replace(/^\\w/, c => c.toUpperCase()))" class="py-2 bg-slate-800 hover:bg-slate-700 rounded-lg">Title Case</button>
      </div>
    </div>
  `;
}

function renderPdfMaker(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="pdfTxt" placeholder="Write document content..." class="w-full h-28 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm resize-none"></textarea>
      <button onclick="dlPdf()" class="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-sm font-semibold">Download PDF</button>
    </div>
  `;
}
window.dlPdf = () => {
  const t = document.getElementById('pdfTxt').value;
  if (!t) return alert('Enter text');
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(t, 10, 10);
  doc.save("document.pdf");
};

function renderQrGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <input type="text" id="qrIn" placeholder="Enter text or URL..." class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm">
      <button onclick="makeQr()" class="w-full py-3 bg-cyan-600 rounded-xl text-sm font-semibold">Generate QR Code</button>
      <div id="qrBox" class="p-3 bg-white rounded-2xl hidden w-fit mx-auto shadow-xl"></div>
    </div>
  `;
}
window.makeQr = () => {
  const v = document.getElementById('qrIn').value;
  if (!v) return alert('Enter URL or text');
  const b = document.getElementById('qrBox');
  b.innerHTML = "";
  b.classList.remove('hidden');
  new QRCode(b, { text: v, width: 140, height: 140 });
};

function renderBase64Tool(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <textarea id="bIn" placeholder="Enter string..." class="w-full h-20 bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm"></textarea>
      <div class="grid grid-cols-2 gap-2">
        <button onclick="document.getElementById('bOut').value = btoa(document.getElementById('bIn').value)" class="py-2 bg-cyan-600 rounded-lg text-xs font-semibold">Encode</button>
        <button onclick="try{document.getElementById('bOut').value = atob(document.getElementById('bIn').value)}catch(e){alert('Invalid')}" class="py-2 bg-slate-800 rounded-lg text-xs font-semibold">Decode</button>
      </div>
      <textarea id="bOut" readonly placeholder="Output..." class="w-full h-20 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono text-cyan-400"></textarea>
    </div>
  `;
}

function renderUuidGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div id="uuidTxt" class="p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono text-cyan-400 text-center text-sm break-all">Click Generate</div>
      <button onclick="document.getElementById('uuidTxt').innerText = crypto.randomUUID()" class="w-full py-3 bg-cyan-600 rounded-xl text-sm font-semibold">Generate New UUID</button>
    </div>
  `;
}

function renderPassGen(c) {
  c.innerHTML = `
    <div class="space-y-3">
      <div class="flex items-center gap-3">
        <input type="number" id="pLength" value="16" min="6" max="64" class="w-20 bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-center text-sm font-bold">
        <span class="text-xs text-slate-400">Password Length</span>
      </div>
      <button onclick="makePass()" class="w-full py-3 bg-cyan-600 rounded-xl text-sm font-semibold">Generate Password</button>
      <input type="text" id="pOut" readonly class="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm font-mono text-emerald-400 text-center font-bold">
    </div>
  `;
}
window.makePass = () => {
  const len = parseInt(document.getElementById('pLength').value) || 16;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
  let res = "";
  for (let i = 0; i < len; i++) res += chars.charAt(Math.floor(Math.random() * chars.length));
  document.getElementById('pOut').value = res;
};
