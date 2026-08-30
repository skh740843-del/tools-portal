const grid = document.getElementById('toolsGrid');
const countBadge = document.getElementById('toolCount');

function loadTools(items) {
  grid.innerHTML = "";
  if (countBadge) countBadge.innerText = items.length;

  items.forEach((tool, index) => {
    const num = (index + 1).toString().padStart(2, '0');
    const card = document.createElement('div');
    card.className = "craft-card rounded-2xl p-5 flex flex-col justify-between text-left cursor-pointer group";
    card.onclick = () => openTool(tool.id);
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-3 text-[11px] font-mono-tag text-stone-400">
          <span>HT / ${num}</span>
          <i class="fa-solid ${tool.icon} text-orange-700 text-sm"></i>
        </div>
        <h4 class="text-base font-bold text-stone-900 group-hover:text-orange-700 transition mb-1.5">${tool.name}</h4>
        <p class="text-xs text-stone-500 line-clamp-2 leading-relaxed">${tool.desc || tool.cat}</p>
      </div>
      <div class="mt-5 pt-3 border-t craft-border flex items-center justify-between text-[11px] font-semibold text-stone-400">
        <span class="text-stone-500">${tool.cat}</span>
        <span class="text-stone-900 group-hover:translate-x-1 transition">&rarr;</span>
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
    btn.classList.remove('bg-stone-900', 'text-white');
    btn.classList.add('bg-white', 'text-stone-700');
  });
  if (e && e.target) {
    e.target.classList.add('bg-stone-900', 'text-white');
    e.target.classList.remove('bg-white', 'text-stone-700');
  }
  if (cat === 'all') loadTools(toolsData);
  else loadTools(toolsData.filter(t => t.cat === cat));
}

const modal = document.getElementById('toolModal');
function openTool(id) {
  const tool = toolsData.find(t => t.id === id);
  if (!tool) return;
  document.getElementById('modalTitle').innerText = tool.name;
  document.getElementById('modalCat').innerText = tool.cat;
  
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
