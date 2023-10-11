<template>
  <div class="main">
    <div class="editDiv">
      <div class="label" style="width: 200px">Email</div>
      <input type="text" v-model="item.VAL" style="width: 210px;flex: none;margin-left: 34px">
      <input type="text" v-model="item.REM" style="margin-left: 5px" >
      <div @click="deleteItem" style="padding-top: 2px; width: 24px;height: 27px;margin-left: 8px;cursor: pointer">
        <svg style="color:red;fill: red;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'editEmail',
  props:{
    item: {},
    items: [],
    index: 0
  },
  methods:{
    deleteItem(){
      this.items.splice(this.index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
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

