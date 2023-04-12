<template>
  <div class="main">
    <div class="editDiv">
      <div class="label" style="width: 200px">Месенгер</div>
      <input type="text" v-model="item.VAL" style="width: 210px;flex: none;margin-left: 34px">
      <input type="text" v-model="item.REM" style="margin-left: 5px" >
      <div @click="deleteItem" style="padding-top: 2px; width: 24px;height: 27px;margin-left: 8px;cursor: pointer">
        <svg style="color:red;fill: red;" sxmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'editMessenger',
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


