<template>
  <div class="mainDiv">
    <div class="rent21Grid">
      <div class="gridHeader" >

      </div>
      <div style="overflow: auto;margin-bottom: 20px;
        height: 100%;
        height: 400px;
      font-size: 12px;overflow-y: scroll" ref="scroll">
        <div v-for="(item, index) in items" :key="index" class="item">
            <div class="hdiv"></div>
            <div class="itemRow" style="flex: auto;">{{item.name}}</div>
            <div class="hdiv"></div>
            <div style="padding-top: 5px;padding-left: 5px;padding-right: 5px;cursor: pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </div>
            <div class="hdiv"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: () => ({
    items: [],
  }),
  methods:{
    resize(){
      const h = window.innerHeight - this.$refs.scroll.getBoundingClientRect().top;
      const w = window.innerWidth - this.$refs.scroll.getBoundingClientRect().left;
      this.$refs.scroll.style.height = (h- 30) + 'px';
    }
  },
  mounted () {
    window.addEventListener('resize', this.resize);
    this.resize()
    this.$axios.get('/api/rent21/setings/feeds').then(item=>{
      console.log(item.data)
      this.items = item.data
    })
  },
  destroyed () {
    window.removeEventListener('resize', this.resize);

  }
}
</script>

<style scoped>
.hdiv{
  height: 34px;
}
.mainDiv{
  padding: 8px;
}
.item{
  border-bottom: 0.5px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.itemRow{
  overflow: hidden;
  white-space: nowrap;
  padding-left: 3px;
  padding-right: 3px;
}
</style>
