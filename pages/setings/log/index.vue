<template>
  <div>log</div>
</template>

<script>
export default {
  name: 'logindex',
  mounted () {
    this.$api.saveLog()
  }
}
</script>

<style scoped>

</style>
