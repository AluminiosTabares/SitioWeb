document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-menu");

  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("show");
    document.body.classList.toggle("no-scroll", isOpen);
    overlay.classList.toggle("show", isOpen);
  });

  // Mostrar submenús en móviles y tablets
  document.querySelectorAll(".has-submenu > a").forEach(link => {
  link.addEventListener("click", (e) => {
    // Detectar pantallas pequeñas (mobile/tablet)
    if (window.innerWidth <= 1148) {
      const parentLi = link.parentElement;
      const submenu = parentLi.querySelector(".submenu");

      if (submenu) {
        e.preventDefault(); // solo si tiene submenu
        parentLi.classList.toggle("open");
      }
    }
  });
});

  // Resaltar el enlace activo
  const currentURL = window.location.pathname;
  document.querySelectorAll('.submenu a').forEach(link => {
    if (link.getAttribute('href') === currentURL) {
      link.classList.add('active');
    }
  });

  // Botón de cerrar menú
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("show");
      overlay.classList.remove("show");
      document.body.classList.remove("no-scroll");
    });
  }
});



  




  