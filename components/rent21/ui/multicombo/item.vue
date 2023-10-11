<template>
  <div class="item">
    {{item.trim()}}|
  </div>
</template>

<script>
export default {
  name: "itemCombo",
  props:{
    item: null
  }
}
</script>

<style scoped>
  .item{
    margin-left: 4px;
    border-bottom: 1px #1c222b dotted;
    white-space: nowrap;
  }
</style>
