<template>
  <div style="padding: 12px;font-size: 14px">
    <div v-for="(item, index) in items" :key="index" style="display: flex;border-bottom: 1px solid;border-right: 1px solid">
      <div v-if="item.ob" style="display: flex;" >
        <div class="column" style="max-width: 120px;width: 120px;white-space: nowrap;overflow: hidden">{{item.tip}}</div>
        <div class="column" style="margin-left: 8px;max-width: 70px;width: 70px;white-space: nowrap;overflow: hidden">{{item.ob.OPP}}</div>
        <div class="column" style="margin-left: 8px;max-width: 40px;width: 40px;white-space: nowrap;overflow: hidden">{{item.ob.PLALL}}</div>
        <div class="column" style="margin-left: 8px;max-width: 160px;width: 160px;white-space: nowrap;overflow: hidden">{{item.ob.IMPORTANT}}</div>
        <div class="column" style="margin-left: 8px;max-width: 180px;width: 180px;white-space: nowrap;overflow: hidden">
          <router-link :to="'/realestate/'+item.building.UID">
            {{item.building.NAME}}
          </router-link>
        </div>
        <indicator :uid="item.uid" :item="item" />
      </div>
      <div v-else>{{index}}</div>

    </div>
  </div>
</template>

<script>
import Indicator from '@/components/rent21/ui/export/indicator'
export default {
  name: 'exportReport',
  components: { Indicator },
  data: () => ({
    items1: []
  }),
  mounted () {
    this.$store.dispatch('main/globalMessage','showMenu')
    if(this.$store.getters['export/items'].length == 0){
      this.$axios.get('/api/rent21/report').then(item=>{
        console.log(item.data)
        this.$store.commit('export/items',item.data.rows)
        // this.items = item.data.rows
      })

    }
  },
  computed:{
    items(){
      return this.$store.getters['export/items']
    }
  }
}
</script>

<style scoped>
  .column{
    padding: 6px;
    border-left: 1px solid;
  }
</style>
