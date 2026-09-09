const ELEMENTS = [
  { key: 'magia', label: 'Magia', color: 'var(--el-magia)' },
  { key: 'tierra', label: 'Tierra', color: 'var(--el-tierra)' },
  { key: 'agua', label: 'Agua', color: 'var(--el-agua)' },
  { key: 'fuego', label: 'Fuego', color: 'var(--el-fuego)' },
  { key: 'tecnologia', label: 'Tecnología', color: 'var(--el-tecnologia)' },
  { key: 'muertos', label: 'Muertos', color: 'var(--el-muertos)' },
  { key: 'aire', label: 'Aire', color: 'var(--el-aire)' },
  { key: 'vida', label: 'Vida', color: 'var(--el-vida)' },
  { key: 'oscuridad', label: 'Oscuridad', color: 'var(--el-oscuridad)' },
  { key: 'luz', label: 'Luz', color: 'var(--el-luz)' },
];

const SAGAS = [
  { key: 'spyros_adventure', label: "Spyro's Adventure" },
  { key: 'giants', label: 'Giants' },
  { key: 'swap_force', label: 'Swap Force' },
  { key: 'trap_team', label: 'Trap Team' },
  { key: 'superchargers', label: 'SuperChargers' },
  { key: 'imaginators', label: 'Imaginators' },
];

