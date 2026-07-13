// Seleccionamos los elementos del HTML que necesitamos manipular
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Añadimos un "escuchador de eventos" al icono de hamburguesa
// Esto significa que cuando el usuario haga clic en él, se ejecutará una función
hamburger.addEventListener("click", () => {
    // Alterna la clase "active" en el icono de la hamburguesa
    // Esto activa las animaciones CSS para que se convierta en una "X"
    hamburger.classList.toggle("active");

    // Alterna la clase "active" en el menú de navegación
    // Esto hace que el menú aparezca o se oculte en móviles
    navMenu.classList.toggle("active");
});

// Opcional: Cierra el menú cuando se hace clic en un enlace
// Esto es útil para que el menú se oculte automáticamente después de seleccionar una sección
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
