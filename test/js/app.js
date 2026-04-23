// ═══════════════════════════════════════════════════════════════════════════
//  One Dollar Guy — MAIN APP
//  Handles language selection, donation flow, counter, popups, FAQ, sharing.
//
//  Překlady leží v /i18n/*.json. Čeština (cs.json) je zdroj pravdy a fallback.
//  Každá země má svůj vlastní xx.json — platební brány a měnu si diktuje sama.
//
//  Co se NEPŘEKLÁDÁ nikdy: "ONE DOLLAR GUY", "FAQ", "#PER ASPERA AD ASTRA",
//  názvy sociálních sítí (Instagram, X, Facebook, WhatsApp) a názvy platebních
//  bran (PayPal, Apple Pay, Google Pay, …). Tyto názvy jsou napevno v HTML,
//  resp. v poli `methods` v každém .json (kde u nepřekládaných je `name`
//  stejné napříč jazyky).
// ═══════════════════════════════════════════════════════════════════════════

const GOAL = 8200000000;

// runtime state
let lang     = 'cs';
let amt      = 1;
let pay      = 'card';
let donCount = 12847;

// in-memory caches: { cs: {...}, en: {...}, ... }
const T        = {};   // ui strings
const FAQ      = {};   // faq arrays
const PAYMENT  = {};   // payment config (currency, symbol, methods, …)
const langPromises = {};   // de-dupe concurrent loads of the same file

// Minimální "nouzové" defaulty — používají se, jen kdyby selhal i cs.json.
// Díky tomu se stránka nerozbije ani bez překladového souboru.
const FALLBACK = {
    cur: 'USD', sym: '$', pre: true, a: [1, 5, 10],
    ey: '', h1a: 'Give me', h1b: 'one', h1c: 'dollar.',
    tag: '', sub: '',
    meta: 'people so far', pct: '{p}% of humanity',
    sl1: 'Donors', sl2: 'Countries', sl3: 'Today',
    s1: 'Pick an amount', c1: 'USD · classic', c5: 'USD · middle', c10: 'USD · hero',
    co: '∞', coc: 'your call',
    s2: 'Choose payment method',
    s3: 'Leave a message', msghint: '',
    s4: 'Send', legal: 'It\'s a gift. <span class="tl" onclick="openT(event)">Read terms.</span>',
    btn: 'Send {a}', sec: 'Secure payment',
    sTitle: 'Thank you.', sSub: '',
    abt: '', ap1: '', ap2: '', ap3: '', ap4: '', ap5: '',
    badge: 'Anonymous', tmt: 'Terms', ft: '© onedollarguy.com',
    // new keys
    nav_lang: 'language', nav_share: 'share',
    share_title: 'Share', close_title: 'Close',
    astra_q: '?what does it mean?',
    astra_a: '„through hardships<br>to the stars"',
    kontakt_btn: 'contact',
    kontakt_msg: 'I prefer to stay anonymous — if you still want to reach out, here is my email:',
    share_tweet: 'I just gave a dollar to One Dollar Guy. 8.2 billion to go. {url} Join in!',
    ft_privacy: 'Privacy', ft_soon: '(soon)'
};

const FALLBACK_METHODS = [
    { id: 'card',     icon: '💳', name: 'Card' },
    { id: 'transfer', icon: '🏦', name: 'Transfer' }
];

// ── i18n loading ─────────────────────────────────────────────────────────────

// Načte xx.json. Vrací vždy Promise<object|null> (nikdy netrhá).
// - deduplikuje souběžná volání pro stejný kód
// - při síťové chybě udělá jeden retry po 400 ms
function loadLang(code) {
    if (T[code]) return Promise.resolve(T[code]);
    if (langPromises[code]) return langPromises[code];

    langPromises[code] = (async () => {
        const url = `i18n/${code}.json`;
        for (let attempt = 1; attempt <= 2; attempt++) {
            try {
                const res = await fetch(url, { cache: 'no-cache' });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const data = await res.json();
                T[code]       = data.ui      || {};
                FAQ[code]     = data.faq     || [];
                PAYMENT[code] = data.payment || {};
                return T[code];
            } catch (e) {
                console.warn(`[i18n] load ${code}.json attempt ${attempt} failed:`, e);
                if (attempt < 2) await new Promise(r => setTimeout(r, 400));
            }
        }
        // smažeme promise, aby příští pokus mohl zkusit znovu
        delete langPromises[code];
        return null;
    })();

    return langPromises[code];
}

