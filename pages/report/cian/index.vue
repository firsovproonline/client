<template>
  <div class="mainDiv">
    <div class="rent21Grid">
      <div class="gridHeader" >
        <div style="display: flex;align-items: center">
          <div>Канал</div>
          <vSelect style="width: 328px;margin-left: 8px"
                   v-model="filter.feed"
                   :reduce="(option) => option.id"
                   :options="[
      { label: 'Циан', id: 'cian' },
      { label: 'Циан 1', id: 'cian1' },
    ]"
          />

        </div>
      </div>
      <div style="overflow: auto;margin-bottom: 20px;
        height: 100%;
        height: 400px;
      font-size: 12px;overflow-y: scroll" ref="scroll">

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
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'index',
  components: { vSelect },
  data: () => ({
    items: [],
    filter: {
      feed: 'cian'
    }
  }),
  watch:{
    filterFid(val){
      this.$axios.get('/api/rent21/log/cian?feed='+val).then(item=>{
        this.items = Object.values(item.data)
      })
    }
  },
  computed:{
    filterFid(){
      return this.filter.feed
    }
  },
  mounted () {
    window.addEventListener('resize', this.resize);
    this.resize()
    this.$axios.get('/api/rent21/log/cian?feed='+this.filterFid).then(item=>{
      this.items = Object.values(item.data)
    })
  },
  methods:{
    resize(){
      const h = window.innerHeight - this.$refs.scroll.getBoundingClientRect().top;
      const w = window.innerWidth - this.$refs.scroll.getBoundingClientRect().left;
      this.$refs.scroll.style.height = (h- 30) + 'px';
    }
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
.gridHeader{
  padding: 6px;
  background: -webkit-linear-gradient(top, rgb(226, 239, 255), rgb(211, 231, 255));
  border-top: 1px solid rgb(164, 190, 212);
  border-left: 1px solid rgb(164, 190, 212);
  border-right: 1px solid rgb(164, 190, 212);
  border-bottom: 1px solid black;
  display: flex;
}
</style>