// roster[sagaKey][elementKey] = [nombres]
const ROSTER = {
  spyros_adventure: {
    magia: ['Spyro', 'Double Trouble', 'Wrecking Ball', 'Voodood', 'Dark Spyro', 'Legendary Spyro'],
    tierra: ['Bash', 'Dino-Rang', 'Prism Break', 'Terrafin', 'Legendary Bash'],
    agua: ['Slam Bam', 'Zap', 'Wham-Shell', 'Gill Grunt'],
    fuego: ['Ignitor', 'Sunburn', 'Flameslinger', 'Eruptor'],
    tecnologia: ['Boomer', 'Drill Sergeant', 'Drobot', 'Trigger Happy', 'Legendary Trigger Happy'],
    muertos: ['Hex', 'Cynder', 'Chop Chop', 'Ghost Roaster', 'Legendary Chop Chop'],
    aire: ['Whirlwind', 'Warnado', 'Sonic Boom', 'Lightning Rod'],
    vida: ['Camo', 'Stump Smash', 'Zook', 'Stealth Elf'],
    oscuridad: [],
    luz: [],
  },
  giants: {
    magia: ['Ninjini', 'Lightcore Pop Fizz', 'Spyro', 'Wrecking Ball', 'Pop Fizz', 'Scarlet Ninjini', 'Punch Pop Fizz', 'Royal Double Trouble'],
    tierra: ['Crusher', 'Lightcore Prism Break', 'Terrafin', 'Bash', 'Prism Break', 'Flashwing', 'Granite Crusher', 'Jade Flashwing'],
    agua: ['Thumpback', 'Lightcore Chill', 'Slam Bam', 'Zap', 'Gill Grunt', 'Chill', 'Legendary Lightcore Chill', 'Legendary Slam Bam'],
    fuego: ['Double Trouble', 'Hot Head', 'Lightcore Eruptor', 'Ignitor', 'Eruptor', 'Flameslinger', 'Hot Dog', 'Legendary Ignitor', 'Molten Hot Dog'],
    tecnologia: ['Bouncer', 'Lightcore Drobot', 'Drill Sergeant', 'Trigger Happy', 'Drobot', 'Sprocket', 'Legendary Bouncer'],
    muertos: ['Eye-Brawl', 'Lightcore Hex', 'Cynder', 'Chop Chop', 'Hex', 'Fright Rider'],
    aire: ['Swarm', 'Lightcore Jet-Vac', 'Sonic Boom', 'Whirlwind', 'Lightning Rod', 'Jet-Vac', 'Polar Whirlwind', 'Legendary Jet-Vac'],
    vida: ['Tree Rex', 'Lightcore Shroomboom', 'Stealth Elf', 'Zook', 'Stump Smash', 'Shroomboom', 'Gnarly Tree Rex', 'Legendary Stealth Elf'],
    oscuridad: [],
    luz: [],
  },
  swap_force: {
    magia: ['Trap Shadow', 'Hoot Loop', 'Lightcore Star Strike', 'Mega Ram Spyro', 'Super Gulp Pop Fizz', 'Dune Bug', 'Star Strike', 'Dark Mega Ram Spyro', 'Enchanted Hoot Loop', 'Lightcore Enchanted Star Strike'],
    tierra: ['Doom Stone', 'Rubble Rouser', 'Lightcore Flashwing', 'Hyper Beam Prism Break', 'Knockout Terrafin', 'Slobber Tooth', 'Scorp', 'Dark Slobber Tooth'],
    agua: ['Freeze Blade', 'Wash Buckler', 'Lightcore Wham-Shell', 'Anchors Away Gill Grunt', 'Blizzard Chill', 'Rip Tide', 'Punk Shock', 'Dark Wash Buckler', 'Nitro Freeze Blade'],
    fuego: ['Blast Zone', 'Fire Kraken', 'Lightcore Smolderdash', 'Lava Barf Eruptor', 'Fire Bone Hot Dog', 'Fryno', 'Smolderdash', 'Dark Blast Zone', 'Jade Fire Kraken', 'Volcanic Lava Barf Eruptor'],
    tecnologia: ['Spy Rise', 'Magna Charge', 'Lightcore Countdown', 'Big Bang Trigger Happy', 'Heavy Duty Sprocket', 'Wild-Up', 'Countdown', 'Nitro Magna Charge', 'Spingtime Big Bang Trigger Happy', 'Kickoff Countdown'],
    muertos: ['Rattle Shake', 'Night Shift', 'Lightcore Grim Creeper', 'Twin Blade Chop Chop', 'Phantom Cynder', 'Roller Brawl', 'Grim Creeper', 'Legendary Night Shift', 'Legendary Lightcore Grim Creeper', 'Quick Draw Rattle Shake'],
    aire: ['Free Ranger', 'Boom Jet', 'Lightcore Warnado', 'Horn Blast Whirlwind', 'Turbo Jet-Vac', 'Pop Thorn', 'Scratch', 'Legendary Free Ranger'],
    vida: ['Stink Bomb', 'Grilla Drilla', 'Lightcore Bumble Blast', 'Ninja Stealth Elf', 'Thorn Horn Camo', 'Zoo Lou', 'Bumble Blast', 'Dark Ninja Stealth Elf', 'Legendary Zoo Lou', 'Jolly Bumble Blast'],
    oscuridad: [],
    luz: [],
  },
  trap_team: {
    magia: ['Blastermind', 'Enigma', 'Fizzy Frenzy Pop Fizz', 'Deja Vu', 'Cobra Cadabra', 'Mini Jini', 'Spry', 'Legendary Deja Vu', 'King Cobra Cadabra', 'Love Potion Fizzy Frenzy Pop Fizz'],
    tierra: ['Wallop', 'Head Rush', 'Rocky Roll', 'Fist Bump', 'Terrabite', 'Bop', 'Nitro Head Rush'],
    agua: ['Snap Shot', 'Lob-Star', 'Tidal Wave Gill Grunt', 'Echo', 'Flip Wreck', 'Thumpling', 'Gill Runt', 'Dark Snap Shot', 'Winterfest Lob-Star'],
    fuego: ['Wild Fire', 'Ka-Boom', 'Hog Wild Fryno', 'Torch', 'Trail Blazer', 'Small Fry', 'Weeruptor', 'Dark Wild Fire', 'Eggsellent Weeruptor'],
    tecnologia: ['Jawbreaker', 'Gearshift', 'Tread Head', 'Chopper', 'Trigger Snappy', 'Drobit', 'Legendary Jawbreaker'],
    muertos: ['Krypt King', 'Short Cut', 'Funny Bone', 'Bat Spin', 'Hijinx', 'Eye Small', 'Nitro Krypt King'],
    aire: ['Gusto', 'Thunderbolt', 'Full Blast Jet-Vac', 'Fling Kong', 'Blades', 'Pet Vac', 'Breeze', 'Legendary Blades', 'Power Punch Pet Vac'],
    vida: ['Tuff Luck', 'Bushwhack', 'Sure Shot Shroomboom', 'Food Fight', 'High Five', 'Whisper Elf', 'Barkley', 'Dark Food Fight', 'Legendary Bushwhack', 'Gnarly Barkley'],
    luz: ['Knight Light', 'Spotlight'],
    oscuridad: ['Knight Mare', 'Blackout'],
  },
  superchargers: {
    magia: ['Splat', 'Big Bubble Pop Fizz', 'Power Blue Splat', 'Birthday Bash Big Bubble Pop Fizz'],
    tierra: ['Smash Hit', 'Shark Shooter Terrafin', 'Steel Plated Smash Hit'],
    agua: ['Dive-Clops', 'Deep Dive Gill Grunt', 'Missile-Tow Dive-Clops'],
    fuego: ['Spitfire', 'Lava Lance Eruptor', 'Hammer Slam Bowser', 'Dark Spitfire', 'Dark Hammer Slam Bowser'],
    tecnologia: ['High Volt', 'Double Dare Trigger Happy', 'Power Blue Double Dare Trigger Happy'],
    muertos: ['Fiesta', 'Bone Bash Roller Brawl', 'Legendary Bone Bash Roller Brawl', 'Frightful Fiesta'],
    aire: ['Stormblade', 'Hurricane Jet-Vac', 'Legendary Hurricane Jet-Vac'],
    vida: ['Thrillipede', 'Super Shot Stealth Elf', 'Turbo Charge Donkey Kong', 'Dark Super Shot Stealth Elf', 'Dark Turbo Charge Donkey Kong', 'Eggcited Thrillipede'],
    oscuridad: ['Nightfall'],
    luz: ['Astroblast', 'Legendary Astroblast'],
  },
  imaginators: {
    magia: ['Mysticat', 'Buckshot', 'Pain-Yatta'],
    tierra: ['Barbella', 'Tri-Tip', 'Golden Queen', 'Dark Golden Queen', 'Legendary Tri-Tip'],
    agua: ['King Pen', 'Tidepool', 'Grave Clobber', 'Dark King Pen'],
    fuego: ['Ember', 'Flarewolf', 'Tae Kwon Crow', 'Mystical Tae Kwon Crow', 'Hard-Boiled Flarewolf'],
    tecnologia: ['Chain Reaction', 'Ro-Bow', 'Dr. Krankcase', 'Dr. Neo Cortex'],
    muertos: ['Chopscotch', 'Pit Boss', 'Wolfgang', 'Dark Wolfgang', 'Legendary Pit Boss', 'Candy-Coated Chopscotch'],
    aire: ['Air Strike', 'Wild Storm', 'Bad Juju', 'Mystical Bad Juju', 'Egg Bomber Air Strike'],
    vida: ['Boom Bloom', 'Ambush', 'Chompy Mage', 'Crash Bandicoot', 'Jingle Bell Chompy Mage'],
    oscuridad: ['Starcast', 'Hood Sickle', 'Steel Plated Hood Sickle'],
    luz: ['Aurora', 'Blaster-Tron', 'Solar Aurora'],
  },
};

