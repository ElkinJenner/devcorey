// Seleccionar ambos elementos <main>
const mains = document.querySelectorAll("main");

// Variable para saber en qué sección estamos actualmente
let currentIndex = 0;

// Función para desplazarse a una sección específica
function scrollToSection(index) {
    if (index >= 0 && index < mains.length) {
        currentIndex = index;

        // Desplazar suavemente hacia la nueva sección
        mains[currentIndex].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// Función para manejar el scroll del mouse
function handleScroll(event) {
    // Evitar el comportamiento predeterminado del scroll
    event.preventDefault();

    // Detectar la dirección del scroll (hacia abajo o hacia arriba)
    const direction = event.deltaY > 0 ? 1 : -1;

    // Desplazar a la sección correspondiente
    scrollToSection(currentIndex + direction);
}

// Función para manejar las teclas de flecha
function handleKey(event) {
    if (event.key === "ArrowDown") {
        // Desplazar hacia la sección inferior
        scrollToSection(currentIndex + 1);
    } else if (event.key === "ArrowUp") {
        // Desplazar hacia la sección superior
        scrollToSection(currentIndex - 1);
    }
}


// Seleccionar el elemento del menú
const navbarBottom = document.querySelector(".navbar_bottom");

// Variable para rastrear la última posición del scroll
let lastScrollY = window.scrollY;

// Función para mostrar u ocultar el menú dependiendo de la dirección del scroll
function handleNavbarVisibility() {
    const currentScrollY = window.scrollY;

    // Mostrar el menú si se está desplazando hacia arriba
    if (currentScrollY < lastScrollY) {
        navbarBottom.style.transform = "translate(-50%, -30px)"; // Aparece
    }
    // Ocultar el menú si se está desplazando hacia abajo
    else {
        navbarBottom.style.transform = "translate(-50%, 100%)"; // Desaparece
    }

    // Actualizar la posición del scroll
    lastScrollY = currentScrollY;
}

// Escuchar el evento de scroll en la ventana
window.addEventListener("scroll", handleNavbarVisibility);
// Agregar los eventos de scroll y teclado
window.addEventListener("wheel", handleScroll, { passive: false });
window.addEventListener("keydown", handleKey);