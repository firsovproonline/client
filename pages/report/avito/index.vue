<template>
  <div class="mainDiv">
    <div v-for="(item, index) in items" :key="index" class="item">
      <div class="hdiv"></div>
      <div class="itemRow" style="max-width: 120px;min-width: 120px">{{item.avito_date_end.split('+')[0]}}</div>
      <div class="hdiv"></div>
      <div class="itemRow" style="max-width: 240px;min-width: 240px">
        <router-link :to="'/report/avito/'+item.ad_id">Редактировать</router-link>
      </div>
      <div class="hdiv"></div>
      <div class="itemRow" style="max-width: 240px;min-width: 240px">{{item.section.title}}</div>
      <div class="hdiv"></div>
      <div class="itemRow" style="width: 99%"><a :href="item.url" target="_blank">{{item.url}}</a></div>
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
    this.$axios.get('/api/rent21/log/avito').then(item=>{
      this.items = item.data
      console.log('avito',item)
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
