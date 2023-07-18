<template>
  <div class="mainDiv">
    <div v-for="(item, index) in items" :key="index" class="item">
      <div class="hdiv"></div>
      <div class="itemRow" style="max-width: 100px;min-width: 100px">{{item.status}}</div>
      <div class="hdiv"></div>
      <div class="itemRow" style="max-width: 140px;min-width: 140px">
        <router-link :to="'/report/cian/'+item.externalId">Редактировать</router-link>
      </div>
      <div class="hdiv"></div>
      <div v-if="item.errors.length === 0" class="itemRow" style="width: 99%"><a :href="item.url" target="_blank">{{item.url}}</a></div>
      <div v-else class="itemRow" style="width: 99%">{{item.errors[0]}}</div>
      <div class="hdiv"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    items: []
  }),
  mounted () {
    this.$axios.get('/api/rent21/log/cian').then(item=>{
      this.items = Object.values(item.data)
      console.log('this.items',this.items)
    })
  }
}
</script>

<style scoped>
.mainDiv{
  padding: 8px;
}
.item{
  display: flex;
  border-bottom: 0.5px solid;
}
.itemRow{
  overflow: hidden;
  white-space: nowrap;
  padding-left: 3px;
  padding-right: 3px;
}
.hdiv{
  border-left: 1px solid;
  width: 1px;
}
</style>
