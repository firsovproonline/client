<template>
  <div class="main">
    <div class="editDiv">
      <div class="label">Наименование</div>
      <input type="text" v-model="item.NAME" >
    </div>
    <div class="editDiv">
      <div class="label">Сайт</div>
      <input type="text" v-model="item.SITE" >
    </div>
    <div class="editDiv">
      <div class="label">Email</div>
      <input type="text" v-model="item.EMAIL" >
    </div>
    <div class="editDiv">
      <div class="label">Ком. ар. *</div>
      <input type="text" v-model="item.KOMIS" style="width: 40px;flex: none;margin-left: 38px">
      <div class="label" style="margin-left: 7px">% комментарий</div>
      <input type="text" v-model="item.KOMISREM" style="margin-left: 6px" >
    </div>
    <div class="editDiv">
      <div class="label">Ком. пр. *</div>
      <input type="text" v-model="item.KOMISSALE" style="width: 40px;flex: none;margin-left: 38px">
      <div class="label" style="margin-left: 7px">% комментарий</div>
      <input type="text" v-model="item.KOMISREMSALE" style="margin-left: 5px" >
    </div>
    <div style="float: right;">
      <div class="buttonDiv" @click="addCont">Добавить контакт</div>
    </div>
    <div style="margin-top: 60px"></div>
    <EditContact v-for="(contact, index) in item.contacts" :key="index" :item="contact"  />
  </div>
</template>

<script>
import EditContact from '@/components/rent21/ui/owner/edit/contact'
export default {
  name: 'ownerEdit',
  components: { EditContact },
  props:{
    item: {}
  },
  methods:{
    addCont(){
      this.item.contacts.push({
        UID: this.$api.generateUID(),
        FIRSTNAME: '',
        LASTNAME: '',
        PHONE: [],
        EMAIL: [],
        MESSENGER: [],
        WEBSITE: []
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  padding: 0px;
  width: 500px;
  display: block;
  *{
    color: black;
  }
  .buttonDiv{
    font-family: Tahoma,Helvetica;
    padding: 6px;
    font-size: inherit;
    color: black;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    border: 1px solid #a4bed4;
    background-color: #e2efff;
    background: linear-gradient(#e2efff,#d3e7ff);
    background: -webkit-linear-gradient(#e2efff,#d3e7ff);
    filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0,startColorStr=#e2efff,endColorStr=#d3e7ff) progid:DXImageTransform.Microsoft.Alpha(opacity=100);
    margin: 5px 2px;
    border-radius: 2px;
    float: left;
    cursor: default;
    clear: both;
    position: relative;
    overflow: hidden;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    cursor: pointer;
  }
  .editDiv{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 6px;
    width: 100%;
    .label{
      width: 120px;
      white-space: nowrap
    }
    input{
      flex: 1 auto;
      width: 100%;
    }
  }
}
</style>
