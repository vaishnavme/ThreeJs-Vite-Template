import * as THREE from "three";

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// change camera accourding to your requirement
const camera = new THREE.PerspectiveCamera(
   60, //degree to show
   window.innerWidth / window.innerHeight,
   0.1, // near fov
   1000 // far fov
);

// camera helper
const cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);

function animate() {
   requestAnimationFrame(animate);
   renderer.render(scene, camera);
}

animate();
