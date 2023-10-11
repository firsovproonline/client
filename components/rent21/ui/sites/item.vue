<template>
  <div class="main">
    <input type="text" v-model="value.val" style="width: 250px">
    <select  name="select" style="width: 130px;height: 28px;margin-left: 6px" v-model="value.typ" >
      <option value="личный">личный</option>
      <option value="корпоративный">корпоративный</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'item',
  props:{
    value: {}
  }
}
</script>

<style scoped>

</style>
