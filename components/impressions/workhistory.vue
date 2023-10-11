<template>
  <div class="main">
    <div class="title" style="padding-top: 4px">
      <div style="width: 110px;padding: 4px;text-align: center;">История<br>работы</div>
        <textarea rows="2" v-model="item" style="flex: 1 auto" />
      <div style="padding: 4px;cursor: pointer" @click="insert">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
    </div>
    <div class="body">
      <div class="item" v-for="(item,index) in value" :key="index">
        <div style="display: flex">
          <div class="column">{{item.data}}</div>
          <div class="column">{{item.person}}</div>
        </div>
        <div>{{item.rem}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workhistory',
  data: () => ({
    item:''
  }),
  props:{
    value: {}
  },
  methods:{
    insert(){
      this.value.push({
        data:new Date().toISOString(),
        person: this.$store.getters['main/user'].displayName,
        rem: this.item
      })
      console.log('===================')
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    width: 100%;
    border: 1px solid;
    padding: 0px;
    .title{
      margin-bottom: 6px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
    }
    .body{
      background-color: white;
      overflow: auto;
      max-height: 180px;
      min-height: 180px;
      .item{
        display: flex;
        flex-direction: column;
        border-bottom: 1px dotted;
        padding: 6px;
        .column{
          padding: 4px;
          border-right: 1px solid;
        }
      }
    }
  }
</style>
