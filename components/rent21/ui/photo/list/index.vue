<template>
  <div class="main">
    <modal
      v-show="flagModal"
      :show="flagModal"
      :scrollable="false"
      body-id="modalBody" header-id="modalHeader"
      @close="showBig"
    >
      <template #header>
        {{titleModal}}
      </template>
      <template #body>
        <img
          v-if="flagModal"
          :src="'/api/rent21/photo/get/'+active" style="width: 100%" />
      </template>
    </modal>
    <div v-for="(item, index) in items" :key="index" class="MainphotoBox" >
      <div :step="index"
        @click="active = item.ID"
        @dblclick="showBig"
        :class="active === item.ID? 'fotoBox active':'fotoBox'"
        draggable="true" @dragstart="ondragstart" @drop="ondrop" @dragend="ondragover"
           :style="'background-image: url(/api/rent21/photo/get/'+item.ID+')'"
      >
        <div class="delB" @click="deletePhoto(item.ID)">
          <svg class="feather feather-trash-2 svgColor1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline data-v-91744b02="" points="3 6 5 6 21 6"></polyline><path data-v-91744b02="" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line data-v-91744b02="" x1="10" y1="11" x2="10" y2="17"></line><line data-v-91744b02="" x1="14" y1="11" x2="14" y2="17"></line></svg>
        </div>
      </div>
    </div>
    <div style="text-align: center;width: 100%;">
      <a href="#" @click="clickFile">Добавить фото</a>
    </div>
    <input type="file" multiple="multiple" id="file" ref="file" v-on:change="handleFileUpload()" style="display: none"/>

  </div>
</template>

<script>
export default {
  name: 'listPhoto',
  props:{
    uid: '',
    upload: false
  },
  data: () => ({
    items: [],
    active: 0,
    flagModal: false,
    titleModal: ''
  }),
  methods:{
    deletePhoto(id){
      this.$axios.delete('/api/rent21/photo/'+id).then(item=>{
        this.$axios.get('/api/rent21/photo/list/'+this.uid).then(items=>{
          this.items = items.data.rows
        })

      })
    },
    clickFile(){
      this.$refs.file.click()
    },
    handleFileUpload(){
      console.log(this.$refs.file.files)
      const promiseAR = [];
      for(let i=0;i<this.$refs.file.files.length;i++){
        promiseAR.push(new Promise(function(resolve, reject) {
          let formData = new FormData()
          formData.append('file',this.$refs.file.files[i])
          this.$axios.post('/api/rent21/photo',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'uid': this.uid
              }
            }).then(data=>{
            resolve({1:1})
          })
        }));
      }
      Promise.all(promiseAR).then(
        result => {
          this.$axios.get('/api/rent21/photo/list/'+this.uid).then(items=>{
            this.items = items.data.rows
          })
        },
        error => console.log("Ошибка: ", error.message)
      );
    },
    showBig(){
      this.flagModal = !this.flagModal
    },
    ondragstart(ev){
      console.log(ev)
    },
    ondragover(ev){
      console.log(ev)
    },
    ondrop(ev){
      console.log(ev)
    }
  },
  watch:{
    upload(val){
      console.log('upload')
    },
    active(val){
      this.titleModal = this.items.find(item => item.ID == val).TITLE
    },
    uid(val){
      console.log('photouid',val)
      if(val && val !== ''){
        this.$axios.get('/api/rent21/photo/list/'+val).then(items=>{
          this.items = items.data.rows
          console.log('itemsPhotoList',items.data)
        })
      }
    }
  },
  mounted () {
    if(this.uid!=''){
      this.$axios.get('/api/rent21/photo/list/'+this.uid).then(items=>{
        this.items = items.data.rows
      })
    }
  }
}
</script>

<style scoped>
  .svgColor1{
    fill: #ea5dbb;
    opacity: 0.6;
  }
  .delB{
    position: fixed;
    margin-left: 84px;
    margin-top: 42px
  }
  .main{
    display: flex;
    flex-wrap: wrap;
  }
  .MainphotoBox{
    width: 130px;
    height: 91px;
    padding: 10px;
    margin: 0px;
    overflow: hidden;
    cursor: pointer;
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

  .active{
    box-shadow: 3px 3px 0px 0px rgb(10 10 10 / 45%);

  }
</style>
