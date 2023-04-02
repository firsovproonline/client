<template>
  <div class="row rowCart" style="width: 1200px">
    <div class="rowCol" style="padding-right: 12px;padding-bottom: 22px;">
      <div style="padding-bottom: 18px;padding-top: 12px">Настройки DB</div>
      <div class="item"  >
        <div style="width: 120px">Собственики</div>
        <button>Импорт</button>
      </div>
      <div class="item">
        <div style="width: 120px">Помещения</div>
        <button v-if="!progress.status || progress.status == ''" @click="createOb">Импорт</button>
        <div v-if="progress.status == 'Импорт помещений'">
          {{progress.status}}: Осталось {{progress.current}} записей
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexSetingsDb',
  data: () => ({
    progress: { },
    interval: 0
  }),
  methods:{
    createOb(){
      this.interval = setInterval(() => {
        this.$axios.get("/api/progress").then(item=>{
          this.progress = item.data
        })
      }, 400);
      this.$axios.get("/api/rent21/setings/db/ob/create").then(item=>{
        clearTimeout(this.interval);
        this.progress = item.data
        console.log(item)
      })
    }

  }
}
</script>

<style scoped>
.rowCart{
  display: flex;flex-wrap: nowrap;
}
.rowCol{
  width: 50%;
  min-width: 400px;
  border-radius: 16px;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin: 12px;
}
.rowCart{
  flex-wrap: wrap !important;
}
.item{
  display: flex;
}
button{
  margin: 4px;
  padding: 4px;
  cursor: pointer;
}
</style>
