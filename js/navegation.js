// Seleccionar el enlace y el contenido principal
const linkInfo = document.getElementById("link-info");
const infoSection = document.getElementById("info");

// Escuchar el evento de clic en el enlace
linkInfo.addEventListener("click", (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    // Desplazar suavemente al contenido con el ID "info"
    infoSection.scrollIntoView({
        behavior: "smooth", // Movimiento suave
        block: "start", // Alineación en la parte superior del viewport
    });
});