/* ---------------- Utilidades sobre los datos ---------------- */

function uniq(arr){ return [...new Set(arr)]; }

// Estas tres funciones ya NO devuelven el roster completo: solo los nombres
// que el usuario ha elegido previamente en las casillas de la cuadrícula.
function rosterForSaga(sagaKey){
  return uniq(ELEMENTS.map(e => picks[`${sagaKey}:${e.key}`]).filter(Boolean));
}

function rosterForElement(elKey){
  return uniq(SAGAS.map(s => picks[`${s.key}:${elKey}`]).filter(Boolean));
}

function rosterAll(){
  return uniq(ELEMENTS.map(e => picks[`elfav:${e.key}`]).filter(Boolean));
}

/* ---------------- Estado ---------------- */

// picks: { "saga:element": "nombre", "sagafav:saga": "nombre", "elfav:element": "nombre", "overall": "nombre" }
let picks = {};
const STORAGE_KEY = 'skylanders-ultimate-picker';

async function loadPicks(){
  try{
    if (window.storage){
      const res = await window.storage.get(STORAGE_KEY, false);
      if (res && res.value) picks = JSON.parse(res.value);
    }
  }catch(e){ /* sin datos guardados todavía, seguimos con picks vacío */ }
  render();
}

async function savePicks(){
  try{
    if (window.storage){
      await window.storage.set(STORAGE_KEY, JSON.stringify(picks), false);
    }
  }catch(e){ console.warn('No se pudo guardar', e); }
}

