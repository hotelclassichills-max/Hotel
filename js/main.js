// Hotel Classic Hills — shared behaviour (enhanced)
// Consolidated mobile nav, lightbox, gallery filters, live weather widget,
// premium WhatsApp FAB, subtle reveal animations, and UX fixes.

document.addEventListener('DOMContentLoaded', function () {
  /* --------------------------- Mobile nav (fixed) --------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileClose = document.querySelector('.mobile-nav-close');
  function openMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    document.body.classList.add('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
  }
  function closeMobileNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    document.body.classList.remove('nav-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var isOpen = mobileNav.classList.contains('open');
      document.body.classList.toggle('nav-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', closeMobileNav);
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { closeMobileNav(); });
    });
  }

  /* --------------------------- Header shadow on scroll --------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10 ? '0 6px 18px -12px rgba(0,0,0,.25)' : 'none';
    });
  }

  /* --------------------------- Lightbox (unchanged) --------------------------- */
  var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  if (triggers.length) {
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML =
      '<button class="lb-btn lb-close" aria-label="Close">' +
        '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
      '<button class="lb-btn lb-prev" aria-label="Previous">' +
        '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></button>' +
      '<img alt="">' +
      '<button class="lb-btn lb-next" aria-label="Next">' +
        '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></button>' +
      '<div class="lightbox-cap"></div>';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector('img');
    var lbCap = lb.querySelector('.lightbox-cap');
    var groups = {};
    var currentGroup = [];
    var currentIndex = 0;

    triggers.forEach(function (el) {
      var group = el.getAttribute('data-lightbox') || 'default';
      var full = el.getAttribute('data-full') || (el.querySelector('img') && el.querySelector('img').src);
      var cap = el.getAttribute('data-caption') || (el.querySelector('img') && el.querySelector('img').alt) || '';
      if (!groups[group]) groups[group] = [];
      groups[group].push({ full: full, cap: cap });
      el.addEventListener('click', function (e) {
        e.preventDefault();
        currentGroup = groups[group];
        currentIndex = currentGroup.findIndex(function (i) { return i.full === full; });
        show();
        lb.classList.add('open');
      });
    });

    function show() {
      var item = currentGroup[currentIndex];
      lbImg.src = item.full;
      lbImg.alt = item.cap;
      lbCap.textContent = item.cap;
    }
    function next() { currentIndex = (currentIndex + 1) % currentGroup.length; show(); }
    function prev() { currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length; show(); }

    lb.querySelector('.lb-close').addEventListener('click', function () { lb.classList.remove('open'); });
    lb.querySelector('.lb-next').addEventListener('click', next);
    lb.querySelector('.lb-prev').addEventListener('click', prev);
    lb.addEventListener('click', function (e) { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lb.classList.remove('open');
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    /* basic swipe support */
    var touchX = null;
    lb.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; });
    lb.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (dx > 50) prev();
      if (dx < -50) next();
      touchX = null;
    });
  }

  /* --------------------------- Gallery category filters --------------------------- */
  var tabs = document.querySelectorAll('.gal-tab');
  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var cat = tab.getAttribute('data-cat');
        document.querySelectorAll('.masonry figure').forEach(function (fig) {
          var show = cat === 'all' || fig.getAttribute('data-cat') === cat;
          fig.style.display = show ? '' : 'none';
        });
      });
    });
  }

  /* --------------------------- Live weather floating widget --------------------------- */
  // Use Open-Meteo (no API key) for McLeod Ganj / Dharamshala. Coordinates: 32.2432N, 76.3222E
  (function createWeatherWidget() {
    var coords = {lat: 32.2432, lon: 76.3222};
    var wxMap = {
      0: {icon: '☀️', label: 'Clear'},
      1: {icon: '🌤️', label: 'Mainly Clear'},
      2: {icon: '⛅', label: 'Partly Cloudy'},
      3: {icon: '☁️', label: 'Overcast'},
      45: {icon: '🌫️', label: 'Fog'},
      48: {icon: '🌫️', label: 'Fog'},
      51: {icon: '🌦️', label: 'Light Drizzle'},
      53: {icon: '🌦️', label: 'Drizzle'},
      55: {icon: '🌧️', label: 'Dense Drizzle'},
      61: {icon: '🌧️', label: 'Light Rain'},
      63: {icon: '🌧️', label: 'Rain'},
      65: {icon: '⛈️', label: 'Heavy Rain'},
      71: {icon: '🌨️', label: 'Light Snow'},
      73: {icon: '🌨️', label: 'Snow'},
      75: {icon: '❄️', label: 'Heavy Snow'},
      80: {icon: '🌦️', label: 'Showers'},
      81: {icon: '🌦️', label: 'Showers'},
      82: {icon: '⛈️', label: 'Violent Showers'},
      95: {icon: '⛈️', label: 'Thunderstorm'},
      96: {icon: '⛈️', label: 'Thunderstorm'},
      99: {icon: '⛈️', label: 'Thunderstorm'}
    };

    var wx = document.createElement('div');
    wx.className = 'floating-weather wx-loading';
    wx.setAttribute('aria-hidden', 'false');
    wx.innerHTML = '\n      <button class="fw-toggle" aria-label="Weather">' +
                   '<span class="fw-icon">&nbsp;</span>' +
                   '<span class="fw-temp">&mdash;</span>' +
                   '</button>' +
                   '<div class="fw-panel" aria-hidden="true">' +
                   '<div class="fw-main"><span class="fw-icon-large">&nbsp;</span>' +
                   '<div class="fw-info"><div class="fw-cond">Loading&hellip;</div><div class="fw-loc">McLeod Ganj</div></div></div>' +
                   '<div class="fw-extra"><span class="fw-hilo"></span><span class="fw-wind"></span></div>' +
                   '</div>';
    document.body.appendChild(wx);

    var fwToggle = wx.querySelector('.fw-toggle');
    var fwPanel = wx.querySelector('.fw-panel');
    fwToggle.addEventListener('click', function (e) {
      var expanded = fwPanel.classList.toggle('open');
      fwPanel.setAttribute('aria-hidden', expanded ? 'false' : 'true');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!wx.contains(e.target)) {
        fwPanel.classList.remove('open');
        fwPanel.setAttribute('aria-hidden', 'true');
      }
    });

    // Fetch weather
    function updateWeather() {
      var url = 'https://api.open-meteo.com/v1/forecast?latitude=' + coords.lat + '&longitude=' + coords.lon + '&current_weather=true&timezone=auto&daily=temperature_2m_max,temperature_2m_min';
      fetch(url).then(function (res) { return res.json(); }).then(function (data) {
        if (!data || !data.current_weather) throw new Error('no data');
        var cur = data.current_weather;
        var day = data.daily || null;
        var code = cur.weathercode;
        var meta = wxMap.hasOwnProperty(code) ? wxMap[code] : {icon:'❔', label:'Current'};
        wx.classList.remove('wx-loading');
        wx.querySelector('.fw-icon').textContent = meta.icon;
        wx.querySelector('.fw-icon-large').textContent = meta.icon;
        wx.querySelector('.fw-temp').textContent = Math.round(cur.temperature) + '\u00B0C';
        wx.querySelector('.fw-cond').textContent = meta.label;
        wx.querySelector('.fw-loc').textContent = 'McLeod Ganj';
        var hi = day ? Math.round(day.temperature_2m_max[0]) : null;
        var lo = day ? Math.round(day.temperature_2m_min[0]) : null;
        var hilo = (hi !== null && lo !== null) ? ('H:' + hi + '\u00B0 L:' + lo + '\u00B0') : '';
        wx.querySelector('.fw-hilo').textContent = hilo;
        wx.querySelector('.fw-wind').textContent = 'Wind ' + (cur.windspeed ? Math.round(cur.windspeed) + ' km/h' : '—');
      }).catch(function (err) {
        wx.classList.remove('wx-loading');
        wx.classList.add('wx-error');
        wx.querySelector('.fw-cond').textContent = 'Weather unavailable';
        wx.querySelector('.fw-temp').textContent = '--\u00B0C';
        wx.querySelector('.fw-loc').textContent = 'McLeod Ganj';
      });
    }

    // Initial fetch and periodic refresh (every 15 minutes)
    updateWeather();
    setInterval(updateWeather, 15 * 60 * 1000);

    // Respect reduced motion for panel transitions
  })();

  /* --------------------------- Premium Floating WhatsApp Button --------------------------- */
  (function createWhatsAppFAB() {
    // Centralised contact config (easy to change)
    var WA_NUMBER = '919816024647'; // international format without +
    var WA_TEXT = 'Hi, I\'d like to check availability at Hotel Classic Hills';

    var fab = document.createElement('a');
    fab.className = 'fab-whatsapp';
    fab.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_TEXT);
    fab.target = '_blank';
    fab.rel = 'noopener';
    fab.setAttribute('aria-label', 'Chat with us on WhatsApp');
    fab.innerHTML = '<span class="fab-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 1C6 1 1.2 5.6 1.2 11.2c0 2 0.6 3.9 1.7 5.6L1 23l6.4-1.7c1.6 0.9 3.4 1.4 5.6 1.4 6 0 10.8-4.6 10.8-10.8 0-3-1.2-5.8-3.2-7.8zM12 20.2c-1.8 0-3.5-0.5-5-1.4l-0.3-0.2-3.8 1 1-3.7-0.2-0.4C2.3 12.6 1.8 11 1.8 9.2 1.8 5 6 1.8 10.9 1.8c3 0 5.6 1.3 7.5 3.5 1.9 2.2 2.7 5.1 2 8.1-0.6 2.6-2.6 4.9-5 6.1-1 0.5-2.1 0.8-3.2 0.8z"/></svg></span>' +
                     '<span class="fab-label">Chat with us on WhatsApp</span>';
    document.body.appendChild(fab);

    // Prevent overlap: weather sits bottom-left, fab sits bottom-right in CSS
  })();

  /* --------------------------- Subtle reveal on scroll (IntersectionObserver) --------------------------- */
  (function revealOnScroll() {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.06 });

      document.querySelectorAll('.section, .room-card, .attraction-card, .masonry figure, .feature-banner, .split').forEach(function (el) {
        if (!el.classList.contains('no-reveal')) {
          el.classList.add('reveal');
          io.observe(el);
        }
      });
    } else {
      // Fallback: simply reveal
      document.querySelectorAll('.section, .room-card, .attraction-card, .masonry figure, .feature-banner, .split').forEach(function (el) {
        el.classList.add('in');
      });
    }
  })();

  /* --------------------------- Small performance helpers --------------------------- */
  // Ensure images use loading=lazy where appropriate (non-hero)
  document.querySelectorAll('img').forEach(function (img) {
    try {
      var src = img.getAttribute('src') || '';
      // If not a hero / above-the-fold with fetchpriority, set lazy
      if (!img.hasAttribute('fetchpriority') && src.indexOf('thumb') !== -1) img.loading = 'lazy';
    } catch (e) {}
  });

});
