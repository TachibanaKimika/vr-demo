import * as THREE from 'three';
import models, { loadResource } from './models';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

const start = async (ref) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  ref.appendChild(renderer.domElement);
  scene.background = new THREE.Color(0xbfe3dd);

  models.forEach(model => scene.add(model));
  const model = await loadResource();
  model.position.set(1, 1, 0);
  model.scale.set(0.1, 0.1, 0.1);
  scene.add(model);

  camera.position.set(0, 0, 3);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);
  controls.minDistance = 2;
  controls.maxDistance = 50;
  controls.enablePan = true;
  // controls.target.set(0, 0.5, 0);
  // 好像没用
  controls.keys = {
    LEFT: 'KeyA', //left arrow
    UP: 'KeyW', // up arrow
    RIGHT: 'KeyD', // right arrow
    BOTTOM: 'KeyS' // down arrow
  };
  function render() {
    renderer.render(scene, camera);
  }
  return render;
};

export default start;