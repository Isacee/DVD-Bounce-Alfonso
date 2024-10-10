import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(0, 0, 0,);
scene.add(sphere);

camera.position.z = 5;

let velocity = { x: 0.03, y: 0.02 }; 
let scaleFactor = .5;  
let colorChange = true;  

function getRandomColor() {
  return Math.floor(Math.random() * 16777215); 
}

function animate() {

  sphere.position.x += velocity.x;
  sphere.position.y += velocity.y;

  if (sphere.position.x >= 4 || sphere.position.x <= -4) { 
    velocity.x = -velocity.x; 
    sphere.scale.multiplyScalar(scaleFactor);  
    material.color.setHex(getRandomColor());  
  }

  if (sphere.position.y >= 4 || sphere.position.y <= -4) { 
    velocity.y = -velocity.y; 
    sphere.scale.multiplyScalar(scaleFactor);  
    material.color.setHex(getRandomColor());  
  }

  renderer.render(scene, camera);
}
