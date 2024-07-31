import * as THREE from 'https://unpkg.com/three@0.128.0/build/three.module.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometries
const geometry1 = new THREE.BoxGeometry();
const geometry2 = new THREE.SphereGeometry();
const geometry3 = new THREE.ConeGeometry();

// Materials
const material1 = new THREE.MeshStandardMaterial({ color: 0x0077ff });
const textureLoader = new THREE.TextureLoader();

const texture1 = textureLoader.load('assets/textures/texture.jpg');
const texture2 = textureLoader.load('assets/textures/texture2.jpg');
const material2 = new THREE.MeshStandardMaterial({ map: texture1 });
const material3 = new THREE.MeshStandardMaterial({ map: texture2 });

// Meshes
const cube = new THREE.Mesh(geometry1, material1);
const sphere = new THREE.Mesh(geometry2, material2);
const cone = new THREE.Mesh(geometry3, material3);

cube.position.x = -2;
cone.position.x = 2;

scene.add(cube);
scene.add(sphere);
scene.add(cone);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff, 1);
pointLight1.position.set(5, 5, 5);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xffffff, 1);
pointLight2.position.set(-5, -5, -5);
scene.add(pointLight2);

// Load external model
const loader = new GLTFLoader();
loader.load(
  'assets/model/model.gltf',
  function (gltf) {
    console.log('Model loaded successfully.');
    const model = gltf.scene;
    model.position.set(0, -1, 0);
    scene.add(model);
  },
  undefined,
  function (error) {
    console.error('An error happened while loading the model', error);
  }
);

camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();