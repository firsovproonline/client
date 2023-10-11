<template>
  <div class="MainphotoBox">
    <div
      @click="active = !active"
      :class="active? 'fotoBox active':'fotoBox'"
      :style="'background-image: url(/api/rent21/photo/get/'+item.uid+'/'+encodef(item.title) +')'"

    >
      <div class="delB" @click="delit">
        <svg class="feather feather-trash-2 svgColor1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline data-v-91744b02="" points="3 6 5 6 21 6"></polyline><path data-v-91744b02="" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line data-v-91744b02="" x1="10" y1="11" x2="10" y2="17"></line><line data-v-91744b02="" x1="14" y1="11" x2="14" y2="17"></line></svg>
      </div>


    </div>

  </div>
</template>

<script>
import { Base64 } from 'js-base64'

export default {
  name: 'photoExportItem',
  props:{
    item: {}
  },
  data: () => ({
    active: false
  }),
  methods:{
    encodef(val){
      return Base64.encode(val)
    },
    delit() {
      this.$store.dispatch('main/globalMessage','deleteExportPhoto|'+this.item.uid+'|'+this.item.title)
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
  -webkit-box-shadow: 7px 7px 5px 0px rgb(97, 19, 35, 0.75) !important;
  -moz-box-shadow: 7px 7px 5px 0px rgba(97, 19, 35, 0.75) !important;
  box-shadow: 7px 7px 5px 0px rgb(97, 19, 35, 0.75) !important;
}
.active_red{
  border-bottom: 2px solid #e5194d !important;
}

.tabBt{
  padding: 2px;
  cursor: pointer;
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
