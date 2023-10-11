<template>
    <Ob21Edit :item="item" />
</template>

<script>
import Ob21Edit from '@/components/rent21/ui/ob21Edit'
export default {
  name: 'index',
  components: { Ob21Edit },
  data: () => ({
    item: null,
    stepEdit: 0,
    saveItem: ''
  }),
  computed:{
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    }
  },
  watch:{
    globalMessage(val){
      console.log('globalMessage', val, this.stepEdit)
      const ar = val.split('|')
      if(ar[0]==='saveItem'){
        this.saveItem = ar[1]
      }
      if(ar[0] === 'save'){
        switch (this.saveItem){
          case 'address':
            if(!this.item.building.TIPZD){
              window.dhtmlx.message({
                type: "error",
                text: "Вы не указали тип здания",
                expire: 0
              });
            }
            if(!this.item.building.ETAGALL){
              window.dhtmlx.message({
                type: "error",
                text: "Вы не указали этажность здания",
                expire: 0
              });
            }
            const ob = {}
            ob.building = this.item.building
            ob.address = this.item.address
            ob.building.address = this.item.address.UID
            ob.building.owners = []
            this.item.owners.forEach(item=>{
              ob.building.owners.push(item.UID)
            })
            this.$axios.put('/api/rent21/ob',ob).then(item=>{
              window.location.href = '/realestate/'+ob.building.UID
            })
            break
        }
        this.$store.dispatch('main/globalMessage','')
      }
    },
    item(val){
      if(val.owners.length === 0)
        this.stepEdit = 0
      else
        this.stepEdit = 1
      this.$store.dispatch('main/globalMessage','ownersHide')
      this.$nextTick(()=>{
        this.$store.dispatch('main/globalMessage','floorsHide')
        this.$nextTick(()=>{
          this.$store.dispatch('main/globalMessage','roomHide')
          this.$nextTick(()=>{
            this.$store.dispatch('main/globalMessage','addressPhotoHide')
            this.$nextTick(()=>{
              this.$store.dispatch('main/globalMessage','saveItem|address')
            })
          })

        })
      })
    }
  },
  mounted () {
    this.item ={
      address: {
        LAT: this.$route.query.lat,
        LNG: this.$route.query.lng,
        METRO: [],
        UID: this.$api.generateUID()
      },
      building: {
        UID: this.$api.generateUID()
      },
      owners : [],
      ob21 : []
    }
  }
}
</script>

<style scoped>

</style>
