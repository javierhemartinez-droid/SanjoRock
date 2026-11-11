/* ==========================================================================
   SANJO ROCK — COMPORTAMIENTO
   Lee el contenido de content.js y se encarga de las animaciones.
   ========================================================================== */
(() => {
  'use strict';

  const D = window.SANJO;
  if (!D) return;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Crea elementos de forma segura (nada de innerHTML con contenido editable) */
  function el(tag, attrs, ...kids) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') n.className = v;
      else if (k === 'text') n.textContent = v;
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    }
    kids.flat().forEach(c => { if (c != null && c !== '') n.append(c.nodeType ? c : document.createTextNode(c)); });
    return n;
  }
  const reveal = (node, i = 0, step = 0.07) => { node.setAttribute('data-reveal', ''); node.style.setProperty('--d', (i * step).toFixed(2) + 's'); return node; };

  const TZ = 'America/Argentina/Buenos_Aires';
  const fmtDate = (iso, opts) => new Intl.DateTimeFormat('es-AR', { ...opts, timeZone: TZ }).format(new Date(iso + 'T12:00:00-03:00'));
  const fmtLong = iso => fmtDate(iso, { day: 'numeric', month: 'long', year: 'numeric' });
  const fmtShort = iso => fmtDate(iso, { day: 'numeric', month: 'short', year: 'numeric' }).replace(/\./g, '');

  /* Texto con marcado simple: **negrita**, *cursiva*, [texto](https://enlace). Todo se arma con nodos, sin innerHTML. */
  const INLINE = /\*\*(.+?)\*\*|\*(.+?)\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;
  function inline(text) {
    const out = []; let last = 0, m;
    INLINE.lastIndex = 0;
    while ((m = INLINE.exec(text))) {
      if (m.index > last) out.push(text.slice(last, m.index));
      if (m[1] != null) out.push(el('strong', {}, m[1]));
      else if (m[2] != null) out.push(el('em', {}, m[2]));
      else out.push(el('a', { href: m[4], target: '_blank', rel: 'noopener' }, m[3]));
      last = m.index + m[0].length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
  }

  const ICONS = {
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.4l.6-3.5H14V8.5z"/></svg>'
  };

  /* ---------- Textos generales ---------- */
  function renderText() {
    $('#introText').textContent = D.intro;
    $('#sponsText').textContent = D.sponsors.text;
    $('#adText').textContent = D.advertise.text;
    const cta = $('#adCta'); cta.textContent = D.advertise.cta || 'Reservá tu lugar'; cta.href = D.advertise.ctaUrl;
  }

  function renderMarquee() {
    const e = D.event;
    const parts = [e.entry, e.donation, `${e.dateLabel} · ${e.timeLabel}`, e.place, e.recognition].filter(Boolean);
    const seq = () => parts.map(t => el('span', { class: 'marquee__item' }, t, el('i')));
    const group = [...seq(), ...seq()];
    const track = $('#marquee');
    track.append(...group, ...group.map(n => n.cloneNode(true)));
  }

  function renderSocial() {
    const ul = $('#social');
    Object.entries(D.social).forEach(([key, s]) => {
      const a = el('a', { href: s.url, target: '_blank', rel: 'noopener', 'aria-label': key });
      a.insertAdjacentHTML('afterbegin', ICONS[key] || '');
      a.append(s.handle);
      ul.append(el('li', {}, a));
    });
  }

  /* ---------- Line up ---------- */
  function renderLineup() {
    const grid = $('#lineupGrid');
    D.lineup.forEach((b, i) => {
      const img = el('img', { src: b.logo, alt: b.name, loading: 'lazy' });
      let card;
      if (b.featured) {
        card = el('article', { class: 'band band--featured' }, img,
          el('div', { class: 'band__txt' },
            b.note ? el('span', { class: 'band__note', text: b.note }) : null,
            el('h3', { class: 'band__name', text: b.name }),
            b.time ? el('span', { class: 'band__time', text: b.time }) : null,
            b.post ? el('button', { class: 'band__link', type: 'button', onclick: () => openPost(b.post) }, 'Leer su historia →') : null));
      } else {
        card = el('article', { class: 'band' }, img,
          el('h3', { class: 'band__name', text: b.name }),
          b.time ? el('span', { class: 'band__time', text: b.time }) : null);
      }
      grid.append(reveal(card, i % 3, 0.09));
    });
  }

  /* ---------- Info ---------- */
  function renderInfo() {
    const e = D.event;
    const start = new Date(e.start);
    const weekday = new Intl.DateTimeFormat('es-AR', { weekday: 'long', timeZone: TZ }).format(start);
    const year = new Intl.DateTimeFormat('es-AR', { year: 'numeric', timeZone: TZ }).format(start);
    const grid = $('#infoGrid');
    let n = 0;
    const add = node => grid.append(reveal(node, n++ % 4));

    const tile = (label, value, sub, extra) => el('div', { class: 'tile' },
      el('span', { class: 'tile__label', text: label }),
      el('span', { class: 'tile__value', text: value }),
      sub ? el('span', { class: 'tile__sub', text: sub }) : null, extra);

    add(tile('Fecha', e.dateLabel, `${weekday.charAt(0).toUpperCase() + weekday.slice(1)} · ${year}`));
    add(tile('Hora', e.timeLabel, e.timeNote));
    add(tile('Lugar', e.place, e.city,
      e.mapsUrl ? el('a', { class: 'btn', href: e.mapsUrl, target: '_blank', rel: 'noopener', text: 'Cómo llegar' }) : null));

    add(el('div', { class: 'tile entry' },
      el('span', { class: 'entry__big', text: e.entry }),
      el('span', { class: 'entry__small', text: e.donation })));

    if (e.features && e.features.length) {
      const seal = e.recognition
        ? (e.recognitionPost
          ? el('button', { class: 'seal', type: 'button', onclick: () => openPost(e.recognitionPost) }, e.recognition, ' →')
          : el('span', { class: 'seal' }, e.recognition))
        : null;
      add(el('div', { class: 'tile feat' },
        el('span', { class: 'tile__label', text: 'Qué vas a encontrar' }),
        el('ul', { class: 'feat__list' }, e.features.map(f => el('li', { text: f }))),
        seal));
    }

    const evs = (D.events || []).slice().sort((x, y) => (x.date < y.date ? -1 : 1));
    if (evs.length) {
      const today = new Date().toLocaleDateString('en-CA', { timeZone: TZ });
      const next = evs.find(ev => ev.date >= today);
      add(el('div', { class: 'tile dates' },
        el('span', { class: 'tile__label', text: 'Fechas' }),
        el('ul', { class: 'dates__list' }, evs.map(ev => {
          const past = ev.date < today;
          return el('li', { class: 'date' + (past ? ' is-past' : '') + (ev === next ? ' is-next' : '') },
            el('span', { class: 'date__when' },
              el('b', { text: fmtDate(ev.date, { day: 'numeric' }) }),
              el('small', { text: fmtDate(ev.date, { month: 'short' }).replace('.', '') })),
            el('span', { class: 'date__txt' },
              el('strong', { text: ev.name }),
              el('span', { text: ev.place }),
              ev.note ? el('em', { text: ev.note }) : null),
            el('span', { class: 'date__tag' },
              ev === next ? 'Próxima fecha' : past ? 'Ya fue' : '',
              ev.post ? el('button', { class: 'date__link', type: 'button', onclick: () => openPost(ev.post) }, 'Leer la nota →') : null));
        }))));
    }
  }

  /* ---------- Novedades ---------- */
  const PAGE = 6;
  function renderBlog() {
    const filters = $('#filters'), grid = $('#postsGrid'), more = $('#postsMore');
    const cats = ['Todos', ...D.categories.filter(c => D.posts.some(p => p.cat === c))];
    const countOf = c => (c === 'Todos' ? D.posts.length : D.posts.filter(p => p.cat === c).length);
    let current = 'Todos', list = [], shown = 0;

    function card(p, i) {
      const cover = el('span', { class: 'post__cover' },
        p.cover ? el('img', { src: p.cover, alt: '', loading: 'lazy' }) : el('span', { class: 'script', 'aria-hidden': 'true', text: p.cat }));
      const c = el('button', { class: 'post', type: 'button', 'data-id': p.id, style: `--i:${i}` }, cover,
        el('span', { class: 'post__body' },
          el('span', { class: 'chip', text: p.cat }),
          el('span', { class: 'post__title', text: p.title }),
          el('span', { class: 'post__excerpt', text: p.excerpt }),
          el('span', { class: 'post__meta' }, el('span', { text: p.date ? fmtShort(p.date) : '' }), el('span', { class: 'post__more', text: 'Leer →' }))));
      c.addEventListener('click', () => openReader(p));
      return c;
    }
    function addMore() {
      const batch = list.slice(shown, shown + PAGE);
      batch.forEach((p, i) => grid.append(card(p, i)));
      shown += batch.length;
      const left = list.length - shown;
      more.hidden = left <= 0;
      if (left > 0) more.textContent = `Ver más notas (${left})`;
    }
    function draw() {
      grid.replaceChildren(); shown = 0;
      list = current === 'Todos' ? D.posts : D.posts.filter(p => p.cat === current);
      if (!list.length) { grid.append(el('p', { class: 'posts__empty', text: 'Todavía no hay notas en esta categoría.' })); more.hidden = true; return; }
      addMore();
    }

    more.addEventListener('click', addMore);
    cats.forEach(c => {
      const b = el('button', { class: 'chip-btn', type: 'button', 'aria-pressed': String(c === current) }, c, el('small', { text: String(countOf(c)) }));
      b.addEventListener('click', () => {
        current = c;
        $$('.chip-btn', filters).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
        draw();
      });
      filters.append(b);
    });
    draw();
  }

  /* ---------- Lector de notas ---------- */
  function block(b) {
    if (b && typeof b === 'object') {
      const btn = el('button', { class: 'fig__btn', type: 'button', 'aria-label': 'Ampliar imagen' }, el('img', { src: b.img, alt: b.alt || '', loading: 'lazy' }));
      btn.addEventListener('click', () => openLightbox(b.img, b.alt));
      return el('figure', { class: 'fig', style: b.max ? `max-width:${Number(b.max)}px` : null }, btn);
    }
    const sub = String(b).match(/^\*\*([^*]+)\*\*$/);
    if (sub) return el('h4', { class: 'reader__sub', text: sub[1] });
    if (/^\*[^*]+\*$/.test(b)) return el('p', { class: 'reader__cap' }, inline(b));
    return el('p', {}, inline(String(b)));
  }
  function openPost(id) { const p = D.posts.find(x => x.id === id); if (p) openReader(p); }
  function openReader(p) {
    const r = $('#reader');
    $('#readerCat').textContent = p.cat;
    $('#readerTitle').textContent = p.title;
    const dt = $('#readerDate'); dt.textContent = p.date ? fmtLong(p.date) : ''; dt.hidden = !p.date;
    const cover = $('#readerCover');
    cover.replaceChildren();
    cover.hidden = !p.cover;
    if (p.cover) {
      const z = el('button', { class: 'reader__zoom', type: 'button', 'aria-label': 'Ampliar imagen' }, el('img', { src: p.cover, alt: p.title }));
      z.addEventListener('click', () => openLightbox(p.cover, p.title));
      cover.append(z);
    }
    $('#readerLede').textContent = p.excerpt || '';
    $('#readerBody').replaceChildren(...(p.body || []).map(block));
    document.body.style.overflow = 'hidden';
    if (!r.open) r.showModal();
    r.scrollTop = 0;
  }
  function initReader() {
    const r = $('#reader');
    $('#readerClose').addEventListener('click', () => r.close());
    r.addEventListener('click', e => {
      if (e.target !== r) return;
      const b = r.getBoundingClientRect();
      if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) r.close();
    });
    r.addEventListener('close', () => { document.body.style.overflow = ''; });
  }

  /* ---------- Imagen ampliada ---------- */
  function openLightbox(src, alt) {
    const lb = $('#lightbox');
    const img = $('#lightboxImg'); img.src = src; img.alt = alt || '';
    document.body.style.overflow = 'hidden';
    if (!lb.open) lb.showModal();
  }
  function initLightbox() {
    const lb = $('#lightbox');
    lb.addEventListener('click', () => lb.close());
    lb.addEventListener('close', () => { if (!$('#reader').open) document.body.style.overflow = ''; });
  }

  /* ---------- Merch / Auspiciantes / Materiales ---------- */
  function renderMerch() {
    const m = D.merch;
    if (!m.items || !m.items.length) { const l = $('[data-optional="merch"]'); if (l) l.remove(); return; }
    $('#merch').hidden = false;
    $('#merchText').textContent = m.text;
    const grid = $('#merchGrid');
    m.items.forEach((it, i) => {
      const body = [
        it.image ? el('span', { class: 'item__img' }, el('img', { src: it.image, alt: it.name, loading: 'lazy' })) : null,
        el('span', { class: 'item__txt' },
          el('span', { class: 'item__name', text: it.name }),
          it.price ? el('span', { class: 'item__price', text: it.price }) : null)
      ];
      const card = it.url
        ? el('a', { class: 'item', href: it.url, target: '_blank', rel: 'noopener' }, body)
        : el('div', { class: 'item' }, body);
      grid.append(reveal(card, i % 4));
    });
  }

  function renderSponsors() {
    const S = D.sponsors;
    const grid = $('#sponsGrid');
    S.items.forEach((it, i) => {
      const img = el('img', { src: it.logo, alt: it.name, loading: 'lazy' });
      const bg = /^#[0-9a-f]{3,8}$/i.test(it.bg || '') ? it.bg : '#0d0d0d';
      const attrs = { class: 'sponsor', style: `--bg:${bg}`, title: it.name };
      const card = it.url
        ? el('a', { ...attrs, href: it.url, target: '_blank', rel: 'noopener', 'aria-label': it.name }, img)
        : el('div', attrs, img);
      grid.append(reveal(card, i % 6, 0.05));
    });
    const box = $('#partners');
    if (S.partners && S.partners.length) {
      box.append(
        el('p', { class: 'partners__label', text: S.partnersLabel || '' }),
        el('ul', { class: 'partners__list' }, S.partners.map(p =>
          el('li', {}, p.logo ? el('img', { src: p.logo, alt: p.name, loading: 'lazy' }) : el('span', { text: p.name })))));
      reveal(box);
    } else box.hidden = true;
  }

  function renderAdvertise() {
    const box = $('#adDeals');
    (D.advertise.groups || []).forEach((g, i) => {
      let flyer = null;
      if (g.flyer) {
        flyer = el('button', { class: 'deal__flyer', type: 'button', 'aria-label': 'Ampliar placa: ' + g.title },
          el('img', { src: g.flyer, alt: g.alt || g.title, loading: 'lazy' }), el('span', { text: 'Ver placa' }));
        flyer.addEventListener('click', () => openLightbox(g.flyer, g.alt || g.title));
      }
      const rows = (g.items || []).map(it => el('li', {},
        el('span', { class: 'prices__name' }, it.name, it.detail ? el('small', { text: it.detail }) : null),
        el('i', { 'aria-hidden': 'true' }),
        el('b', { text: it.price })));
      box.append(reveal(el('article', { class: 'deal' }, flyer,
        el('div', { class: 'deal__txt' },
          el('h3', { text: g.title }),
          g.sub ? el('p', { class: 'deal__sub', text: g.sub }) : null,
          el('ul', { class: 'prices' }, rows))), i, 0.12));
    });
  }

  function renderMaterials() {
    const m = D.materials;
    if (!m.items || !m.items.length) return;
    $('#materiales').hidden = false;
    $('#matText').textContent = m.text;
    const ul = $('#matList');
    m.items.forEach((it, i) => {
      const name = typeof it === 'string' ? it : it.name;
      const qty = typeof it === 'string' ? '' : it.qty;
      ul.append(el('li', { style: `--i:${i}` }, name, qty ? el('small', { text: qty }) : null));
    });
    const cta = $('#matCta'); cta.href = m.ctaUrl; if (m.cta) cta.textContent = m.cta;
  }

  /* ---------- Cuenta regresiva ---------- */
  function initCountdown() {
    const start = Date.parse(D.event.start);
    const end = start + (D.event.endsAfterHours || 12) * 3600e3;
    const box = $('#count'), done = $('#countDone'), script = $('#heroScript');
    const cells = { d: $('[data-u="d"]'), h: $('[data-u="h"]'), m: $('[data-u="m"]'), s: $('[data-u="s"]') };
    const pad = n => String(n).padStart(2, '0');

    function set(key, val) {
      const t = pad(val), n = cells[key];
      if (n.textContent === t) return;
      n.textContent = t;
      if (!reduce) { n.classList.remove('tick'); void n.offsetWidth; n.classList.add('tick'); }
    }

    function showState(ended) {
      box.hidden = true; done.hidden = false;
      done.replaceChildren(
        el('span', { class: 'script', 'aria-hidden': 'true', text: ended ? 'Estuve' : 'Hoy' }),
        el('span', { text: ended ? `Gracias por ser parte de ${D.event.name}` : `Es hoy · ${D.event.place}` }));
      if (ended && script) script.textContent = 'Estuve';
    }

    function tick() {
      const now = Date.now();
      if (now >= start) { showState(now >= end); return now < end; }
      let s = Math.floor((start - now) / 1000);
      set('d', Math.floor(s / 86400)); s %= 86400;
      set('h', Math.floor(s / 3600)); s %= 3600;
      set('m', Math.floor(s / 60)); set('s', s % 60);
      return true;
    }
    if (tick()) setInterval(tick, 1000);
  }

  /* ---------- Fondo glitch ---------- */
  function initBackground() {
    const cv = $('#bg');
    const ctx = cv.getContext('2d', { alpha: false });
    const CELL = 11;
    let cols, rows, base, img, glitches = [], nextGlitch = 0, timer = 0;

    const hash = (x, y) => {
      let h = Math.imul(x, 374761393) + Math.imul(y, 668265263);
      h = Math.imul(h ^ (h >>> 13), 1274126177);
      return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
    };
    const vnoise = (x, y) => {
      const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
      const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
      const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
      return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
    };

    function build() {
      cols = Math.ceil(innerWidth / CELL); rows = Math.ceil(innerHeight / CELL);
      cv.width = cols; cv.height = rows;
      img = ctx.createImageData(cols, rows);
      base = new Float32Array(cols * rows);
      for (let y = 0; y < rows; y++) {
        const top = Math.pow(Math.max(0, 1 - y / rows * 1.15), 1.4);
        for (let x = 0; x < cols; x++) {
          let n = 0.5 * vnoise(x * .07, y * .07) + 0.28 * vnoise(x * .2, y * .2) + 0.14 * vnoise(x * .55, y * .55) + 0.08 * vnoise(x * .3, y * .035);
          n = Math.min(1, Math.max(0, (n - .38) * 2.3));
          let v = n * (0.25 + 0.75 * top);
          if (hash(x + 91, y + 17) > .965) v += .25;
          base[y * cols + x] = Math.min(1, v);
        }
      }
    }

    function frame(t) {
      const data = img.data;
      const scroll = Math.floor(t / 1400) % rows;
      const flick = reduce ? 0 : 0.045;
      const off = new Int16Array(rows);
      const boost = new Float32Array(rows);
      glitches = glitches.filter(g => g.until > t);
      glitches.forEach(g => { for (let r = g.y; r < Math.min(rows, g.y + g.h); r++) { off[r] = g.dx; boost[r] = g.boost; } });
      for (let y = 0; y < rows; y++) {
        const sy = (y + scroll) % rows;
        for (let x = 0; x < cols; x++) {
          let sx = x + off[y]; sx = ((sx % cols) + cols) % cols;
          let v = base[sy * cols + sx] + boost[y] + (flick ? (Math.random() - .5) * flick : 0);
          v = v < 0 ? 0 : v > 1 ? 1 : v;
          const g = v * 255, i = (y * cols + x) * 4;
          data[i] = data[i + 1] = data[i + 2] = g; data[i + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
    }

    function loop(t) {
      if (!document.hidden) {
        if (t > nextGlitch) {
          const n = 3 + Math.floor(Math.random() * 6);
          for (let i = 0; i < n; i++) glitches.push({
            y: Math.floor(Math.random() * rows), h: 1 + Math.floor(Math.random() * 7),
            dx: (Math.random() < .5 ? -1 : 1) * (2 + Math.floor(Math.random() * 16)),
            boost: Math.random() < .35 ? .22 : 0, until: t + 120 + Math.random() * 260
          });
          nextGlitch = t + 1800 + Math.random() * 3800;
        }
        frame(t);
      }
      timer = setTimeout(() => requestAnimationFrame(loop), 80);
    }

    build();
    if (reduce) { frame(0); }
    else { requestAnimationFrame(loop); }
    let rz;
    addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { build(); if (reduce) frame(0); }, 200); });
  }

  /* ---------- Revelado al scrollear ---------- */
  function initReveal() {
    const items = $$('[data-reveal]');
    /* La portada siempre se revela al cargar, aunque parte quede bajo el pliegue */
    $$('.hero [data-reveal]').forEach(n => requestAnimationFrame(() => n.classList.add('is-in')));
    if (!('IntersectionObserver' in window)) { items.forEach(n => n.classList.add('is-in')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(n => io.observe(n));
  }

  /* ---------- Nav ---------- */
  function initNav() {
    const nav = $('#nav'), toggle = $('#menuToggle');
    let lastY = 0;
    addEventListener('scroll', () => {
      const y = scrollY;
      nav.classList.toggle('is-scrolled', y > 12);
      if (!nav.classList.contains('is-open')) nav.classList.toggle('is-hidden', y > lastY && y > 160);
      lastY = y;
    }, { passive: true });

    const setOpen = open => {
      if (nav.classList.contains('is-open') === open) return;
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    $$('.nav__links a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });

    const links = new Map($$('.nav__links a').map(a => [a.getAttribute('href').slice(1), a]));
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          const a = links.get(e.target.id);
          if (a && e.isIntersecting) { links.forEach(l => l.classList.remove('is-active')); a.classList.add('is-active'); }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      links.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
    }
  }

  /* ---------- Parallax (puntero y scroll) y tilt ---------- */
  function initMotion() {
    if (reduce) return;

    if (finePointer) {
      const layers = $$('[data-depth]');
      let tx = 0, ty = 0, cx = 0, cy = 0, running = false;
      const step = () => {
        cx += (tx - cx) * .08; cy += (ty - cy) * .08;
        layers.forEach(n => {
          const d = parseFloat(n.dataset.depth) || 0;
          n.style.setProperty('--tx', (cx * d).toFixed(2) + 'px');
          n.style.setProperty('--ty', (cy * d).toFixed(2) + 'px');
        });
        if (Math.abs(tx - cx) > .001 || Math.abs(ty - cy) > .001) requestAnimationFrame(step); else running = false;
      };
      addEventListener('pointermove', e => {
        tx = e.clientX / innerWidth * 2 - 1; ty = e.clientY / innerHeight * 2 - 1;
        if (!running) { running = true; requestAnimationFrame(step); }
      }, { passive: true });

      $$('.band').forEach(card => {
        card.addEventListener('pointermove', e => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 7 + 'deg');
          card.style.setProperty('--rx', ((e.clientY - r.top) / r.height - .5) * -7 + 'deg');
        });
        card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
      });
    }

    const words = $$('.sec-head__script');
    let ticking = false;
    const onScroll = () => {
      ticking = false;
      words.forEach(w => {
        const r = w.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > innerHeight + 200) return;
        w.style.setProperty('--ty', ((r.top + r.height / 2 - innerHeight / 2) * -.14).toFixed(1) + 'px');
      });
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  }

  /* ---------- Arranque ---------- */
  renderText();
  renderMarquee();
  renderLineup();
  renderInfo();
  renderBlog();
  renderMerch();
  renderSponsors();
  renderAdvertise();
  renderMaterials();
  renderSocial();
  initReader();
  initLightbox();
  initCountdown();
  initBackground();
  initNav();
  initReveal();
  initMotion();
})();
