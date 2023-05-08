<template>
  <div>
    <ObEdit v-if="1==2" />
    <Ob21Edit v-else :item="item" />
  </div>
</template>

<script>
import ObEdit from '@/components/rent21/ui/obEdit'
import Ob21Edit from '@/components/rent21/ui/ob21Edit'
export default {
  name: 'realEstateEdit',
  layout: 'default',
  components: { Ob21Edit, ObEdit },
  data: () => ({
    item: null,
    stepEdit: 0,
    saveItem: ''
  }),
  watch:{
    stepEdit(val){
      console.log('stepEdit', val)
      switch (val) {
        case 2:
          this.$nextTick(()=>{
            this.$store.dispatch('main/globalMessage','floorsHide')
            this.$nextTick(()=>{
              this.$store.dispatch('main/globalMessage','roomHide')
//              this.$nextTick(()=>{
//                  this.$store.dispatch('main/globalMessage','saveItem|address')
//              })

            })
          })

          break;
        default:
        break;

      }
    }
  },
  mounted () {
    this.$axios.get('/api/rent21/building/'+this.$route.params.id).then(item=> {
      if (item.data.error && item.data.error === 401) {
        window.alert('Вы не авторизованы')
        return
      }
      this.item = item.data.row
      if(this.item.owners.length === 0){
        this.stepEdit = 2;
      }
    })
  }
}
</script>

<style scoped>

</style>
