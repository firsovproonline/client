<template>
  <div class="row rowCart" style="display: flex;width: 100%">
    <formAddress :item="address" />
    <OwnerList :items="owners" />
    <floors :items="floors"/>
    <FormRoom :item="room"/>
  </div>
</template>

<script>
import formAddress from '@/components/rent21/ui/ob21Edit/form/address'
import Floors from '@/components/rent21/ui/ob21Edit/floors'
import FormRoom from '@/components/rent21/ui/ob21Edit/form/room/formRoom'
import OwnerList from '@/components/rent21/ui/owner/ownerList'
export default {
  name: 'ob21Edit',
  components: { OwnerList, FormRoom, Floors, formAddress },
  data: () => ({
    address: null,
    floors: null,
    room: null,
    owners: null
  }),
  props:{
    item:null
  },
  computed:{
    innerWidth(){
      return window.innerWidth
    },
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    }
  },
  watch:{
    item(val){
      console.log('ob21Edit',val)
      this.address = {address: val.address,building:val.building}
      this.owners = val.owners

      this.floors = []
      val.ob21.forEach(item=>{
        if(!this.floors.find(el => el.ETAG === item.ETAG)){
          item.ETAGSORT = item.ETAG*1
          this.floors.push({ETAG: item.ETAG,ETAGSORT:item.ETAGSORT,ob21:[]})
        }
        this.floors.find(el => el.ETAG === item.ETAG).ob21.push(item)
      })
      this.floors = window.sort_by_key(this.floors,'ETAGSORT')


    },
    globalMessage(val){
      switch (val.split('|')[0]) {
        case 'selectRoom':
          this.room = this.item.ob21.find(el => el.UID === val.split('|')[1])
          // console.log('globalMessage', val.split('|')[1],this.item.ob21.find(el => el.UID === val.split('|')[1]))
          break
        default:

      }
    }
  }
}
</script>

<style scoped>
.rowCart{
  display: flex;flex-wrap: nowrap;
}
.rowCart{
  flex-wrap: wrap !important;
}

.row > *{
  width: auto;
}
.row {
  --bs-gutter-x: 0px;
}
</style>
