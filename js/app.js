const grid = document.getElementById('toolsGrid');
const countBadge = document.getElementById('toolCount');

const colorMap = {
  "Finance & Tax": { bg: "from-emerald-500/20 to-teal-500/10", icon: "text-emerald-400", border: "group-hover:border-emerald-500/40" },
  "Calculators": { bg: "from-blue-500/20 to-indigo-500/10", icon: "text-blue-400", border: "group-hover:border-blue-500/40" },
  "Text & Media": { bg: "from-amber-500/20 to-orange-500/10", icon: "text-amber-400", border: "group-hover:border-amber-500/40" },
  "Developer": { bg: "from-purple-500/20 to-pink-500/10", icon: "text-purple-400", border: "group-hover:border-purple-500/40" }
};

function loadTools(items) {
  grid.innerHTML = "";
  if (countBadge) countBadge.innerText = items.length;

  items.forEach(tool => {
    const theme = colorMap[tool.cat] || { bg: "from-indigo-500/20 to-cyan-500/10", icon: "text-indigo-400", border: "group-hover:border-indigo-500/40" };
    
    const card = document.createElement('div');
    card.className = `tool-card rounded-2xl p-5 flex flex-col justify-between text-left cursor-pointer group relative ${theme.border}`;
    card.onclick = () => openTool(tool.id);
    card.innerHTML = `
      <div>
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr ${theme.bg} border border-white/[0.08] ${theme.icon} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition shadow-inner">
          <i class="fa-solid ${tool.icon}"></i>
        </div>
        <h4 class="text-sm font-bold text-slate-100 group-hover:text-white transition mb-1">${tool.name}</h4>
        <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-normal">${tool.desc || tool.cat}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px]">
        <span class="font-medium text-slate-400">${tool.cat}</span>
        <span class="${theme.icon} group-hover:translate-x-1 transition font-bold"><i class="fa-solid fa-arrow-right"></i></span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterTools() {
  const q = document.getElementById('toolSearch').value.toLowerCase();
  const filtered = toolsData.filter(t => t.name.toLowerCase().includes(q) || t.cat.toLowerCase().includes(q) || (t.desc && t.desc.toLowerCase().includes(q)));
  loadTools(filtered);
}

function filterCat(cat, e) {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.remove('bg-gradient-to-r', 'from-indigo-600', 'to-purple-600', 'text-white', 'shadow-lg', 'shadow-indigo-600/25');
    btn.classList.add('bg-[#141622]', 'text-slate-300');
  });
  if (e && e.target) {
    e.target.classList.add('bg-gradient-to-r', 'from-indigo-600', 'to-purple-600', 'text-white', 'shadow-lg', 'shadow-indigo-600/25');
    e.target.classList.remove('bg-[#141622]', 'text-slate-300');
  }
  if (cat === 'all') loadTools(toolsData);
  else loadTools(toolsData.filter(t => t.cat === cat));
}

const modal = document.getElementById('toolModal');
function openTool(id) {
  const tool = toolsData.find(t => t.id === id);
  if (!tool) return;
  const theme = colorMap[tool.cat] || { bg: "from-indigo-500/20 to-purple-500/10", icon: "text-indigo-400" };
  
  document.getElementById('modalTitle').innerText = tool.name;
  document.getElementById('modalCat').innerText = tool.cat;
  const iconBox = document.getElementById('modalIconBox');
  iconBox.className = `w-11 h-11 rounded-2xl bg-gradient-to-tr ${theme.bg} ${theme.icon} border border-white/10 flex items-center justify-center text-lg`;
  iconBox.innerHTML = `<i class="fa-solid ${tool.icon}"></i>`;
  
  const body = document.getElementById('modalBody');
  body.innerHTML = "";
  tool.render(body);
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  loadTools(toolsData);
});