/* ---------------- Construcción del tablero ---------------- */

const board = document.getElementById('board');

function buildBoard(){
  let html = '<thead><tr>';
  html += `<th class="corner"></th>`;
  ELEMENTS.forEach(el => {
    html += `<th class="el-head">
      <span class="dot" style="background:${el.color}"></span>
      <span class="label">${el.label}</span>
    </th>`;
  });
  html += `<th class="corner" style="text-align:center;">
      <span class="label" style="font-family:'Fredoka',sans-serif;font-size:13px;color:var(--gold);">Favorito<br>de saga</span>
    </th>`;
  html += '</tr></thead><tbody>';

  SAGAS.forEach(saga => {
    html += '<tr>';
    html += `<th class="saga-head"><span class="label">${saga.label}</span></th>`;
    ELEMENTS.forEach(el => {
      const available = (ROSTER[saga.key][el.key] || []);
      const key = `${saga.key}:${el.key}`;
      const val = picks[key];
      if (available.length === 0){
        html += `<td class="cell" style="cursor:default;opacity:.35;">
          <span class="empty-label">—</span>
        </td>`;
      } else {
        html += `<td class="cell${val ? ' filled' : ''}" data-mode="cell" data-saga="${saga.key}" data-el="${el.key}" style="border-color:${val ? el.color : 'var(--line)'}">
          ${val ? `<span class="name">${val}</span>` : `<span class="plus">+</span>`}
        </td>`;
      }
    });
    const sfKey = `sagafav:${saga.key}`;
    const sfVal = picks[sfKey];
    html += `<td class="cell saga-fav" data-mode="sagafav" data-saga="${saga.key}">
      ${sfVal ? `<span class="name">${sfVal}</span>` : `<span class="plus">★</span>`}
    </td>`;
    html += '</tr>';
  });

  html += '<tr class="fav-row">';
  html += `<th class="saga-head"><span class="label-fav">Favorito<br>por elemento</span></th>`;
  ELEMENTS.forEach(el => {
    const efKey = `elfav:${el.key}`;
    const efVal = picks[efKey];
    html += `<th class="el-fav-head" data-mode="elfav" data-el="${el.key}" style="border-color:${efVal ? el.color : 'var(--line)'}">
      ${efVal ? `<span class="name">${efVal}</span>` : `<span class="plus">★</span>`}
    </th>`;
  });
  const overallVal = picks['overall'];
  html += `<td class="overall-cell" data-mode="overall">
      <span class="tag">FAVORITO ABSOLUTO</span>
      <span class="val ${overallVal ? '' : 'empty'}">${overallVal ? overallVal : 'Elegir'}</span>
    </td>`;
  html += '</tr></tbody>';

  board.innerHTML = html;

  board.querySelectorAll('[data-mode]').forEach(cell => {
    cell.addEventListener('click', () => openModal(cell.dataset));
  });
}

function renderStats(){
  const totalCells = SAGAS.reduce((acc, s) => acc + ELEMENTS.filter(e => (ROSTER[s.key][e.key]||[]).length > 0).length, 0);
  const filledCells = SAGAS.reduce((acc, s) => acc + ELEMENTS.filter(e => picks[`${s.key}:${e.key}`]).length, 0);
  document.getElementById('stats').innerHTML =
    `Has elegido <strong>${filledCells}</strong> de <strong>${totalCells}</strong> combinaciones saga × elemento.`;
}

function render(){
  buildBoard();
  buildMobileView();
  renderStats();
}

/* ---------------- Vista móvil (tabs + tarjetas) ---------------- */

const mobileTabsEl = document.getElementById('mobile-tabs');
const mobileCardsEl = document.getElementById('mobile-cards');
let activeMobileTab = SAGAS[0].key; // clave de saga, o 'favoritos'

