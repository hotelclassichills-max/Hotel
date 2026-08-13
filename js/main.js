// Hotel Classic Hills — shared behaviour
document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav ---------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  var mobileClose = document.querySelector('.mobile-nav-close');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () { mobileNav.classList.add('open'); });
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', function () { mobileNav.classList.remove('open'); });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
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
});
