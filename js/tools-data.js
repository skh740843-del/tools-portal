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


const part3Tools = [
  { id: 'robots_gen', name: 'Robots.txt Generator', cat: 'Text & Media', icon: 'fa-robot', desc: 'Create crawler rules', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><select id="robAllow"><option value="allow">Allow All</option><option value="disallow">Disallow All</option></select><button onclick="genRobots()">Generate</button><textarea id="robOut" readonly class="h-20 font-mono text-xs"></textarea></div>';
  }},
  { id: 'hashtag_gen', name: 'Hashtag Extractor', cat: 'Text & Media', icon: 'fa-wand-magic-sparkles', desc: 'Extract clean hashtags', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="hashIn" placeholder="Text..." class="h-24"></textarea><button onclick="wordsToHash()">Generate Hashtags</button><textarea id="hashOut" readonly class="h-24 font-mono text-xs"></textarea></div>';
  }},
  { id: 'find_replace', name: 'Find and Replace', cat: 'Text & Media', icon: 'fa-arrows-rotate', desc: 'Find & replace text', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="frText" placeholder="Text..." class="h-20"></textarea><div class="grid grid-cols-2 gap-2"><input type="text" id="frFind" placeholder="Find"><input type="text" id="frReplace" placeholder="Replace"></div><button onclick="doFindReplace()">Replace All</button><textarea id="frOut" readonly class="h-20"></textarea></div>';
  }},
  { id: 'lorem_gen', name: 'Lorem Ipsum Generator', cat: 'Text & Media', icon: 'fa-paragraph', desc: 'Placeholder paragraphs', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="number" id="loremParas" value="2" min="1" max="10"><button onclick="generateLorem()">Generate Lorem</button><textarea id="loremOut" readonly class="h-28 text-xs"></textarea></div>';
  }},
  { id: 'pdf_gen', name: 'Text to PDF Export', cat: 'Text & Media', icon: 'fa-file-pdf', desc: 'Export formatted notes to PDF', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="pt" placeholder="Write text..." class="h-28"></textarea><button onclick="dlPdf()">Export PDF</button></div>';
  }},
  { id: 'pct_calc', name: 'Percentage Calculator', cat: 'Calculators', icon: 'fa-divide', desc: 'Find percentage & differences', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="number" id="pVal" placeholder="%"><input type="number" id="pTotal" placeholder="Total"></div><button onclick="calcPct()">Calculate</button><div id="pctRes" class="text-center font-bold text-sm hidden"></div></div>';
  }},
  { id: 'rand_picker', name: 'Random Picker', cat: 'Calculators', icon: 'fa-dice', desc: 'Pick random numbers/draw', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="number" id="rMin" value="1"><input type="number" id="rMax" value="100"></div><button onclick="pickRandom()">Pick</button><div id="rPickOut" class="text-center font-mono text-2xl font-black text-orange-700">--</div></div>';
  }},
  { id: 'bodyfat_calc', name: 'Body Fat Estimator', cat: 'Calculators', icon: 'fa-person', desc: 'Estimate body fat from BMI', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><select id="bfGen"><option value="1">Male</option><option value="0">Female</option></select><input type="number" id="bfAge" value="24"></div><div class="grid grid-cols-2 gap-2"><input type="number" id="bfW" value="68"><input type="number" id="bfH" value="172"></div><button onclick="calcBodyFat()">Estimate</button><div id="bfRes" class="text-center font-bold text-sm hidden"></div></div>';
  }}
];

