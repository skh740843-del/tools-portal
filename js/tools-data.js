const part1Tools = [
  { id: 'emi_calc', name: 'Loan EMI Calculator', cat: 'Finance & Tax', icon: 'fa-calculator', desc: 'Monthly EMI breakdown', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="lAmt" value="500000" oninput="runEmi()"><div class="grid grid-cols-2 gap-2"><input type="number" id="lRate" step="0.1" value="9.5" oninput="runEmi()"><input type="number" id="lTen" value="5" oninput="runEmi()"></div><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">Monthly EMI: <b id="emiOut" class="text-orange-700">₹ 0</b></div></div>';
    setTimeout(window.runEmi, 50);
  }},
  { id: 'sip_calc', name: 'SIP Calculator', cat: 'Finance & Tax', icon: 'fa-chart-line', desc: 'Mutual fund SIP returns', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="sAmt" value="5000" oninput="runSip()"><div class="grid grid-cols-2 gap-2"><input type="number" id="sRate" value="12" oninput="runSip()"><input type="number" id="sYr" value="10" oninput="runSip()"></div><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">Maturity: <b id="sipOut" class="text-orange-700">₹ 0</b></div></div>';
    setTimeout(window.runSip, 50);
  }},
  { id: 'ci_calc', name: 'Compound Interest', cat: 'Finance & Tax', icon: 'fa-arrow-trend-up', desc: 'Annual compounding calculator', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="ciP" value="100000" oninput="runCi()"><div class="grid grid-cols-2 gap-2"><input type="number" id="ciR" value="8" oninput="runCi()"><input type="number" id="ciT" value="5" oninput="runCi()"></div><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">Total: <b id="ciOut" class="text-orange-700">₹ 0</b></div></div>';
    setTimeout(window.runCi, 50);
  }},
  { id: 'fd_calc', name: 'Fixed Deposit (FD)', cat: 'Finance & Tax', icon: 'fa-piggy-bank', desc: 'FD returns & interest', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="fdP" value="200000" oninput="runFd()"><div class="grid grid-cols-2 gap-2"><input type="number" id="fdR" value="7.1" oninput="runFd()"><input type="number" id="fdT" value="3" oninput="runFd()"></div><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">Maturity: <b id="fdOut" class="text-orange-700">₹ 0</b></div></div>';
    setTimeout(window.runFd, 50);
  }},
  { id: 'gst_calc', name: 'GST Calculator', cat: 'Finance & Tax', icon: 'fa-percent', desc: 'Inclusive/exclusive GST', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="gstAmt" placeholder="Amount"><div class="grid grid-cols-2 gap-2"><select id="gstRate"><option value="18">18%</option><option value="12">12%</option><option value="5">5%</option></select><select id="gstType"><option value="exclusive">Exclusive (+)</option><option value="inclusive">Inclusive (-)</option></select></div><button onclick="runGst()">Compute Tax</button><div id="gstOut" class="text-xs hidden"></div></div>';
  }},
  { id: 'disc_calc', name: 'Discount Calculator', cat: 'Finance & Tax', icon: 'fa-tags', desc: 'Discount savings calculator', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="dp" placeholder="Price"><input type="number" id="dd" placeholder="Discount %"><button onclick="runDisc()">Calculate</button><div id="discOut" class="text-xs hidden"></div></div>';
  }},
  { id: 'salary_calc', name: 'In-Hand Salary', cat: 'Finance & Tax', icon: 'fa-wallet', desc: 'Monthly take-home pay', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="ctcAmt" value="600000" oninput="runSal()"><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs">Monthly: <b id="salOut" class="text-orange-700">₹ 0</b></div></div>';
    setTimeout(window.runSal, 50);
  }},
  { id: 'calorie_calc', name: 'Daily Calorie (TDEE)', cat: 'Calculators', icon: 'fa-fire', desc: 'Maintenance & weight loss calories', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><select id="cg"><option value="m">Male</option><option value="f">Female</option></select><input type="number" id="ca" value="25"></div><div class="grid grid-cols-2 gap-2"><input type="number" id="cw" value="70" placeholder="KG"><input type="number" id="ch" value="175" placeholder="CM"></div><button onclick="runCal()">Calculate</button><div id="calOut" class="text-xs hidden"></div></div>';
  }},
  { id: 'bmr_calc', name: 'BMR Calculator', cat: 'Calculators', icon: 'fa-heart-pulse', desc: 'Basal Metabolic Rate', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><select id="bg"><option value="m">Male</option><option value="f">Female</option></select><input type="number" id="ba" value="22"></div><div class="grid grid-cols-2 gap-2"><input type="number" id="bw" value="65"><input type="number" id="bh" value="170"></div><button onclick="runBmr()">Calculate</button><div id="bmrOut" class="text-xs font-bold text-center hidden"></div></div>';
  }},
  { id: 'water_calc', name: 'Water Intake', cat: 'Calculators', icon: 'fa-bottle-water', desc: 'Daily water goal', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="ww" value="65" placeholder="Weight (KG)"><button onclick="runWat()">Calculate Goal</button><div id="watOut" class="text-xs font-bold text-center hidden"></div></div>';
  }},
  { id: 'bmi_calc', name: 'BMI Calculator', cat: 'Calculators', icon: 'fa-weight-scale', desc: 'Body Mass Index score', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="bmiW" placeholder="Weight (KG)"><input type="number" id="bmiH" placeholder="Height (CM)"><button onclick="runBmi()">Calculate</button><div id="bmiOut" class="text-xs font-bold text-center hidden"></div></div>';
  }},
  { id: 'age_calc', name: 'Exact Age Calculator', cat: 'Calculators', icon: 'fa-calendar-days', desc: 'Age in years and months', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="date" id="dob"><button onclick="runAge()">Calculate</button><div id="ageOut" class="text-xs font-bold text-center hidden"></div></div>';
  }}
];