function buildMobileView(){
  let tabsHtml = SAGAS.map(saga =>
    `<button data-tab="${saga.key}" class="${activeMobileTab === saga.key ? 'active' : ''}">${saga.label}</button>`
  ).join('');
  tabsHtml += `<button data-tab="favoritos" class="fav-tab ${activeMobileTab === 'favoritos' ? 'active' : ''}">★ Favoritos</button>`;
  mobileTabsEl.innerHTML = tabsHtml;

  mobileTabsEl.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      activeMobileTab = btn.dataset.tab;
      buildMobileView();
    });
  });

  if (activeMobileTab === 'favoritos'){
    mobileCardsEl.innerHTML = buildMobileFavoritesHtml();
  } else {
    mobileCardsEl.innerHTML = buildMobileSagaHtml(activeMobileTab);
  }

  mobileCardsEl.querySelectorAll('[data-mode]').forEach(cell => {
    cell.addEventListener('click', () => openModal(cell.dataset));
  });
}

function mobileCardHtml({mode, saga, el, label, sublabel, value, color, star, disabled}){
  if (disabled){
    return `<div class="mobile-card disabled">
      <div class="mc-left"><span class="mc-value empty">${label}: no disponible en esta saga</span></div>
    </div>`;
  }
  const dataAttrs = `data-mode="${mode}"${saga ? ` data-saga="${saga}"` : ''}${el ? ` data-el="${el}"` : ''}`;
  const extraClass = star ? ' star' : '';
  return `<div class="mobile-card${extraClass}" ${dataAttrs} style="border-color:${value ? color : 'var(--line)'}">
      <div class="mc-left">
        ${color ? `<span class="dot" style="background:${color}"></span>` : ''}
        <span>
          <span class="mc-label">${sublabel}</span>
          <span class="mc-value ${value ? '' : 'empty'}">${value ? value : (star ? 'Elegir favorito ★' : 'Sin elegir')}</span>
        </span>
      </div>
      <span class="mc-arrow">›</span>
    </div>`;
}

function buildMobileSagaHtml(sagaKey){
  const saga = SAGAS.find(s => s.key === sagaKey);
  let html = `<div class="mobile-section-title">${saga.label}</div>`;
  ELEMENTS.forEach(el => {
    const available = ROSTER[sagaKey][el.key] || [];
    const key = `${sagaKey}:${el.key}`;
    if (available.length === 0){
      html += mobileCardHtml({ label: el.label, disabled:true });
    } else {
      html += mobileCardHtml({
        mode:'cell', saga: sagaKey, el: el.key,
        sublabel: el.label, value: picks[key], color: el.color,
      });
    }
  });
  html += mobileCardHtml({
    mode:'sagafav', saga: sagaKey,
    sublabel:`Favorito de ${saga.label}`, value: picks[`sagafav:${sagaKey}`],
    color:'var(--gold)', star:true,
  });
  return html;
}

function buildMobileFavoritesHtml(){
  let html = `<div class="mobile-section-title">Favorito por elemento</div>`;
  ELEMENTS.forEach(el => {
    const efKey = `elfav:${el.key}`;
    html += mobileCardHtml({
      mode:'elfav', el: el.key,
      sublabel: el.label, value: picks[efKey], color: el.color, star:true,
    });
  });
  html += `<div class="mobile-section-title">Favorito absoluto</div>`;
  const overallVal = picks['overall'];
  html += `<div class="mobile-card overall" data-mode="overall">
      <div class="mc-left"><span>
        <span class="mc-label">De todos los tiempos</span>
        <span class="mc-value ${overallVal ? '' : 'empty'}">${overallVal ? overallVal : 'Elegir favorito ★'}</span>
      </span></div>
      <span class="mc-arrow">›</span>
    </div>`;
  return html;
}

/* ---------------- Modal de selección ---------------- */

const overlay = document.getElementById('overlay');
const modalTitle = document.getElementById('modal-title');
const modalEyebrow = document.getElementById('modal-eyebrow');
const modalSearch = document.getElementById('modal-search');
const modalList = document.getElementById('modal-list');
const modalClearBtn = document.getElementById('modal-clear-pick');

let currentContext = null; // { mode, saga, el, pickKey, options, color }

function elLabel(key){ return ELEMENTS.find(e => e.key === key)?.label; }
function sagaLabel(key){ return SAGAS.find(s => s.key === key)?.label; }
function elColor(key){ return ELEMENTS.find(e => e.key === key)?.color; }

