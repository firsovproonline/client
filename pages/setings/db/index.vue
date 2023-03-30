<template>
  <div class="row rowCart" style="width: 1200px">
    <div class="rowCol" style="padding-right: 12px">
      <div>Настройки DB</div>
      <div class="item">
        <div style="width: 120px">Адрес</div>
        <button>Очистить</button>
        <button>Удалить</button>
        <button @click="createAddress">Создать</button>
      </div>
      <div class="item">
        <div style="width: 120px">Здания</div>
        <button>Очистить</button>
        <button>Удалить</button>
        <button @click="createBuild">Создать</button>
      </div>
      <div class="item">
        <div style="width: 120px">Помещения</div>
        <button>Очистить</button>
        <button>Удалить</button>
        <button @click="createOb">Создать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexSetingsDb',
  methods:{
    createBuild(){
      this.$axios.get("/api/rent21/setings/db/build/create").then(item=>{
        window.alert('Таблица зданий создана')
      })
    },
    createAddress(){
      this.$axios.get("/api/rent21/setings/db/address/create").then(item=>{
        window.alert('Таблица адресов создана')
      })
    },
    createOb(){
      this.$axios.get("/api/rent21/setings/db/ob/create").then(item=>{
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
