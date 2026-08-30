const toolsData = [
  { id: 'emi_calc', name: 'Loan EMI Calculator', cat: 'Finance & Tax', icon: 'fa-calculator', desc: 'Calculate Monthly EMI with breakdown', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="loanAmount" value="500000" oninput="runEmi()"><div class="grid grid-cols-2 gap-2"><input type="number" id="interestRate" step="0.1" value="9.5" oninput="runEmi()"><input type="number" id="tenureYears" value="5" oninput="runEmi()"></div><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">Monthly EMI: <b id="emiMonthly" class="text-orange-700">₹ 0</b></div></div>';
    setTimeout(window.runEmi, 50);
  }},
  { id: 'sip_calc', name: 'SIP Calculator', cat: 'Finance & Tax', icon: 'fa-chart-line', desc: 'Calculate mutual fund SIP returns', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="sipAmt" value="5000" oninput="runSip()"><div class="grid grid-cols-2 gap-2"><input type="number" id="sipRate" value="12" oninput="runSip()"><input type="number" id="sipYears" value="10" oninput="runSip()"></div><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">Maturity: <b id="sipTot" class="text-orange-700">₹ 0</b></div></div>';
    setTimeout(window.runSip, 50);
  }},
  { id: 'gst_calc', name: 'GST Calculator', cat: 'Finance & Tax', icon: 'fa-percent', desc: 'Calculate inclusive/exclusive GST', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="gstAmt" placeholder="Amount"><div class="grid grid-cols-2 gap-2"><select id="gstRate"><option value="18">18%</option><option value="12">12%</option><option value="5">5%</option></select><select id="gstType"><option value="exclusive">Exclusive (+)</option><option value="inclusive">Inclusive (-)</option></select></div><button onclick="calcGst()">Compute Tax</button><div id="gstRes" class="text-xs hidden"></div></div>';
  }},
  { id: 'calorie_calc', name: 'Daily Calorie (TDEE)', cat: 'Calculators', icon: 'fa-fire', desc: 'Calculate daily calories to lose/maintain weight', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><select id="calGen"><option value="m">Male</option><option value="f">Female</option></select><input type="number" id="calAge" value="25"></div><div class="grid grid-cols-2 gap-2"><input type="number" id="calW" value="70" placeholder="KG"><input type="number" id="calH" value="175" placeholder="CM"></div><button onclick="calcCalories()">Calculate</button><div id="calRes" class="text-xs space-y-1 hidden"></div></div>';
  }},
  { id: 'bmi_calc', name: 'BMI Calculator', cat: 'Calculators', icon: 'fa-weight-scale', desc: 'Body Mass Index & weight category', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="bw" placeholder="Weight (KG)"><input type="number" id="bh" placeholder="Height (CM)"><button onclick="calcBmi()">Calculate</button><div id="bmiRes" class="text-center font-bold text-sm hidden"></div></div>';
  }},
  { id: 'age_calc', name: 'Exact Age Calculator', cat: 'Calculators', icon: 'fa-calendar-days', desc: 'Exact age in years, months, days', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="date" id="dob"><button onclick="calcAge()">Calculate</button><div id="ageRes" class="text-center font-bold text-sm hidden"></div></div>';
  }},
  { id: 'word_count', name: 'Word Counter', cat: 'Text & Media', icon: 'fa-file-lines', desc: 'Count words, characters, reading time', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="wb" oninput="runWc()" placeholder="Type here..." class="h-28"></textarea><div class="text-xs font-bold text-center">Words: <span id="wCount">0</span> | Chars: <span id="cCount">0</span></div></div>';
  }},
  { id: 'color_picker', name: 'HEX to RGB Color Tool', cat: 'Text & Media', icon: 'fa-palette', desc: 'Convert HEX, RGB, and view color codes', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="flex items-center gap-3"><input type="color" id="clrPick" value="#ea580c" oninput="runColor(this.value)" class="w-14 h-10 border-0 p-0 rounded-xl cursor-pointer"><input type="text" id="clrHex" value="#ea580c" oninput="runColor(this.value)" class="font-mono"></div><div id="clrInfo" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono"></div></div>';
    setTimeout(() => window.runColor('#ea580c'), 50);
  }}
];