window.runEmi = () => {
  const p = parseFloat(document.getElementById('lAmt').value)||0, r = (parseFloat(document.getElementById('lRate').value)||0)/12/100, n = (parseFloat(document.getElementById('lTen').value)||0)*12;
  if(p<=0||r<=0||n<=0) return;
  document.getElementById('emiOut').innerText = '₹ ' + Math.round((p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1)).toLocaleString('en-IN');
};
window.runSip = () => {
  const p = parseFloat(document.getElementById('sAmt').value)||0, i = (parseFloat(document.getElementById('sRate').value)||0)/12/100, n = (parseFloat(document.getElementById('sYr').value)||0)*12;
  if(!p||!i||!n) return;
  document.getElementById('sipOut').innerText = '₹ ' + Math.round(p*((Math.pow(1+i,n)-1)/i)*(1+i)).toLocaleString('en-IN');
};
window.runCi = () => {
  const p = parseFloat(document.getElementById('ciP').value)||0, r = (parseFloat(document.getElementById('ciR').value)||0)/100, t = parseFloat(document.getElementById('ciT').value)||0;
  if(!p||!r||!t) return;
  document.getElementById('ciOut').innerText = '₹ ' + Math.round(p*Math.pow((1+r),t)).toLocaleString('en-IN');
};
window.runFd = () => {
  const p = parseFloat(document.getElementById('fdP').value)||0, r = (parseFloat(document.getElementById('fdR').value)||0)/100, t = parseFloat(document.getElementById('fdT').value)||0;
  if(!p||!r||!t) return;
  document.getElementById('fdOut').innerText = '₹ ' + Math.round(p*Math.pow((1+r/4),4*t)).toLocaleString('en-IN');
};
window.runGst = () => {
  const a = parseFloat(document.getElementById('gstAmt').value), r = parseFloat(document.getElementById('gstRate').value), t = document.getElementById('gstType').value;
  if(!a) return;
  const tax = t === 'exclusive' ? (a*r)/100 : a - (a*(100/(100+r)));
  const el = document.getElementById('gstOut');
  el.innerHTML = '<div>Tax: <b>₹'+tax.toFixed(2)+'</b> | Total: <b>₹'+(t==='exclusive'?a+tax:a).toFixed(2)+'</b></div>';
  el.classList.remove('hidden');
};
window.runDisc = () => {
  const p = parseFloat(document.getElementById('dp').value), d = parseFloat(document.getElementById('dd').value);
  if(!p||isNaN(d)) return;
  const s = (p*d)/100, el = document.getElementById('discOut');
  el.innerHTML = '<div>Save: <b>₹'+s.toFixed(2)+'</b> | Final: <b>₹'+(p-s).toFixed(2)+'</b></div>';
  el.classList.remove('hidden');
};
window.runSal = () => {
  const c = parseFloat(document.getElementById('ctcAmt').value)||0;
  if(!c) return;
  document.getElementById('salOut').innerText = '₹ ' + Math.round((c/12)-Math.min((c/12)*0.12,1800)-200).toLocaleString('en-IN');
};
window.runCal = () => {
  const g = document.getElementById('cg').value, a = parseFloat(document.getElementById('ca').value), w = parseFloat(document.getElementById('cw').value), h = parseFloat(document.getElementById('ch').value);
  if(!a||!w||!h) return;
  const bmr = g==='m' ? (10*w+6.25*h-5*a+5) : (10*w+6.25*h-5*a-161);
  const el = document.getElementById('calOut');
  el.innerHTML = '<div>Maintenance: <b>'+Math.round(bmr*1.375)+' kcal</b></div><div>Weight Loss: <b>'+(Math.round(bmr*1.375)-500)+' kcal</b></div>';
  el.classList.remove('hidden');
};
window.runBmr = () => {
  const g = document.getElementById('bg').value, a = parseFloat(document.getElementById('ba').value), w = parseFloat(document.getElementById('bw').value), h = parseFloat(document.getElementById('bh').value);
  if(!a||!w||!h) return;
  const bmr = g==='m' ? (10*w+6.25*h-5*a+5) : (10*w+6.25*h-5*a-161);
  const el = document.getElementById('bmrOut');
  el.innerText = 'BMR: ' + Math.round(bmr) + ' Calories/day';
  el.classList.remove('hidden');
};
window.runWat = () => {
  const w = parseFloat(document.getElementById('ww').value);
  if(!w) return;
  const el = document.getElementById('watOut');
  el.innerHTML = 'Goal: <b>'+(w*0.033).toFixed(2)+' Liters</b>/day';
  el.classList.remove('hidden');
};
window.runBmi = () => {
  const w = parseFloat(document.getElementById('bmiW').value), h = parseFloat(document.getElementById('bmiH').value)/100;
  if(!w||!h) return;
  const el = document.getElementById('bmiOut');
  el.innerText = 'BMI: ' + (w/(h*h)).toFixed(1);
  el.classList.remove('hidden');
};
window.runAge = () => {
  const d = new Date(document.getElementById('dob').value);
  if(isNaN(d.getTime())) return;
  const diff = new Date(Date.now() - d.getTime());
  const el = document.getElementById('ageOut');
  el.innerText = Math.abs(diff.getUTCFullYear()-1970) + ' Years, ' + diff.getUTCMonth() + ' Months';
  el.classList.remove('hidden');
};

