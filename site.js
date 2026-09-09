(() => {
  const revealTargets = document.querySelectorAll([
    ".page-hero .container",
    ".intro-grid",
    ".chapter-aside",
    ".track",
    ".section-heading",
    ".album-intro",
    ".photo-button",
    ".previous-track",
    ".merch-item",
    ".social-panel",
    ".site-footer .footer-inner"
  ].join(","));

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const Observer = window.IntersectionObserver;
  const supportsObserver = typeof Observer === "function" && typeof Observer.prototype?.observe === "function";

  if (revealTargets.length && !reducedMotion && supportsObserver) {
    let observerNotified = false;
    const observer = new Observer((entries) => {
      observerNotified = true;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealTargets.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 80, 160)}ms`);
      observer.observe(element);
    });
    const sentinel = document.querySelector(".site-nav");
    if (sentinel) observer.observe(sentinel);
    window.setTimeout(() => {
      if (!observerNotified) revealTargets.forEach((element) => element.classList.add("is-visible"));
    }, 1200);
  }

  const dialog = document.querySelector("[data-lightbox]");
  if (!dialog) return;
  const image = dialog.querySelector("img");
  const close = dialog.querySelector("[data-lightbox-close]");
  let returnTarget = null;

  const closeDialog = () => {
    dialog.hidden = true;
    document.body.style.overflow = "";
    if (returnTarget) returnTarget.focus();
  };

  document.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
    const open = () => {
      returnTarget = trigger;
      image.src = trigger.dataset.lightboxSrc;
      image.alt = trigger.dataset.lightboxAlt || "";
      dialog.hidden = false;
      document.body.style.overflow = "hidden";
      close.focus();
    };
    trigger.addEventListener("click", open);
    if (trigger.getAttribute("role") === "button") trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
  });
  close.addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDialog();
    if (event.key === "Tab") { event.preventDefault(); close.focus(); }
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !dialog.hidden) closeDialog(); });
})();
