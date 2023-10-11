<template>
  <div class="fotoBox" ref="img"></div>
</template>

<script>
import { Base64 } from 'js-base64'

export default {
  name: 'imageBg',
  props:{
    src: null
  },
  data: () => ({
    img:''
  }),
  methods:{
    loader(ev){

    }
  },
  mounted () {
    console.log(this.src)
    let xhRequest = new XMLHttpRequest();
    xhRequest.onload = ()=> {
      let reader = new FileReader();
      reader.onloadend = ()=> {
        if(reader.result.indexOf('data:image/')==-1){
          this.$refs.img.style.backgroundImage = 'url("data:image/jpg;base64,'+reader.result.replace('data:text/xml;base64,','')+'")'
        }else{
          this.$refs.img.style.backgroundImage = 'url("'+reader.result+'")'

        }
      }
      reader.readAsDataURL(xhRequest.response);
    };
    xhRequest.open('GET', this.src);
    xhRequest.responseType = 'blob';
    xhRequest.send();
/*
    this.$axios.get(this.src).then(item=>{
      this.img = 'url("data:image/jpg;base64,'+Base64.encodeURL(item.data)+'")'
      this.$refs.img.style.backgroundImage =this.img
      console.log(this.$refs.img)
    })
*/
  }
}
</script>

<style scoped>
.fotoBox {
  background-size: contain;
  width: 140px;
  min-width: 140px;
  height: 80px;
  background-repeat:no-repeat;
  background-position: center center;
  cursor: pointer;
}
</style>