window.genRobots = () => {
  const a = document.getElementById('robAllow').value;
  document.getElementById('robOut').value = 'User-agent: *\n' + (a === 'disallow' ? 'Disallow: /\n' : 'Allow: /\n');
};
window.wordsToHash = () => {
  const w = document.getElementById('hashIn').value.replace(/[^\w\s]/gi, '').split(/\s+/).filter(x => x.length > 2);
  document.getElementById('hashOut').value = [...new Set(w)].map(x => '#' + x.toLowerCase()).join(' ');
};
window.doFindReplace = () => {
  const t = document.getElementById('frText').value, f = document.getElementById('frFind').value, r = document.getElementById('frReplace').value;
  if(!t || !f) return;
  document.getElementById('frOut').value = t.replace(new RegExp(f, 'gi'), r);
};
window.generateLorem = () => {
  const count = parseInt(document.getElementById('loremParas').value) || 2;
  const t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  document.getElementById('loremOut').value = Array(count).fill(t).join('\n\n');
};
window.dlPdf = () => {
  const t = document.getElementById('pt').value;
  if(!t) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text(t, 10, 10);
  doc.save('document.pdf');
};
window.calcPct = () => {
  const v = parseFloat(document.getElementById('pVal').value), t = parseFloat(document.getElementById('pTotal').value);
  if(isNaN(v) || isNaN(t)) return;
  const res = document.getElementById('pctRes');
  res.innerText = v + '% of ' + t + ' = ' + ((v * t) / 100);
  res.classList.remove('hidden');
};
window.pickRandom = () => {
  const min = parseInt(document.getElementById('rMin').value) || 0, max = parseInt(document.getElementById('rMax').value) || 100;
  document.getElementById('rPickOut').innerText = Math.floor(Math.random() * (max - min + 1)) + min;
};
window.calcBodyFat = () => {
  const s = parseInt(document.getElementById('bfGen').value), a = parseFloat(document.getElementById('bfAge').value);
  const w = parseFloat(document.getElementById('bfW').value), h = parseFloat(document.getElementById('bfH').value)/100;
  if(!a || !w || !h) return;
  const fat = (1.20 * (w / (h * h)) + 0.23 * a - 10.8 * s - 5.4).toFixed(1);
  const res = document.getElementById('bfRes');
  res.innerText = 'Body Fat: ' + fat + '%';
  res.classList.remove('hidden');
};


const part4Tools = [
  { id: 'json_format', name: 'JSON Formatter & Validator', cat: 'Developer', icon: 'fa-code', desc: 'Prettify, minify and validate JSON data', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="jsonIn" placeholder="Paste JSON here..." class="h-28 font-mono text-xs"></textarea><div class="grid grid-cols-2 gap-2"><button onclick="formatJson(2)">Prettify (Indent 2)</button><button onclick="minifyJson()">Minify</button></div><div id="jsonStatus" class="text-xs font-bold text-center hidden"></div><textarea id="jsonOut" readonly class="h-28 font-mono text-xs select-all"></textarea></div>';
  }},
  { id: 'b64_str', name: 'Base64 Text Encode / Decode', cat: 'Developer', icon: 'fa-lock', desc: 'Encode and decode UTF-8 plain text to Base64', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="b64StrIn" placeholder="Enter text or base64..." class="h-24 font-mono text-xs"></textarea><div class="grid grid-cols-2 gap-2"><button onclick="encB64Str()">Encode Base64</button><button onclick="decB64Str()">Decode Base64</button></div><textarea id="b64StrOut" readonly class="h-24 font-mono text-xs select-all"></textarea></div>';
  }},
  { id: 'url_coder', name: 'URL Encoder / Decoder', cat: 'Developer', icon: 'fa-link', desc: 'Encode or decode URI components safely', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="urlCodeIn" placeholder="Enter URL or string..." class="h-24 font-mono text-xs"></textarea><div class="grid grid-cols-2 gap-2"><button onclick="encUrlStr()">Encode URI</button><button onclick="decUrlStr()">Decode URI</button></div><textarea id="urlCodeOut" readonly class="h-24 font-mono text-xs select-all"></textarea></div>';
  }},
  { id: 'html_entity', name: 'HTML Entities Converter', cat: 'Developer', icon: 'fa-file-code', desc: 'Escape or unescape HTML tags & characters', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="htmlEntIn" placeholder="Enter HTML snippet..." class="h-24 font-mono text-xs"></textarea><div class="grid grid-cols-2 gap-2"><button onclick="encHtmlEnt()">Escape HTML</button><button onclick="decHtmlEnt()">Unescape HTML</button></div><textarea id="htmlEntOut" readonly class="h-24 font-mono text-xs select-all"></textarea></div>';
  }},
  { id: 'uuid_gen', name: 'UUID / GUID Generator', cat: 'Developer', icon: 'fa-fingerprint', desc: 'Generate RFC4122 compliant UUID v4 tokens', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="flex items-center gap-2"><input type="number" id="uuidCount" value="5" min="1" max="50"><button onclick="makeUuids()">Generate UUIDs</button></div><textarea id="uuidOut" readonly class="h-28 font-mono text-xs select-all"></textarea></div>';
    setTimeout(window.makeUuids, 50);
  }},
  { id: 'hash_gen', name: 'SHA-256 Hash Generator', cat: 'Developer', icon: 'fa-shield-halved', desc: 'Generate cryptographic SHA-256 hash', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><textarea id="hashPlain" placeholder="Enter text to hash..." class="h-24 font-mono text-xs" oninput="runSha256()"></textarea><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl space-y-1 text-xs font-mono"><div class="text-stone-500 font-bold">SHA-256 Output:</div><div id="sha256Out" class="break-all font-bold text-orange-700">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div></div></div>';
  }}
];

