<template>
  <div class="main">
    <div class="titlerinput">{{title}}</div>
    <input style="flex: 1 auto" v-model="item[field]" />
  </div>
</template>

<script>
export default {
  name: 'r21input',
  props:{
    field: '',
    title: '',
    item:{}
  },
  methods:{
  }
}
</script>

<style scoped>
  .main{
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
  .titlerinput{
    width: 110px;
    min-width: 110px;
  }
</style>
