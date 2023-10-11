<template>
  <div class="main">
    <div class="titlerinput">{{title}}</div>
    <textarea v-if="row" :rows="row" v-model="item[field]" style="flex: 1 auto;width: 100%" />
    <input v-else style="flex: 1 auto" v-model="item[field]" />
  </div>
</template>

<script>
export default {
  name: 'r21input',
  props:{
    field: '',
    title: '',
    row: null,
    item:{}
  },
  methods:{
  }
}
</script>

<style  lang="scss" scoped>
  .noflex{
    display: block !important;
    width: 100%;
    .titlerinput{
      width: 100% !important;
      min-width: 100% !important;
    }
  }
  .main{
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    .titlerinput{
      width: 110px;
      min-width: 110px;
    }

  }
</style>
