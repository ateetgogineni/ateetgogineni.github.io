/* ==========================================================================
   Portfolio interactions
   - Reveal-on-scroll: IntersectionObserver + CSS classes (works without GSAP)
   - Scroll-scrubbed scenes: GSAP ScrollTrigger (hero, statement, timeline…)
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var animated = root.classList.contains('anim');
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
  var desktopMQ = window.matchMedia('(min-width: 901px)');

  root.classList.add('ready');
  if (animated && hasGsap) root.classList.add('gsap');

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navigation ---------- */
  var nav = $('#nav');
  var toggle = $('#navToggle');
  var menu = $('#mobileMenu');
  var navLinks = $$('#navLinks a');
  var sectionIds = navLinks.map(function (a) { return a.getAttribute('href').slice(1); });
  var progressBar = $('.progress span');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () { setMenu(menu.hidden); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) setMenu(false); });
  desktopMQ.addEventListener('change', function (e) { if (e.matches) setMenu(false); });

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.scrollY;
      nav.classList.toggle('is-scrolled', y > 20);

      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBar) progressBar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';

      var current = '';
      var probe = window.innerHeight * 0.4;
      sectionIds.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      });
      navLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + current); });
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Hero word rotator ---------- */
  var words = $$('.rotator > span');
  if (words.length > 1) {
    var wi = 0;
    setInterval(function () {
      if (document.hidden) return;
      var prev = words[wi];
      wi = (wi + 1) % words.length;
      prev.classList.remove('is-on');
      prev.classList.add('is-out');
      words[wi].classList.remove('is-out');
      words[wi].classList.add('is-on');
      setTimeout(function () { prev.classList.remove('is-out'); }, 800);
    }, 2800);
  }

  /* ---------- Hero intro ---------- */
  if (animated) {
    var heroSeq = [$('.hero-eyebrow')]
      .concat($$('.hero-name .mask'))
      .concat($$('.hero-copy [data-hero]').filter(function (el) { return !el.classList.contains('hero-eyebrow'); }));
    heroSeq.forEach(function (el, i) {
      el.style.setProperty('--d', (0.15 + i * 0.12).toFixed(2) + 's');
    });
    $$('.hero-phone').forEach(function (el, i) {
      el.style.setProperty('--d', (0.55 + [1, 0, 2][i] * 0.14).toFixed(2) + 's');
    });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        heroSeq.concat($$('.hero-phone')).forEach(function (el) { el.classList.add('in'); });
      });
    });
  }

  /* ---------- Count-up numbers ---------- */
  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (!animated || isNaN(target)) { el.textContent = target; return; }
    var start = null;
    var dur = 1600;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (animated) $$('[data-count]').forEach(function (el) { el.textContent = '0'; });

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = $$('[data-reveal], [data-card], [data-role], .mask').filter(function (el) {
    return !el.closest('.hero');
  });

  // Stagger lines inside the same heading
  $$('h2').forEach(function (h) {
    $$('.mask', h).forEach(function (m, i) { m.style.setProperty('--d', (i * 0.12).toFixed(2) + 's'); });
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (entry, i) {
        var el = entry.target;
        if (el.hasAttribute('data-card')) el.style.setProperty('--d', (Math.min(i, 6) * 0.08).toFixed(2) + 's');
        el.classList.add('in');
        if (el.hasAttribute('data-role')) el.classList.add('is-lit');
        $$('[data-count]', el).forEach(countUp);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in', 'is-lit'); });
  }

  /* ---------- Card spotlight ---------- */
  $$('.card').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- Copy email ---------- */
  var copyBtn = $('#copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      var label = $('span', copyBtn);
      var done = function () {
        copyBtn.classList.add('is-done');
        label.textContent = 'Copied';
        setTimeout(function () { copyBtn.classList.remove('is-done'); label.textContent = 'Copy'; }, 2000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, function () { window.location.href = 'mailto:' + email; });
      } else {
        window.location.href = 'mailto:' + email;
      }
    });
  }

  /* ---------- Shipped games showcase ---------- */
  // Desktop: the sticky phone swaps to the game whose panel is mid-screen.
  // Each game has one image: its first store screenshot.
  var showcase = $('.showcase');
  var games = $$('.game');
  var stageImgs = $$('#stageScreen img');
  var stageNum = $('#stageNum');
  var activeGame = -1;

  function setGame(g) {
    if (g === activeGame || g < 0) return;
    activeGame = g;
    games.forEach(function (el, i) { el.classList.toggle('is-active', i === g); });
    stageImgs.forEach(function (img) { img.classList.toggle('on', +img.dataset.g === g); });
    var accent = getComputedStyle(games[g]).getPropertyValue('--accent').trim();
    if (accent) showcase.style.setProperty('--accent', accent);
    if (stageNum) stageNum.textContent = ('0' + (g + 1)).slice(-2);
  }

  if (showcase && games.length && 'IntersectionObserver' in window) {
    var gameIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setGame(games.indexOf(e.target));
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    games.forEach(function (g) { gameIO.observe(g); });
  }

  /* ==========================================================================
     GSAP scroll-scrubbed scenes
     ========================================================================== */
  if (!animated || !hasGsap) return;

  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);

  // NOTE: create triggers in page order. The pinned hero must come first so
  // every later trigger accounts for the scroll space its pin adds.
  var mm = gsap.matchMedia();

  // Hero: copy recedes, phones rise and fan out
  mm.add('(min-width: 901px)', function () {
    var tl = gsap.timeline({
      scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=85%', scrub: 0.8, pin: true, anticipatePin: 1 }
    });
    tl.to('.hero-copy', { yPercent: -18, opacity: 0, scale: 0.94, ease: 'none', duration: 0.5 }, 0)
      .to('.hero-phones', { y: function () { return -window.innerHeight * 0.42; }, ease: 'none', duration: 1 }, 0)
      .to('.hp-center', { scale: 1.12, ease: 'none', duration: 1 }, 0)
      .to('.hp-left', { xPercent: -42, rotation: -13, y: 30, ease: 'none', duration: 1 }, 0)
      .to('.hp-right', { xPercent: 42, rotation: 13, y: 30, ease: 'none', duration: 1 }, 0)
      .to('.hero-glow', { scale: 1.25, ease: 'none', duration: 1 }, 0)
      .to('.scroll-cue', { opacity: 0, ease: 'none', duration: 0.15 }, 0);
  });

  mm.add('(max-width: 900px)', function () {
    gsap.to('.hero-copy', {
      yPercent: -12, opacity: 0.2, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 30%', scrub: true }
    });
    gsap.to('.hp-left', { xPercent: -18, rotation: -11, ease: 'none', scrollTrigger: { trigger: '.hero-phones', start: 'top 85%', end: 'bottom 40%', scrub: true } });
    gsap.to('.hp-right', { xPercent: 18, rotation: 11, ease: 'none', scrollTrigger: { trigger: '.hero-phones', start: 'top 85%', end: 'bottom 40%', scrub: true } });
  });

  // Split the statement into words, keeping <em> highlights
  var statement = $('[data-words]');
  if (statement) {
    var wrapWords = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var s = document.createElement('span');
            s.className = 'w';
            s.textContent = part;
            frag.appendChild(s);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          wrapWords(child);
        }
      });
    };
    wrapWords(statement);
    gsap.fromTo($$('.w', statement), { opacity: 0.13 }, {
      opacity: 1,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: { trigger: statement, start: 'top 80%', end: 'bottom 45%', scrub: 0.6 }
    });
  }

  // "Shipped." zooms down into place
  gsap.fromTo('.ship-word', { scale: 1.9, opacity: 0.08 }, {
    scale: 1, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: '.ship-intro', start: 'top bottom', end: 'top 15%', scrub: 0.6 }
  });

  // Showcase phone eases in as the section arrives (desktop only)
  mm.add('(min-width: 901px)', function () {
    gsap.fromTo('.showcase-stage .phone-xl', { y: 120, rotation: -4, scale: 0.9 }, {
      y: 0, rotation: 0, scale: 1, ease: 'none',
      scrollTrigger: { trigger: '.showcase', start: 'top bottom', end: 'top top', scrub: 0.6 }
    });
  });

  // Timeline line draws as you read
  gsap.to('.timeline-line span', {
    scaleY: 1, ease: 'none',
    scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 60%', scrub: 0.4 }
  });

  // Contact heading gently scales up into view
  gsap.fromTo('.contact-title', { scale: 0.9 }, {
    scale: 1, ease: 'none',
    scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'top 30%', scrub: 0.6 }
  });

  window.addEventListener('load', function () { window.ScrollTrigger.refresh(); });
})();
