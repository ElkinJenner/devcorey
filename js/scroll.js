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

// Agregar los eventos de scroll y teclado
window.addEventListener("wheel", handleScroll, { passive: false });
window.addEventListener("keydown", handleKey);