// preload Czech on boot — it is our fallback base
async function bootI18n() {
    await loadLang('cs');
}

// ── language switch ──────────────────────────────────────────────────────────

async function go(l) {
    // make sure base (cs) is loaded — pokud selhalo, apply() použije FALLBACK
    if (!T.cs) await loadLang('cs');
    // try to load requested lang; if it fails, zůstaneme u cs
    if (l !== 'cs') await loadLang(l);

    lang = T[l] ? l : 'cs';

    document.getElementById('lang-screen').style.display = 'none';
    document.getElementById('page').style.display = 'block';
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';

    // Při přepnutí jazyka MUSÍME vynulovat formulář — hlavně checkbox souhlasu
    // s podmínkami. Uživatel ho v novém jazyce musí potvrdit znovu, protože
    // podmínky vidí v jiné jazykové verzi.
    resetForm();

    apply();
    animCtr();
    document.getElementById('clbl').textContent = lang.toUpperCase();
}

// Merged translation object: FALLBACK ← cs ← selected lang.
// Díky FALLBACK nikdy nevrátí prázdno, i kdyby se nic nenačetlo.
function tr() {
    return Object.assign({}, FALLBACK, T.cs || {}, T[lang] || {});
}

// Vrátí platební metody pro aktuální jazyk (s fallbackem na cs a pak na default).
function paymentMethods() {
    const p = PAYMENT[lang] || PAYMENT.cs || {};
    const m = Array.isArray(p.methods) ? p.methods : null;
    // Starý formát ["card","transfer"] → přepočet na objekty (zpětná kompatibilita)
    if (m && m.length && typeof m[0] === 'string') {
        return m.map(id => ({ id, icon: '', name: id }));
    }
    return m && m.length ? m : FALLBACK_METHODS;
}

// ── apply translations to DOM ───────────────────────────────────────────────

function setText(id, val) {
    const el = document.getElementById(id);
    if (el && val != null) el.textContent = val;
}
function setHtml(id, val) {
    const el = document.getElementById(id);
    if (el && val != null) el.innerHTML = val;
}
function setTitle(id, val) {
    const el = document.getElementById(id);
    if (el && val != null) el.title = val;
}

function apply() {
    const t = tr();

    setText('eyebrow-t', t.ey);
    applyFaq(lang);

    setText('h1a', t.h1a);
    setText('h1b', t.h1b);
    setText('h1c', t.h1c);
    setHtml('hero-sub', t.sub);
    setHtml('hero-tag', t.tag);

    // amounts in current currency
    const a = Array.isArray(t.a) ? t.a : FALLBACK.a;
    setText('av1',  a[0]);
    setText('av5',  a[1]);
    setText('av10', a[2]);
    setText('lc1',  t.cur + ' · ' + (t.c1  ? (t.c1.split('·')[1]  || 'classic').trim() : 'classic'));
    setText('lc5',  t.cur + ' · ' + (t.c5  ? (t.c5.split('·')[1]  || 'middle').trim()  : 'middle'));
    setText('lc10', t.cur + ' · ' + (t.c10 ? (t.c10.split('·')[1] || 'hero').trim()    : 'hero'));
    setText('lcoc', t.coc);
    setText('csym', t.sym);
    amt = a[0];

    // counter
    setText('cmeta', t.meta);
    setText('cpct',  (t.pct || '').replace('{p}', ((donCount / GOAL) * 100).toFixed(5)));
    setText('sdon',  donCount.toLocaleString());
    setText('sl1', t.sl1);
    setText('sl2', t.sl2);
    setText('sl3', t.sl3);

    // sections
    setText('s1t', t.s1);
    setText('s2t', t.s2);
    setText('s3t', t.s3);
    setText('s4t', t.s4);

    // payment grid — generujeme dynamicky z dat aktuálního jazyka
    renderPaymentMethods();

    setText('msghint', t.msghint);
    setHtml('ltxt',    t.legal);
    setText('csub',    t.sec);

    setText('stit',  t.sTitle);
    setText('ssub',  t.sSub);
    setText('abtit', t.abt);

    setHtml('ap1', t.ap1);
    setText('ap2', t.ap2);
    setText('ap3', t.ap3);
    setHtml('ap4', t.ap4);
    setText('ap5', t.ap5);

    setText('tmtit', t.tmt);
    setText('ftxt',  t.ft);

    // nav
    setText('nav-lang',  t.nav_lang);
    setText('nav-share', t.nav_share);
    setTitle('nav-share-btn', t.share_title);

    // success close button tooltip
    setTitle('succ-close-btn', t.close_title);

    // astra popup (obsah se PŘEKLÁDÁ; samotný nápis #PER ASPERA AD ASTRA zůstává latinsky)
    setText('astra-q', t.astra_q);
    setHtml('astra-a', t.astra_a);

    // kontakt
    setText('kontakt-btn-text', t.kontakt_btn);
    setHtml('kontakt-msg',      t.kontakt_msg);

    // footer odkazy (sociální sítě zůstávají napevno, "(soon)" a odkazy Terms/Privacy se překládají)
    setText('fttr',    t.tmt);         // "Terms"
    setText('ftpr',    t.ft_privacy);  // "Privacy"
    setText('ft-soon', t.ft_soon);     // "(soon)"

    // Privacy modal title
    setText('pmtit', t.pmt);

    updBtn();
}