function openModal(ds){
  const mode = ds.mode;
  let options = [], title = '', eyebrow = '', pickKey = '', color = 'var(--gold)';

  if (mode === 'cell'){
    options = ROSTER[ds.saga][ds.el] || [];
    title = `Favorito de ${elLabel(ds.el)}`;
    eyebrow = `${sagaLabel(ds.saga)} · ${elLabel(ds.el)}`;
    pickKey = `${ds.saga}:${ds.el}`;
    color = elColor(ds.el);
  } else if (mode === 'sagafav'){
    options = rosterForSaga(ds.saga);
    title = `Favorito de ${sagaLabel(ds.saga)}`;
    eyebrow = 'Favorito de saga · entre tus elegidos';
    pickKey = `sagafav:${ds.saga}`;
  } else if (mode === 'elfav'){
    options = rosterForElement(ds.el);
    title = `Favorito de ${elLabel(ds.el)}`;
    eyebrow = 'Favorito de elemento · entre tus elegidos';
    pickKey = `elfav:${ds.el}`;
    color = elColor(ds.el);
  } else if (mode === 'overall'){
    options = rosterAll();
    title = 'Tu Skylander favorito de todos los tiempos';
    eyebrow = 'Favorito absoluto · entre tus favoritos por elemento';
    pickKey = 'overall';
  }

  const emptyMsg = mode === 'cell'
    ? 'No hay Skylanders disponibles aquí.'
    : 'Aún no has elegido ningún favorito en la cuadrícula para poder elegir aquí.';

  currentContext = { pickKey, options, color, emptyMsg };
  modalTitle.textContent = title;
  modalEyebrow.textContent = eyebrow;
  modalSearch.value = '';
  renderModalList(options, color);
  overlay.classList.add('open');
  setTimeout(() => modalSearch.focus(), 50);
}

function renderModalList(options, color){
  if (options.length === 0){
    const msg = currentContext.emptyMsg || 'No hay Skylanders disponibles aquí.';
    modalList.innerHTML = `<div class="no-results">${msg}</div>`;
    return;
  }
  modalList.innerHTML = options.map(name =>
    `<button data-name="${name.replace(/"/g,'&quot;')}">
      <span class="dot" style="background:${color}"></span>${name}
    </button>`
  ).join('');
  modalList.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      picks[currentContext.pickKey] = btn.dataset.name;
      savePicks();
      closeModal();
      render();
    });
  });
}

function closeModal(){
  overlay.classList.remove('open');
  currentContext = null;
}

modalSearch.addEventListener('input', () => {
  const q = modalSearch.value.trim().toLowerCase();
  const filtered = currentContext.options.filter(n => n.toLowerCase().includes(q));
  renderModalList(filtered, currentContext.color);
});

overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
modalClearBtn.addEventListener('click', () => {
  if (currentContext){
    delete picks[currentContext.pickKey];
    savePicks();
    closeModal();
    render();
  }
});

/* ---------------- Barra de herramientas ---------------- */

document.getElementById('btn-clear').addEventListener('click', () => {
  if (confirm('¿Vaciar toda tu selección?')){
    picks = {};
    savePicks();
    render();
  }
});

document.getElementById('btn-autofill').addEventListener('click', () => {
  SAGAS.forEach(saga => {
    ELEMENTS.forEach(el => {
      const key = `${saga.key}:${el.key}`;
      const available = ROSTER[saga.key][el.key] || [];
      if (available.length > 0 && !picks[key]){
        picks[key] = available[Math.floor(Math.random() * available.length)];
      }
    });
    const sfKey = `sagafav:${saga.key}`;
    if (!picks[sfKey]){
      const opts = rosterForSaga(saga.key);
      picks[sfKey] = opts[Math.floor(Math.random() * opts.length)];
    }
  });
  ELEMENTS.forEach(el => {
    const efKey = `elfav:${el.key}`;
    if (!picks[efKey]){
      const opts = rosterForElement(el.key);
      if (opts.length) picks[efKey] = opts[Math.floor(Math.random() * opts.length)];
    }
  });
  if (!picks['overall']){
    const opts = rosterAll();
    picks['overall'] = opts[Math.floor(Math.random() * opts.length)];
  }
  savePicks();
  render();
});

/* ---------------- Init ---------------- */
loadPicks();