window.formatJson = (indent) => {
  const v = document.getElementById('jsonIn').value.trim();
  const st = document.getElementById('jsonStatus');
  if(!v) return;
  try {
    const parsed = JSON.parse(v);
    document.getElementById('jsonOut').value = JSON.stringify(parsed, null, indent);
    st.innerText = 'Valid JSON Syntax';
    st.className = 'text-xs font-bold text-center text-emerald-600 block';
  } catch(e) {
    document.getElementById('jsonOut').value = '';
    st.innerText = 'Invalid JSON: ' + e.message;
    st.className = 'text-xs font-bold text-center text-red-600 block';
  }
};
window.minifyJson = () => {
  const v = document.getElementById('jsonIn').value.trim();
  const st = document.getElementById('jsonStatus');
  if(!v) return;
  try {
    const parsed = JSON.parse(v);
    document.getElementById('jsonOut').value = JSON.stringify(parsed);
    st.innerText = 'Valid JSON (Minified)';
    st.className = 'text-xs font-bold text-center text-emerald-600 block';
  } catch(e) {
    document.getElementById('jsonOut').value = '';
    st.innerText = 'Invalid JSON: ' + e.message;
    st.className = 'text-xs font-bold text-center text-red-600 block';
  }
};
window.encB64Str = () => {
  const v = document.getElementById('b64StrIn').value;
  try {
    document.getElementById('b64StrOut').value = btoa(unescape(encodeURIComponent(v)));
  } catch(e) { alert('Encoding error'); }
};
window.decB64Str = () => {
  const v = document.getElementById('b64StrIn').value.trim();
  try {
    document.getElementById('b64StrOut').value = decodeURIComponent(escape(atob(v)));
  } catch(e) { alert('Invalid Base64 string'); }
};
window.encUrlStr = () => {
  document.getElementById('urlCodeOut').value = encodeURIComponent(document.getElementById('urlCodeIn').value);
};
window.decUrlStr = () => {
  try {
    document.getElementById('urlCodeOut').value = decodeURIComponent(document.getElementById('urlCodeIn').value);
  } catch(e) { alert('Malformed URI string'); }
};
window.encHtmlEnt = () => {
  const el = document.createElement('div');
  el.innerText = document.getElementById('htmlEntIn').value;
  document.getElementById('htmlEntOut').value = el.innerHTML;
};
window.decHtmlEnt = () => {
  const el = document.createElement('textarea');
  el.innerHTML = document.getElementById('htmlEntIn').value;
  document.getElementById('htmlEntOut').value = el.value;
};
window.makeUuids = () => {
  const n = parseInt(document.getElementById('uuidCount').value) || 1;
  const gen = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  document.getElementById('uuidOut').value = Array.from({length: Math.min(n, 50)}, gen).join('\n');
};
window.runSha256 = async () => {
  const msg = document.getElementById('hashPlain').value;
  const msgBuffer = new TextEncoder().encode(msg);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  document.getElementById('sha256Out').innerText = hashHex;
};