window.runEmi = () => {
  const p = parseFloat(document.getElementById('loanAmount').value) || 0, r = (parseFloat(document.getElementById('interestRate').value) || 0) / 12 / 100, n = (parseFloat(document.getElementById('tenureYears').value) || 0) * 12;
  if (p <= 0 || r <= 0 || n <= 0) return;
  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  document.getElementById('emiMonthly').innerText = '₹ ' + Math.round(emi).toLocaleString('en-IN');
};
window.runSip = () => {
  const p = parseFloat(document.getElementById('sipAmt').value) || 0, i = (parseFloat(document.getElementById('sipRate').value) || 0) / 12 / 100, n = (parseFloat(document.getElementById('sipYears').value) || 0) * 12;
  const tot = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  document.getElementById('sipTot').innerText = '₹ ' + Math.round(tot).toLocaleString('en-IN');
};
window.calcGst = () => {
  const a = parseFloat(document.getElementById('gstAmt').value), r = parseFloat(document.getElementById('gstRate').value), t = document.getElementById('gstType').value;
  const tax = t === 'exclusive' ? (a * r) / 100 : a - (a * (100 / (100 + r)));
  const res = document.getElementById('gstRes');
  res.innerHTML = '<div>Tax: <b>₹' + tax.toFixed(2) + '</b> | Total: <b>₹' + (t === 'exclusive' ? a + tax : a).toFixed(2) + '</b></div>';
  res.classList.remove('hidden');
};
window.calcCalories = () => {
  const g = document.getElementById('calGen').value, a = parseFloat(document.getElementById('calAge').value), w = parseFloat(document.getElementById('calW').value), h = parseFloat(document.getElementById('calH').value);
  const bmr = g === 'm' ? (10 * w + 6.25 * h - 5 * a + 5) : (10 * w + 6.25 * h - 5 * a - 161);
  const tdee = Math.round(bmr * 1.375);
  const res = document.getElementById('calRes');
  res.innerHTML = '<div>Maintenance: <b>' + tdee + ' kcal</b></div><div>Weight Loss: <b>' + (tdee - 500) + ' kcal</b></div>';
  res.classList.remove('hidden');
};
window.calcBmi = () => {
  const w = parseFloat(document.getElementById('bw').value), h = parseFloat(document.getElementById('bh').value) / 100;
  const res = document.getElementById('bmiRes');
  res.innerText = 'BMI: ' + (w / (h * h)).toFixed(1);
  res.classList.remove('hidden');
};
window.calcAge = () => {
  const d = new Date(document.getElementById('dob').value);
  if (isNaN(d.getTime())) return;
  const diff = new Date(Date.now() - d.getTime());
  const res = document.getElementById('ageRes');
  res.innerText = Math.abs(diff.getUTCFullYear() - 1970) + ' Years, ' + diff.getUTCMonth() + ' Months';
  res.classList.remove('hidden');
};
window.runWc = () => {
  const v = document.getElementById('wb').value.trim();
  document.getElementById('wCount').innerText = v ? v.split(/s+/).length : 0;
  document.getElementById('cCount').innerText = v.length;
};
window.runColor = (hex) => {
  document.getElementById('clrPick').value = hex;
  document.getElementById('clrHex').value = hex;
  let c = hex.substring(1);
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  if (isNaN(num)) return;
  document.getElementById('clrInfo').innerHTML = 'HEX: <b>' + hex.toUpperCase() + '</b> | RGB: <b>rgb(' + ((num >> 16) & 255) + ', ' + ((num >> 8) & 255) + ', ' + (num & 255) + ')</b>';
};