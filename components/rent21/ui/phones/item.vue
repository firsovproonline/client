<template>
  <div class="main">

    <input v-if="id===0" type="text" v-mask="'+7(###) ###-##-##'" v-model="value.val" style="width: 132px" readonly>
    <input v-else type="text" v-mask="'+7(###) ###-##-##'" v-model="value.val" style="width: 132px">
    <select  name="select" style="width: 130px;height: 28px;margin-left: 6px" v-model="value.typ" >
      <option value="Мобильный">мобильный</option>
      <option value="Личный">личный</option>
      <option value="Корпоративный">корпоративный</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'item',
  props:{
    value: {},
    id: 0
  }
}
</script>

<style scoped>

</style>
