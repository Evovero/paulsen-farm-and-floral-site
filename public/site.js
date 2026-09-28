/* Paulsen Farm and Floral - tiny interaction layer (no dependencies) */
(function () {
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll(".nav__item > a, .nav__group a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Dropdown panels. Desktop also opens them on hover and on keyboard focus via CSS;
  // this handles touch, mobile accordion, and the explicit caret click.
  var items = document.querySelectorAll(".nav__item--has-panel");
  items.forEach(function (item) {
    var caret = item.querySelector(".nav__caret");
    if (!caret) return;
    caret.addEventListener("click", function (e) {
      e.preventDefault();
      var open = item.classList.contains("is-open");
      items.forEach(function (other) {
        other.classList.remove("is-open");
        var c = other.querySelector(".nav__caret");
        if (c) c.setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("is-open");
        caret.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".nav__item--has-panel")) return;
    items.forEach(function (item) {
      item.classList.remove("is-open");
      var c = item.querySelector(".nav__caret");
      if (c) c.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    items.forEach(function (item) {
      item.classList.remove("is-open");
      var c = item.querySelector(".nav__caret");
      if (c) c.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ----------------------------------------------------------------
   Conversion signals. These are the events that make the site
   measurable. They no-op silently until an analytics ID exists, so
   they are safe to ship now and start working the moment it does.

   Added 2026-09-27 as part of the GA4 tracking retrofit (see MN Valley
   Concrete's public/site.js for the pattern this was copied from).
---------------------------------------------------------------- */
(function () {
  function track(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
    else if (window.dataLayer) window.dataLayer.push(Object.assign({ event: name }, params || {}));
  }

  // Phone taps, anywhere on the site.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (a) track('contact_phone', { method: 'phone', link_url: a.getAttribute('href'), page_path: location.pathname });
  }, true);

  // Form submissions, captured at submit so it fires even if the
  // redirect to the thank-you page is slow or blocked.
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (f && f.getAttribute && f.getAttribute('name') === 'contact') {
      track('generate_lead', { form_name: f.getAttribute('name'), page_path: location.pathname });
    }
  }, true);

  // The thank-you page is the confirmed conversion.
  if (location.pathname.indexOf('/thankyou') === 0) {
    track('generate_lead_confirmed', { page_path: location.pathname });
  }
})();