const part5Tools = [
  { id: 'base_conv', name: 'Number Base Converter', cat: 'Calculators', icon: 'fa-binary', desc: 'Convert Binary, Octal, Decimal and Hex', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="text" id="baseVal" value="255" oninput="runBaseConv()"><select id="baseFrom" onchange="runBaseConv()"><option value="10">Decimal (10)</option><option value="2">Binary (2)</option><option value="16">Hex (16)</option><option value="8">Octal (8)</option></select></div><div id="baseOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono space-y-1"></div></div>';
    setTimeout(window.runBaseConv, 50);
  }},
  { id: 'sci_eval', name: 'Scientific Math Evaluator', cat: 'Calculators', icon: 'fa-square-root-variable', desc: 'Evaluate sin, cos, tan, log, sqrt, power', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><input type="text" id="sciExp" placeholder="Math.sqrt(144) + Math.sin(30 * Math.PI / 180)" value="Math.sqrt(144) * 5" oninput="runSciEval()"><div class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono">Result: <b id="sciOut" class="text-orange-700">0</b></div></div>';
    setTimeout(window.runSciEval, 50);
  }},
  { id: 'quad_solve', name: 'Quadratic Equation Solver', cat: 'Calculators', icon: 'fa-square-xmark', desc: 'Find roots for ax² + bx + c = 0', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-3 gap-2"><input type="number" id="qA" value="1" placeholder="a"><input type="number" id="qB" value="-5" placeholder="b"><input type="number" id="qC" value="6" placeholder="c"></div><button onclick="runQuadSolve()">Solve Equation</button><div id="quadOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono hidden"></div></div>';
    setTimeout(window.runQuadSolve, 50);
  }},
  { id: 'gcd_lcm', name: 'GCD & LCM Calculator', cat: 'Calculators', icon: 'fa-shapes', desc: 'Greatest Common Divisor & Least Common Multiple', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="number" id="numA" value="24" oninput="runGcdLcm()"><input type="number" id="numB" value="36" oninput="runGcdLcm()"></div><div id="gcdLcmOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono space-y-1"></div></div>';
    setTimeout(window.runGcdLcm, 50);
  }},
  { id: 'npr_ncr', name: 'nPr & nCr Combinatorics', cat: 'Calculators', icon: 'fa-arrow-down-9-1', desc: 'Permutations, combinations & factorials', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2"><input type="number" id="nVal" value="5" min="0" oninput="runCombinatorics()"><input type="number" id="rVal" value="2" min="0" oninput="runCombinatorics()"></div><div id="nprNcrOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono space-y-1"></div></div>';
    setTimeout(window.runCombinatorics, 50);
  }},
  { id: 'matrix_2x2', name: '2x2 Matrix Determinant', cat: 'Calculators', icon: 'fa-table-cells', desc: 'Determinant and inverse of 2x2 matrix', render: (c) => {
    c.innerHTML = '<div class="space-y-3"><div class="grid grid-cols-2 gap-2 max-w-[200px] mx-auto"><input type="number" id="mA" value="4"><input type="number" id="mB" value="2"><input type="number" id="mC" value="3"><input type="number" id="mD" value="1"></div><button onclick="runMatrix2x2()">Compute Matrix</button><div id="matOut" class="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs font-mono hidden"></div></div>';
    setTimeout(window.runMatrix2x2, 50);
  }}
];

window.runBaseConv = () => {
  const v = document.getElementById('baseVal').value.trim();
  const f = parseInt(document.getElementById('baseFrom').value);
  const n = parseInt(v, f);
  const out = document.getElementById('baseOut');
  if(isNaN(n)) { out.innerHTML = '<span class="text-red-600">Invalid Number Input</span>'; return; }
  out.innerHTML = `
    <div>DEC: <b>${n.toString(10)}</b></div>
    <div>BIN: <b>${n.toString(2)}</b></div>
    <div>HEX: <b>${n.toString(16).toUpperCase()}</b></div>
    <div>OCT: <b>${n.toString(8)}</b></div>
  `;
};

