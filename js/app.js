// ═══════════════════════════════════════════════════════════════════════════
//  One Dollar Guy — MAIN APP
//  Handles language selection, donation flow, counter, popups, FAQ, sharing.
//
//  Translations live in /i18n/*.json. Czech (cs.json) is the source of truth
//  (= "výchozí jazyk"). If a requested language file is missing or fails to
//  load, the UI falls back to cs.json.
// ═══════════════════════════════════════════════════════════════════════════

const GOAL = 8200000000;

// runtime state
let lang     = 'cs';
let amt      = 1;
let pay      = 'card';
let donCount = 12847;

// in-memory translation cache: { cs: {...}, en: {...}, ... }
const T   = {};
const FAQ = {};

// ── i18n loading ─────────────────────────────────────────────────────────────

// fetch a single JSON file; returns null on failure
async function loadLang(code) {
    if (T[code]) return T[code]; // cached
    try {
        const res = await fetch(`i18n/${code}.json`, { cache: 'no-cache' });
        if (!res.ok) return null;
        const data = await res.json();
        T[code]   = data.ui  || data;        // main UI strings
        FAQ[code] = data.faq || [];          // FAQ array
        return T[code];
    } catch (e) {
        console.warn(`[i18n] Failed to load ${code}.json:`, e);
        return null;
    }
}

// preload Czech on boot — it is our fallback base
async function bootI18n() {
    await loadLang('cs');
}

// ── language switch ──────────────────────────────────────────────────────────

async function go(l) {
    // make sure base (cs) is loaded
    if (!T.cs) await loadLang('cs');
    // try to load requested lang; if it fails, stay with cs
    if (l !== 'cs') await loadLang(l);

    lang = T[l] ? l : 'cs';

    document.getElementById('lang-screen').style.display = 'none';
    document.getElementById('page').style.display = 'block';
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';

    apply();
    animCtr();
    document.getElementById('clbl').textContent = lang.toUpperCase();
}

// merged translation object: cs (base) overridden by selected lang
function tr() {
    return { ...(T.cs || {}), ...(T[lang] || {}) };
}

// ── apply translations to DOM ───────────────────────────────────────────────

function apply() {
    const t = tr();
    const s = id => document.getElementById(id);

    s('eyebrow-t').textContent = t.ey;
    applyFaq(lang);

    s('h1a').textContent = t.h1a;
    s('h1b').textContent = t.h1b;
    s('h1c').textContent = t.h1c;
    s('hero-sub').innerHTML = t.sub;
    if (s('hero-tag') && t.tag) s('hero-tag').innerHTML = t.tag;

    // amounts in current currency
    s('av1').textContent  = t.a[0];
    s('av5').textContent  = t.a[1];
    s('av10').textContent = t.a[2];
    s('lc1').textContent  = t.cur + ' · ' + (t.c1 ? (t.c1.split('·')[1] || 'classic') : 'classic').trim();
    s('lc5').textContent  = t.cur + ' · ' + (t.c5 ? (t.c5.split('·')[1] || 'coffee')  : 'coffee').trim();
    s('lc10').textContent = t.cur + ' · ' + (t.c10 ? (t.c10.split('·')[1] || 'hero')  : 'hero').trim();
    s('lcoc').textContent = t.coc || 'your call';
    s('csym').textContent = t.sym;
    amt = t.a[0];

    // counter
    s('cmeta').textContent = t.meta;
    s('cpct').textContent  = t.pct.replace('{p}', ((donCount / GOAL) * 100).toFixed(5));
    s('sdon').textContent  = donCount.toLocaleString();
    s('sl1').textContent   = t.sl1;
    s('sl2').textContent   = t.sl2;
    s('sl3').textContent   = t.sl3;

    // sections
    s('s1t').textContent = t.s1;
    s('s2t').textContent = t.s2;
    s('s3t').textContent = t.s3;
    s('s4t').textContent = t.s4;

    s('plcard').textContent     = t.pc;
    s('pltransfer').textContent = t.ptr;
    s('msghint').textContent    = t.msghint;
    s('ltxt').innerHTML         = t.legal;
    s('csub').textContent       = t.sec;

    s('stit').textContent  = t.sTitle;
    s('ssub').textContent  = t.sSub;
    s('abtit').textContent = t.abt;

    s('ap1').innerHTML   = t.ap1;
    s('ap2').textContent = t.ap2;
    s('ap3').textContent = t.ap3;
    s('ap4').innerHTML   = t.ap4;
    s('ap5').textContent = t.ap5;

    s('tmtit').textContent = t.tmt;
    s('ftxt').textContent  = t.ft;

    updBtn();
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
            document.getElementById('cpct').textContent = t.pct.replace('{p}', ((donCount / GOAL) * 100).toFixed(5));
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
    el.classList.add('on');
    pay = p;
}

function updBtn() {
    const t  = tr();
    const ok = document.getElementById('lcb').checked && amt !== '?';
    document.getElementById('cbtn').disabled = !ok;
    const display = amt === '?' ? '?' : (t.pre ? t.sym + ' ' + amt : amt + ' ' + t.sym);
    document.getElementById('cbtn-t').textContent = t.btn.replace('{a}', display);
}

function updMsgHint() {
    document.getElementById('msgcount').textContent = document.getElementById('msg').value.length;
}

function openT(e) {
    if (e) e.preventDefault();
    document.getElementById('tmod').classList.add('on');
}

function resetForm() {
    // Only uncheck the legal checkbox — keep amount and payment method
    document.getElementById('lcb').checked = false;
    document.getElementById('cbtn').style.display = '';
    document.getElementById('cbtn').disabled = true;
    document.getElementById('succ').classList.remove('on');
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
        // No auto-reset — stays open until user closes with X
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
    // Success window buttons — full text
    const successTxt = 'Právě jsem dal One Dollar Guyovi příspěvek. Zbývá 8,2 miliardy. ' + url + ' Pojď pomoci taky!';
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

// ── boot ─────────────────────────────────────────────────────────────────────

// Kick off Czech preload immediately so it's warm when the user clicks a flag.
bootI18n();
