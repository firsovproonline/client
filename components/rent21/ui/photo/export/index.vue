<template>
  <div class="mainDiv">
    <div style="height: 1px; background-color: red; width: 100%;display: grid;"></div>

    <div style="margin-top: 6px">
      <div style="display: flex">
        <div :class="activetab == 'main' ? 'tabBt active':'tabBt'" style="cursor: pointer" @click="activetab = 'main'">
          <!--
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          -->
          Выбранные
        </div>
        <div :class="activetab == 'all' ? 'tabBt active':'tabBt'" style="margin-left: 8px;cursor: pointer" @click="activetab = 'all'">Все</div>
      </div>
    </div>
    <div v-if="activetab=='main'" style="min-height: 80px;display: flex;flex-wrap: wrap;">
      <div v-for="(item, index) in items" :key="index" class="MainphotoBox" >
        <div :step="index"
             @click="active = item.ID"
             :class="active === item.ID? 'fotoBox active':'fotoBox'"
             :style="'background-image: url(/api/rent21/photo/get/'+item.uid+'/'+encodef(item.title) +')'"
        >
          <div class="delB" @click="delit(index)">
            <svg class="feather feather-trash-2 svgColor1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline data-v-91744b02="" points="3 6 5 6 21 6"></polyline><path data-v-91744b02="" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line data-v-91744b02="" x1="10" y1="11" x2="10" y2="17"></line><line data-v-91744b02="" x1="14" y1="11" x2="14" y2="17"></line></svg>
          </div>

        </div>

      </div>
    </div>
    <div v-if="activetab=='all'" style="min-height: 80px;display: flex;flex-wrap: wrap;">
      <div v-for="(item, index) in itemsAll" :key="index" :style="items.find(el => el.uid === item.UID && el.title === item.TITLE)? 'display: none':''" >
          <div  :step="index" v-if="! items.find(el => el.uid === item.UID && el.title === item.TITLE)" class="MainphotoBox"
               @click="active = item.ID"
                @dblclick="insert(item)"
               :class="active === item.ID? 'fotoBox active':'fotoBox'"
               :style="'background-image: url(/api/rent21/photo/get/'+item.UID+'/'+encodef(item.TITLE)+')'"
          >
          </div>



      </div>
    </div>
  </div>
</template>

<script>
import {Base64} from 'js-base64';

export default {
  name: 'exportPhoto',
  data: () => ({
    active: 0,
    activetab: 'main',
    itemsAll: []
  }),
  props:{
    items:  [],
    buildingUid:'',
    uid: ''
  },
  mounted () {
    this.$axios.get('/api/rent21/photo/list/'+this.buildingUid+'/'+this.uid).then(items=>{
      this.itemsAll = items.data.rows
      //
    })

  },
  methods:{
    encodef(val){
      return Base64.encode(val)
    },
    delit(id){
      console.log(id)
      this.items.splice(id, 1)
    },
    insert(item){
      console.log(item, this.items)
      this.items.push({title:item.TITLE,uid:item.UID})
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
  position: relative;
  margin-left: 84px;
  margin-top: 42px
}

.active{
  border-bottom: 1px dotted #000F1A;
}
.active_red{
  border-bottom: 2px solid #e5194d !important;
}

.tabBt{
  padding: 2px;
  cursor: pointer;
}


  .mainDiv{
    min-height: 300px;
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



</style>
