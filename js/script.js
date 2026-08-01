/* ============================================================
   WEB PROFIL — LANDING PAGE — script.js
   - Toggle menu mobile
   - Scrollspy: highlight menu sesuai section yang aktif
   - Progress bar scroll
   - Tombol kembali ke atas
   - Animasi reveal saat scroll
   - Tab Portofolio (Web / Figma)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ---- 1. Toggle menu mobile ---- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks  = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  /* ---- 2. Scrollspy: tandai menu aktif sesuai section di layar ---- */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach(a => {
            a.classList.toggle("active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(sec => spy.observe(sec));
  }

  /* ---- 3. Progress bar & tombol kembali ke atas ---- */
  const progressBar = document.querySelector(".scroll-progress");
  const backTop = document.querySelector(".back-top");

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = pct + "%";
    if (backTop) backTop.classList.toggle("show", scrollTop > 480);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---- 4. Animasi reveal saat elemen masuk viewport ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in-view"));
  }

  /* ---- 5. Tab Portofolio (Web / Figma) ---- */
  const tabButtons = document.querySelectorAll(".tab-btn");
  const panels     = document.querySelectorAll(".project-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      panels.forEach(panel => {
        panel.classList.toggle("active", panel.dataset.panel === target);
      });
    });
  });

});