const part2Tools = [
  { id: 'pomodoro_timer', name: 'Pomodoro Timer', cat: 'Calculators', icon: 'fa-stopwatch-20', desc: '25m work / 5m break', render: (c) => {
    c.innerHTML = '<div class="space-y-4 text-center"><div id="pomoDisplay" class="font-mono text-4xl font-black text-orange-700 py-3 bg-stone-50 border border-stone-200 rounded-2xl">25:00</div><div class="flex justify-center gap-2"><button onclick="startPomo(1500)" class="text-xs px-3">25m Work</button><button onclick="startPomo(300)" class="text-xs px-3">5m Break</button><button onclick="stopPomo()" class="text-xs px-3">Reset</button></div></div>';
  }},
  { id: 'stopwatch_tool', name: 'Digital Stopwatch', cat: 'Calculators', icon: 'fa-stopwatch', desc: 'Precision stopwatch', render: (c) => {
    c.innerHTML = '<div class="space-y-4 text-center"><div id="swDisplay" class="font-mono text-3xl font-black text-stone-900 py-3 bg-stone-50 border border-stone-200 rounded-2xl">00:00:00.0</div><div class="flex justify-center gap-2"><button onclick="startSw()" class="text-xs px-3">Start</button><button onclick="pauseSw()" class="text-xs px-3">Pause</button><button onclick="resetSw()" class="text-xs px-3">Reset</button></div></div>';
  }},
  { id: 'date_diff', name: 'Days Between Dates', cat: 'Calculators', icon: 'fa-calendar-week', desc: 'Exact days & weeks count', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="date" id="dStart"><input type="date" id="dEnd"><button onclick="runDateDiff()">Calculate</button><div id="dDiffOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs hidden"></div></div>';
  }},
  { id: 'tz_conv', name: 'World Time Clock', cat: 'Calculators', icon: 'fa-globe', desc: 'Live world city clocks', render: (c) => {
    c.innerHTML = '<div class="space-y-2 text-xs" id="tzList"></div>';
    const z = [{n:"India (IST)",tz:"Asia/Kolkata"},{n:"Bangladesh (BST)",tz:"Asia/Dhaka"},{n:"London (GMT)",tz:"Europe/London"},{n:"New York (EST)",tz:"America/New_York"}];
    document.getElementById('tzList').innerHTML = z.map(x => '<div class="flex justify-between p-2 bg-stone-50 border border-stone-200 rounded-xl"><span>'+x.n+'</span><b class="text-orange-700 font-mono">'+new Date().toLocaleTimeString('en-US',{timeZone:x.tz,hour:'2-digit',minute:'2-digit'})+'</b></div>').join('');
  }},
  { id: 'temp_conv', name: 'Temperature Converter', cat: 'Calculators', icon: 'fa-temperature-high', desc: 'Celsius & Fahrenheit', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="number" id="tVal" value="100" oninput="runTemp()"><select id="tUnit" onchange="runTemp()"><option value="c">Celsius</option><option value="f">Fahrenheit</option></select></div><div id="tOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs"></div></div>';
    setTimeout(window.runTemp, 50);
  }},
  { id: 'weight_conv', name: 'Weight Converter', cat: 'Calculators', icon: 'fa-scale-balanced', desc: 'KG & Pounds', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="number" id="wVal" value="1" oninput="runWeight()"><select id="wUnit" onchange="runWeight()"><option value="kg">KG</option><option value="lb">Lbs</option></select></div><div id="wOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs"></div></div>';
    setTimeout(window.runWeight, 50);
  }},
  { id: 'speed_conv', name: 'Speed Converter', cat: 'Calculators', icon: 'fa-gauge-high', desc: 'km/h & mph', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="number" id="spVal" value="60" oninput="runSpeed()"><select id="spUnit" onchange="runSpeed()"><option value="kmh">km/h</option><option value="mph">mph</option></select></div><div id="spOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs"></div></div>';
    setTimeout(window.runSpeed, 50);
  }},
  { id: 'data_conv', name: 'Data Storage', cat: 'Calculators', icon: 'fa-hard-drive', desc: 'MB, GB, TB', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="number" id="dtVal" value="1024" oninput="runData()"><select id="dtUnit" onchange="runData()"><option value="mb">MB</option><option value="gb">GB</option></select></div><div id="dtOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs"></div></div>';
    setTimeout(window.runData, 50);
  }},
  { id: 'img_resizer', name: 'Image Resizer', cat: 'Text & Media', icon: 'fa-image', desc: 'Resize image dimensions', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="file" id="imgUpload" accept="image/*" class="text-xs"><div class="grid grid-cols-2 gap-2"><input type="number" id="imgW" value="500"><input type="number" id="imgH" value="500"></div><button onclick="resizeImage()">Resize & Download</button><canvas id="resCanvas" class="hidden"></canvas></div>';
  }},
  { id: 'img_to_b64', name: 'Image to Base64', cat: 'Text & Media', icon: 'fa-file-image', desc: 'Base64 data URI encoder', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="file" id="b64File" accept="image/*" class="text-xs" onchange="runImgToBase64()"><textarea id="b64Out" readonly class="h-28 font-mono text-[10px] select-all"></textarea></div>';
  }},
  { id: 'color_picker', name: 'HEX & RGB Color', cat: 'Text & Media', icon: 'fa-palette', desc: 'Color preview & converter', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="flex items-center gap-3"><input type="color" id="clrPick" value="#ea580c" oninput="runColor(this.value)" class="w-14 h-10 border-0 p-0 rounded-xl"><input type="text" id="clrHex" value="#ea580c" oninput="runColor(this.value)" class="font-mono"></div><div id="clrInfo" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono"></div></div>';
    setTimeout(() => window.runColor('#ea580c'), 50);
  }},
  { id: 'meta_gen', name: 'SEO Meta Generator', cat: 'Text & Media', icon: 'fa-tags', desc: 'OpenGraph & SEO meta tags', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="text" id="metaT" placeholder="Title" oninput="genMeta()"><textarea id="metaD" placeholder="Description" oninput="genMeta()" class="h-20"></textarea><textarea id="metaOut" readonly class="h-24 font-mono text-xs"></textarea></div>';
  }},
  { id: 'utm_builder', name: 'UTM Campaign Builder', cat: 'Text & Media', icon: 'fa-bullhorn', desc: 'Google Analytics UTM URLs', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="text" id="utmUrl" placeholder="https://domain.com" oninput="buildUtm()"><div class="grid grid-cols-2 gap-2"><input type="text" id="utmSrc" placeholder="Source" oninput="buildUtm()"><input type="text" id="utmMed" placeholder="Medium" oninput="buildUtm()"></div><textarea id="utmOut" readonly class="h-20 font-mono text-xs select-all"></textarea></div>';
  }},
  { id: 'social_counter', name: 'Social Bio Counter', cat: 'Text & Media', icon: 'fa-hashtag', desc: 'Character limits for X, IG, LinkedIn', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="socTxt" oninput="runSocialCount()" placeholder="Type text..." class="h-28"></textarea><div class="grid grid-cols-3 gap-2 text-center text-xs"><div class="p-2 bg-stone-50 border border-stone-200 rounded-xl"><div>X (280)</div><b id="scX">280</b></div><div class="p-2 bg-stone-50 border border-stone-200 rounded-xl"><div>IG (150)</div><b id="scIg">150</b></div><div class="p-2 bg-stone-50 border border-stone-200 rounded-xl"><div>Total</div><b id="scTot" class="text-orange-700">0</b></div></div></div>';
  }},
  { id: 'word_count', name: 'Word Counter', cat: 'Text & Media', icon: 'fa-file-lines', desc: 'Count words & characters', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="wb" oninput="runWc()" placeholder="Type here..." class="h-28"></textarea><div class="text-xs font-bold text-center">Words: <span id="wCount">0</span> | Chars: <span id="cCount">0</span></div></div>';
  }},
  { id: 'case_conv', name: 'Case Converter', cat: 'Text & Media', icon: 'fa-font', desc: 'UPPER, lower, Title Case', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="cb" placeholder="Text..." class="h-24"></textarea><div class="grid grid-cols-3 gap-2 text-xs font-bold"><button onclick="document.getElementById(\'cb\').value = document.getElementById(\'cb\').value.toUpperCase()">UPPER</button><button onclick="document.getElementById(\'cb\').value = document.getElementById(\'cb\').value.toLowerCase()">lower</button><button onclick="document.getElementById(\'cb\').value = document.getElementById(\'cb\').value.replace(/\\w\\S*/g, w => w.replace(/^\\w/, c => c.toUpperCase()))">Title</button></div></div>';
  }},
  { id: 'dup_remover', name: 'Remove Duplicate Lines', cat: 'Text & Media', icon: 'fa-filter', desc: 'Filter repeated text', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="dupIn" placeholder="Paste lines..." class="h-28"></textarea><button onclick="cleanDuplicates()">Remove Duplicates</button><textarea id="dupOut" readonly class="h-28 font-mono"></textarea></div>';
  }},
  { id: 'slug_gen', name: 'Slug URL Generator', cat: 'Text & Media', icon: 'fa-link', desc: 'SEO Friendly post slug', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="text" id="slugIn" placeholder="Post Title" oninput="makeSlug()"><div id="slugOut" class="font-mono text-orange-700 font-bold text-sm">slug-preview</div></div>';
  }}
];

