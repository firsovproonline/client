<template>
  <div class="row rowCart" style="display: flex;flex-wrap: nowrap;justify-content: flex-start;">
    <div class="rowCol"  >
      <div style="height: fit-content;min-height: 800px;padding-top: 10px; background-color: rgba(255,255,255,0.76)">
        <div style="display: flex;margin-bottom: 5px;padding-right: 12px;justify-content: flex-end;">
          <div @click="activeTab='info'" :class="activeTab=='info' ? 'activeTab' : ''" style="cursor: pointer">Данные клиента</div>
          <div @click="activeTab='procces'" :class="activeTab=='procces' ? 'activeTab' : ''"  style="margin-left: 18px;cursor: pointer">Подбор помещений</div>
        </div>
        <div class="card-body" style="overflow: auto;margin-bottom: 20px;padding-top: 0px">
          <div v-if="activeTab==='info'">
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
                <option value="Остается у себя">Остается у себя</option>
                <option value="Резиновый">Резиновый</option>
              </select>
            </div>
            <r21input v-if="item" field="FIO" :item="item.fields" title="Контактное лицо:" style="margin-top: 6px" />
            <hr>
            <phones v-if="item" :value="JSON.stringify(item.fields.TEL)" field="TEL" :db="item.fields" />
            <hr>
            <emails v-if="item" :value="JSON.stringify(item.fields.KLEMAIL)" field="KLEMAIL" :db="item.fields" />
            <hr>
            <sites v-if="item" :value="JSON.stringify(item.fields.SITE)" field="SITE" :db="item.fields" />
            <hr>
            <r21input v-if="item" field="ADDRESS" :item="item.fields" title="Фактический адрес:" row="2" />
            <r21input v-if="item" field="REM" :item="item.fields" title="Доп. информация:" row="6"
                      style="margin-top: 8px;" class="noflex" />
          </div>
        </div>
      </div>
    </div>
    <div class="rowCol" style="flex: 1 auto"  >
      <div style="height: fit-content;min-height: 800px;padding-top: 20px;background-color: rgba(255,255,255,0.76);" >
        <div class="card-body" style="overflow: auto;margin-bottom: 20px;padding-top: 8px">
          <div v-if="activeTab==='info'">
            <div style="display: flex;align-items: center;flex-wrap: nowrap;">
              <div style="width: 110px;min-width: 110px;">Назначить:</div>
              <select v-if="item && item.fields" name="select" style="width: 100%;height: 28px" v-model="item.user" >
                <option v-for="(l,index) in spruser" :value="l.id" :key="index">{{ l.name }}</option>
              </select>
            </div>
            <div style="display: flex;align-items: center;flex-wrap: nowrap;margin-top: 16px">
              <div style="width: 110px;min-width: 110px;">Ищит:</div>
              <select v-if="item && item.fields" name="select" style="width: 100%;height: 28px" v-model="item.category" >
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
                <option value="roomSale">Продажа Комната</option>
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
            <div style="display: flex;align-items: center;flex-wrap: nowrap;margin-top: 16px">
              <div style="width: 110px;min-width: 110px;">Площадь:</div>
              <div style="display: flex">
                <input v-if="item && item.plin" type="text" style="width: 40px" v-model="item.plin" v-mask="'####'" >
                <input v-if="item && item.plout" type="text" style="width: 40px;margin-left: 12px" v-model="item.plout" v-mask="'####'" >

              </div>
            </div>
            <div style="display: flex;align-items: center;flex-wrap: nowrap;margin-top: 16px">
              <div style="width: 110px;min-width: 110px;">Регион:</div>
              <select v-if="item && item.fields" name="select" style="width: 100%;height: 28px" v-model="item.fields.REGION" >
                <option value="Москва">Москва</option>
                <option value="Подмосковье">Подмосковье</option>

              </select>
            </div>
            <multicombo v-if="item && item.fields && item.fields.REGION ==='Москва'"
                        title="Район"
                        spr="clientRajon"
                        :value="item.district"
                        field = "district" style="margin-top: 18px"
            />
            <Multicombo v-if="item && item.fields && item.fields.REGION ==='Москва'"
                        title="Метро"
                        spr="metro"
                        :value="item.underground"
                        field = "underground" style="margin-top: 18px"
            />
            <Multicombo v-if="item && item.fields && item.fields.REGION !=='Москва'"
                        title="Город"
                        spr="city"
                        :value="item.city"
                        field = "city" style="margin-top: 18px"
            />
            <div v-if="isEtag">
              <Multicombo v-if="item && item.fields"
                          title="Этаж"
                          spr="floor"
                          :value="item.fields.ETAG"
                          field = "ETAG" style="margin-top: 18px"
              />
            </div>
            <div v-if="isOffice">
              <Multicombo v-if="item && item.commercial"
                          title="класс"
                          spr="Building_ClassType"
                          :value="item.commercial.Building_ClassType"
                          field = "Building_ClassType" pfield="commercial" style="margin-top: 18px"
              />

            </div>
            <div v-if="isResidential">
              <Multicombo v-if="item"
                          title="Материал зд-я"
                          spr="residential_Building_MaterialType"
                          :value="item.residential.Building_MaterialType"
                          field = "Building_MaterialType" pfield="residential"  style="margin-top: 18px"
              />
              <Multicombo v-if="item"
                          title="комнат"
                          spr="residential_FlatRoomsCount"
                          :value="item.residential.FlatRoomsCount"
                          field = "FlatRoomsCount" pfield="residential"  style="margin-top: 18px"
              />
              <hr>
              <div>
                <div style="text-align: center">Особенности</div>
                <div style="display: flex;flex-wrap: wrap;
              justify-content: space-around;
              align-items: center;">
                  <div v-for="(val,index) in item.residential.specialFeatures" :key="index">
                    <div style="display: flex;">
                      <div style="margin-right: 4px;font-size: 15px"><input type="checkbox" v-model="val.ch"></div>
                      <div style="max-width: 200px;min-width: 200px;font-size: 15px;overflow: hidden;height: 20px;">{{val.label}}</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div v-if="item && item.commercial && item.commercial.Infrastructure[item.category]">
              <hr>

              <!--
              <div style="text-align: center">Инфраструктура</div>
              <div style="display: flex;flex-wrap: wrap;
              justify-content: space-around;
              align-items: center;">
                <div v-for="(val,index) in item.commercial.Infrastructure[item.category]" :key="index">
                  <div style="display: flex;">
                    <div style="margin-right: 4px;font-size: 15px"><input type="checkbox" v-model="val.ch"></div>
                    <div style="max-width: 130px;min-width: 130px;font-size: 15px;overflow: hidden;height: 20px;">{{val.label}}</div>
                  </div>
                </div>
              </div>
              -->
            </div>
            <hr>
            <workhistory v-if="item && item.fields" style="margin-top: 20px" :value="item.wlog"/>

          </div>
          <div v-else style="overflow: auto;height: 700px">
            <div v-for="(item, index) in this.obItems" :key="index" class="rowOb">
              <div class="fotoBox" :style="'background-image: url(https://rent21.ru:4439/image/?first=1&thumbnail=1&action=loadImage&idklient='+item.build+')'" />
              <div class="colRow" style="min-width: 170px">
                <div>{{item.address.GOROD}}</div>
                <div>{{item.address.ULITCA}}</div>
                <div>{{item.address.DOM}}</div>
              </div>
              <div class="colRow" style="width: 99%">
                <div>{{item.fields.TIP}}</div>
                <div>{{item.fields.TotalArea}}</div>
                <div><a :href="'/pdf/'+item.fields.UID">Подробнее</a></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div v-if="this.callItems.length > 0" class="rowCol" style="width: 100%;padding: 12px;margin-top: 12px;margin-bottom: 12px">
      <div style="padding-top: 10px; background-color: rgba(255,255,255,0.76);
      border-left: 1px solid #1b4c43;border-right: 1px solid #1b4c43;border-top: 1px solid #1b4c43;">
        <div style="display: flex;border-bottom: 1px solid #1b4c43;padding: 8px" v-for="(call, index) in this.callItems" :key="index">
          <div style="width: 90px;min-width: 90px" v-html="new Date(call.start_time * 1000).toISOString().replace('T','<br>').replace('.000Z','')"></div>
          <div>{{call.client_number}}</div>
          <div style="margin-left: 8px;width: 90px;min-width: 90px" v-if="call.direction ===0">Входящий</div>
          <div style="margin-left: 8px;width: 90px;min-width: 90px" v-else>Исходящий</div>

          <div style="margin-left: 8px;width: 210px">{{call.src_number}}</div>
          <audio v-if="call.recording" controls="" style="width:100%" preload="metadata"><source type="audio/mpeg" :src="call.recording"></audio>
          <div v-else style="width: 100%"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import R21input from '@/components/rent21/ui/r21input'
