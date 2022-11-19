<template>
  <div>
    <div class="main">
      <div class="div_title">Телефон:</div>
      <div class="div_body">
        <item v-for="(ob, index) in items" :key="index" :value="ob" style="margin-bottom: 3px"></item>
        <div @click="db[field].push({val:'+7',typ:'мобильный'})">добавить</div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/rent21/ui/phones/item'
export default {
  name: 'phones',
  components: { Item },
  props:{
    value: '',
    field: '',
    title: '',
    db: {}
  },
  computed:{
    items(){
      return JSON.parse(this.value);
    }
  },
  watch:{
    value(v){
      console.log('watch value')
    }
  },
}
</script>

<style lang="scss" scoped>
  .main{
    display: flex;
    .div_title{
      width: 110px;
    }
  }
</style>
