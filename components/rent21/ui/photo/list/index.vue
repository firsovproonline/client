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
        :class="active === item.ID? 'photoBox active':'photoBox'"
        draggable="true" @dragstart="ondragstart" @drop="ondrop" @dragend="ondragover"
      >
        <img draggable="false" style="height: 69px" :src="'/api/rent21/photo/get/'+item.ID" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listPhoto',
  props:{
    uid: ''
  },
  data: () => ({
    items: [],
    active: 0,
    flagModal: false,
    titleModal: ''
  }),
  methods:{
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
    console.log('mounted Photo list')
  }
}
</script>

<style scoped>
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
  .photoBox{
    box-shadow: 7px 7px 5px 0px rgb(50 50 50 / 75%);
    border: 1px solid;
    background-color: #ffffff;
    text-align: center;
  }
  .active{
    box-shadow: 3px 3px 0px 0px rgb(10 10 10 / 45%);

  }
</style>
