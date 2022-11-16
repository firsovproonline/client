<template>
  <div style="display: flex">
    <div class="vdiv"></div>
    <div class="tddiv" style="width:55px;min-width: 55px">{{item.id}}</div>
    <div class="vdiv"></div>
    <div class="tddiv" style="width:85px;min-width: 85px">{{getCALLDATE}}</div>
    <div class="vdiv"></div>
    <div class="tddiv" style="width:110px;min-width: 110px" >{{item.client_number}}</div>
    <div class="vdiv"></div>
    <div v-if="item.impression" class="tddiv" style="width: 50%;white-space: nowrap;overflow: hidden">
      <a :href="'/impressions/'+item.impression_id" >{{item.impression}}</a>
    </div>
    <div v-else class="tddiv" style="width: 50%;white-space: nowrap;overflow: hidden">Создать клиена</div>
    <div class="vdiv"></div>
    <div class="tddiv" style="width: 50%;white-space: nowrap;overflow: hidden">{{item.client_name}}</div>
    <div class="vdiv"></div>
    <div class="tddiv" style="width:130px;min-width: 130px" >{{item.title}}</div>
    <div class="vdiv"></div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props:{
    item: {}
  },
  computed:{
    getCALLDATE(){
      return new Date(new Date(this.item.start_time*1000)
        .getTime() + (3*60*60*1000)).toISOString()
        .replace('T',' ').replace('.000Z','')
    }
  }
}
</script>

<style scoped>
.vdiv{
  width: 1px;
  background-color: #1b4c43;
}
.tddiv{
  padding: 2px 8px 2px 8px;
}
</style>
