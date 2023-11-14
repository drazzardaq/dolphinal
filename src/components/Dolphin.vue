<template>
  <canvas class="canvas" :class="position" />
</template>

<script>
import { defineComponent } from 'vue'
import * as BABYLON from '@babylonjs/core'
import { GridMaterial } from '@babylonjs/materials/grid'
// eslint-disable-next-line no-unused-vars
import { OBJFileLoader } from '@babylonjs/loaders'

export default defineComponent({
  name: 'Dolphin',

  props: {
    mainColor: {
      type: String,
      default: '#ffffff'
    },
    lineColor: {
      type: String,
      default: '#eeeeee'
    },
    position: {
      type: String,
      default: 'static'
    }
  },

  mounted() {
    const canvas = document.getElementsByClassName('canvas')[0]
    const engine = new BABYLON.Engine(canvas)

    let scene = new BABYLON.Scene(engine)
    scene.clearColor = new BABYLON.Color3.FromHexString(this.mainColor)
    // scene.fogMode = BABYLON.Scene.FOGMODE_EXP2
    // scene.fogDensity = 0.01
    // scene.fogStart = 2.0
    // scene.fogEnd = 6.0
    // scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.5)

    let camera = new BABYLON.ArcRotateCamera('camera', Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0 , 0, -10), scene);
    // let camera = new BABYLON.FollowCamera('camera', new BABYLON.Vector3(0, 10, -10), scene)
    // camera.upperHeightOffsetLimit = 13
    // camera.lowerHeightOffsetLimit = 3

    camera.useAutoRotationBehavior = true
    camera.autoRotationBehavior.idleRotationSpinupTime = 0.1
    camera.autoRotationBehavior.idleRotationSpeed = 0.3
    camera.autoRotationBehavior.idleRotationWaitTime = 0.1
    camera.upperBetaLimit = 1.5
    camera.lowerBetaLimit = 1

    camera.radius = 21
    camera.rotationOffset = 144
    camera.heightOffset = 3
    camera.maxCameraSpeed = 2
    camera.upperRadiusLimit = 21
    camera.lowerRadiusLimit = 13
    camera.attachControl(canvas, true)

    let light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene)
    light.intensity = 2

    let gridMaterial = new GridMaterial('grid', scene)
    gridMaterial.mainColor = new BABYLON.Color3.FromHexString(this.mainColor)
    gridMaterial.lineColor = new BABYLON.Color3.FromHexString(this.lineColor)
    gridMaterial.gridRatio = 10

    // let colorMaterial = new BABYLON.StandardMaterial('color', scene)
    // colorMaterial.diffuseColor = new BABYLON.Color3.FromHexString(this.mainColor)
    // colorMaterial.specularColor = new BABYLON.Color3.FromHexString(this.mainColor)
    // colorMaterial.ambientColor = new BABYLON.Color3.FromHexString(this.mainColor)

    let dolphin = BABYLON.SceneLoader.ImportMesh('', '/model/', 'dolphinal.gltf', scene, (meshes) => {
      meshes[0].scaling = new BABYLON.Vector3(89, 89, 89)
      meshes[0].position.y = 8

      camera.lockedTarget = meshes[0]
    })

    dolphin.OPTIMIZE_WITH_UV = true
    dolphin.IMPORT_VERTEX_COLORS = true
    dolphin.COMPUTE_NORMALS = true
    dolphin.OPTIMIZE_NORMALS = true

    let ground = BABYLON.MeshBuilder.CreateDisc('ground', { radius: 55 }, scene)
    ground.rotation.x = Math.PI / 2
    // let ground = BABYLON.Mesh.CreateGround('ground', 610, 610, 55, scene)
    ground.material = gridMaterial
    // ground.material = colorMaterial

    engine.runRenderLoop(() => {
      scene.render()
    })
  },
})
</script>
