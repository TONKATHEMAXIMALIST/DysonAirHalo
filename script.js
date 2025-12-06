// Simple JS for nav + submenu + footer year

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Submenu toggles (on click for accessibility / mobile)
  const submenuToggles = document.querySelectorAll(".submenu-toggle");

  submenuToggles.forEach(toggle => {
    const parent = toggle.closest(".has-submenu");
    const submenu = parent ? parent.querySelector(".submenu") : null;

    if (!submenu) return;

    toggle.addEventListener("click", () => {
      const isOpen = submenu.style.display === "block";
      // Close all other submenus
      document.querySelectorAll(".submenu").forEach(sm => {
        sm.style.display = "none";
      });
      submenu.style.display = isOpen ? "none" : "block";
    });

    // Optional: basic hover open on desktop
    parent.addEventListener("mouseenter", () => {
      if (window.innerWidth > 800) {
        submenu.style.display = "block";
      }
    });
    parent.addEventListener("mouseleave", () => {
      if (window.innerWidth > 800) {
        submenu.style.display = "none";
      }
    });
  });

  // Dynamic footer year
  const footer = document.querySelector(".site-footer");
  if (footer) {
    const p = footer.querySelector(".footer-bottom p");
    if (p) {
      const text = p.textContent;
      const year = new Date().getFullYear();
      p.textContent = text.replace("{{year}}", year);
    }
  }

  // Fake "Add to basket" count increment just for demo
  const basketCount = document.querySelector(".basket-count");
  const addButtons = document.querySelectorAll(".product-actions .btn-primary");

  if (basketCount) {
    let count = 0;
    addButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        count += 1;
        basketCount.textContent = count;
      });
    });
  }
});
