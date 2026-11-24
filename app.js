(() => {
  'use strict';
  const CFG = { u: 'https://mdwyenpwgwqeflrymajh.supabase.co', k: 'sb_publishable_IwMgllWshhLDtttw6Olzew_S919a3Xg', f: 'rum_ingest', max: 60 };
  const HOOK = typeof window.__cv === 'function' ? window.__cv : null;
  const OFF = /[?&#]nosave\b/.test(location.search + location.hash);
  const now = () => performance.now(), t0 = now();
  const r2 = v => Math.round(v * 100) / 100;
  const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16).padStart(8, '0'); };
  const median = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
  const SELF = (String(new Error().stack || '').match(/[a-z][a-z0-9+.-]*:\/\/[^\s)]+?(?=:\d+:\d+)/i) || [''])[0];
  const BASE = location.origin !== 'null' ? location.origin + '/' : location.href.replace(/[^/]*([?#].*)?$/, '');
  const mine = l => (SELF && l.includes(SELF)) || l.includes(BASE);
  const GBCR = Element.prototype.getBoundingClientRect, CLOSEST = Element.prototype.closest, GETATTR = Element.prototype.getAttribute, QSA = Document.prototype.querySelectorAll;
  const GCS = window.getComputedStyle.bind(window);
  const IVAL = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'), TVAL = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
  const valueOf = el => { try { return el instanceof HTMLTextAreaElement ? TVAL.get.call(el) : el instanceof HTMLInputElement ? IVAL.get.call(el) : ''; } catch (e) { return ''; } };
  const own = new WeakSet(), known = new WeakMap(), lastInputOn = new WeakMap();
  const uid = () => self.crypto && crypto.randomUUID ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => { const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 3 | 8)).toString(16); });
  const SESSION = uid();
  const DEV = (() => {
    const K = '_fc_id', AGE = 7776000, ok = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.[0-9]{9,11}$/;
    const path = location.pathname.replace(/[^/]*$/, '') || '/', t = Math.floor(Date.now() / 1000);
    let c = '', s = '', cookieOk = false, storageOk = false;
    try { const m = document.cookie.match(/(?:^|;\s*)_fc_id=([^;]*)/); if (m && ok.test(m[1])) c = m[1]; } catch (e) {}
    try { const v = localStorage.getItem(K) || ''; if (ok.test(v)) s = v; } catch (e) {}
    let val = c || s, source = c && s ? (c === s ? 'both' : 'mismatch') : c ? 'cookie' : s ? 'storage' : 'new';
    if (val && t - Number(val.split('.')[1]) > AGE) { val = ''; source = 'expired'; }
    if (!val) val = uid() + '.' + t;
    const born = Number(val.split('.')[1]);
    try { document.cookie = `${K}=${val}; max-age=${Math.max(60, AGE - (t - born))}; path=${path}; SameSite=Lax` + (location.protocol === 'https:' ? '; Secure' : ''); cookieOk = document.cookie.indexOf(K + '=' + val) >= 0; } catch (e) {}
    try { localStorage.setItem(K, val); storageOk = localStorage.getItem(K) === val; } catch (e) {}
    if (!cookieOk && !storageOk && source === 'new') source = 'blocked';
    return { id: val.split('.')[0], source, created_at: new Date(born * 1000).toISOString(), cookie_ok: cookieOk, storage_ok: storageOk };
  })();
  const R = { v: 2, errors: {} };

  const NATIVE = /^function (?:get |set )?[\w$]*\(\) \{\s*\[native code\]\s*\}$/;
  const getter = (proto, name) => () => Object.getOwnPropertyDescriptor(proto, name).get;
  const NATIVES = [
    ['Navigator.webdriver', getter(Navigator.prototype, 'webdriver')], ['Navigator.userAgent', getter(Navigator.prototype, 'userAgent')],
    ['Navigator.platform', getter(Navigator.prototype, 'platform')], ['Navigator.languages', getter(Navigator.prototype, 'languages')],
    ['Navigator.hardwareConcurrency', getter(Navigator.prototype, 'hardwareConcurrency')], ['Navigator.deviceMemory', getter(Navigator.prototype, 'deviceMemory')],
    ['Navigator.plugins', getter(Navigator.prototype, 'plugins')], ['Navigator.userAgentData', getter(Navigator.prototype, 'userAgentData')],
    ['Navigator.maxTouchPoints', getter(Navigator.prototype, 'maxTouchPoints')], ['Navigator.permissions', getter(Navigator.prototype, 'permissions')],
    ['Screen.width', getter(Screen.prototype, 'width')], ['Screen.height', getter(Screen.prototype, 'height')],
    ['Screen.availHeight', getter(Screen.prototype, 'availHeight')], ['Screen.colorDepth', getter(Screen.prototype, 'colorDepth')],
    ['Permissions.query', () => Permissions.prototype.query], ['WebGL.getParameter', () => WebGLRenderingContext.prototype.getParameter],
    ['WebGL2.getParameter', () => WebGL2RenderingContext.prototype.getParameter], ['Canvas.toDataURL', () => HTMLCanvasElement.prototype.toDataURL],
    ['Canvas.getContext', () => HTMLCanvasElement.prototype.getContext], ['Canvas2D.getImageData', () => CanvasRenderingContext2D.prototype.getImageData],
    ['Function.toString', () => Function.prototype.toString], ['Date.getTimezoneOffset', () => Date.prototype.getTimezoneOffset],
    ['Intl.resolvedOptions', () => Intl.DateTimeFormat.prototype.resolvedOptions],
    ['iframe.contentWindow', getter(HTMLIFrameElement.prototype, 'contentWindow')], ['MediaDevices.enumerateDevices', () => MediaDevices.prototype.enumerateDevices],
    ['Document.hasFocus', () => Document.prototype.hasFocus], ['console.debug', () => console.debug],
    ['window.outerWidth', getter(window, 'outerWidth')], ['Element.getBoundingClientRect', () => Element.prototype.getBoundingClientRect]
  ];
  const nativeFns = [];
  R.tamper = (() => {
    const T = { checked: 0, flagged: [], skipped: [] };
    for (const [label, get] of NATIVES) {
      let fn; try { fn = get(); } catch (e) { T.skipped.push(label); continue; }
      if (typeof fn !== 'function') { T.skipped.push(label); continue; }
      T.checked++; nativeFns.push([label, fn]);
      const why = [];
      try {
        if (!NATIVE.test(Function.prototype.toString.call(fn))) why.push('src');
        if (Object.prototype.hasOwnProperty.call(fn, 'prototype')) why.push('proto');
        if (Object.getOwnPropertyNames(fn).sort().join(',') !== 'length,name') why.push('props');
        try { Object.setPrototypeOf(fn, Object.create(fn)); why.push('proxy'); Object.setPrototypeOf(fn, Function.prototype); }
        catch (e) { if (!(e instanceof TypeError)) why.push('errtype'); }
      } catch (e) { why.push('fail'); }
      if (why.length) T.flagged.push(label + ':' + why.join('+'));
    }
    T.navigatorOwnProps = Object.getOwnPropertyNames(navigator);
    T.webdriverOwnDescriptor = !!Object.getOwnPropertyDescriptor(navigator, 'webdriver');
    try { T.pluginsTypeOk = (navigator.plugins instanceof PluginArray) && (!navigator.plugins.length || navigator.plugins[0] instanceof Plugin); } catch (e) { T.pluginsTypeOk = null; }
    return T;
  })();

  const W = { total: 0, calls: {}, origin: { anonymous: 0, extension: 0, other: 0 }, samples: [], mutationCount: 0, mutations: [], cdp: {}, cdpMax: {}, cdpRuns: 0, hiddenFilled: 0 };
  const trace = () => String(new Error().stack || '').split('\n').slice(4, 10).map(s => s.trim());
  function note(label) {
    const lines = trace();
    if (lines.some(mine)) return false;
    W.total++; W.calls[label] = (W.calls[label] || 0) + 1;
    const kind = lines.some(l => /(?:chrome|moz|safari-web)-extension:\/\//.test(l)) ? 'extension' : lines.some(l => /[a-z][a-z0-9+.-]*:\/\/[^\s)]+/i.test(l)) ? 'other' : 'anonymous';
    W.origin[kind]++;
    if (W.samples.length < 12) W.samples.push({ api: label, ms: Math.round(now()), from: kind, stack: lines.slice(0, 3).map(l => l.slice(0, 120)) });
    return true;
  }
  function hookMethod(obj, name, label) {
    const d = Object.getOwnPropertyDescriptor(obj, name);
    if (!d || typeof d.value !== 'function') return;
    const orig = d.value;
    Object.defineProperty(obj, name, { ...d, value: { [name](...a) { note(label); return orig.apply(this, a); } }[name] });
  }
  function hookGetter(obj, name, label) {
    const d = Object.getOwnPropertyDescriptor(obj, name);
    if (!d || !d.get) return;
    const orig = d.get;
    Object.defineProperty(obj, name, { ...d, get() { note(label); return orig.call(this); } });
  }
  for (const m of ['getElementById', 'elementFromPoint', 'elementsFromPoint', 'querySelectorAll', 'querySelector', 'getElementsByTagName', 'getElementsByClassName', 'getElementsByName', 'createTreeWalker', 'createNodeIterator', 'evaluate'])
    hookMethod(Document.prototype, m, 'document.' + m);
  for (const m of ['getBoundingClientRect', 'getClientRects', 'querySelectorAll', 'querySelector', 'scrollIntoView', 'scrollIntoViewIfNeeded', 'checkVisibility', 'getAttributeNames', 'matches', 'closest'])
    hookMethod(Element.prototype, m, 'element.' + m);
  for (const m of ['click', 'focus']) hookMethod(HTMLElement.prototype, m, 'element.' + m);
  for (const m of ['getComputedStyle', 'scrollTo', 'scrollBy', 'scroll']) hookMethod(window, m, 'window.' + m);
  hookGetter(Element.prototype, 'outerHTML', 'get outerHTML'); hookGetter(Element.prototype, 'innerHTML', 'get innerHTML');
  hookGetter(HTMLElement.prototype, 'innerText', 'get innerText'); hookGetter(Node.prototype, 'textContent', 'get textContent');
  Object.defineProperty(HTMLInputElement.prototype, 'value', { ...IVAL, get() { note('get input.value'); return IVAL.get.call(this); }, set(v) { if (!note('set input.value')) known.set(this, String(v)); return IVAL.set.call(this, v); } });
  Object.defineProperty(HTMLTextAreaElement.prototype, 'value', { ...TVAL, get() { note('get textarea.value'); return TVAL.get.call(this); }, set(v) { if (!note('set textarea.value')) known.set(this, String(v)); return TVAL.set.call(this, v); } });

  const tagId = el => el.tagName.toLowerCase() + (el.id ? '#' + el.id : '');
  const isOwn = el => { for (let n = el; n; n = n.parentNode) if (own.has(n)) return true; return false; };
  const LIVE_ATTRS = ['hidden', 'class', 'style', 'open', 'aria-expanded', 'aria-selected', 'aria-busy', 'disabled'];
  const mo = new MutationObserver(list => {
    for (const m of list) {
      const t = m.target.nodeType === 1 ? m.target : m.target.parentElement;
      if (!t || isOwn(t)) continue;
      const live = !!CLOSEST.call(t, '[aria-live]');
      if (m.type === 'attributes') {
        if (live && LIVE_ATTRS.includes(m.attributeName)) continue;
        W.mutationCount++;
        if (W.mutations.length < 30) W.mutations.push({ ms: Math.round(now()), kind: 'attr', on: tagId(t), name: m.attributeName, value: String(GETATTR.call(t, m.attributeName)).slice(0, 60) });
      } else {
        if (live) continue;
        for (const nd of m.addedNodes) {
          if (nd.nodeType !== 1 || own.has(nd)) continue;
          W.mutationCount++;
          if (W.mutations.length < 30) W.mutations.push({ ms: Math.round(now()), kind: 'node', tag: nd.tagName.toLowerCase(), id: nd.id || '', cls: String(nd.className && nd.className.baseVal !== undefined ? nd.className.baseVal : nd.className || '').slice(0, 60), into: tagId(t) });
        }
      }
    }
  });

  function probes() {
    const r = {}, run = (k, fn) => { try { r[k] = fn(); } catch (e) { r[k] = 0; } };
    run('ownStack', () => { let hit = 0; const e = new Error(); Object.defineProperty(e, 'stack', { get() { hit++; return ''; } }); console.debug(e); return hit; });
    run('inheritedStackPlain', () => { let hit = 0; const parent = {}; Object.defineProperty(parent, 'stack', { get() { hit++; return ''; } }); console.debug(Object.create(parent)); return hit; });
    run('inheritedStackError', () => { let hit = 0; const proto = Object.create(Error.prototype, { stack: { get() { hit++; return ''; }, configurable: true } }); const e = new Error('p'); delete e.stack; Object.setPrototypeOf(e, proto); console.debug(e); return hit; });
    run('subclassNameMessage', () => { let hit = 0; class E extends Error { get name() { hit++; return 'E'; } get message() { hit++; return 'm'; } } const e = new E(); delete e.message; console.debug(e); return hit; });
    run('prepareStackTrace', () => { let hit = 0; const orig = Error.prepareStackTrace; try { Error.prepareStackTrace = function () { hit++; return ''; }; console.debug(new Error('p')); } finally { Error.prepareStackTrace = orig; } return hit; });
    run('protoProxy', () => { let hit = 0; const trap = new Proxy({}, { ownKeys() { hit++; return []; } }); console.groupEnd(Object.create(trap)); console.debug(Object.create(trap)); return hit; });
    return r;
  }
  function runProbes() { if (W.cdpRuns >= 10) return; W.cdpRuns++; const r = probes(); W.cdp = r; for (const k in r) W.cdpMax[k] = Math.max(W.cdpMax[k] || 0, r[k]); }
  runProbes(); setTimeout(runProbes, 1500); setTimeout(runProbes, 6000);

  const B = { firstInputMs: null, moves: 0, bigJumps: 0, zeroMovement: 0, maxCoalesced: 0, clickCount: 0, clicksWithoutMove: 0, clicks: [],
    untrusted: 0, keys: 0, emptyCode: 0, imeKeys: 0, backspaces: 0, overlaps: 0, dwellMs: [], flightMs: [], composition: 0,
    inputEvents: 0, inputTypes: {}, inputNoKey: 0, insertTextNoKey: 0, silentValueChange: 0, paste: 0, change: 0, hangul: false, textLenMax: 0,
    wheel: 0, wheelDeltas: [], wheelGapsMs: [], scrolls: 0, scrollNoInput: 0, maxScrollJump: 0,
    focusNoPointer: 0, hiddenTargetEvents: 0, hiddenTargets: [], blur: 0, visibility: 0, resize: 0, pointerTypes: [], timeline: [] };
  const mark = e => { if (B.firstInputMs === null) B.firstInputMs = Math.round(now() - t0); if (e.isTrusted === false) B.untrusted++; };
  const tl = (type, extra) => { if (B.timeline.length < 200) B.timeline.push(Object.assign({ ms: Math.round(now()), type }, extra || {})); };
  const MOD = /^(Shift|Control|Alt|Meta|CapsLock)/;
  const label = el => {
    if (!el || el.nodeType !== 1) return '?';
    const pick = n => n.id || GETATTR.call(n, 'name') || GETATTR.call(n, 'aria-label');
    const host = CLOSEST.call(el, 'button,a,input,select,textarea,label,[role=button]') || el;
    return String(pick(el) || pick(host) || host.tagName.toLowerCase()).slice(0, 60);
  };
  const isHidden = el => {
    try {
      if (!el || el.nodeType !== 1 || el === document.body || el === document.documentElement) return false;
      const r = GBCR.call(el);
      if (r.width === 0 || r.height === 0 || r.right < -50 || r.left > innerWidth + 2000) return true;
      const cs = GCS(el);
      return cs.visibility === 'hidden' || cs.opacity === '0';
    } catch (e) { return false; }
  };
  const hiddenHit = (el, type) => { if (isHidden(el)) { B.hiddenTargetEvents++; if (B.hiddenTargets.length < 10) B.hiddenTargets.push({ ms: Math.round(now()), type, target: label(el) }); } };
  let recent = [], lastMove = null, movesSinceClick = 0, downAt = 0, lastPointer = null, lastKeyTs = -1e9, lastKeyNow = -1e9, lastPointerDownAt = -1e9, lastWheelAt = -1e9, lastTouchAt = -1e9,
      lastTabAt = -1e9, lastCompEndAt = -1e9, lastWindowFocusAt = -1e9, lastScrollY = window.scrollY, lastClickPos = null, maxStepSinceClick = 0, keyCredit = false, pointerHeld = false;
  const held = new Map();
  addEventListener('pointermove', e => { const c = e.getCoalescedEvents ? e.getCoalescedEvents().length : 0; if (c > B.maxCoalesced) B.maxCoalesced = c; }, true);
  addEventListener('mousemove', e => {
    mark(e); B.moves++; movesSinceClick++;
    if (e.movementX === 0 && e.movementY === 0) B.zeroMovement++;
    let step = 0; if (lastMove) { step = Math.hypot(e.clientX - lastMove.x, e.clientY - lastMove.y); if (step > 150) B.bigJumps++; }
    if (step > maxStepSinceClick) maxStepSinceClick = step;
    if (e.buttons === 0) pointerHeld = false;
    lastMove = { x: e.clientX, y: e.clientY }; recent.push({ t: now(), step, x: e.clientX, y: e.clientY }); if (recent.length > 300) recent.shift();
  }, true);
  addEventListener('pointerdown', e => { lastPointerDownAt = now(); pointerHeld = true; lastPointer = { type: e.pointerType, pressure: e.pressure }; if (!B.pointerTypes.includes(e.pointerType)) B.pointerTypes.push(e.pointerType); }, true);
  for (const ev of ['pointerup', 'pointercancel']) addEventListener(ev, () => { pointerHeld = false; }, true);
  addEventListener('mousedown', e => { downAt = e.timeStamp; }, true);
  for (const ev of ['touchstart', 'touchmove']) addEventListener(ev, () => { lastTouchAt = now(); }, { capture: true, passive: true });
  addEventListener('click', e => {
    mark(e); B.clickCount++;
    const el = e.target, touch = !!lastPointer && lastPointer.type === 'touch', viaKey = e.detail === 0;
    const moved = !lastClickPos || Math.hypot(e.clientX - lastClickPos.x, e.clientY - lastClickPos.y) > 5, since = movesSinceClick, maxStep = Math.round(maxStepSinceClick);
    if (since === 0 && moved && !touch && !viaKey) B.clicksWithoutMove++;
    if (!viaKey) lastClickPos = { x: e.clientX, y: e.clientY };
    movesSinceClick = 0; maxStepSinceClick = 0; pointerHeld = false;
    const t = now(), pre = recent.filter(m => t - m.t <= 500), r = el && el.nodeType === 1 ? GBCR.call(el) : null;
    const offX = window.screenX + (outerWidth - innerWidth), offY = window.screenY + (outerHeight - innerHeight);
    const hid = isHidden(el);
    if (hid) hiddenHit(el, 'click');
    if (B.clicks.length < 40) B.clicks.push({ ms: Math.round(t), target: label(el), trusted: e.isTrusted, kind: viaKey ? 'key-or-script' : touch ? 'touch' : 'mouse',
      movesSince: since, movesLast500ms: pre.length, maxStep, samePlace: !moved, holdMs: downAt ? r2(e.timeStamp - downAt) : null,
      centerOff: r ? r2(Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2))) : null,
      client: [e.clientX, e.clientY], screen: [e.screenX, e.screenY], screenEqClient: e.screenX === e.clientX && e.screenY === e.clientY, offsetNonZero: offX !== 0 || offY !== 0,
      pressure: lastPointer ? lastPointer.pressure : null, hasFocus: document.hasFocus(), activation: navigator.userActivation ? navigator.userActivation.isActive : null, hidden: hid,
      approach: recent.slice(-12).map(m => [Math.round(t - m.t), Math.round(m.x), Math.round(m.y)]) });
    downAt = 0; tl('click', { target: label(el) });
    runProbes();
  }, true);
  addEventListener('keydown', e => {
    mark(e); B.keys++; lastKeyNow = now(); keyCredit = true;
    if (!e.code) B.emptyCode++;
    if (e.key === 'Process' || e.keyCode === 229) B.imeKeys++;
    if (e.key === 'Backspace' || e.key === 'Delete') B.backspaces++;
    if (e.key === 'Tab') lastTabAt = now();
    if (e.repeat) return;
    if (lastKeyTs > -1e8 && B.flightMs.length < 300) B.flightMs.push(r2(e.timeStamp - lastKeyTs));
    lastKeyTs = e.timeStamp;
    const k = e.code || e.key;
    if (!MOD.test(k) && [...held.keys()].some(x => !MOD.test(x))) B.overlaps++;
    held.set(k, e.timeStamp);
    if (B.keys === 1) tl('key');
  }, true);
  addEventListener('keyup', e => { const k = e.code || e.key; if (held.has(k)) { if (B.dwellMs.length < 300) B.dwellMs.push(r2(e.timeStamp - held.get(k))); held.delete(k); } }, true);
  addEventListener('compositionstart', () => { B.composition++; }, true);
  addEventListener('compositionend', () => { lastCompEndAt = now(); }, true);
  addEventListener('input', e => {
    mark(e); B.inputEvents++;
    const kind = e.inputType || 'none'; B.inputTypes[kind] = (B.inputTypes[kind] || 0) + 1;
    const t = now(), composing = e.isComposing || /Composition/.test(e.inputType || '');
    const keyed = (t - lastKeyNow <= 80 && (keyCredit || composing)) || t - lastCompEndAt <= 150;
    keyCredit = false;
    if (!keyed) { B.inputNoKey++; if (e.inputType === 'insertText') B.insertTextNoKey++; }
    const el = e.target;
    if (el && el.nodeType === 1) {
      const v = valueOf(el); lastInputOn.set(el, t); known.set(el, v);
      if (/[가-힣ㄱ-ㆎ]/.test(v)) B.hangul = true;
      if (v.length > B.textLenMax) B.textLenMax = v.length;
      hiddenHit(el, 'input');
    }
  }, true);
  addEventListener('paste', e => { mark(e); B.paste++; tl('paste'); }, true);
  addEventListener('change', () => { B.change++; }, true);
  addEventListener('reset', () => { setTimeout(syncFields, 0); }, true);
  addEventListener('wheel', e => {
    mark(e); B.wheel++; const t = now();
    if (B.wheelDeltas.length < 50) B.wheelDeltas.push(r2(e.deltaY));
    if (lastWheelAt > -1e8 && B.wheelGapsMs.length < 50) B.wheelGapsMs.push(Math.round(t - lastWheelAt));
    lastWheelAt = t;
  }, { capture: true, passive: true });
  addEventListener('scroll', e => {
    if (e.target !== document) return;
    B.scrolls++;
    const t = now(), jump = Math.abs(window.scrollY - lastScrollY); lastScrollY = window.scrollY;
    if (jump > B.maxScrollJump) B.maxScrollJump = Math.round(jump);
    if (t - t0 > 1000 && t - lastWheelAt > 400 && t - lastTouchAt > 3000 && t - lastKeyNow > 800 && t - lastPointerDownAt > 1500 && !pointerHeld && jump > 0) {
      B.scrollNoInput++; if (B.scrollNoInput <= 5) tl('scroll-noinput', { y: Math.round(window.scrollY) });
    }
    if (B.scrolls === 1) tl('scroll');
  }, true);
  addEventListener('focusin', e => {
    const t = now(), el = e.target;
    hiddenHit(el, 'focus');
    setTimeout(() => {
      if (t - t0 < 300 || t - lastPointerDownAt < 400 || t - lastTabAt < 400 || Math.abs(t - lastWindowFocusAt) < 400 || Math.abs(now() - lastWindowFocusAt) < 400) return;
      B.focusNoPointer++; tl('focus-noinput', { target: label(el) });
    }, 60);
  }, true);
  addEventListener('focus', () => { lastWindowFocusAt = now(); });
  addEventListener('blur', () => { B.blur++; held.clear(); });
  addEventListener('resize', () => { B.resize++; tl('resize', { inner: innerWidth + 'x' + innerHeight }); });

  const fields = () => { try { return Array.prototype.slice.call(QSA.call(document, 'input:not([type=hidden]):not([type=submit]):not([type=button]):not([type=checkbox]):not([type=radio]):not([type=file]),textarea'), 0, 30); } catch (e) { return []; } };
  function syncFields() { for (const el of fields()) known.set(el, valueOf(el)); }

  const queue = [];
  let seq = 0, sending = false, lastSig = '', lastEnqueueAt = -1e9, lastLeaveSig = null;
  const stats = { sent: 0, failed: 0, dropped: 0, retries: 0 };
  const sig = () => [B.clickCount, B.keys, B.inputEvents, B.paste, B.wheel, B.scrolls, B.untrusted, B.focusNoPointer, B.hiddenTargetEvents, B.silentValueChange, B.moves > 0, W.total, W.mutationCount, W.hiddenFilled, JSON.stringify(W.cdpMax)].join('|');
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  function envParts() {
    const bad = {};
    const odd = (k, v) => { bad[k] = (typeof v) + ':' + String(v).slice(0, 80); return null; };
    const cb = (k, v) => v === true || v === false ? v : v == null ? null : odd(k, v);
    const cn = (k, v) => typeof v === 'number' ? (isFinite(v) ? v : null) : v == null ? null : odd(k, v);
    const ci = (k, v) => { const x = cn(k, v); return x === null ? null : Math.round(x); };
    const cs = v => v == null ? null : String(v).slice(0, 2000);
    const r = R, sc = r.screen || {}, w = r.window || {}, vv = r.visualViewport || {}, bars = r.bars || {}, mq = r.media || {}, co = r.connection || {}, nav = r.nav || {}, gl = r.webgl || {}, cv = r.canvas || {},
      col = r.systemColors || {}, sf = r.systemFonts || {}, cd = r.codecs || {}, di = r.decodeInfo || {}, hc = r.hwCodec || {}, gp = r.webgpu || {}, vo = r.voices || {}, au = r.audio || {}, md = r.mediaDevices || {},
      wa = r.webauthn || {}, ba = r.battery || {}, st = r.storage || {}, kb = r.keyboardLayout || {}, ai = r.builtinAI || {}, wk = r.worker || {}, fr = r.iframe || {}, tm = r.tamper || {}, ud = r.uaData || {}, hi = r.uaDataHigh || {}, ra = r.rootAttributes || {};
    const brands = a => Array.isArray(a) ? a.map(b => b.brand + ' ' + b.version).sort().join(' | ') : null;
    const dec = k => di[k] || {};
    const env = {
      collector_version: 3, collected_ms: ci('collected_ms', r.collectedMs),
      user_agent: cs(r.userAgent), platform: cs(r.platform), vendor: cs(r.vendor), webdriver: cb('webdriver', r.webdriver), language: cs(r.language), timezone: cs(r.timezone), locale: cs(r.locale),
      timezone_offset_min: ci('timezone_offset_min', r.timezoneOffsetMin), hardware_concurrency: ci('hardware_concurrency', r.hardwareConcurrency), device_memory: cn('device_memory', r.deviceMemory), max_touch_points: ci('max_touch_points', r.maxTouchPoints),
      has_chrome_object: cb('has_chrome_object', r.hasChromeObject), chrome_keys: cs(r.chromeKeys), is_secure_context: cb('is_secure_context', r.isSecureContext), cookie_enabled: cb('cookie_enabled', r.cookieEnabled), pdf_viewer_enabled: cb('pdf_viewer_enabled', r.pdfViewerEnabled),
      plugin_count: ci('plugin_count', r.pluginCount), plugin_names: cs(r.pluginNames), mime_type_count: ci('mime_type_count', r.mimeTypeCount), notification_permission: cs(r.notificationPermission),
      ua_brands: brands(ud.brands), ua_mobile: cb('ua_mobile', ud.mobile), ua_platform: cs(ud.platform), ua_architecture: cs(hi.architecture), ua_bitness: cs(hi.bitness), ua_platform_version: cs(hi.platformVersion), ua_model: cs(hi.model),
      ua_full_version: cs(hi.uaFullVersion), ua_full_version_list: brands(hi.fullVersionList), ua_wow64: cb('ua_wow64', hi.wow64), ua_form_factors: Array.isArray(hi.formFactors) ? hi.formFactors.join(',') : null,
      screen_width: ci('screen_width', sc.width), screen_height: ci('screen_height', sc.height), screen_avail_width: ci('screen_avail_width', sc.availWidth), screen_avail_height: ci('screen_avail_height', sc.availHeight),
      screen_avail_left: ci('screen_avail_left', sc.availLeft), screen_avail_top: ci('screen_avail_top', sc.availTop), screen_color_depth: ci('screen_color_depth', sc.colorDepth), screen_pixel_ratio: cn('screen_pixel_ratio', sc.pixelRatio), screen_is_extended: cb('screen_is_extended', sc.isExtended),
      win_inner_width: ci('win_inner_width', w.innerWidth), win_inner_height: ci('win_inner_height', w.innerHeight), win_outer_width: ci('win_outer_width', w.outerWidth), win_outer_height: ci('win_outer_height', w.outerHeight),
      win_screen_x: ci('win_screen_x', w.screenX), win_screen_y: ci('win_screen_y', w.screenY), vv_width: cn('vv_width', vv.width), vv_height: cn('vv_height', vv.height), vv_scale: cn('vv_scale', vv.scale),
      bar_location: cb('bar_location', bars.location), bar_menu: cb('bar_menu', bars.menu), bar_personal: cb('bar_personal', bars.personal), bar_status: cb('bar_status', bars.status), bar_tool: cb('bar_tool', bars.tool), bar_scroll: cb('bar_scroll', bars.scroll),
      mq_pointer: cs(mq.pointer), mq_any_pointer: cs(mq.anyPointer), mq_hover: cb('mq_hover', mq.hover), mq_any_hover: cb('mq_any_hover', mq.anyHover), mq_gamut: cs(mq.gamut), mq_hdr: cb('mq_hdr', mq.hdr), mq_scheme: cs(mq.scheme),
      mq_reduced_motion: cb('mq_reduced_motion', mq.reducedMotion), mq_forced_colors: cb('mq_forced_colors', mq.forcedColors), mq_display_mode: cs(mq.displayMode), mq_fullscreen_element: cb('mq_fullscreen_element', mq.fullscreenElement),
      mq_css_device_w: cb('mq_css_device_w', mq.cssDeviceW), mq_css_device_h: cb('mq_css_device_h', mq.cssDeviceH),
      conn_effective_type: cs(co.effectiveType), conn_rtt: cn('conn_rtt', co.rtt), conn_downlink: cn('conn_downlink', co.downlink), conn_save_data: cb('conn_save_data', co.saveData),
      nav_type: cs(nav.type), nav_protocol: cs(nav.protocol), nav_has_referrer: cb('nav_has_referrer', nav.hasReferrer), nav_history_length: ci('nav_history_length', nav.historyLength), nav_has_focus: cb('nav_has_focus', nav.hasFocus), nav_visibility: cs(nav.visibility),
      webgl_supported: cb('webgl_supported', gl.supported), webgl2: cb('webgl2', gl.webgl2), webgl_vendor: cs(gl.vendor), webgl_renderer: cs(gl.renderer), webgl_unmasked_vendor: cs(gl.unmaskedVendor), webgl_unmasked_renderer: cs(gl.unmaskedRenderer),
      webgl_extension_count: ci('webgl_extension_count', gl.extensionCount), webgl_extension_hash: cs(gl.extensionHash), webgl_max_texture_size: ci('webgl_max_texture_size', gl.maxTextureSize), webgl_max_viewport: cs(gl.maxViewport),
      canvas_hash: cs(cv.hash), canvas_stable: cb('canvas_stable', cv.stable), canvas_noise_pixels: ci('canvas_noise_pixels', cv.noisePixels), canvas_color_fringe_pixels: ci('canvas_color_fringe_pixels', cv.colorFringePixels),
      canvas_emoji_width: cn('canvas_emoji_width', cv.emojiWidth), canvas_hangul_width: cn('canvas_hangul_width', cv.hangulWidth), canvas_latin_width: cn('canvas_latin_width', cv.latinWidth),
      sys_color_active_text: cs(col.ActiveText), sys_color_link_text: cs(col.LinkText), sys_color_canvas: cs(col.Canvas), sys_color_canvas_text: cs(col.CanvasText), sys_color_button_face: cs(col.ButtonFace),
      sys_color_highlight: cs(col.Highlight), sys_color_highlight_text: cs(col.HighlightText), sys_color_gray_text: cs(col.GrayText), sys_color_accent: cs(col.AccentColor), sys_color_selected_item: cs(col.SelectedItem),
      sys_font_caption: cs(sf.caption), sys_font_menu: cs(sf.menu), sys_font_status_bar: cs(sf['status-bar']), scrollbar_width: cn('scrollbar_width', r.scrollbarWidth),
      arch: cs(r.arch), heap_limit_mb: ci('heap_limit_mb', r.heapLimitMB), cpu_bench_ms: cn('cpu_bench_ms', r.cpuBenchMs),
      codec_h264: cs(cd.h264), codec_hevc: cs(cd.hevc), codec_av1: cs(cd.av1), codec_vp9: cs(cd.vp9), codec_aac: cs(cd.aac), codec_mp3: cs(cd.mp3), codec_opus: cs(cd.opus),
      dec_h264_supported: cb('dec_h264_supported', dec('h264').supported), dec_h264_smooth: cb('dec_h264_smooth', dec('h264').smooth), dec_h264_power_efficient: cb('dec_h264_power_efficient', dec('h264').powerEfficient),
      dec_vp9_supported: cb('dec_vp9_supported', dec('vp9').supported), dec_vp9_smooth: cb('dec_vp9_smooth', dec('vp9').smooth), dec_vp9_power_efficient: cb('dec_vp9_power_efficient', dec('vp9').powerEfficient),
      dec_av1_supported: cb('dec_av1_supported', dec('av1').supported), dec_av1_smooth: cb('dec_av1_smooth', dec('av1').smooth), dec_av1_power_efficient: cb('dec_av1_power_efficient', dec('av1').powerEfficient),
      hw_decoder: cb('hw_decoder', hc.decoderHardware), hw_encoder: cb('hw_encoder', hc.encoderHardware), widevine: cb('widevine', r.widevine),
      webgpu_adapter: cs(gp.adapter), webgpu_vendor: cs(gp.vendor), webgpu_architecture: cs(gp.architecture), webgpu_device: cs(gp.device), webgpu_description: cs(gp.description), webgpu_is_fallback: cb('webgpu_is_fallback', gp.isFallbackAdapter), webgpu_feature_count: ci('webgpu_feature_count', gp.featureCount),
      voices_count: ci('voices_count', vo.count), voices_local: ci('voices_local', vo.local), voices_local_vendors: cs(vo.localVendors), voices_all_vendors: cs(vo.allVendors), voices_korean: cs(vo.korean), voices_sample: cs(vo.sample),
      audio_sample_rate: cn('audio_sample_rate', au.sampleRate), audio_base_latency: cn('audio_base_latency', au.baseLatency), audio_output_latency: cn('audio_output_latency', au.outputLatency), audio_state: cs(au.state), audio_max_channels: ci('audio_max_channels', au.maxChannels), audio_fingerprint: cs(au.fingerprint),
      dev_audio_input: ci('dev_audio_input', md.audioinput), dev_audio_output: ci('dev_audio_output', md.audiooutput), dev_video_input: ci('dev_video_input', md.videoinput),
      bluetooth_adapter: cb('bluetooth_adapter', r.bluetoothAdapter), webauthn_platform_authenticator: cb('webauthn_platform_authenticator', wa.platformAuthenticator), webauthn_hybrid_transport: cb('webauthn_hybrid_transport', wa.hybridTransport), webauthn_passkey_platform: cb('webauthn_passkey_platform', wa.passkeyPlatformAuthenticator),
      battery_charging: cb('battery_charging', ba.charging), battery_level: cn('battery_level', ba.level), battery_charging_time: cn('battery_charging_time', ba.chargingTime), battery_discharging_time: cs(ba.dischargingTime),
      storage_quota_gb: cn('storage_quota_gb', st.quotaGB), storage_usage_bytes: ci('storage_usage_bytes', st.usageBytes), storage_persisted: cb('storage_persisted', st.persisted),
      kb_layout_size: ci('kb_layout_size', kb.size), kb_key_q: cs(kb.KeyQ), kb_key_y: cs(kb.KeyY), kb_key_z: cs(kb.KeyZ),
      ai_summarizer: cs(ai.Summarizer), ai_language_detector: cs(ai.LanguageDetector), ai_translator: cs(ai.Translator), ai_language_model: cs(ai.LanguageModel),
      wk_user_agent: cs(wk.userAgent), wk_platform: cs(wk.platform), wk_languages: cs(wk.languages), wk_cores: ci('wk_cores', wk.cores), wk_device_memory: cn('wk_device_memory', wk.deviceMemory), wk_webdriver: cb('wk_webdriver', wk.webdriver), wk_timezone: cs(wk.timezone),
      wk_brands: cs(wk.brands), wk_ua_platform: cs(wk.uaPlatform), wk_renderer: cs(wk.renderer),
      if_same_navigator_ctor: cb('if_same_navigator_ctor', fr.sameNavigatorCtor), if_webdriver: cb('if_webdriver', fr.webdriver), if_ua_same: cb('if_ua_same', fr.uaSame), if_platform_same: cb('if_platform_same', fr.platformSame),
      if_languages_same: cb('if_languages_same', fr.languagesSame), if_cores_same: cb('if_cores_same', fr.coresSame),
      tamper_checked: ci('tamper_checked', tm.checked), tamper_webdriver_own_descriptor: cb('tamper_webdriver_own_descriptor', tm.webdriverOwnDescriptor), tamper_plugins_type_ok: cb('tamper_plugins_type_ok', tm.pluginsTypeOk),
      root_html_attrs: cs(ra.html), root_body_attrs: cs(ra.body), raf_hz: cn('raf_hz', r.rafHz)
    };
    const items = [], add = (list, a) => (Array.isArray(a) ? a : []).slice(0, 40).forEach((v, i) => items.push({ list, ord: i, value: cs(v) }));
    add('navigator_own_props', tm.navigatorOwnProps); add('tamper_skipped', tm.skipped); add('automation_globals', r.automationGlobals); add('empty_name_natives', r.emptyNameNatives);
    add('iframe_to_string_lie', fr.toStringLie); add('iframe_extra_globals', fr.extraGlobals);
    const fonts = []; for (const os of Object.keys(r.fonts || {})) for (const f of (r.fonts[os] || [])) fonts.push({ os_group: os, font: f });
    return { env,
      env_languages: (Array.isArray(r.languages) ? r.languages : []).slice(0, 30).map(v => String(v)),
      env_fonts: fonts,
      env_apis: Object.entries(r.apis || {}).map(([api, v]) => ({ api, present: v === true ? true : v === false ? false : null })),
      env_permissions: Object.entries(r.permissions || {}).map(([name, state]) => ({ name, state: cs(state) })),
      env_tamper_flags: (tm.flagged || []).map(s => { const i = s.indexOf(':'); return { label: s.slice(0, i), reasons: s.slice(i + 1) }; }),
      env_list_items: items,
      env_errors: Object.entries(r.errors || {}).map(([key, error]) => ({ key, error: cs(error) })).concat(Object.entries(bad).map(([k, v]) => ({ key: 'odd:' + k, error: v }))) };
  }
  function behaviorParts() {
    const i = v => typeof v === 'number' && isFinite(v) ? Math.round(v) : null, x = v => typeof v === 'number' && isFinite(v) ? v : null, t = v => v == null ? null : String(v).slice(0, 200);
    return {
      behavior: { first_input_ms: i(B.firstInputMs), moves: B.moves, big_jumps: B.bigJumps, zero_movement: B.zeroMovement, max_coalesced: B.maxCoalesced, click_count: B.clickCount, clicks_without_move: B.clicksWithoutMove,
        untrusted: B.untrusted, keys: B.keys, empty_code: B.emptyCode, ime_keys: B.imeKeys, backspaces: B.backspaces, key_overlaps: B.overlaps, composition: B.composition,
        input_events: B.inputEvents, input_no_key: B.inputNoKey, insert_text_no_key: B.insertTextNoKey, silent_value_change: B.silentValueChange, paste: B.paste, change: B.change, hangul: !!B.hangul, text_len_max: B.textLenMax,
        wheel: B.wheel, scrolls: B.scrolls, scroll_no_input: B.scrollNoInput, max_scroll_jump: B.maxScrollJump, focus_no_pointer: B.focusNoPointer, hidden_target_events: B.hiddenTargetEvents,
        blur: B.blur, visibility: B.visibility, resize: B.resize, pointer_types: B.pointerTypes.join(',') },
      clicks: B.clicks.map((c, idx) => ({ idx, ms: i(c.ms), target: t(c.target), trusted: c.trusted === true, kind: c.kind, moves_since: i(c.movesSince), moves_last_500ms: i(c.movesLast500ms), max_step: i(c.maxStep), same_place: !!c.samePlace,
        hold_ms: x(c.holdMs), center_off: x(c.centerOff), client_x: i(c.client[0]), client_y: i(c.client[1]), screen_x: i(c.screen[0]), screen_y: i(c.screen[1]), screen_eq_client: !!c.screenEqClient, offset_non_zero: !!c.offsetNonZero,
        pressure: x(c.pressure), has_focus: c.hasFocus === true ? true : c.hasFocus === false ? false : null, activation: c.activation === true ? true : c.activation === false ? false : null, hidden: !!c.hidden, path: c.approach })),
      key_dwell: B.dwellMs.filter(v => typeof v === 'number' && isFinite(v)), key_flight: B.flightMs.filter(v => typeof v === 'number' && isFinite(v)),
      wheel_deltas: B.wheelDeltas.map(v => x(v) === null ? 0 : v), wheel_gaps: B.wheelGapsMs.map(v => i(v) === null ? 0 : i(v)),
      input_types: Object.entries(B.inputTypes).map(([input_type, count]) => ({ input_type: t(input_type), count })),
      timeline: B.timeline.map((e, idx) => ({ idx, ms: i(e.ms), type: e.type, target: t(e.target), detail: e.y !== undefined ? 'y=' + e.y : e.inner !== undefined ? e.inner : null })),
      hidden_targets: B.hiddenTargets.map((e, idx) => ({ idx, ms: i(e.ms), type: e.type, target: t(e.target) })) };
  }
  function watchParts() {
    const m = W.cdpMax, t = v => v == null ? null : String(v).slice(0, 300);
    return {
      watch: { total_calls: W.total, origin_anonymous: W.origin.anonymous, origin_extension: W.origin.extension, origin_other: W.origin.other, mutation_count: W.mutationCount, hidden_filled: W.hiddenFilled, cdp_runs: W.cdpRuns,
        cdp_own_stack: m.ownStack || 0, cdp_inherited_plain: m.inheritedStackPlain || 0, cdp_inherited_error: m.inheritedStackError || 0, cdp_name_message: m.subclassNameMessage || 0, cdp_prepare_stack_trace: m.prepareStackTrace || 0, cdp_proto_proxy: m.protoProxy || 0 },
      watch_calls: Object.entries(W.calls).map(([api, count]) => ({ api, count })),
      watch_samples: W.samples.map((s, idx) => ({ idx, api: s.api, ms: s.ms, origin: s.from, stack1: t(s.stack[0]), stack2: t(s.stack[1]), stack3: t(s.stack[2]) })),
      watch_mutations: W.mutations.map((u, idx) => ({ idx, ms: u.ms, kind: u.kind, target: t(u.on || u.into), name: t(u.name), value: t(u.value), tag: t(u.tag), node_id: t(u.id), cls: t(u.cls) })) };
  }
  function build(reason, withEnv, final) {
    const p = { session_id: SESSION, seq: seq++, reason, page_url: (location.origin + location.pathname + location.search).slice(0, 300), device: DEV,
      meta: { v: 3, ms: Math.round(now()), at: new Date().toISOString(), final: !!final, vis: document.visibilityState, focus: document.hasFocus(), sent: stats.sent, failed: stats.failed, dropped: stats.dropped, retries: stats.retries } };
    if (withEnv) Object.assign(p, envParts());
    return Object.assign(p, behaviorParts(), watchParts());
  }
  const ENDPOINT = `${CFG.u}/rest/v1/rpc/${CFG.f}?apikey=${CFG.k}`;
  async function post(body, last) {
    const form = new URLSearchParams({ p: body });
    if (last && navigator.sendBeacon) { try { if (navigator.sendBeacon(ENDPOINT, form)) return 'ok'; } catch (e) {} }
    try {
      const ctl = !last && self.AbortController ? new AbortController() : null;
      const timer = ctl ? setTimeout(() => ctl.abort(), 12000) : null;
      const res = await fetch(ENDPOINT, { method: 'POST', keepalive: !!last, signal: ctl ? ctl.signal : undefined, body: form });
      if (timer) clearTimeout(timer);
      if (res.ok) return 'ok';
      if (res.status >= 500 || res.status === 429 || res.status === 408) return 'retry';
      const text = await res.text().catch(() => '');
      return /too many/i.test(text) ? 'retry' : 'drop';
    } catch (e) { return 'retry'; }
  }
  async function pump() {
    if (sending) return;
    sending = true;
    while (queue.length) {
      const item = queue[0], r = await post(item.body, false);
      if (r === 'ok') { stats.sent++; queue.shift(); continue; }
      if (r === 'drop') { stats.dropped++; queue.shift(); continue; }
      item.tries++; stats.retries++;
      if (item.tries >= 6) { stats.failed++; queue.shift(); continue; }
      await sleep(Math.min(1000 * 2 ** (item.tries - 1), 15000));
    }
    sending = false;
  }
  function emit(reason, withRaw, final) {
    if (seq >= CFG.max) return null;
    const p = build(reason, withRaw, final);
    lastSig = sig(); lastEnqueueAt = now();
    if (HOOK) { let r; try { r = HOOK(reason, JSON.parse(JSON.stringify(p))); } catch (e) {} if (r === false) return null; }
    if (OFF) return null;
    return JSON.stringify(p);
  }
  function enqueue(reason, withRaw) { const body = emit(reason, withRaw, false); if (body) { queue.push({ body, tries: 0 }); pump(); } }
  function leave() {
    const s = sig();
    if (s === lastLeaveSig && !queue.length) return;
    lastLeaveSig = s;
    let body = emit('leave', false, true);
    if (body && body.length > 20000) { const o = JSON.parse(body); for (const c of (o.clicks || [])) delete c.path; o.timeline = (o.timeline || []).slice(-60); body = JSON.stringify(o); }
    if (body) post(body, true).then(r => { if (r === 'ok') stats.sent++; });
    let budget = 24000 - (body ? body.length : 0);
    for (const item of queue.splice(0)) { if (item.body.length <= budget) { budget -= item.body.length; post(item.body, true); } else queue.push(item); }
  }
  addEventListener('pagehide', leave);
  document.addEventListener('visibilitychange', () => {
    B.visibility++; tl(document.visibilityState === 'hidden' ? 'hidden' : 'visible');
    if (document.visibilityState === 'hidden') leave(); else if (queue.length) pump();
  });
  setInterval(() => {
    let filled = 0;
    for (const el of fields()) {
      const cur = valueOf(el), prev = known.get(el);
      if (prev !== undefined && cur !== prev && now() - (lastInputOn.get(el) || -1e9) > 300) B.silentValueChange++;
      known.set(el, cur);
      if (cur && isHidden(el)) filled++;
    }
    W.hiddenFilled = filled;
    if (envDone && now() - lastEnqueueAt > 1500 && sig() !== lastSig) enqueue('act', false);
  }, 1000);

  const TIMEOUT = Symbol('t');
  async function collect() {
    const n = navigator, raw = R;
    const S = (key, fn) => { try { const v = fn(); raw[key] = v === undefined ? null : v; } catch (e) { raw[key] = null; raw.errors[key] = String(e && e.name || e); } };
    const A = (key, fn, ms = 2500) => Promise.race([
      (async () => { try { const v = await fn(); return v === undefined ? null : v; } catch (e) { raw.errors[key] = String(e && e.name || e); return null; } })(),
      new Promise(res => setTimeout(() => res(TIMEOUT), ms))
    ]).then(v => { if (v === TIMEOUT) { raw.errors[key] = 'timeout'; v = null; } raw[key] = v; });
    const mk = (tag, css) => { const d = document.createElement(tag); own.add(d); if (css) d.style.cssText = css; document.body.appendChild(d); return d; };
    const mq = q => matchMedia(q).matches;

    S('pluginCount', () => n.plugins.length); S('pluginNames', () => Array.from(n.plugins).map(p => p.name).join(' | ')); S('mimeTypeCount', () => n.mimeTypes.length);
    raw.cookieEnabled = n.cookieEnabled; raw.pdfViewerEnabled = n.pdfViewerEnabled;
    S('chromeKeys', () => window.chrome ? Object.keys(window.chrome).join(',') : null);
    S('visualViewport', () => window.visualViewport ? { width: r2(visualViewport.width), height: r2(visualViewport.height), scale: visualViewport.scale } : null);
    S('bars', () => ({ location: locationbar.visible, menu: menubar.visible, personal: personalbar.visible, status: statusbar.visible, tool: toolbar.visible, scroll: scrollbars.visible }));
    S('media', () => ({
      pointer: ['none', 'coarse', 'fine'].find(v => mq(`(pointer:${v})`)) || null, anyPointer: ['fine', 'coarse', 'none'].filter(v => mq(`(any-pointer:${v})`)).join('+'),
      hover: mq('(hover:hover)'), anyHover: mq('(any-hover:hover)'), gamut: ['rec2020', 'p3', 'srgb'].find(v => mq(`(color-gamut:${v})`)) || null, hdr: mq('(dynamic-range:high)'),
      scheme: mq('(prefers-color-scheme:dark)') ? 'dark' : 'light', reducedMotion: mq('(prefers-reduced-motion:reduce)'), forcedColors: mq('(forced-colors:active)'),
      displayMode: ['fullscreen', 'standalone', 'minimal-ui', 'browser'].find(v => mq(`(display-mode:${v})`)) || null, fullscreenElement: !!document.fullscreenElement,
      cssDeviceW: mq(`(device-width:${screen.width}px)`), cssDeviceH: mq(`(device-height:${screen.height}px)`)
    }));
    S('connection', () => n.connection ? { effectiveType: n.connection.effectiveType, rtt: n.connection.rtt, downlink: n.connection.downlink, saveData: n.connection.saveData } : null);
    S('nav', () => { const e = performance.getEntriesByType('navigation')[0] || {}; return { type: e.type, protocol: e.nextHopProtocol, hasReferrer: !!document.referrer, historyLength: history.length, hasFocus: document.hasFocus(), visibility: document.visibilityState }; });
    S('webgl', () => {
      const out = { supported: false };
      const gl = document.createElement('canvas').getContext('webgl') || document.createElement('canvas').getContext('experimental-webgl');
      if (!gl) return out;
      out.supported = true;
      out.webgl2 = !!document.createElement('canvas').getContext('webgl2');
      out.vendor = gl.getParameter(gl.VENDOR); out.renderer = gl.getParameter(gl.RENDERER);
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      if (ext) { out.unmaskedVendor = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL); out.unmaskedRenderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL); }
      const exts = gl.getSupportedExtensions() || [];
      out.extensionCount = exts.length; out.extensionHash = hash(exts.join(','));
      out.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE); out.maxViewport = Array.from(gl.getParameter(gl.MAX_VIEWPORT_DIMS) || []).join('x');
      return out;
    });
    if (!raw.webgl) raw.webgl = { supported: false };
    S('canvas', () => {
      const c = document.createElement('canvas'); c.width = 240; c.height = 60; const x = c.getContext('2d'); x.textBaseline = 'top'; x.font = '14px Arial'; x.fillStyle = '#f60'; x.fillRect(100, 1, 62, 20);
      x.fillStyle = '#069'; x.fillText('Cwm fjord 한글 😃 glyphs', 2, 15); x.fillStyle = 'rgba(102,204,0,0.7)'; x.fillText('Cwm fjord 한글 😃 glyphs', 4, 17);
      const h1 = hash(c.toDataURL()), h2 = hash(c.toDataURL());
      const c2 = document.createElement('canvas'); c2.width = 16; c2.height = 16; const y = c2.getContext('2d'); y.fillStyle = 'rgb(10,200,30)'; y.fillRect(0, 0, 16, 16);
      const px = y.getImageData(0, 0, 16, 16).data; let noise = 0; for (let i = 0; i < px.length; i += 4) if (px[i] !== 10 || px[i + 1] !== 200 || px[i + 2] !== 30 || px[i + 3] !== 255) noise++;
      const c3 = document.createElement('canvas'); c3.width = 140; c3.height = 40; const z = c3.getContext('2d', { alpha: false }); z.fillStyle = '#fff'; z.fillRect(0, 0, 140, 40); z.fillStyle = '#000'; z.font = '16px sans-serif'; z.fillText('Hamburgefonstiv', 2, 24);
      const d3 = z.getImageData(0, 0, 140, 40).data; let fringe = 0; for (let i = 0; i < d3.length; i += 4) { const r = d3[i], g = d3[i + 1], b = d3[i + 2]; if (Math.abs(r - g) > 8 || Math.abs(g - b) > 8) fringe++; }
      z.font = '32px sans-serif';
      return { hash: h1, stable: h1 === h2, noisePixels: noise, colorFringePixels: fringe, emojiWidth: r2(z.measureText('😃').width), hangulWidth: r2(z.measureText('가').width), latinWidth: r2(z.measureText('mmmmmmmmmmlli').width) };
    });
    const FONTS = {
      Windows: ['Segoe UI', 'Malgun Gothic', 'Calibri', 'Consolas', 'Tahoma'],
      macOS: ['Helvetica Neue', 'Apple SD Gothic Neo', 'Menlo', 'Geneva', 'Lucida Grande'],
      Linux: ['DejaVu Sans', 'Liberation Sans', 'Ubuntu', 'Noto Sans CJK KR', 'Nimbus Sans', 'Cantarell']
    };
    S('fonts', () => {
      const c = document.createElement('canvas').getContext('2d'), text = 'mmmmmmmmmmlli 가나다라 0123', bases = ['monospace', 'sans-serif', 'serif'];
      const width = font => { c.font = '72px ' + font; return c.measureText(text).width; };
      const baseW = Object.fromEntries(bases.map(b => [b, width(b)])), o = {};
      for (const os of Object.keys(FONTS)) o[os] = FONTS[os].filter(f => bases.some(b => width(`"${f}", ${b}`) !== baseW[b]));
      return o;
    });
    S('systemColors', () => { const d = mk('div', 'color-scheme:light;position:absolute;left:-9999px'); const o = {};
      for (const c of ['ActiveText', 'LinkText', 'Canvas', 'CanvasText', 'ButtonFace', 'Highlight', 'HighlightText', 'GrayText', 'AccentColor', 'SelectedItem']) { d.style.color = ''; d.style.color = c; o[c] = GCS(d).color.replace(/\s/g, ''); }
      d.remove(); return o; });
    S('systemFonts', () => { const d = mk('div', 'position:absolute;left:-9999px'); const o = {}; for (const f of ['caption', 'menu', 'status-bar']) { d.style.font = f; const cs = GCS(d); o[f] = cs.fontFamily + ' / ' + cs.fontSize; } d.remove(); return o; });
    S('scrollbarWidth', () => { const d = mk('div', 'position:absolute;left:-9999px;width:100px;height:100px;overflow:scroll'); const w = d.offsetWidth - d.clientWidth; d.remove(); return w; });
    S('apis', () => { const has = (o, k) => { try { return k in o; } catch (e) { return null; } }; const o = {};
      for (const k of ['bluetooth', 'share', 'canShare', 'contacts', 'setAppBadge', 'hid', 'serial', 'usb', 'xr', 'keyboard', 'wakeLock', 'gpu', 'brave']) o[k] = has(n, k);
      for (const k of ['BarcodeDetector', 'EyeDropper', 'queryLocalFonts', 'SharedWorker', 'ContentIndex', 'showOpenFilePicker', 'getScreenDetails', 'LanguageModel', 'Summarizer', 'Translator', 'LanguageDetector', 'OTPCredential', 'NDEFReader']) o[k] = has(window, k);
      return o; });
    S('arch', () => { const f = new Float32Array(1), u = new Uint8Array(f.buffer); f[0] = Infinity; f[0] = f[0] - f[0]; return u[3] === 255 ? 'x86' : u[3] === 127 ? 'arm' : null; });
    S('codecs', () => { const v = document.createElement('video'), a = document.createElement('audio'); return {
      h264: v.canPlayType('video/mp4; codecs="avc1.42E01E"'), hevc: v.canPlayType('video/mp4; codecs="hvc1.1.6.L93.B0"'), av1: v.canPlayType('video/mp4; codecs="av01.0.05M.08"'), vp9: v.canPlayType('video/webm; codecs="vp9"'),
      aac: a.canPlayType('audio/mp4; codecs="mp4a.40.2"'), mp3: a.canPlayType('audio/mpeg'), opus: a.canPlayType('audio/webm; codecs="opus"') }; });
    S('heapLimitMB', () => Math.round(performance.memory.jsHeapSizeLimit / 1048576));
    S('cpuBenchMs', () => { const t = now(); let x = 0; for (let i = 0; i < 3e6; i++) x += Math.sqrt(i) * Math.sin(i); return isFinite(x) ? r2(now() - t) : null; });
    S('notificationPermission', () => Notification.permission);
    const AG = ['__nightmare', '_phantom', 'callPhantom', 'phantom', 'domAutomation', 'domAutomationController', '_selenium', '__selenium_unwrapped', '__webdriver_evaluate', '__driver_evaluate', '__webdriver_script_fn', '__fxdriver_unwrapped', '_Selenium_IDE_Recorder', '__pwInitScripts', '__playwright__binding__'];
    const AP = /^(cdc_|\$cdc_|__playwright|__pw_|__puppeteer|puppeteer_|__selenium|__webdriver|__driver|__stagehand|__browser_?use|__skyvern)/i;
    S('automationGlobals', () => Object.getOwnPropertyNames(window).filter(k => AG.includes(k) || AP.test(k)).concat(Object.keys(document).filter(k => /^\$?cdc_/.test(k))));
    S('emptyNameNatives', () => Object.getOwnPropertyNames(window).filter(k => { try { const d = Object.getOwnPropertyDescriptor(window, k), v = d && d.value; return typeof v === 'function' && v.name === '' && /\[native code\]/.test(Function.prototype.toString.call(v)); } catch (e) { return false; } }).slice(0, 10));
    S('rootAttributes', () => ({ html: document.documentElement.getAttributeNames().filter(a => a !== 'lang').join(','), body: document.body.getAttributeNames().join(',') }));
    S('iframe', () => {
      const f = mk('iframe', 'display:none'); f.srcdoc = '<!doctype html><title>x</title>';
      const w = f.contentWindow, lie = [];
      for (const [label, fn] of nativeFns) { try { if (!NATIVE.test(w.Function.prototype.toString.call(fn))) lie.push(label); } catch (e) { lie.push(label); } }
      const extra = Object.getOwnPropertyNames(window).filter(k => !(k in w) && !/^\d+$/.test(k) && k !== '__cv');
      const o = { sameNavigatorCtor: w.Navigator === window.Navigator, webdriver: w.navigator.webdriver, uaSame: w.navigator.userAgent === n.userAgent, platformSame: w.navigator.platform === n.platform,
                  languagesSame: String(w.navigator.languages) === String(n.languages), coresSame: w.navigator.hardwareConcurrency === n.hardwareConcurrency, toStringLie: lie, extraGlobals: extra.slice(0, 30) };
      f.remove(); return o;
    });

    await Promise.all([
      A('uaDataHigh', () => n.userAgentData ? n.userAgentData.getHighEntropyValues(['architecture', 'bitness', 'platformVersion', 'model', 'uaFullVersion', 'fullVersionList', 'wow64', 'formFactors']) : null),
      A('worker', () => new Promise((res, rej) => {
        const src = `self.onmessage = async () => { const n = self.navigator; const o = { userAgent: n.userAgent, platform: n.platform, languages: (n.languages || []).join(','), cores: n.hardwareConcurrency, deviceMemory: n.deviceMemory, webdriver: n.webdriver, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone };
          try { o.brands = n.userAgentData ? n.userAgentData.brands.map(b => b.brand + ' ' + b.version).sort().join(' | ') : null; o.uaPlatform = n.userAgentData ? n.userAgentData.platform : null; } catch (e) {}
          try { const c = new OffscreenCanvas(8, 8), gl = c.getContext('webgl'), ext = gl && gl.getExtension('WEBGL_debug_renderer_info'); o.renderer = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : (gl ? gl.getParameter(gl.RENDERER) : null); } catch (e) {}
          self.postMessage(o); };`;
        const w = new Worker(URL.createObjectURL(new Blob([src], { type: 'text/javascript' })));
        w.onmessage = ev => { res(ev.data); w.terminate(); }; w.onerror = () => rej(new Error('worker')); w.postMessage(1);
      }), 3000),
      A('rafHz', () => new Promise(res => { const ts = []; const f = t => { ts.push(t); if (ts.length > 5 && t - ts[0] >= 1000) { const d = []; for (let i = 1; i < ts.length; i++) d.push(ts[i] - ts[i - 1]); res(r2(1000 / median(d))); } else requestAnimationFrame(f); }; requestAnimationFrame(f); }), 3000),
      A('voices', () => new Promise(res => { const ss = window.speechSynthesis; if (!ss) return res(null);
        const done = () => { const v = ss.getVoices(), kind = x => /^Microsoft/.test(x.name) ? 'Microsoft' : /^com\.apple/.test(x.voiceURI || '') ? 'Apple' : /^Google/.test(x.name) ? 'Google' : 'other';
          res({ count: v.length, local: v.filter(x => x.localService).length, localVendors: [...new Set(v.filter(x => x.localService).map(kind))].join(','), allVendors: [...new Set(v.map(kind))].join(','),
                korean: v.filter(x => /^ko/i.test(x.lang)).map(x => x.name).slice(0, 4).join(', '), sample: v.slice(0, 4).map(x => x.name).join(', ') }); };
        if (ss.getVoices().length) return done(); ss.addEventListener('voiceschanged', done, { once: true }); setTimeout(done, 1500); })),
      A('audio', async () => { const o = {}; const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) { const c = new AC(); o.sampleRate = c.sampleRate; o.baseLatency = c.baseLatency; o.outputLatency = c.outputLatency; o.state = c.state; o.maxChannels = c.destination.maxChannelCount; c.close(); }
        if (window.OfflineAudioContext) { const c = new OfflineAudioContext(1, 5000, 44100), osc = c.createOscillator(), comp = c.createDynamicsCompressor(); osc.type = 'triangle'; osc.frequency.value = 10000;
          comp.threshold.value = -50; comp.knee.value = 40; comp.ratio.value = 12; comp.attack.value = 0; comp.release.value = 0.25; osc.connect(comp); comp.connect(c.destination); osc.start(0);
          const d = (await c.startRendering()).getChannelData(0); let s = 0; for (let i = 4500; i < 5000; i++) s += Math.abs(d[i]); o.fingerprint = s.toFixed(6); }
        return o; }),
      A('mediaDevices', async () => { const d = await n.mediaDevices.enumerateDevices(); return { audioinput: d.filter(x => x.kind === 'audioinput').length, audiooutput: d.filter(x => x.kind === 'audiooutput').length, videoinput: d.filter(x => x.kind === 'videoinput').length }; }),
      A('decodeInfo', async () => { const o = {}; for (const [k, ct] of [['h264', 'video/mp4; codecs="avc1.640028"'], ['vp9', 'video/webm; codecs="vp09.00.40.08"'], ['av1', 'video/mp4; codecs="av01.0.08M.08"']]) {
        try { const r = await n.mediaCapabilities.decodingInfo({ type: 'file', video: { contentType: ct, width: 1920, height: 1080, bitrate: 5000000, framerate: 30 } }); o[k] = { supported: r.supported, smooth: r.smooth, powerEfficient: r.powerEfficient }; } catch (e) { o[k] = null; } } return o; }),
      A('hwCodec', async () => { const o = { decoderHardware: null, encoderHardware: null };
        if (window.VideoDecoder) o.decoderHardware = (await VideoDecoder.isConfigSupported({ codec: 'avc1.640028', codedWidth: 1920, codedHeight: 1080, hardwareAcceleration: 'prefer-hardware' })).supported;
        if (window.VideoEncoder) o.encoderHardware = (await VideoEncoder.isConfigSupported({ codec: 'avc1.42001f', width: 1280, height: 720, bitrate: 2000000, framerate: 30, hardwareAcceleration: 'prefer-hardware' })).supported;
        return o; }),
      A('widevine', async () => { if (!n.requestMediaKeySystemAccess) return null; try { await n.requestMediaKeySystemAccess('com.widevine.alpha', [{ initDataTypes: ['cenc'], videoCapabilities: [{ contentType: 'video/mp4; codecs="avc1.42E01E"', robustness: 'SW_SECURE_CRYPTO' }], audioCapabilities: [{ contentType: 'audio/mp4; codecs="mp4a.40.2"', robustness: 'SW_SECURE_CRYPTO' }] }]); return true; } catch (e) { return false; } }),
      A('webgpu', async () => { if (!n.gpu) return null; const ad = await n.gpu.requestAdapter(); if (!ad) return { adapter: 'none' }; const info = ad.info || (ad.requestAdapterInfo ? await ad.requestAdapterInfo() : {});
        return { vendor: info.vendor, architecture: info.architecture, device: info.device, description: info.description, isFallbackAdapter: ad.isFallbackAdapter ?? info.isFallbackAdapter ?? null, featureCount: ad.features ? ad.features.size : null }; }),
      A('permissions', async () => { const o = {}; for (const name of ['notifications', 'geolocation', 'camera', 'microphone', 'clipboard-read', 'clipboard-write', 'persistent-storage', 'push', 'midi', 'background-sync', 'payment-handler', 'accelerometer', 'gyroscope', 'magnetometer', 'screen-wake-lock', 'local-fonts', 'window-management', 'idle-detection', 'storage-access', 'display-capture']) {
        try { o[name] = (await n.permissions.query(name === 'push' ? { name, userVisibleOnly: true } : { name })).state; } catch (e) { o[name] = 'unsupported'; } } return o; }, 4000),
      A('bluetoothAdapter', () => n.bluetooth && n.bluetooth.getAvailability ? n.bluetooth.getAvailability() : null),
      A('webauthn', async () => { if (!window.PublicKeyCredential) return null; const o = { platformAuthenticator: await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable() };
        if (PublicKeyCredential.getClientCapabilities) { const c = await PublicKeyCredential.getClientCapabilities(); o.hybridTransport = c.hybridTransport; o.passkeyPlatformAuthenticator = c.passkeyPlatformAuthenticator; } return o; }),
      A('battery', async () => { if (!n.getBattery) return null; const b = await n.getBattery(); return { charging: b.charging, level: b.level, chargingTime: b.chargingTime, dischargingTime: String(b.dischargingTime) }; }),
      A('storage', async () => { const e = await n.storage.estimate(); return { quotaGB: r2(e.quota / 1073741824), usageBytes: e.usage, persisted: await n.storage.persisted() }; }),
      A('keyboardLayout', async () => { if (!n.keyboard || !n.keyboard.getLayoutMap) return null; const m = await n.keyboard.getLayoutMap(); return { size: m.size, KeyQ: m.get('KeyQ'), KeyY: m.get('KeyY'), KeyZ: m.get('KeyZ') }; }),
      A('builtinAI', async () => { const o = {}, opts = { Summarizer: { outputLanguage: 'en' }, Translator: { sourceLanguage: 'en', targetLanguage: 'ko' }, LanguageModel: { expectedOutputs: [{ type: 'text', languages: ['en'] }] } };
        for (const k of ['Summarizer', 'LanguageDetector', 'Translator', 'LanguageModel']) { if (window[k] && window[k].availability) { try { o[k] = await window[k].availability(opts[k]); } catch (e) { try { o[k] = await window[k].availability(); } catch (e2) { o[k] = 'error'; } } } }
        return o; }, 3000)
    ]);
    raw.collectedMs = Math.round(now());
  }

  (function basics() {
    const n = navigator, raw = R, S = (key, fn) => { try { const v = fn(); raw[key] = v === undefined ? null : v; } catch (e) { raw[key] = null; raw.errors[key] = String(e && e.name || e); } };
    raw.userAgent = n.userAgent; raw.platform = n.platform; raw.vendor = n.vendor; raw.webdriver = n.webdriver;
    S('languages', () => Array.from(n.languages || [])); if (!raw.languages) raw.languages = [];
    raw.language = n.language;
    S('timezone', () => Intl.DateTimeFormat().resolvedOptions().timeZone); S('locale', () => Intl.DateTimeFormat().resolvedOptions().locale);
    raw.timezoneOffsetMin = new Date().getTimezoneOffset();
    raw.hardwareConcurrency = n.hardwareConcurrency; raw.deviceMemory = n.deviceMemory; raw.maxTouchPoints = n.maxTouchPoints;
    raw.hasChromeObject = typeof window.chrome === 'object' && window.chrome !== null;
    raw.isSecureContext = window.isSecureContext;
    S('uaData', () => n.userAgentData ? { brands: n.userAgentData.brands, mobile: n.userAgentData.mobile, platform: n.userAgentData.platform } : null);
    raw.screen = { width: screen.width, height: screen.height, availWidth: screen.availWidth, availHeight: screen.availHeight, availLeft: screen.availLeft, availTop: screen.availTop,
                   colorDepth: screen.colorDepth, pixelRatio: window.devicePixelRatio, isExtended: screen.isExtended };
    raw.window = { innerWidth, innerHeight, outerWidth, outerHeight, screenX: window.screenX, screenY: window.screenY };
  })();

  let envDone = false;
  enqueue('start', true);
  const ready = fn => { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true }); else fn(); };
  ready(() => {
    mo.observe(document.documentElement, { subtree: true, childList: true, attributes: true });
    syncFields();
    R.window = { innerWidth, innerHeight, outerWidth, outerHeight, screenX: window.screenX, screenY: window.screenY };
    collect().catch(e => { R.errors.collect = String(e && e.message || e); }).then(() => { envDone = true; enqueue('env', true); });
  });
})();