// ── payment methods rendering ───────────────────────────────────────────────

function renderPaymentMethods() {
    const grid = document.getElementById('pgrid');
    if (!grid) return;
    const methods = paymentMethods();

    // Pokud stávající vybraná metoda není v seznamu nové země, přepneme na první.
    const ids = methods.map(m => m.id);
    if (!ids.includes(pay)) pay = ids[0] || 'card';

    grid.innerHTML = '';
    methods.forEach(m => {
        const btn = document.createElement('button');
        btn.className = 'pt' + (m.id === pay ? ' on' : '');
        btn.setAttribute('data-p', m.id);
        btn.addEventListener('click', () => pickPay(m.id, btn));

        const icon = document.createElement('span');
        icon.className = 'pi';
        icon.textContent = m.icon || '';
        btn.appendChild(icon);

        const label = document.createElement('span');
        label.className = 'pl';
        label.textContent = m.name || m.id;
        btn.appendChild(label);

        grid.appendChild(btn);
    });
}

// ── legal documents (Terms, Privacy) ────────────────────────────────────────
//
//  Právní texty jsou UNIVERZÁLNÍ napříč zeměmi — leží v /legal/*.md jako jeden
//  markdown soubor na dokument, obsahující obě jazykové verze (EN + CS).
//  Na kliknutí tlačítka se soubor lazy-loadne, rozdělí na jazykové sekce a
//  vykreslí se ta, která odpovídá aktuálnímu jazyku (CS pro češtinu, jinak EN).
//
//  Tlačítko / popisek / titulek modálu se ale překládá normálně přes klíče
//  `tmt` (Terms) a `pmt` (Privacy).

const LEGAL_CACHE = {};   // { "terms:en": "<html…>", "terms:cs": "<html…>", … }
const LEGAL_FILES = { terms: 'legal/terms.md', privacy: 'legal/privacy.md' };

// Markery, podle kterých poznáme začátek jazykové sekce v MD souboru.
// Pokud se v dokumentu změní emoji/formulace, stačí upravit sem.
const LEGAL_EN_MARK = '# 🇬🇧 ENGLISH VERSION';
const LEGAL_CS_MARK = '# 🇨🇿 ČESKÁ VERZE';
const LEGAL_END_MARK = '**End of document / Konec dokumentu**';

// Vrátí kód jazyka, ve kterém text ukážeme: cs, když se stránka překládá do
// češtiny; pro všechny ostatní jazyky použijeme angličtinu.
function legalLangFor(l) {
    return l === 'cs' ? 'cs' : 'en';
}

// Z celého MD dokumentu vytáhne jen sekci daného jazyka (bez preambule a bez
// vývojářského ⚠️ bloku). Vrací string (markdown bez obalu).
function extractLangSection(md, wantLang) {
    const iEn = md.indexOf(LEGAL_EN_MARK);
    const iCs = md.indexOf(LEGAL_CS_MARK);
    if (iEn < 0 || iCs < 0) return md; // fallback – struktura nesedí, ukážeme vše

    const enText = md.slice(iEn + LEGAL_EN_MARK.length, iCs);
    let csText = md.slice(iCs + LEGAL_CS_MARK.length);
    const iEnd = csText.indexOf(LEGAL_END_MARK);
    if (iEnd >= 0) csText = csText.slice(0, iEnd);

    return (wantLang === 'cs' ? csText : enText).trim();
}

