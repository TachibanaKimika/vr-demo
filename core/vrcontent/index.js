import * as THREE from 'three';
import { loadResource } from './models';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
// import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
const start = async (ref) => {
  const scene = initScene();
  const camera = initCamera();
  const clock = new THREE.Clock();
  const renderer = new THREE.WebGLRenderer();
  if (navigator) {
    // ref.appendChild(VRButton.createButton(renderer));
  }
  renderer.xr.enabled = true;
  renderer.setSize(window.innerWidth, window.innerHeight);
  ref.appendChild(renderer.domElement);
  scene.add(await loadResource());
  addLight();
  const controls = initFlyControls();
  function initFlyControls() {
    const controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 100;
    controls.rollSpeed = Math.PI / 12;
    // controls.autoForward = false
    return controls;
  }
  function render() {
    controls.update(clock.getDelta());
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  function initScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF0FFFF);
    return scene;
  }
  function initCamera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.position.set(0, 100, -550);
    // camera.lookAt(new THREE.Vector3(0, 0, 0))
    return camera;
  }
  function addLight() {
    let light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 20, 0);
    scene.add(light);
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 20, 10);
    light.castShadow = true;
    scene.add(light);
    const ambientLight = new THREE.AmbientLight('#0C0C0C');
    scene.add(ambientLight);
  }
  return render;
};
export default start;