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

// Luz ambiental para iluminación general
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
scene.add(ambientLight);

// Luz direccional para sombras y detalles
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
directionalLight.position.set(5, 10, 7.5);
directionalLight.castShadow = true; // Habilita las sombras
scene.add(directionalLight);

// Luz puntual para detalles adicionales
const pointLight = new THREE.PointLight(0xffffff, 0.6);
pointLight.position.set(2, 5, 2);
scene.add(pointLight);



let model;
// Carga de objeto 3D
const loader = new GLTFLoader();
loader.load('../renders/Control.glb', function (gltf) {
    model = gltf.scene;

    // Ajustar la escala
    model.scale.set(0.5, 0.5, 0.5); // Escala a la mitad


    // Ajustar rotación
    model.rotation.x = 1.5;
    model.rotation.y = Math.PI; // 180 grados para que esté mirando hacia la cámara
    model.rotation.z = 0;

    // Ajustar la posición
    model.position.set(0, 0, 0); // Centrado en la escena

    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});

// Configuración de la cámara
camera.position.z = 7; // Ajustar según sea necesario

// Animación del modelo 
function animate() {
    if (model) {
        model.rotation.z += 0.01; // Rotación automática
    }

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);


