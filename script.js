document
  .querySelector(".btn-agg-entrada")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtener los valores de los campos de entrada
    const nombre = document.getElementById("nombre").value;
    const destino = document.getElementById("destino").value;
    const resena = document.getElementById("resena").value;
    const estrellas = document.getElementById("estrellas").value;

    // Validar que todos los campos estén completos
    if (!nombre || !destino || !resena || !estrellas) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Crear un nuevo div para la entrada del blog
    const cardBlog = document.createElement("div");
    cardBlog.classList.add("card-blog");

    // Crear el HTML de la nueva entrada
    cardBlog.innerHTML = `
        <h3>
            ${nombre} <br />
            ${destino}
        </h3>
        <p>${resena}</p>
        <h3 class="stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(estrellas)}
        </h3>
    `;

    // Obtener la referencia al primer hijo de .blog (el formulario)
    const blogSection = document.querySelector(".blog");
    const firstChild = blogSection.firstElementChild;

    // Insertar la nueva reseña antes del primer hijo (que es el formulario)
    blogSection.insertBefore(cardBlog, firstChild);

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("destino").value = "";
    document.getElementById("resena").value = "";
    document.getElementById("estrellas").value = "";
  });

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    // Verifica que los elementos existen en la página
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show"); // Alterna la clase 'show' para abrir/cerrar el menú
    });
  }
});