window.runSciEval = () => {
  const exp = document.getElementById('sciExp').value;
  try {
    const res = Function('"use strict"; return (' + exp + ')')();
    document.getElementById('sciOut').innerText = Number.isFinite(res) ? res : 'Invalid';
  } catch(e) { document.getElementById('sciOut').innerText = 'Syntax Error'; }
};

window.runQuadSolve = () => {
  const a = parseFloat(document.getElementById('qA').value);
  const b = parseFloat(document.getElementById('qB').value);
  const c = parseFloat(document.getElementById('qC').value);
  const out = document.getElementById('quadOut');
  if(!a) { out.innerHTML = 'a cannot be 0'; out.classList.remove('hidden'); return; }
  const d = b * b - 4 * a * c;
  if(d > 0) {
    const r1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(3);
    const r2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(3);
    out.innerHTML = `Roots: <b>x₁ = ${r1}</b>, <b>x₂ = ${r2}</b> (Real & Distinct)`;
  } else if(d === 0) {
    const r = (-b / (2 * a)).toFixed(3);
    out.innerHTML = `Root: <b>x = ${r}</b> (Real & Equal)`;
  } else {
    const real = (-b / (2 * a)).toFixed(3);
    const imag = (Math.sqrt(-d) / (2 * a)).toFixed(3);
    out.innerHTML = `Roots: <b>${real} ± ${imag}i</b> (Complex)`;
  }
  out.classList.remove('hidden');
};

const getGcd = (a, b) => b === 0 ? a : getGcd(b, a % b);
window.runGcdLcm = () => {
  const a = Math.abs(parseInt(document.getElementById('numA').value) || 0);
  const b = Math.abs(parseInt(document.getElementById('numB').value) || 0);
  if(!a || !b) return;
  const gcd = getGcd(a, b);
  const lcm = (a * b) / gcd;
  document.getElementById('gcdLcmOut').innerHTML = `<div>GCD (HCF): <b>${gcd}</b></div><div>LCM: <b>${lcm}</b></div>`;
};

const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
window.runCombinatorics = () => {
  const n = parseInt(document.getElementById('nVal').value) || 0;
  const r = parseInt(document.getElementById('rVal').value) || 0;
  const out = document.getElementById('nprNcrOut');
  if(n < 0 || r < 0 || r > n || n > 20) { out.innerHTML = 'Constraint: 0 ≤ r ≤ n ≤ 20'; return; }
  const nPr = fact(n) / fact(n - r);
  const nCr = nPr / fact(r);
  out.innerHTML = `<div>n! (${n}!): <b>${fact(n)}</b></div><div>nPr: <b>${nPr}</b></div><div>nCr: <b>${nCr}</b></div>`;
};

window.runMatrix2x2 = () => {
  const a = parseFloat(document.getElementById('mA').value) || 0;
  const b = parseFloat(document.getElementById('mB').value) || 0;
  const c = parseFloat(document.getElementById('mC').value) || 0;
  const d = parseFloat(document.getElementById('mD').value) || 0;
  const det = (a * d) - (b * c);
  const out = document.getElementById('matOut');
  if(det === 0) {
    out.innerHTML = `Determinant: <b>0</b> (Singular Matrix - No Inverse)`;
  } else {
    out.innerHTML = `
      <div>Det (ad-bc): <b>${det.toFixed(2)}</b></div>
      <div class="mt-1">Inverse Matrix:</div>
      <div>[ ${(d/det).toFixed(2)}, ${(-b/det).toFixed(2)} ]</div>
      <div>[ ${(-c/det).toFixed(2)}, ${(a/det).toFixed(2)} ]</div>
    `;
  }
  out.classList.remove('hidden');
};

const toolsData = [...part1Tools, ...part2Tools, ...part3Tools, ...part4Tools, ...part5Tools];