<template>
  <div class="row">
    <div class="col-xl-6 box-col-12 des-xl-100 top-dealer-sec" >
      <div class="card" style="height: 400px">
        <div class="card-body" style="overflow: auto;margin-bottom: 20px;padding-top: 0px">
          <r21input v-if="item" field="title" :item="item" title="Наименование клиента*:" />
          <div style="display: flex;align-items: center;flex-wrap: nowrap;">
            <div style="width: 110px;min-width: 110px;">Статус клиента*:</div>
            <select v-if="item && item.fields" name="select" style="width: 100%;height: 28px" v-model="item.fields.STATUS" >
              <option value="Новый">Новый</option>
              <option value="В работе (Выяснение потребностей)">В работе (Выяснение потребностей)</option>
              <option value="В работе (Коммерческие предложения)">В работе (Коммерческое предложения)</option>
              <option value="В работе (Показ обьектов)">В работе (Показ обьектов)</option>
              <option value="В работе (Переговоры)">В работе (Переговоры)</option>
              <option value="В работе (Принятие решение)">В работе (Принятие решение)</option>
              <option value="Снял у нас">Снял у нас</option>
              <option value="Снял сам">Снял сам</option>
              <option value="Отложенный спрос">Отложенный спрос</option>
              <option value="Остаётся у себя">Остаётся у себя</option>
              <option value="Резиновый">Резиновый</option>
            </select>
          </div>
          <r21input v-if="item" field="FIO" :item="item.fields" title="Контактное лицо:" />

        </div>
      </div>
    </div>
    <div class="col-xl-6 box-col-12 des-xl-100 top-dealer-sec" >
      <div class="card" style="height: 400px">
        <div class="card-body" style="overflow: auto;margin-bottom: 20px;padding-top: 8px">
          <div style="display: flex;align-items: center;flex-wrap: nowrap;">
            <div style="width: 110px;min-width: 110px;">Назначить:</div>
            <select v-if="item && item.fields" name="select" style="width: 100%;height: 28px" v-model="item.fields.USER" >
              <option v-for="(l,index) in spruser" :value="l.id" :key="index">{{ l.name }}</option>
            </select>
          </div>
          <div style="display: flex;align-items: center;flex-wrap: nowrap;margin-top: 16px">
            <div style="width: 110px;min-width: 110px;">Ищит:</div>
            <select v-if="item && item.fields" name="select" style="width: 100%;height: 28px" v-model="item.fields.TIP" >
              <option value="flatRent">Аренда квартиры</option>
              <option value="bedRent">Аренда койко-место</option>
              <option value="roomRent">Аренда комната</option>
              <option value="houseRent">Аренда Дом/дача</option>
              <option value="cottageRent">Аренда Коттедж</option>
              <option value="townhouseRent">Аренда Таунхаус</option>
              <option value="houseShareRent">Аренда Часть дома</option>
              <option value="garageRent">Аренда Гараж</option>
              <option value="buildingRent">Аренда Здание</option>
              <option value="commercialLandRent">Аренда Коммерческая земля</option>
              <option value="officeRent">Аренда Офис</option>
              <option value="freeAppointmentObjectRent">Аренда Помещение свободного назначения</option>
              <option value="industryRent">Аренда Производство</option>
              <option value="warehouseRent">Аренда Склад</option>
              <option value="shoppingAreaRent">Аренда Торговая площадь</option>
              <option value="flatShareSale">Продажа Доля в квартире</option>
              <option value="flatSale">Продажа Квартира</option>
              <option value="newBuildingFlatSale">Продажа Квартира в новостройке</option>
              <option value="roomSale">Продажа Комнатае</option>
              <option value="houseSale">Продажа Дом/дача</option>
              <option value="cottageSale">Продажа Коттедж</option>
              <option value="townhouseSale">Продажа Таунхаус</option>
              <option value="landSale">Продажа Участок</option>
              <option value="houseShareSale">Продажа Часть дома</option>
              <option value="garageSale">Продажа Гараж</option>
              <option value="businessSale">Продажа Готовый бизнес</option>
              <option value="buildingSale">Продажа Здание</option>
              <option value="commercialLandSale">Продажа Коммерческая земля</option>
              <option value="officeSale">Продажа Офис</option>
              <option value="freeAppointmentObjectSale">Продажа Помещение свободного назначения</option>
              <option value="industrySale">Продажа Производство</option>
              <option value="warehouseSale">Продажа Склад</option>
              <option value="shoppingAreaSale">Продажа Торговая площадь</option>

            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import R21input from '@/components/rent21/ui/r21input'
import ComboNoSpr from '@/components/rent21/ui/comboNotSpr'
export default {
  name: 'cart',
  components: { ComboNoSpr, R21input },
  mounted () {
    this.$axios.get('https://rent21.ru:4439/apiv2/impressions/'+this.$route.params.id).then(item=>{
      this.$store.commit('main/setitem', item.data);
      console.log(item.data)
    })
  },
  computed: {
    item(){
      return this.$store.getters['main/item'];
    },
    spruser(){
      return this.$store.getters['main/combo_users'];
    }
  },
  methods:{
    ChangeSTATUS(val){
      this.item.fields.STATUS = val
    },
    ChangeUSER(val){
      this.item.fields.USER = val
    },
    ChangeTIP(val){
      this.item.fields.TIP = val
    },
  }
}
</script>

<style scoped>

</style>
