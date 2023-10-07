<template>
  <div>
    owner
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted() {
    this.$axios.get('/api/rent21/owner',{}).then((item) => {
      window.console.log('Собственики', item.data);
    });

  }
};
</script>

<style scoped>

</style>
