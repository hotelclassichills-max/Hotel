// Hotel Classic Hills — shared behaviour
document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav ------------------------------------------------------------
     Toggle button opens/closes; backdrop click, Escape key, and picking a
     link all close it; body scroll is locked while open.               */
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
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) closeMobileNav();
      else openMobileNav();
    });
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', closeMobileNav);
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMobileNav);
    });
    mobileNav.addEventListener('click', function (e) {
      if (e.target === mobileNav) closeMobileNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMobileNav();
    });
  }

  /* Header shadow on scroll (subtle) -------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10 ? '0 6px 18px -12px rgba(0,0,0,.25)' : 'none';
    });
  }

  /* Lightbox ---------------------------------------------------------
     Any element with [data-lightbox] pointing to a group name, and a
     child <img> or the element itself carrying data-full / data-caption
     is treated as a gallery trigger.                                  */
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
      var group = el.getAttribute('data-lightbox');
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

  /* Gallery category filters ------------------------------------------ */
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

  /* Live weather — floating widget (McLeod Ganj, Dharamshala) -------------
     Uses Open-Meteo (free, no API key). Coordinates: 32.2432N, 76.3222E.
     Present on every page as a small floating badge; expands on
     hover/tap to show fuller detail. FIX: this fetch used to be nested
     inside the gallery-tabs check above, so it only ever ran on pages
     that had gallery filter tabs (i.e. never on the homepage, where the
     widget actually lived). It is now a top-level block that always runs
     wherever #weather-widget exists in the page.                         */
  var wxWidget = document.getElementById('weather-widget');
  if (wxWidget) {
    var wxCond = document.getElementById('wx-cond');
    var wxSub = document.getElementById('wx-sub');
    var wxTemp = document.getElementById('wx-temp');
    var wxIcon = document.getElementById('wx-icon');

    var WX_CODES = {
      0: 'Clear Sky', 1: 'Mainly Clear', 2: 'Partly Cloudy', 3: 'Overcast',
      45: 'Fog', 48: 'Fog', 51: 'Light Drizzle', 53: 'Drizzle', 55: 'Dense Drizzle',
      61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain', 71: 'Light Snow', 73: 'Snow',
      75: 'Heavy Snow', 80: 'Rain Showers', 81: 'Rain Showers', 82: 'Violent Showers',
      95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm'
    };
    /* Minimal icon set keyed by rough condition family, in the same
       line-icon style as the rest of the site. */
    var WX_ICON_SVG = {
      sun: '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
      cloud: '<path d="M6.5 19a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.9 8.5 4.5 4.5 0 0 1 17 19H6.5z"/>',
      rain: '<path d="M6.5 15a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.9 4.5 4.5 4.5 0 0 1 17 15H6.5z"/><path d="M8 19l-1 3M12 19l-1 3M16 19l-1 3"/>',
      storm: '<path d="M6.5 13a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.9 2.5 4.5 4.5 0 0 1 17 13H6.5z"/><path d="M13 13l-3 5h3l-2 4"/>',
      snow: '<path d="M6.5 14a4.5 4.5 0 0 1-.4-8.98A6 6 0 0 1 17.9 3.5 4.5 4.5 0 0 1 17 14H6.5z"/><path d="M9 18v4M12 18v4M15 18v4M9 20l6 0M9 22l6 0" stroke-linecap="round"/>',
      fog: '<path d="M4 9h16M4 13h16M4 17h10" stroke-linecap="round"/>'
    };
    function iconFor(code) {
      if ([0, 1].indexOf(code) > -1) return WX_ICON_SVG.sun;
      if ([2, 3].indexOf(code) > -1) return WX_ICON_SVG.cloud;
      if ([45, 48].indexOf(code) > -1) return WX_ICON_SVG.fog;
      if ([51, 53, 55, 61, 63, 65, 80, 81, 82].indexOf(code) > -1) return WX_ICON_SVG.rain;
      if ([71, 73, 75].indexOf(code) > -1) return WX_ICON_SVG.snow;
      if ([95, 96, 99].indexOf(code) > -1) return WX_ICON_SVG.storm;
      return WX_ICON_SVG.sun;
    }

    fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2432&longitude=76.3222&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FKolkata')
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (!data || !data.current) throw new Error('no data');
        var cur = data.current;
        var day = data.daily;
        var cond = WX_CODES[cur.weather_code] || 'Current Conditions';
        wxCond.textContent = cond;
        wxTemp.textContent = Math.round(cur.temperature_2m) + '\u00B0C';
        if (wxIcon) wxIcon.innerHTML = iconFor(cur.weather_code);
        var hi = day ? Math.round(day.temperature_2m_max[0]) : null;
        var lo = day ? Math.round(day.temperature_2m_min[0]) : null;
        var parts = [];
        if (hi !== null && lo !== null) parts.push('H:' + hi + '\u00B0 L:' + lo + '\u00B0');
        parts.push('Humidity ' + Math.round(cur.relative_humidity_2m) + '%');
        parts.push('Wind ' + Math.round(cur.wind_speed_10m) + ' km/h');
        wxSub.textContent = parts.join(' \u00B7 ');
        wxWidget.classList.remove('wx-loading');
        wxWidget.classList.add('wx-ready');
      })
      .catch(function () {
        wxCond.textContent = 'Weather unavailable';
        wxSub.textContent = 'McLeod Ganj, Dharamshala';
        wxWidget.classList.remove('wx-loading');
        wxWidget.classList.add('wx-error');
      });

    /* Tap-to-expand on touch devices (hover already expands via CSS) */
    wxWidget.addEventListener('click', function () {
      wxWidget.classList.toggle('wx-expanded');
    });
  }

  /* Scroll-reveal animations ------------------------------------------
     Adds .in-view to [data-reveal] elements as they enter the viewport.
     prefers-reduced-motion is already handled globally at the top of
     style.css (it collapses all transitions/animations to ~0), so no
     extra branching is needed here. If IntersectionObserver isn't
     available, everything just shows immediately.                     */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }
  }
});