let pInt = null, pSec = 1500;
window.startPomo = (s) => {
  clearInterval(pInt); pSec = s;
  const upd = () => { const el = document.getElementById('pomoDisplay'); if(el) el.innerText = Math.floor(pSec/60).toString().padStart(2,'0') + ':' + (pSec%60).toString().padStart(2,'0'); };
  upd();
  pInt = setInterval(() => { pSec--; upd(); if(pSec<=0){ clearInterval(pInt); alert('Time Up!'); } }, 1000);
};
window.stopPomo = () => { clearInterval(pInt); pSec = 1500; const el = document.getElementById('pomoDisplay'); if(el) el.innerText = "25:00"; };

let sInt = null, sStart = 0, sElap = 0;
window.startSw = () => {
  if(sInt) return;
  sStart = Date.now() - sElap;
  sInt = setInterval(() => {
    sElap = Date.now() - sStart;
    const ms = Math.floor((sElap%1000)/100), s = Math.floor((sElap/1000)%60).toString().padStart(2,'0'), m = Math.floor((sElap/60000)%60).toString().padStart(2,'0');
    const el = document.getElementById('swDisplay');
    if(el) el.innerText = m + ':' + s + '.' + ms;
  }, 100);
};
window.pauseSw = () => { clearInterval(sInt); sInt = null; };
window.resetSw = () => { clearInterval(sInt); sInt = null; sElap = 0; const el = document.getElementById('swDisplay'); if(el) el.innerText = "00:00:00.0"; };

