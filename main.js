import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Construcción de la escena 
const scene = new THREE.Scene();
// Construcción de la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crear un renderizador
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
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

// Carga de objeto 3D
const loader = new GLTFLoader();
loader.load('/audi_r8.glb', function (gltf) {
    const model = gltf.scene;
    model.scale.set(0, 0, 0); // Escalar el modelo si es necesario
    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});

// Construcción del cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animación del cubo 
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
