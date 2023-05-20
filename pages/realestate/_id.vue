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
  computed: {
    globalMessage () {
      return this.$store.getters['main/globalMessage'];
    },
  },
  watch:{
    globalMessage(val){
      switch (val) {
        case 'reload':
          console.log('reload')
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
          break
        case 'saveOwners':
          // сохраняем uid собствениеков в поле здания
          const ar = []
          this.item.owners.forEach(item=>{
            ar.push(item.UID)
          })
          console.log('saveOwners',ar)
          this.$axios.put('/api/rent21/ob',{owners:{owners:ar, buildUID:this.item.building.UID}}).then(item=>{
            console.log('=====',item)
            this.$store.dispatch('main/globalMessage','reload')
          })
          break
      }
    },

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
