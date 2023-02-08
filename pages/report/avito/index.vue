<template>
  <div>avito</div>
</template>

<script>
export default {
  name: 'index',
  mounted () {
    this.$axios.get('/api/rent21/export/avito').then(item=>{
      console.log('avito',item)
    })
  }
}
</script>

<style scoped>

</style>
