<template>
  <div class="fotoBox" :style="!item.file ?'background-image: url(/api/rent21/photo/get/'+item.ID+')':''">
    <div v-if="item.file" class="progress" ref="progress">
      <progress max="100" value="0"></progress>
      <div class="progress-value"></div>
      <div class="progress-bg"><div class="progress-bar"></div></div>
    </div>
    <div v-if="!item.file" class="delB" @click="deletePhoto">
      <svg class="feather feather-trash-2 svgColor1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline data-v-91744b02="" points="3 6 5 6 21 6"></polyline><path data-v-91744b02="" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line data-v-91744b02="" x1="10" y1="11" x2="10" y2="17"></line><line data-v-91744b02="" x1="14" y1="11" x2="14" y2="17"></line></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoItem',
  props:{
    id:null,
    item: {
      file:null,
      ID: null
    },
    file:null,
    uid: null
  },
  mounted () {
    if(this.item.file){
      let formData = new FormData()
      formData.append('file',this.item.file)
      this.$axios.post('/api/rent21/photo',
        formData,
        {
          onUploadProgress: this.uploadProgress,
          headers: {
            'Content-Type': 'multipart/form-data',
            'uid': this.uid
          }
        }).then(data=>{
          this.item.ID = data.data.id
          this.item.file = null
      })
    }
  },
  methods:{
    uploadProgress(event) {
      let percent = parseInt(event.loaded / event.total * 100);
      this.$refs.progress.value = percent;
      //self.myToolbar.setItemText('text', 'Загрузка: ' + percent + '%');
      //dropZone.text('Загрузка: ' + percent + '%');
    },
    deletePhoto(){
      this.$store.dispatch('main/globalMessage','deletePhoto|'+this.uid+'|'+this.item.ID)
    },
  }
}
</script>

<style lang="css" scoped>
.progress
{
  font: 12px Arial, Tahoma, sans-serif;
  position: relative;
  overflow: hidden;
}

.progress progress
{
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  left: -777px;
}

.progress-bar
{
  overflow: hidden;
  background: #ac92ec;
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.progress-value
{
  color: #333;
  display: block;
  line-height: 21px;
  text-align: center;
}

.progress-bg
{
  background: #e6e9ed;
  position: relative;
  height: 8px;
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar:after
{
  background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
  background-image: -o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
  background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@keyframes progress_bar {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -40px 0;
  }
}

.progress-bar
{
  transition: width 1s linear;
}

.progress-bar:after
{
  animation: progress_bar 0.8s linear infinite;
}

.svgColor1{
  fill: #ea5dbb;
  opacity: 0.6;
}
.delB{
  position: inherit;
  margin-left: 84px;
  margin-top: 42px
}
.fotoBox {
  margin: 8px;
  -webkit-box-shadow: 7px 7px 5px 0px rgb(50 50 50 / 75%);
  -moz-box-shadow: 7px 7px 5px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 7px 7px 5px 0px rgb(50 50 50 / 75%);
  border: 1px solid;
  width: 110px;
  height: 70px;
  background-repeat:no-repeat;
  background-position: center center;
  cursor: pointer;
}
</style>
