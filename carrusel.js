function mover(btn, direccion) {
      const carrusel = btn.parentElement;
      const imagenes = carrusel.querySelectorAll("img");
      let indexActual = Array.from(imagenes).findIndex(img => img.classList.contains("activa"));
      imagenes[indexActual].classList.remove("activa");

      let nuevoIndex = (indexActual + direccion + imagenes.length) % imagenes.length;
      imagenes[nuevoIndex].classList.add("activa");
    }