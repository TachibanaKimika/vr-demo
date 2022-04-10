import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

const loadResource = () => {
  return new Promise((resolve, reject) => {
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();
    // テクスチャファイルをロードする
    mtlLoader.load('/models/source/scence.mtl', mtl => {
      // オブジェクトをロードする前に、まずテクスチャデータを設定します
      objLoader.setMaterials(mtl);
      // オブジェクトをロードする
      objLoader.load('/models/source/scence.obj', res => {
        resolve(res);
      }, undefined, reject);
    }, undefined, reject);
  });
};


const COLORS = {
  main_1: 0x75F075,
  main_2: 0x75F18E,
  main_3: 0x76F3A8,
  main_4: 0x7AF4C3,
  main_5: 0x7FF6DE,
  main_6: 0x87F7F7,
  main_7: 0x91E4F9,
  main_8: 0x9DD5FA,
  main_9: 0xABCBFB,
  main_10: 0xBBC8FC,
};


const cubes = [];
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: COLORS.main_1 });
// cubes.push(new THREE.Mesh( geometry, material ));
// 阳光
const hemisphereLight = new THREE.HemisphereLight(COLORS.main_8, 0x000000, 1);
cubes.push(hemisphereLight);
// const light = new THREE.PointLight(COLORS.main_5, 5, 50);
// light.position.set(0, 0, 40);
// cubes.push(light);

export {
  loadResource
};
export default cubes;