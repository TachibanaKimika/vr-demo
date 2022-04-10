import * as THREE from 'three';
import models, { loadResource } from './models';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const start = async (ref) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  ref.appendChild(renderer.domElement);

  models.forEach(model => scene.add(model));
  const mainScene = await loadResource();
  scene.add(mainScene);
  camera.position.z = 5;
  camera.position.y = 2;
  // const orbitControls = new OrbitControls(camera, el);
  // orbitControls.addEventListener('change', render);  
  function render() {
    renderer.render(scene, camera);
  }
  render();
};

export default start;