// Mobile menu, abstract toggles and light/dark switch. No dependencies.
(function () {
  var root = document.documentElement;

  // Theme: remember the visitor's choice when the browser allows it
  try {
    var saved = localStorage.getItem("theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    var themeBtn = document.querySelector(".theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var current = root.getAttribute("data-theme") ||
          (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        var next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
      });
    }

    var menuBtn = document.querySelector(".menu-toggle");
    var links = document.querySelector(".nav-links");
    if (menuBtn && links) {
      menuBtn.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", open);
      });
    }

    // Any button with data-toggle="abstract" opens the .abstract inside the same paper
    document.querySelectorAll('[data-toggle="abstract"]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        var box = btn.closest(".paper").querySelector(".abstract");
        var open = box.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
      });
    });

    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();

// If a banner image cannot be loaded, hide the strip and its credit line
document.addEventListener("DOMContentLoaded", function () {
  var img = document.querySelector(".banner img");
  if (!img) return;
  function hide() {
    var band = img.closest(".banner"); if (band) band.remove();
    var c = document.querySelector(".credit"); if (c) c.style.display = "none";
  }
  img.addEventListener("error", hide);
  if (img.complete && img.naturalWidth === 0) hide();
});
