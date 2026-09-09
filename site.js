(() => {
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
