<template>
  <div>
    <div class="main">
      <div class="div_title">Телефон:</div>
      <div class="div_body">
        <div v-for="(ob, index) in items" :key="index" style="margin-bottom: 3px;display: flex">
          <input v-if="index===0" type="text" v-mask="'+7(###) ###-##-##'" v-model="db[field][index].val" style="width: 132px" readonly>
          <input v-else type="text" v-mask="'+7(###) ###-##-##'" v-model="db[field][index].val" style="width: 132px">
          <select  name="select" style="width: 130px;height: 28px;margin-left: 6px" v-model="db[field][index].typ" >
            <option value="Мобильный">мобильный</option>
            <option value="Личный">личный</option>
            <option value="Корпоративный">корпоративный</option>
          </select>
          <div v-if="index > 0" style="cursor: pointer" @click="db[field].splice(index,1);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </div>
        </div>
        <div @click="db[field].push({val:'+7',typ:'Мобильный'})">добавить</div>
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
