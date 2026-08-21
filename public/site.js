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
