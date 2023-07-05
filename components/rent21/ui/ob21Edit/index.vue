<template>
  <div class="row rowCart" style="display: flex;width: 100%">
    <formAddress :item="address" />
    <OwnerList :items="owners" />
    <floors :items="floors"/>
    <FormRoom :item="room" :address="address"/>
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
    roomUID: '',
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
//        console.log(this.item)
        item.building = this.item.building.UID
        if(!this.floors.find(el => el.ETAG === item.ETAG)){
          item.ETAGSORT = item.ETAG*1
          this.floors.push({ETAG: item.ETAG,ETAGSORT:item.ETAGSORT,ob21:[]})
        }
        this.floors.find(el => el.ETAG === item.ETAG).ob21.push(item)
      })
      this.floors = window.sort_by_key(this.floors,'ETAGSORT')


    },
    globalMessage(val){
      console.log('ob21Edit|globalMessage',val)
      if(!val) return
      switch (val.split('|')[0]) {
        case 'copyRoom':
          const newRoom = this.item.ob21.find(el => el.UID === val.split('|')[1])
          newRoom.UID = this.$api.generateUID()
          newRoom.exports = null
          newRoom.IMPORTANT = this.$store.getters['main/user'].emails[0].value
          this.item.ob21.push(newRoom)
          this.$nextTick(()=>{
            this.$store.dispatch('main/globalMessage','ownersHide')
            this.$nextTick(()=>{
              this.$store.dispatch('main/globalMessage','floorsHide')
              this.$nextTick(()=>{
                this.$store.dispatch('main/globalMessage','addressHide')
                this.$nextTick(()=>{
                  this.$store.dispatch('main/globalMessage','roomPhotoHide')
                })
              })
            })
          })
          this.roomUID = newRoom.UID
          this.room = this.item.ob21.find(el => el.UID === newRoom.UID)
          console.log('copyRoom', newRoom)
          break
        case 'addOb21':
          const uid = this.$api.generateUID()
          this.item.ob21.push({
            UID: uid,
            TIP: 'Офис',
            OPP: 'Аренда',
            OPPTIP: 'Коммерческая',
            ETAG: 1,
            SOBST: val.split('|')[1],
            IMPORTANT: this.$store.getters['main/user'].emails[0].value
          })

          this.$nextTick(()=>{
            this.$store.dispatch('main/globalMessage','ownersHide')
            this.$nextTick(()=>{
              this.$store.dispatch('main/globalMessage','floorsHide')
              this.$nextTick(()=>{
                this.$store.dispatch('main/globalMessage','addressHide')
                this.$nextTick(()=>{
                  this.$store.dispatch('main/globalMessage','roomPhotoHide')
                })
              })
            })
          })
          this.roomUID = uid
          this.room = this.item.ob21.find(el => el.UID === uid)
          break
        case 'selectRoom':
          if(this.item.ob21.find(el => el.UID === val.split('|')[1])){
            this.room = this.item.ob21.find(el => el.UID === val.split('|')[1])
            this.roomUID = val.split('|')[1]
          }
          else{
            this.room = this.item.ob21[0]
            this.roomUID = this.item.ob21[0].UID

          }
          // console.log('globalMessage', val.split('|')[1],this.item.ob21.find(el => el.UID === val.split('|')[1]))
          break
        case 'save':
          const ob ={}
          switch (val.split('|')[1]) {
            case 'ob21':
              ob.ob21 =  this.item.ob21.find(el => el.UID === val.split('|')[2])
              ob.ob21.buildingUID =  this.item.building.UID
              this.$axios.put('/api/rent21/ob',ob).then(item=>{
                this.$store.dispatch('main/save_component',null)
                this.$store.dispatch('main/globalMessage','reload|'+val.split('|')[2])
              })
              break
            case 'address':
              console.log(this.item)
              ob.building = this.item.building
              ob.address = this.item.address
              ob.building.address = this.item.address.UID
              ob.building.owners = []
              this.item.owners.forEach(item=>{
                ob.building.owners.push(item.UID)
              })
              this.$axios.put('/api/rent21/ob',ob).then(item=>{
                console.log('============-----------===========')
                this.$store.dispatch('main/save_component',null)
                this.$store.dispatch('main/globalMessage','reload')
              })


              break
            default:
          }
          break
        case 'cancel':

          this.$store.dispatch('main/save_component',null)
          this.$store.dispatch('main/globalMessage','reload')
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
