(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyDoc = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    bodyDoc.classList.toggle("no-scroll");

    mobileMenuRef.classList.toggle("is-open");

  });

 
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    menuBtnRef.setAttribute('aria-expanded', false);
     bodyDoc.classList.remove("no-scroll");
    });
  
  window.matchMedia('(max-width: 767px)').addEventListener('change', e => {
    if (!e.matches) return;
      if (document.querySelector("[data-menu]").classList.contains("is-open"))  {
        bodyDoc.classList.toggle("no-scroll");
      }
  });

  
})();