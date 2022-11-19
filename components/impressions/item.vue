<template>
  <div style="display: flex">
    <div style="padding-right: 6px">{{value.id}}</div>
    <div class="vdiv"></div>
    <div v-html="getCALLDATE" style="padding-right: 6px" />
    <div class="vdiv"></div>
    <div style="padding-right: 6px">{{value.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'impressionsItem',
  props:{
    value: {}
  },
  computed:{
    getCALLDATE(){
      return new Date(new Date(this.value.start_time*1000)
        .getTime() + (3*60*60*1000)).toISOString()
        .replace('T','<br>').replace('.000Z','')
    }
  },
}
</script>

<style scoped>
  .vdiv{
    width: 1px;
    background-color: #1b4c43;
  }
</style>