window.runDateDiff = () => {
  const s = new Date(document.getElementById('dStart').value), e = new Date(document.getElementById('dEnd').value);
  if(isNaN(s.getTime())||isNaN(e.getTime())) return;
  const days = Math.ceil(Math.abs(e-s)/(1000*60*60*24));
  const el = document.getElementById('dDiffOut');
  el.innerHTML = 'Days: <b class="text-orange-700 font-mono">'+days+' days</b> ('+(days/7).toFixed(1)+' weeks)';
  el.classList.remove('hidden');
};
window.runTemp = () => {
  const v = parseFloat(document.getElementById('tVal').value), u = document.getElementById('tUnit').value;
  if(isNaN(v)) return;
  document.getElementById('tOut').innerHTML = 'C: <b>'+(u==='c'?v:(v-32)*5/9).toFixed(1)+'°C</b> | F: <b>'+(u==='c'?(v*9/5)+32:v).toFixed(1)+'°F</b>';
};
window.runWeight = () => {
  const v = parseFloat(document.getElementById('wVal').value), u = document.getElementById('wUnit').value;
  if(isNaN(v)) return;
  const kg = u==='kg'?v:v*0.453592;
  document.getElementById('wOut').innerHTML = 'KG: <b>'+kg.toFixed(2)+'</b> | Lbs: <b>'+(kg*2.20462).toFixed(2)+'</b>';
};
window.runSpeed = () => {
  const v = parseFloat(document.getElementById('spVal').value), u = document.getElementById('spUnit').value;
  if(isNaN(v)) return;
  const kmh = u==='kmh'?v:v*1.60934;
  document.getElementById('spOut').innerHTML = 'km/h: <b>'+kmh.toFixed(1)+'</b> | mph: <b>'+(kmh/1.60934).toFixed(1)+'</b>';
};
window.runData = () => {
  const v = parseFloat(document.getElementById('dtVal').value), u = document.getElementById('dtUnit').value;
  if(isNaN(v)) return;
  const mb = u==='mb'?v:v*1024;
  document.getElementById('dtOut').innerHTML = 'GB: <b>'+(mb/1024).toFixed(2)+'</b> | MB: <b>'+mb.toFixed(0)+'</b>';
};
window.resizeImage = () => {
  const f=document.getElementById('imgUpload').files[0], w=parseInt(document.getElementById('imgW').value), h=parseInt(document.getElementById('imgH').value);
  if(!f||!w||!h) return alert('Select image');
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const c = document.getElementById('resCanvas'); c.width=w; c.height=h;
      c.getContext('2d').drawImage(img,0,0,w,h);
      const a = document.createElement('a'); a.download='resized.png'; a.href=c.toDataURL(); a.click();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(f);
};
window.runImgToBase64 = () => {
  const f=document.getElementById('b64File').files[0]; if(!f) return;
  const reader = new FileReader();
  reader.onload = e => document.getElementById('b64Out').value = e.target.result;
  reader.readAsDataURL(f);
};
window.runColor = (hex) => {
  if(!hex.startsWith('#')) hex='#'+hex;
  document.getElementById('clrPick').value=hex; document.getElementById('clrHex').value=hex;
  let c=hex.substring(1); if(c.length===3) c=c.split('').map(x=>x+x).join('');
  const num=parseInt(c,16); if(isNaN(num)) return;
  document.getElementById('clrInfo').innerHTML = 'HEX: <b>'+hex.toUpperCase()+'</b> | RGB: <b>rgb('+((num>>16)&255)+', '+((num>>8)&255)+', '+(num&255)+')</b>';
};
window.genMeta = () => {
  const t=document.getElementById('metaT').value||"Title", d=document.getElementById('metaD').value||"Description";
  document.getElementById('metaOut').value = '<title>'+t+'</title>\n<meta name="description" content="'+d+'">\n<meta property="og:title" content="'+t+'">';
};
window.buildUtm = () => {
  const u=document.getElementById('utmUrl').value.trim(), s=document.getElementById('utmSrc').value.trim(), m=document.getElementById('utmMed').value.trim();
  if(!u){document.getElementById('utmOut').value=''; return;}
  const p=new URLSearchParams(); if(s) p.append('utm_source',s); if(m) p.append('utm_medium',m);
  const q=p.toString(); document.getElementById('utmOut').value = q ? u+(u.includes('?')?'&':'?')+q : u;
};
window.runSocialCount = () => {
  const l=document.getElementById('socTxt').value.length;
  document.getElementById('scX').innerText = 280-l; document.getElementById('scIg').innerText = 150-l; document.getElementById('scTot').innerText = l;
};
window.runWc = () => {
  const v=document.getElementById('wb').value.trim();
  document.getElementById('wCount').innerText = v?v.split(/\s+/).length:0; document.getElementById('cCount').innerText = v.length;
};
window.cleanDuplicates = () => {
  const v=document.getElementById('dupIn').value; if(!v) return;
  document.getElementById('dupOut').value=[...new Set(v.split('\n').map(l=>l.trim()))].filter(l=>l.length>0).join('\n');
};
window.makeSlug = () => {
  const v=document.getElementById('slugIn').value;
  document.getElementById('slugOut').innerText = v.toLowerCase().trim().replace(/[^\w\s-]/g,'').replace(/[\s_-]+/g,'-');
};

const toolsData = [...part1Tools, ...part2Tools];