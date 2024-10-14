import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Construcción de la escena 
const scene = new THREE.Scene();
// Construcción de la cámara
const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);




// Crear un renderizador
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(800, 600);
document.getElementById('threejs-container').appendChild(renderer.domElement); // Agregar al contenedor

// Creación control del objeto 
const controls = new OrbitControls(camera, renderer.domElement);

// Luz ambiente 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Color blanco y 50% de intensidad
scene.add(ambientLight);

// Luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Luz blanca intensa
directionalLight.position.set(5, 10, 7.5); // Posicionamos la luz
scene.add(directionalLight);

let model;
// Carga de objeto 3D
const loader = new GLTFLoader();
loader.load('../renders/Xbox.glb', function (gltf) {
    model = gltf.scene;

    // Ajustar la escala
    model.scale.set(18, 18, 18); // Escala a la mitad

    // Ajustar rotación
    model.rotation.x = Math.PI;
    model.rotation.y = Math.PI; // 180 grados para que esté mirando hacia la cámara
    model.rotation.z = Math.PI;

    // Ajustar la posición
    model.position.set(0, -3, 0); // Centrado en la escena

    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});

// Configuración de la cámara
camera.position.z = 7; // Ajustar según sea necesario

// Animación del modelo 
function animate() {
    if (model) {
        model.rotation.y += -0.01; // Rotación automática 
    }

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);