// Mini markdown → HTML parser. Schválně jen to, co je v našich právních textech:
//   # / ## / ###, **tučné**, odrážky "- …", tabulky "| a | b |", vodorovné čáry
//   "---", odstavce, automatické odkazy http(s):// a mailto:.
//   Blockquotes "> …" se ZAHAZUJÍ (v originále slouží jen jako poznámka pro autora).
function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function mdInline(s) {
    s = escHtml(s);
    // bold **…**
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // italic *…* (mírná podpora; v těchto textech se moc nevyskytuje)
    s = s.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
    // auto-link url
    s = s.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
    // auto-link email (jen když není už v <a>)
    s = s.replace(/(?<!["'>])\b([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})\b/g, '<a href="mailto:$1">$1</a>');
    return s;
}

function mdToHtml(md) {
    const lines = md.split(/\r?\n/);
    const out = [];
    let i = 0;
    let inList = false;
    let para = [];

    const flushPara = () => {
        if (!para.length) return;
        out.push('<p class="mp">' + para.map(mdInline).join(' ') + '</p>');
        para = [];
    };
    const flushList = () => {
        if (inList) { out.push('</ul>'); inList = false; }
    };

    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();

        // Přeskočíme vývojářské "> ⚠️" bloky — všechno, co začíná ">".
        if (trimmed.startsWith('>')) { flushPara(); flushList(); i++; continue; }

        // Prázdný řádek → konec odstavce/seznamu.
        if (trimmed === '') { flushPara(); flushList(); i++; continue; }

        // Vodorovná čára.
        if (trimmed === '---' || trimmed === '***') {
            flushPara(); flushList();
            out.push('<hr>'); i++; continue;
        }

        // Nadpisy.
        const h = /^(#{1,6})\s+(.+)$/.exec(trimmed);
        if (h) {
            flushPara(); flushList();
            const lvl = Math.min(h[1].length, 4);
            // h1 vypadá v modálu obrovský – posuneme všechno o 1 níž
            const tag = 'h' + Math.min(lvl + 1, 5);
            out.push(`<${tag} class="ml-h${lvl}">${mdInline(h[2])}</${tag}>`);
            i++; continue;
        }

        // Tabulka – detekujeme sekvenci řádků `| … | … |`.
        if (/^\|.*\|$/.test(trimmed)) {
            flushPara(); flushList();
            const rows = [];
            while (i < lines.length && /^\|.*\|$/.test(lines[i].trim())) {
                rows.push(lines[i].trim());
                i++;
            }
            // Druhý řádek je separátor `|---|---|` – použije se jen k rozlišení hlavičky.
            const hasHeader = rows.length >= 2 && /^\|[\s:|-]+\|$/.test(rows[1]);
            out.push('<table class="ml-tbl"><tbody>');
            rows.forEach((r, idx) => {
                if (hasHeader && idx === 1) return;
                const cells = r.slice(1, -1).split('|').map(c => c.trim());
                const tag = (hasHeader && idx === 0) ? 'th' : 'td';
                out.push('<tr>' + cells.map(c => `<${tag}>${mdInline(c)}</${tag}>`).join('') + '</tr>');
            });
            out.push('</tbody></table>');
            continue;
        }

        // Odrážky.
        if (/^-\s+/.test(trimmed)) {
            flushPara();
            if (!inList) { out.push('<ul class="ml-ul">'); inList = true; }
            out.push('<li>' + mdInline(trimmed.replace(/^-\s+/, '')) + '</li>');
            i++; continue;
        }

        // Běžný odstavec – sbíráme do pole, dokud nepřijde prázdný řádek.
        flushList();
        para.push(trimmed);
        i++;
    }
    flushPara(); flushList();
    return out.join('\n');
}

async function loadLegal(doc) {
    const l = legalLangFor(lang);
    const key = `${doc}:${l}`;
    if (LEGAL_CACHE[key]) return LEGAL_CACHE[key];

    const url = LEGAL_FILES[doc];
    if (!url) return null;

    for (let attempt = 1; attempt <= 2; attempt++) {
        try {
            const res = await fetch(url, { cache: 'no-cache' });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const md = await res.text();
            const sec = extractLangSection(md, l);
            const html = mdToHtml(sec);
            LEGAL_CACHE[key] = html;
            return html;
        } catch (e) {
            console.warn(`[legal] load ${url} attempt ${attempt} failed:`, e);
            if (attempt < 2) await new Promise(r => setTimeout(r, 400));
        }
    }
    return null;
}

async function showLegal(doc, bodyId) {
    const body = document.getElementById(bodyId);
    if (!body) return;
    const t = tr();
    body.innerHTML = `<p class="mp">${t.legal_loading || 'Loading…'}</p>`;
    const html = await loadLegal(doc);
    body.innerHTML = html || `<p class="mp">${t.legal_error || 'Could not load document.'}</p>`;
}

// ── counter animation + idle ticker ─────────────────────────────────────────

function animCtr() {
    const bar = document.getElementById('cbar');
    setTimeout(() => bar.style.width = Math.min((donCount / GOAL) * 100 * 1000000, 100) + '%', 400);

    let cur = 0;
    const step = Math.ceil(donCount / 80);
    const iv = setInterval(() => {
        cur = Math.min(cur + step, donCount);
        document.getElementById('camt').textContent = cur.toLocaleString();
        if (cur >= donCount) clearInterval(iv);
    }, 14);

    setInterval(() => {
        if (Math.random() < .5) {
            const add = Math.floor(Math.random() * 3) + 1;
            donCount += add;
            document.getElementById('camt').textContent = donCount.toLocaleString();
            document.getElementById('sdon').textContent = donCount.toLocaleString();
            const t = tr();
            document.getElementById('cpct').textContent = (t.pct || '').replace('{p}', ((donCount / GOAL) * 100).toFixed(5));
            const td = document.getElementById('stoday');
            td.textContent = '+' + (parseInt(td.textContent.replace('+', '')) + add);
        }
    }, 3500);
}

// ── donation flow: amount / payment / message / submit ──────────────────────

function pickAmt(a, el) {
    document.querySelectorAll('.ab').forEach(b => b.classList.remove('on'));
    el.classList.add('on');
    const cr = document.getElementById('crow');
    if (a === 'custom') {
        amt = '?';
        cr.classList.add('on');
        document.getElementById('cinp').focus();
    } else {
        const t = tr();
        const idx = [1, 5, 10].indexOf(a);
        amt = idx >= 0 ? t.a[idx] : a;
        cr.classList.remove('on');
    }
    updBtn();
}

function custCh() {
    const v = parseFloat(document.getElementById('cinp').value);
    amt = isNaN(v) || v < .5 ? '?' : v;
    updBtn();
}

function pickPay(p, el) {
    document.querySelectorAll('.pt').forEach(b => b.classList.remove('on'));
    if (el) el.classList.add('on');
    pay = p;
}

function updBtn() {
    const t  = tr();
    const ok = document.getElementById('lcb').checked && amt !== '?';
    document.getElementById('cbtn').disabled = !ok;
    const display = amt === '?' ? '?' : (t.pre ? t.sym + ' ' + amt : amt + ' ' + t.sym);
    document.getElementById('cbtn-t').textContent = (t.btn || 'Send {a}').replace('{a}', display);
}

function updMsgHint() {
    document.getElementById('msgcount').textContent = document.getElementById('msg').value.length;
}

function openT(e) {
    if (e) e.preventDefault();
    document.getElementById('tmod').classList.add('on');
    showLegal('terms', 'tmbody');
}

function openP(e) {
    if (e) e.preventDefault();
    document.getElementById('pmod').classList.add('on');
    showLegal('privacy', 'pmbody');
}

// Kompletní reset vizuálního stavu stránky.
// Volá se při přepnutí jazyka — uživatel má vidět stránku tak, jak ji poprvé
// vidí po načtení: formulář vynulovaný, FAQ zavřené, žádné modály otevřené,
// scroll na začátku.
function resetForm() {
    // ── formulář ─────────────────────────────────────────────────────────────

    // legal checkbox — KRITICKÉ: uživatel musí znovu potvrdit v novém jazyce
    const lcb = document.getElementById('lcb');
    if (lcb) lcb.checked = false;

    // vyčistit zprávu
    const msg = document.getElementById('msg');
    if (msg) msg.value = '';
    const mc = document.getElementById('msgcount');
    if (mc) mc.textContent = '0';

    // vyčistit custom částku + schovat jeho řádek
    const cinp = document.getElementById('cinp');
    if (cinp) cinp.value = '';
    const crow = document.getElementById('crow');
    if (crow) crow.classList.remove('on');

    // zrušit zvýraznění u tlačítek částek a platebních metod
    document.querySelectorAll('.ab.on, .pt.on').forEach(b => b.classList.remove('on'));
    // první přednastavená částka je výchozí (apply() k ní nastaví i amt = a[0])
    const firstAb = document.querySelector('.ab.a1');
    if (firstAb) firstAb.classList.add('on');

    // submit button – zpátky zobrazený, ale zakázaný (čeká na částku + checkbox)
    const cbtn = document.getElementById('cbtn');
    if (cbtn) {
        cbtn.style.display = '';
        cbtn.disabled = true;
    }

    // úspěšný stav (pokud visel z předchozí platby) zavřít
    const succ = document.getElementById('succ');
    if (succ) succ.classList.remove('on');

    // ── FAQ ──────────────────────────────────────────────────────────────────
    // Zavřít všechny rozkliklé otázky (odstranit třídu .open).
    document.querySelectorAll('.faq-item.open, [id^="faq"].open').forEach(el => el.classList.remove('open'));

    // ── modály a popupy ──────────────────────────────────────────────────────
    // Terms a Privacy modály.
    ['tmod', 'pmod'].forEach(id => {
        const m = document.getElementById(id);
        if (m) m.classList.remove('on');
    });
    // Kontakt a Astra popupy (mají zvlášť overlay + pop).
    ['kontakt-pop', 'kontakt-ov', 'astra-pop', 'astra-ov'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('on');
    });

    // ── scroll ───────────────────────────────────────────────────────────────
    // Na začátek stránky, ať uživatel vidí web od hlavičky.
    try { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }
    catch (e) { window.scrollTo(0, 0); }

    updBtn();
}

function doSubmit() {
    if (!document.getElementById('lcb').checked) return;
    document.getElementById('cbtn').disabled = true;
    document.getElementById('cbtn-t').textContent = '⏳';
    setTimeout(() => {
        donCount++;
        document.getElementById('camt').textContent = donCount.toLocaleString();
        document.getElementById('sdon').textContent = donCount.toLocaleString();
        document.getElementById('cbtn').style.display = 'none';
        document.getElementById('succ').classList.add('on');
        document.getElementById('succ').scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (window.launchConfetti) launchConfetti();
    }, 1400);
}

// ── misc UI ──────────────────────────────────────────────────────────────────

function toast(m) {
    const t = document.getElementById('toast');
    t.textContent = m;
    t.classList.add('on');
    setTimeout(() => t.classList.remove('on'), 2800);
}

function share(p) {
    const url = 'https://onedollarguy.com';
    if (p === 'native') {
        // Nav button — share URL only (no text to avoid encoding issues)
        if (navigator.share) {
            navigator.share({ title: 'One Dollar Guy', url: url }).catch(() => {});
        } else {
            navigator.clipboard && navigator.clipboard.writeText(url);
        }
        return;
    }
    // Success window buttons — full localized text
    const t = tr();
    const successTxt = (t.share_tweet || FALLBACK.share_tweet).replace('{url}', url);
    const urls = {
        x:  `https://twitter.com/intent/tweet?text=${encodeURIComponent(successTxt)}`,
        ig: `https://www.instagram.com/`,
        fb: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(successTxt)}`,
        wa: `https://wa.me/?text=${encodeURIComponent(successTxt)}`
    };
    window.open(urls[p], '_blank');
}

// ── popups ───────────────────────────────────────────────────────────────────

function openKontakt() {
    document.getElementById('kontakt-pop').classList.add('on');
    document.getElementById('kontakt-ov').classList.add('on');
}
function closeKontakt() {
    document.getElementById('kontakt-pop').classList.remove('on');
    document.getElementById('kontakt-ov').classList.remove('on');
}
function openAstra() {
    document.getElementById('astra-pop').classList.add('on');
    document.getElementById('astra-ov').classList.add('on');
}
function closeAstra() {
    document.getElementById('astra-pop').classList.remove('on');
    document.getElementById('astra-ov').classList.remove('on');
}

// ── FAQ ──────────────────────────────────────────────────────────────────────

function toggleFaq(i) {
    const item = document.getElementById('faq' + i);
    item.classList.toggle('open');
}

function applyFaq(l) {
    const items = FAQ[l] || FAQ.cs || [];
    items.forEach(function(qa, i) {
        const q = document.getElementById('faqq' + i);
        const a = document.getElementById('faqa' + i);
        if (q) q.textContent = qa[0];
        if (a) a.innerHTML   = qa[1];
    });
}

// ── nav buttons ──────────────────────────────────────────────────────────────

function goToLangScreen() {
    document.getElementById('lang-screen').style.display = 'flex';
    document.getElementById('page').style.display = 'none';
}

// ── boot ─────────────────────────────────────────────────────────────────────

// Kick off Czech preload immediately so it's warm when the user clicks a flag.
bootI18n();
