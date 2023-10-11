<template>
  <div ref="main" class="main" @dragend="dragEnter" @dragover="ondragover" @drop="ondrop" style="height: 300px;overflow-y: scroll">
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
      <PhotoItem :item="item" draggable="true"  :uid="uid" />
      <!--
      <div :step="index"
        @click="active = item.ID"
        @dblclick="showBig"
        :class="active === item.ID? 'fotoBox active':'fotoBox'"
        draggable="true" @dragstart="ondragstart"
           :style="'background-image: url(/api/rent21/photo/get/'+item.ID+')'"
      >
        <div class="delB" @click="deletePhoto(item.ID)">
          <svg class="feather feather-trash-2 svgColor1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline data-v-91744b02="" points="3 6 5 6 21 6"></polyline><path data-v-91744b02="" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line data-v-91744b02="" x1="10" y1="11" x2="10" y2="17"></line><line data-v-91744b02="" x1="14" y1="11" x2="14" y2="17"></line></svg>
        </div>
      </div>
      -->
    </div>
    <div style="text-align: center;width: 100%;height: fit-content">
      <a href="#" @click="clickFile">Добавить фото</a>
    </div>
    <input type="file" multiple="multiple" id="file" ref="file" v-on:change="handleFileUpload()" style="display: none"/>

  </div>
</template>

<script>
import PhotoItem from '@/components/rent21/ui/photo/item'
export default {
  name: 'listPhoto',
  components: { PhotoItem },
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
  computed:{
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    },
  },
  methods:{
    resize(){
      if(this.$refs.main){
        const h = window.innerHeight - this.$refs.main.getBoundingClientRect().top;
        const w = window.innerWidth - this.$refs.main.getBoundingClientRect().left;
        this.$refs.main.style.height = (h- 10) + 'px';

      }
    },

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
      //console.log(this.$refs.file.files)
      const promiseAR = [];
      for(let i=0;i<this.$refs.file.files.length;i++){
        promiseAR.push(new Promise((resolve, reject)=>{
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
        error => console.log("Ошибка фото: ", error.message)
      );

    },
    showBig(){
      this.flagModal = !this.flagModal
    },
    dragEnter(ev){
      console.log('dragEnter',ev)
      ev.preventDefault();
      return true;
    },
    ondragstart(ev){
      console.log(ev)
    },
    ondragover(ev){
      // console.log(ev)
      ev.preventDefault();
    },
    ondrop(ev){
      console.log('ondrop',ev.dataTransfer.files)
      ev.preventDefault();
      if (ev.dataTransfer.files[0]) {
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          const file = ev.dataTransfer.files[i];
          this.items.push({
            file:file
          })
        }
      }
      return false;
    }
  },
  watch:{
    globalMessage (val) {
      if (!val) return
      switch (val.split('|')[0]) {
        case 'deletePhoto':
          console.log(this.uid, val.split('|')[1])
          if(this.uid === val.split('|')[1])
          this.$axios.delete('/api/rent21/photo/'+val.split('|')[2]).then(item=>{
            this.$axios.get('/api/rent21/photo/list/'+this.uid).then(items=>{
              this.items = items.data.rows
            })
          })
          break
        default:
          break
      }

      },
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
    this.resize()
    window.addEventListener('resize', this.resize);

    if(this.uid!=''){
      this.$axios.get('/api/rent21/photo/list/'+this.uid).then(items=>{
        console.log('================================',items.data.rows)
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
    align-items: flex-start;
    align-content: flex-start;
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