import ComboNoSpr from '@/components/rent21/ui/comboNotSpr'
import Phones from '@/components/rent21/ui/phones'
import Emails from '@/components/rent21/ui/emails'
import Sites from '@/components/rent21/ui/sites'
import Multicombo from '@/components/rent21/ui/multicombo'
import Workhistory from '@/components/impressions/workhistory'
export default {
  name: 'cart',
  components: { Workhistory, Multicombo, Sites, Emails, Phones, ComboNoSpr, R21input },
  data: () => ({
    activeTab: 'info',
    obItems: [],
    callItems: []
  }),
  mounted () {
    this.$axios.get('/api/impressions/'+this.$route.params.id).then(item=>{
      if(!item.data.fields.GOROD)item.data.fields.GOROD = '';
      if(!item.data.fields.WLOG)item.data.fields.WLOG = [];
      if(item.data.fields.KLEMAIL =='')item.data.fields.KLEMAIL = [];
      if(item.data.fields.SITE =='')item.data.fields.SITE = [];
      if(item.data.fields.TEL =='')item.data.fields.TEL = [];

      this.$store.commit('impressions/setitem', item.data);
      this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
      this.$axios.post('/api/recentcalls/listCall',{phone: item.data.fields.TEL}).then(item=>{
        this.callItems = item.data.rows;
        console.log('listCall', item.data)
      })

      console.log('cart',item.data)

    })

  },
  computed: {
    isResidential(){
      if(this.item) {
        if(this.item.category==='flatRent'
        || this.item.category==='bedRent'
        || this.item.category==='roomRent'
        || this.item.category==='flatShareSale'
        || this.item.category==='flatSale'
        || this.item.category==='newBuildingFlatSale'
        || this.item.category==='roomSale'
      )
      {
        return true
      }
      }else return false
    },
    isOffice(){
      if(this.item) {
        if(this.item.category.indexOf('office')!==-1){
          return true
        }
      }else
        return false
    },
    isEtag(){
      if(this.item){
        console.log(this.item.category)
        if(this.item.category == 'officeRent' || this.item.category == 'officeRent'
          || this.item.category == 'freeAppointmentObjectRent'){
          console.log('true')
          return true
        }else{
          return false
        }
      }else {
        return false
      }
    },
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    },
    globalevent(){
      return this.$store.getters['main/globalevent']
    },
    item(){
      return this.$store.getters['impressions/item'];
    },
    spruser(){
      return this.$store.getters['main/combo_users'];
    }
  },
  watch:{
    activeTab(val){
      if(val === 'procces'){
        console.log('activeTab', val)
        this.$axios.post('/api/rent21/ob/'+this.item.category,{
          METRO: this.item.underground
        }).then(item=>{
          this.obItems = item.data.rows
          console.log(item)
        })

        }
    },
    globalevent(val){
      console.log(val)
      if(val.operation === 'setFieldItem'){
        let temp = ''
        val.value.forEach(item=>{
          if(temp !=''){
            temp += '|'
          }
          temp += item
        })
        if(val.pfield){
          this.item[val.pfield][val.field] = temp
        }else
        if(val.field==='ETAG'){
          this.item.fields[val.field] = temp
        }else
          this.item[val.field] = temp
      }
    },
    globalMessage(val){
      if(val){
        console.log(val)
        if(val === 'save'){
          this.$axios.put('/api/impressions/'+this.$route.params.id,this.item).then(item=>{
            this.$store.dispatch('main/globalMessage',null)
            if (item.data.error){
              switch (item.data.error){
                case 405:
                    window.alert('У вас нет прав записи')
                  break
                case 401:
                  window.alert('Вы не авторизованы')
                  break
                default:
                  window.alert('не обработанная ошибка')
              }
            }
            console.log(item.data)
          })

        }else{
          this.$router.go(-1)
          this.$store.dispatch('main/globalMessage',null)
          this.$store.dispatch('main/save_component', null)
        }
      }
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
.fotoBox {
  margin: 8px;
  -webkit-box-shadow: 3px 3px 1px 0px rgb(50 50 50 / 75%);
  -moz-box-shadow: 3px 3px 1px 0px rgba(50, 50, 50, 0.75);
  box-shadow: 3px 3px 1px 0px rgb(50 50 50 / 75%);
  width: 140px;
  min-width: 140px;
  height: 80px;
  background-repeat:no-repeat;
  background-position: center center;
  cursor: pointer;
}
.colRow{
  padding: 4px;
  border-right: 1px solid;
}

.rowOb{
  display: flex;
  padding: 4px;
  border-bottom: 1px solid;
}
.activeTab{
  border-bottom: 2px solid red;
}
*{
  font-family: -apple-system,system-ui,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Helvetica,roboto,arial;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

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
}
.rowCart{
  flex-wrap: wrap !important;
}
@media (max-width: 800px){
  .rowCart{
    flex-wrap: wrap !important;
  }
  .rowCol{
    width: 100%;
  }
}
@media (min-width: 1599px) {
  .rowCart{
    flex-wrap: wrap !important;
  }
  .rowCol{
    width: 45%;
  }
}

</style>
