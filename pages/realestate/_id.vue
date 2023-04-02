<template>
  <div>
    <ObEdit />
  </div>
</template>

<script>
import ObEdit from '@/components/rent21/ui/obEdit'
export default {
  name: 'realEstateEdit',
  layout: 'default',
  components: { ObEdit },
  mounted () {
    // this.$store.dispatch('main/globalMessage','hideMenu')

  }
}
</script>

<style scoped>

</style>
