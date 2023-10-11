<template>
  <div ref="divScene" class="divScene" >
      <div style="position: absolute">
      <br/>
      <button style="margin-left: 12px;width: 180px;height: 48px" class="btn btn-pill btn-secondary btn-air-secondary btn-sm" type="button">Загрузить пакет</button>
      <br/>
      <button style="margin-left: 12px;margin-top: 8px; width: 180px;height: 48px" class="btn btn-pill btn-secondary btn-air-secondary btn-sm" type="button">Настройки станка</button>
    </div>
  </div>
</template>

<script>
import * as THREE from "three"
import { OrbitControls } from '@/node_modules/three/examples/jsm/controls/OrbitControls.js'

export default {

  name: "threeScene",
  data () {
    return {
      cube2: null,
      scene: null,
      camera: null,
      renderer: null,
      depthSewing: 4,
      INTERSECTED: null,
      height: 0,
      pointer: new THREE.Vector2(),
      raycaster: new THREE.Raycaster(),
      objects: [],
      selectColor: new THREE.Color('skyblue'),
      osbColor: new THREE.MeshBasicMaterial({
        color: 0xD68A00,
        wireframe: false,
        opacity: 0.56,
        transparent: false
      })
    }
  },

  methods:{
    render () {
      this.renderer.render(this.scene, this.camera)
    },
    animate () {
      this.renderer.render(this.scene, this.camera)
      requestAnimationFrame(this.animate)
    },
    onPointerMove (event) {
      const mouse3D = new THREE.Vector3((event.offsetX / this.$el.offsetWidth) * 2 - 1, -(event.offsetY / this.height) * 2 + 1)
      this.raycaster.setFromCamera(mouse3D, this.camera)
      const intersects = this.raycaster.intersectObjects(this.objects, false)
      console.log(intersects)
      let flag = false
      if (intersects.length > 0) {
        if (this.INTERSECTED === null) {
          this.INTERSECTED = intersects[0].object
          this.INTERSECTED.currentHex = this.INTERSECTED.material.color
          // eslint-disable-next-line no-unused-vars
          flag = true
        }

        if (this.INTERSECTED !== intersects[0].object) {
          this.$el.children[0].style.cursor = 'pointer'
          this.INTERSECTED.material.color = this.INTERSECTED.currentHex
          this.INTERSECTED = intersects[0].object
          this.INTERSECTED.currentHex = this.INTERSECTED.material.color
          this.INTERSECTED.material.color = new THREE.Color('green')
        } else {
          // eslint-disable-next-line no-lonely-if
          if (flag) {
            this.$el.children[0].style.cursor = 'pointer'
            this.INTERSECTED.material.color = this.INTERSECTED.currentHex
            this.INTERSECTED = intersects[0].object
            this.INTERSECTED.currentHex = this.INTERSECTED.material.color
            this.INTERSECTED.material.color = new THREE.Color('green')
          }
        }
      } else {
        this.$el.children[0].style.cursor = 'default'
        if (this.INTERSECTED) {
          this.INTERSECTED.material.color = this.INTERSECTED.currentHex
        }
        this.INTERSECTED = null
      }
    },

  },
  mounted() {
    const width = this.$refs.divScene.offsetWidth
    const height = window.innerHeight - this.$refs.divScene.getBoundingClientRect().top;
    this.$refs.divScene.style.height = (height-10) + 'px';
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize( width, height )
    const controls = new OrbitControls(this.camera, this.renderer.domElement) // Create a control object
    controls.addEventListener('change', () => {
      this.render()
    })
    this.$refs.divScene.addEventListener('mousemove', this.onPointerMove)
    this.$refs.divScene.appendChild( this.renderer.domElement );
    const geometry = new THREE.BoxGeometry( 3, 3, 3 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: false } );
    const cube = new THREE.Mesh( geometry, material );
    this.objects.push(cube)
    this.scene.add( cube );
    this.camera.position.z = 5;
    this.animate()
/*
    function animate() {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    }
    animate();

 */
  }

}
</script>

<style scoped>
  .divScene{
    background: url("/bg/bgrealestate2.jpg")  no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
