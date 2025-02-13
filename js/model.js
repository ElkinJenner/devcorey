// Importar librerías de Three.js
const container = document.getElementById("avatar-container");

// Escena
const scene = new THREE.Scene();
scene.background = null; // Fondo transparente
//scene.background = new THREE.Color(0xbb0000);


// Cámara
const camera = new THREE.PerspectiveCamera(95, container.clientWidth / container.clientHeight, 1, 100);
camera.position.set(0, 5, 5);

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Alpha para transparencia
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Luz ambiental y direccional
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

// Variable para el modelo
let model;

// Función para ajustar el tamaño del modelo según el contenedor
const adjustModelScale = () => {
    if (model) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        // Escalar el modelo proporcionalmente al tamaño del contenedor
        const scaleFactor = Math.min(containerWidth, containerHeight) / 200; // Ajusta 130 según la escala deseada
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
};

// Cargar el modelo GLTF
const loader = new THREE.GLTFLoader();
loader.load("models/model_robot.glb", function (gltf) {
    model = gltf.scene;
    scene.add(model);

    // Ajustar la escala inicial
    adjustModelScale();

    // Configurar rotación inicial para que mire hacia la cámara
    model.rotation.set(0, Math.PI /-1 , 0); // Rotación en el eje Y para que esté de frente

    // Variables para la animación
    let rotationDirection = 2; // 1 para girar a la derecha, -1 para girar a la izquierda
    let rotationProgress = 0; // Seguimiento del progreso de la rotación
    const rotationSpeed = 0.005; // Velocidad de rotación
    const maxRotation = (Math.PI / 1, 1); // Máxima rotación: 10% (en radianes)

    // Animación
    const animate = () => {
        requestAnimationFrame(animate);

        // Rotación en el eje Y (bucle entre -10% y 10%)
        if (model) {
            rotationProgress += rotationSpeed * rotationDirection;

            // Cambiar dirección al alcanzar el límite (10% de rotación)
            if (rotationProgress >= maxRotation || rotationProgress <= -maxRotation) {
                rotationDirection *= -1; // Cambiar dirección
            }

            // Aplicar la rotación
            model.rotation.y = (Math.PI /-2, -1) + rotationProgress; // Siempre iniciar desde el frente
        }

        renderer.render(scene, camera);
    };

    animate();
}, undefined, function (error) {
    console.error("Error cargando el modelo:", error);
});

// Responsividad
window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Ajustar la escala del modelo al redimensionar
    adjustModelScale();
});