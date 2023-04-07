<template>
  <div class="row rowCart" style="display: flex;width: 100%">
    <div v-if="innerWidth <1000" class="rowCol" style="padding-right: 12px">
      <div ref="address"  ></div>
    </div>
    <div v-if="innerWidth <1000" class="rowCol" style="padding-right: 12px">
      <div ref="ob21"  ></div>
    </div>
    <div v-if="innerWidth > 1000 && innerWidth < 1800">
      <div class="rowCol scroll21" style="display: flex;width: 98%; overflow: hidden" ref="main">
        <div style="border-right: 1px solid;">
          <div v-if="edit=='ob21'" class="modalDivLocal" style="width: 400px"></div>

          <div style="display: flex;padding: 5px">
            <div :class="activeAddress == 'main' ? 'tabBt active':'tabBt'"
                 @click="activeAddress = 'main'">Основные поля</div>
            <div :class="activeAddress == 'photo' ? 'tabBt active':'tabBt'"
                 @click="activeAddress = 'photo'" >Фото</div>
          </div>
          <div ref="mainaddress" class="scroll21" style="overflow: auto;width: 400px;overflow-x: hidden;background-color: white">
            <div v-show="activeAddress==='main'" ref="address" ></div>
            <div v-show="activeAddress==='photo'"  ref="ob21Photo"  >
              <div v-if="item.building">
                <ListPhoto v-show="item.building && item.building.UID" :uid="item.building.UID" />
              </div>
            </div>
          </div>
        </div>

        <div style="border-right: 1px solid;flex: 1 auto;">
          <div v-if="edit=='ob21' || edit=='address' || edit=='build'" class="modalDivLocal" style="width: 350px"></div>

          <div style="display: flex;padding: 5px">
            <div :class="activeFloor == 'sobst' ? 'tabBt active':'tabBt'" @click="activeFloor = 'sobst'">Собственники</div>
            <div :class="activeFloor == 'floor' ? 'tabBt active':'tabBt'" @click="activeFloor = 'floor'" >Помещения</div>
            <div v-show="activeFloor == 'floor'" style="width: 100%;text-align: end;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </div>
            <div v-show="activeFloor == 'sobst'" style="width: 100%;text-align: end;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>
          <div ref="floor" style="overflow: auto;overflow-x: hidden;background-color: white">
            <div v-show="activeFloor==='floor'">
              <div v-for="(item, index) in floors" :key="index" style="padding-left: 11px">
                <div>Этаж {{item.ETAG}}</div>
                <div v-for="(itemOb, index) in item.ob21" :key="index">
                  <div :class="uidOb === itemOb.UID?'active':''" @click="uidOb=itemOb.UID" style="display: flex;padding-left: 12px;cursor: pointer">
                    <div style="display: flex;align-items: center;max-width: 170px;min-width: 170px">
                      <div style="width: 100px;overflow: hidden;white-space:normal">{{replaceTip(itemOb.TIP)}}</div>
                      <div style="margin-left: 3px">{{itemOb.OPP}}</div>
                      <div style="margin-left: 3px">{{itemOb.PLALL}}</div>
                    </div>
                    <indicator v-if="1==1" :uid="itemOb.UID" :item="getExport(itemOb.UID)" />
                  </div>
                </div>
              </div>
            </div>
            <div v-show="activeFloor==='sobst'">
              <OwnerList :items="owners" />
            </div>
          </div>
        </div>
        <div>
          <div v-if="edit=='address' || edit=='build' || edit=='Noob21'" class="modalDivLocal" style="width: 400px"></div>
          <div style="display: flex;padding: 5px">
            <div :class="activeOb21 == 'main' ? 'tabBt active':'tabBt'" @click="activeOb21 = 'main'">Основные поля</div>
            <div :class="activeOb21 == 'photo' ? 'tabBt active':'tabBt'" @click="activeOb21 = 'photo'" >Фото</div>
            <div :class="activeOb21 == 'showcase' ? 'tabBt active':'tabBt'" @click="activeOb21 = 'showcase'" >Витрина</div>
            <div :class="activeOb21 == 'export' ? 'tabBt active':'tabBt'" @click="showExport" style="margin-left: 8px;display: flex">
              <div>Экспорт</div>
              <indicator style="margin-top: -3px" :uid="uidOb" :item="activeExport" />
            </div>
          </div>
          <div ref="mainob21" class="scroll21" style="padding-right: 6px; overflow: auto;width: 400px;overflow-x: hidden;background-color: white">
            <div v-show="activeOb21==='main'"  ref="ob21"  ></div>
            <div v-show="activeOb21==='photo'"  ref="ob21Photo"  >
              <ListPhoto :uid="uidOb" />
            </div>
            <div v-show="activeOb21==='showcase'" >
              <showcase :uid="uidOb" />
            </div>
          </div>

        </div>
      </div>
    </div>
    <div v-if="innerWidth > 1000 && innerWidth >= 1799">
      <div class="rowCol scroll21" style="display: flex;width: 98%; overflow: hidden" ref="main">
        <div style="border-right: 1px solid;">
          <div v-if="edit=='ob21'" class="modalDivLocal" style="width: 400px"></div>
          <div style="display: flex;padding: 5px">
            <div :class="activeAddress == 'main' ? 'tabBt active':'tabBt'"
                 @click="activeAddress = 'main'">Основные поля</div>
            <div :class="activeAddress == 'photo' ? 'tabBt active':'tabBt'"
                 @click="activeAddress = 'photo'" >Фото</div>
          </div>
          <div ref="mainaddress" class="scroll21" style="overflow: auto;width: 400px;overflow-x: hidden;background-color: white">
            <div v-show="activeAddress==='main'" ref="address" ></div>
            <div v-show="activeAddress==='photo'"  ref="ob21Photo"  >
              <div v-if="item.building">
                <ListPhoto v-show="item.building && item.building.UID" :uid="item.building.UID" />
              </div>
            </div>
          </div>
        </div>
        <div style="border-right: 1px solid;width: 350px">
          <div v-if="edit=='ob21' || edit=='address' || edit=='build'" class="modalDivLocal" style="width: 350px"></div>
          <div style="display: flex;padding: 5px;height: 38px">Собственики</div>
          <OwnerList :items="owners" style="background-color: #ffffff;height:-webkit-fill-available" />
        </div>
        <div style="border-right: 1px solid;width: 350px">
          <div v-if="edit=='ob21' || edit=='address' || edit=='build'" class="modalDivLocal" style="width: 350px"></div>
          <div style="padding: 5px;height: 38px">Помещения</div>

          <div ref="floor" style="overflow: auto;overflow-x: hidden;background-color: white;width: 348px">
            <div v-show="activeFloor==='floor'">
              <div v-for="(item, index) in floors" :key="index" style="padding-left: 11px">
                <div>Этаж {{item.ETAG}}</div>
                <div v-for="(itemOb, index) in item.ob21" :key="index">
                  <div :class="uidOb === itemOb.UID?'active':''" @click="uidOb=itemOb.UID" style="display: flex;padding-left: 12px;cursor: pointer">
                    <div style="display: flex;align-items: center;max-width: 170px;min-width: 170px">
                      <div style="width: 100px;overflow: hidden;white-space:normal">{{replaceTip(itemOb.TIP)}}</div>
                      <div style="margin-left: 3px">{{itemOb.OPP}}</div>
                      <div style="margin-left: 3px">{{itemOb.PLALL}}</div>
                    </div>
                    <indicator v-if="1==1" :uid="itemOb.UID" :item="getExport(itemOb.UID)" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div>
          <div v-if="edit=='address' || edit=='build' || edit=='Noob21'" class="modalDivLocal" style="width: 400px"></div>
          <div style="display: flex;padding: 5px">
            <div :class="activeOb21 == 'main' ? 'tabBt active':'tabBt'" @click="activeOb21 = 'main'">Основные поля</div>
            <div :class="activeOb21 == 'photo' ? 'tabBt active':'tabBt'" @click="activeOb21 = 'photo'" >Фото</div>
            <div :class="activeOb21 == 'showcase' ? 'tabBt active':'tabBt'" @click="activeOb21 = 'showcase'" >Витрина</div>
            <div :class="activeOb21 == 'export' ? 'tabBt active':'tabBt'" @click="showExport" style="margin-left: 8px;display: flex">
              <div>Экспорт</div>
              <indicator style="margin-top: -3px" :uid="uidOb" :item="activeExport" />
            </div>
          </div>
          <div ref="mainob21" class="scroll21" style="padding-right: 6px; overflow: auto;width: 400px;overflow-x: hidden;background-color: white">
            <div v-show="activeOb21==='main'"  ref="ob21"  ></div>
            <div v-show="activeOb21==='photo'"  ref="ob21Photo"  >
              <ListPhoto :uid="uidOb" />
            </div>
            <div v-show="activeOb21==='showcase'" >
              <showcase :uid="uidOb" />
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ListPhoto from '@/components/rent21/ui/photo/list'
import Indicator from '@/components/rent21/ui/export/indicator'
import OwnerList from '@/components/rent21/ui/owner/ownerList'
import Showcase from '@/components/rent21/ui/showcase'
export default {
  name: 'obEdit',
  components: { Showcase, OwnerList, Indicator, ListPhoto },
  data: () => ({
    win: {},
    disableItems: [],
    ob21Form: null,
    addressForm: null,
    activeOb21: 'main',
    activeAddress: 'main',
    activeFloor:'floor',
    uidOb: '',
    edit: '',
    floors: [],
    owners: []
  }),
  computed:{
    activeExport(){
      if(this.item && this.uidOb != '' && this.item.ob21.find(el => el.UID === this.uidOb).exports){
        const xOb = this.item.ob21.find(el => el.UID === this.uidOb).exports
        console.log('xOb',xOb)
        if(!xOb.avito){
          xOb.avito = {
            Publ: 0
          }
        }
        if(!xOb.cian){
          xOb.cian = {
            Publ: 0
          }
        }
        if(!xOb.cian1){
          xOb.cian1 = {
            Publ: 0
          }
        }

        const exportOb = {
          avitopubl: xOb.avito.Publ,
          cianpubl: xOb.cian.Publ,
          cian1publ: xOb.cian1.Publ,
          fields: xOb,
          exportOb: xOb,
          uid: xOb.uid
        }
        return exportOb
      }else{
        return {
          avitopubl: '0',
          cianpubl: '0',
          cian1publ: '0',
          fields: {},
          exportOb: { },
          uid: this.uidOb

        }
      }
    },
    activeOwner(){
      if(this.item.ob21&&this.item.ob21.find && this.uidOb != ''
        && this.item.ob21.find(el => el.UID === this.uidOb)){
        return this.item.ob21.find(el => el.UID === this.uidOb).owner.UID
      }else{
        return 0
      }
    },
    innerWidth(){
      return window.innerWidth
    },
    item(){
      return this.$store.getters['ob21edit/item']
    },
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    },
  },
  watch:{
    uidOb(val, old){
      if(old!==''){
        this.reload(false)
      }
      //this.activeFloor = 'sobst'
      //console.log(val)
    },
    activeOb21(val){
      //console.log(val)
    },
    globalMessage(val){
      if(val){
        if(val === 'save'){
          const ob = {}
          if(this.edit === 'ob21'){
            ob.ob21 = this.item.ob21[this.item.ob21.findIndex(el => el.UID === this.uidOb)]
          }else{
            ob.address = this.item.address
            ob.building = this.item.building
          }
          this.$axios.put('/api/rent21/ob',ob).then(item=>{
            this.$store.dispatch('main/globalMessage',null)
            disableForms(this.disableItems, false)
            this.$store.dispatch('main/save_component', null)
            if(this.edit === 'ob21'){
              this.$axios.get('/api/rent21/ob/'+this.uidOb).then(item=>{
                this.ob21Form.setItemValue('obfields',{pchange:this.onChange,data:item.data.row[0].fields});
                this.edit =  ''
              })
            }else{
              this.$axios.get('/api/rent21/building/'+this.item.building.UID).then(item=>{
                if(this.addressForm){
                  this.addressForm.unload()
                }
                this.addressForm = new dhtmlXForm(this.$refs.address,[
                  {
                    type: "settings",
                    position: "label-left",
                  }, {
                    type: "block",
                    name: "blGL",
                    //inputWidth: 120,
                    offsetLeft: 10,
                    list: [{
                      type: "settings",
                      position: "label-left",
                      //inputWidth: 120,
                      labelWidth: 80,
                    }, {
                      type: 'hidden',
                      name: 'field_UID'
                    }, {
                      type: 'input',
                      position: "label-left",
                      label: "Наименование",
                      value: "",
                      inputWidth: 380,
                      name: "field_NAME",
                      required: true,

                    }, {
                      type: "MultyRem",
                      name: "MultyRem",
                      label: "Комментарий",
                      inputWidth: 340,
                      className: "BuildMultyRem"
                    }, {
                      type: "block",
                      //name: 'firstBl',
                      blockOffset: 0,
                      inputWidth: 450,
                      list: [{
                        type: "block",
                        inputWidth: 240,
                        blockOffset: 0,
                        list: [{
                          type: 'combo',
                          position: "label-left",
                          label: "Проверен",
                          value: 0,
                          inputWidth: 140,
                          labelWidth: 80,
                          hidden: true,
                          name: "field_STATUS",
                          options: [{
                            text: "Проверен",
                            value: "Проверен"
                          }, {
                            text: "Непроверен",
                            value: "Непроверен",
                            selected: true
                          }, ]
                        }, {
                          type: 'input',
                          position: "label-left",
                          label: "Этажность",
                          required: true,
                          value: "",
                          inputWidth: 20,
                          labelWidth: 80,
                          name: "field_ETAGALL",
                        }, {
                          type: 'input',
                          position: "label-left",
                          label: "Урл",
                          value: "",
                          hidden: true,
                          inputWidth: 160,
                          labelWidth: 80,
                          name: "field_URL",
                        }]
                      }, {
                        type: 'newcolumn',
                        offset: 10
                      }, {
                        type: "container",
                        name: "firstphoto",
                        label: "",
                        inputWidth: 180,
                        inputHeight: 120
                      }
                      ]

                    }, {
                      type: 'MultyCian',
                      position: "label-left",
                      label: "Тип здания",
                      value: 0,
                      labelWidth: 90,
                      // inputWidth: 440,
                      multi: false,
                      required: true,

                      name: "field_TIPZD",
                      options: arType["Офис"]
                    }, {
                      type: 'MultyCian',
                      position: "label-left",
                      label: "Класс здания",
                      // inputWidth: 440,
                      labelWidth: 80,
                      multi: false,
                      name: "field_KLASS",
                      required: true,
                      options: [{
                        text: "A",
                        value: "a"
                      }, {
                        text: "A+",
                        value: "aPlus"
                      }, {
                        text: "B",
                        value: "b"
                      }, {
                        text: "B-",
                        value: "bMinus"
                      }, {
                        text: "B+",
                        value: "bPlus"
                      }, {
                        text: "C",
                        value: "c"
                      }, {
                        text: "Нет",
                        value: null,
                        selected: true
                      }]
                    }, {
                      type: "checkbox",
                      label: "Комм. фонд",
                      position: "label-left",
                      name: "field_FONDKOM",
                      checked: false
                    }, {
                      type: "checkbox",
                      label: "жилой. фонд",
                      position: "label-left",
                      name: "field_FONDH",
                      checked: false
                    }, {
                      type: "checkbox",
                      label: "частный фонд",
                      position: "label-left",
                      name: "field_FONDZ",
                      checked: false
                    }, {
                      type: "block",
                      name: 'firstBl',
                    }, {
                      type: "adRes21",
                      label: "Адрес здания",
                      offsetLeft: 0,
                      offset: 0,
                      inputLeft: 0,
                      pform: this.onChange,
                      name: 'adres'
                    }, {
                      type: 'input',
                      position: "label-left",
                      label: "Год постройки",
                      value: "",
                      numberFormat: "0000",
                      labelWidth: 140,
                      inputWidth: 35,
                      name: "field_GODP",

                    }, {
                      type: 'input',
                      position: "label-left",
                      label: "Год реконструкции",
                      value: "",
                      numberFormat: "0000",
                      labelWidth: 140,
                      inputWidth: 35,
                      name: "field_GODR",
                    }, {
                      type: 'input',
                      position: "label-left",
                      label: "Площадь здания",
                      value: "",
                      labelWidth: 140,
                      inputWidth: 60,
                      name: "field_PLALL",

                    }, {
                      type: 'input',
                      position: "label-left",
                      label: "Площадь участка",
                      value: "",
                      labelWidth: 140,
                      inputWidth: 60,
                      name: "field_PLALLZ",

                    }, {
                      type: 'calendar',
                      position: "label-left",
                      label: "Год договора<br>аренды участка",
                      value: "",
                      labelWidth: 140,
                      inputWidth: 120,
                      name: "field_GODAR",
                    }, {
                      type: 'MultyCian',
                      position: "label-left",
                      label: "Парковочный<br>коэффициент",
                      // inputWidth: 440,
                      labelWidth: 140,
                      multi: false,
                      //offsetLeft: 24,
                      name: "field_PARKKOEF",
                      options: [{
                        text: "Не ограничено",
                        value: "Не ограничено"
                      }, {
                        text: "Неизвестно",
                        value: "Неизвестно",
                        selected: true

                      }, {
                        text: "1:50",
                        value: "1:50"
                      }, {
                        text: "1:100",
                        value: "1:100"
                      }, {
                        text: "1:150",
                        value: "1:150"
                      }, {
                        text: "1:200",
                        value: "1:200"
                      }]
                    },

                      {
                        type: "MultyCian",
                        name: "field_VentilationType",
                        label: 'Вентиляция:',
                        // inputWidth: 440,
                        labelWidth: 90,
                        multi: false,
                        options: [{
                          text: "Приточная",
                          value: "forced"
                        }, {
                          text: "Естественная",
                          value: "natural"
                        }, {
                          text: "Нет",
                          value: "no"
                        }]
                      }, {
                        type: "MultyCian",
                        name: "field_ConditioningType",
                        label: 'Кондиционирование:',
                        // inputWidth: 440,
                        labelWidth: 90,
                        multi: false,
                        options: [{
                          text: "Центральное",
                          value: "central"
                        }, {
                          text: "Местное",
                          value: "local"
                        }, {
                          text: "Нет",
                          value: "no"
                        }]
                      }, {
                        type: "MultyCian",
                        name: "field_ExtinguishingSystemType",
                        label: 'Система<br>пожаротушения:',
                        // inputWidth: 440,
                        labelWidth: 90,
                        multi: false,
                        options: [{
                          text: "Сигнализация",
                          value: "alarm"
                        }, {
                          text: "Газовая",
                          value: "gas"
                        }, {
                          text: "Гидрантная",
                          value: "hydrant"
                        }, {
                          text: "Нет",
                          value: "no"
                        }, {
                          text: "П��рошковая",
                          value: "powder"
                        }, {
                          text: "Спринклерная",
                          value: "sprinkler"
                        }]
                      }, {
                        type: "MultyCian",
                        name: "field_StatusType",
                        label: 'Категория:',
                        // inputWidth: 440,
                        labelWidth: 90,
                        multi: false,
                        options: [{
                          text: "Действующее",
                          value: "operational"
                        }, {
                          text: "Проект",
                          value: "project"
                        }, {
                          text: "Строящееся",
                          value: "underConstruction"
                        }]
                      }, {
                        type: "MultyCian",
                        name: "field_AccessType",
                        label: 'Вход:',
                        // inputWidth: 440,
                        labelWidth: 90,
                        multi: false,
                        options: [{
                          text: "Свободный",
                          value: "free"
                        }, {
                          text: "Пропускная система",
                          value: "passSystem"
                        }]
                      }, {
                        type: "MultyCian",
                        name: "field_Infrastructure",
                        label: 'Инфраструктура:',
                        // inputWidth: 440,
                        inputHeight: 12,
                        labelWidth: 90,
                        options: [{
                          text: "Автомойка",
                          value: "HasCarWash"
                        }, {
                          text: "Буфет",
                          value: "HasBuffet"
                        }, {
                          text: "Автосервис",
                          value: "HasCarService"
                        }, {
                          text: "Столовая",
                          value: "HasCanteen"
                        }, {
                          text: "Центральная рецепция",
                          value: "HasCentralReception"
                        }, {
                          text: "Гостиница",
                          value: "HasHotel"
                        }, {
                          text: "Банкомат",
                          value: "HasAtm"
                        }, {
                          text: "Выставочно-складской комплекс",
                          value: "HasExhibitionAndWarehouseComplex"
                        }, {
                          text: "Аптека",
                          value: "HasPharmacy"
                        }, {
                          text: "Отделение банка",
                          value: "HasBankDepartment"
                        }, {
                          text: "Кинотеатр",
                          value: "HasCinema"
                        }, {
                          text: "Кафе",
                          value: "HasCafe"
                        }, {
                          text: "Медицинский центр",
                          value: "HasMedicalCenter"
                        }, {
                          text: "Салон красоты",
                          value: "HasBeautyShop"
                        }, {
                          text: "Фотосалон",
                          value: "HasStudio"
                        }, {
                          text: "Нотариальная контора",
                          value: "HasNotaryOffice"
                        }, {
                          text: "Бассейн",
                          value: "HasPool"
                        }, {
                          text: "Ателье одежды",
                          value: "HasClothesStudio"
                        }, {
                          text: "Складские помещения",
                          value: "HasWarehouse"
                        }, {
                          text: "Парк",
                          value: "HasPark"
                        }, {
                          text: "Ресторан",
                          value: "HasRestaurant"
                        }, {
                          text: "Фитнес-центр",
                          value: "HasFitnessCentre"
                        }, {
                          text: "Супермаркет",
                          value: "HasSupermarket"
                        }, {
                          text: "Минимаркет",
                          value: "HasMinimarket"
                        }, {
                          text: "Торговая зона",
                          value: "HasShoppingArea"
                        }, {
                          text: "Конференц-зал",
                          value: "HasConferenceRoom"
                        }]
                      }

                      , {
                        type: "block",
                        className: 'flex',
                        list: [{
                          type: "combo",
                          position: "label-left",
                          label: "Паркинг наземный",
                          name: "field_PARKNAZ",
                          inputWidth: 120,
                          labelWidth: 140,
                          options: [{
                            text: "Стихийный",
                            value: "Стихийный"
                          }, {
                            text: "Нет",
                            value: "Нет",
                            selected: true

                          }, {
                            text: "Охраняемый",
                            value: "Охраняемый"
                          }]
                        }, {
                          type: "newcolumn"
                        }, {
                          type: 'input',
                          position: "label-left",
                          label: "Цена",
                          value: "",
                          labelWidth: 50,
                          inputWidth: 40,
                          name: "field_PARKNAZCENA",

                        }

                        ]
                      }, {
                        type: "block",
                        className: 'flex',
                        list: [{
                          type: "combo",
                          position: "label-left",
                          label: "Паркинг крытый",
                          name: "field_PARKKR",
                          inputWidth: 120,
                          labelWidth: 140,
                          options: [{
                            text: "Нет",
                            value: "Нет",
                            selected: true

                          }, {
                            text: "Подземный",
                            value: "Подземный"
                          }, {
                            text: "Наземный",
                            value: "Наземный"
                          }, {
                            text: "Наземный многоярусный",
                            value: "Наземный многоярусный"
                          }, {
                            text: "Типа бокс",
                            value: "Типа бокс"
                          }]
                        }, {
                          type: "newcolumn"
                        }, {
                          type: 'input',
                          position: "label-left",
                          label: "Цена",
                          value: "",
                          labelWidth: 50,
                          inputWidth: 40,
                          name: "field_PARKKRCENA",
                        }]
                      }


                    ]
                  }, {
                    type: "container",
                    inputHeight: 52
                  }
                ])
                this.addressForm.attachEvent("onChange", this.onChange);
                this.addressForm.setItemValue('adres', item.data.row.address)
                for (let key in item.data.row.building) {
                  if (this.addressForm.isItem('field_' + key)) {
                    this.addressForm.setItemValue('field_' + key, item.data.row.building[key]);
                  }
                }
                this.edit =  ''
              })
            }
          })
        }else{
          console.log('cancel', this.edit)
          if(this.edit === 'ob21'){
            this.$axios.get('/api/rent21/ob/'+this.uidOb).then(item=>{
              this.ob21Form.setItemValue('obfields',{pchange:this.onChange,data:item.data.row[0].fields});
            })
          }else{
            this.$axios.get('/api/rent21/building/'+this.item.building.UID).then(item=>{
              if(this.addressForm){
                this.addressForm.unload()
              }
              this.addressForm = new dhtmlXForm(this.$refs.address,[
                {
                  type: "settings",
                  position: "label-left",
                }, {
                  type: "block",
                  name: "blGL",
                  //inputWidth: 120,
                  offsetLeft: 10,
                  list: [{
                    type: "settings",
                    position: "label-left",
                    //inputWidth: 120,
                    labelWidth: 80,
                  }, {
                    type: 'hidden',
                    name: 'field_UID'
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Наименование",
                    value: "",
                    inputWidth: 380,
                    name: "field_NAME",
                    required: true,

                  }, {
                    type: "MultyRem",
                    name: "MultyRem",
                    label: "Комментарий",
                    inputWidth: 340,
                    className: "BuildMultyRem"
                  }, {
                    type: "block",
                    //name: 'firstBl',
                    blockOffset: 0,
                    inputWidth: 450,
                    list: [{
                      type: "block",
                      inputWidth: 240,
                      blockOffset: 0,
                      list: [{
                        type: 'combo',
                        position: "label-left",
                        label: "Проверен",
                        value: 0,
                        inputWidth: 140,
                        labelWidth: 80,
                        hidden: true,
                        name: "field_STATUS",
                        options: [{
                          text: "Проверен",
                          value: "Проверен"
                        }, {
                          text: "Непроверен",
                          value: "Непроверен",
                          selected: true
                        }, ]
                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Этажность",
                        required: true,
                        value: "",
                        inputWidth: 20,
                        labelWidth: 80,
                        name: "field_ETAGALL",
                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Урл",
                        value: "",
                        hidden: true,
                        inputWidth: 160,
                        labelWidth: 80,
                        name: "field_URL",
                      }]
                    }, {
                      type: 'newcolumn',
                      offset: 10
                    }, {
                      type: "container",
                      name: "firstphoto",
                      label: "",
                      inputWidth: 180,
                      inputHeight: 120
                    }
                    ]

                  }, {
                    type: 'MultyCian',
                    position: "label-left",
                    label: "Тип здания",
                    value: 0,
                    labelWidth: 90,
                    // inputWidth: 440,
                    multi: false,
                    required: true,

                    name: "field_TIPZD",
                    options: arType["Офис"]
                  }, {
                    type: 'MultyCian',
                    position: "label-left",
                    label: "Класс здания",
                    // inputWidth: 440,
                    labelWidth: 80,
                    multi: false,
                    name: "field_KLASS",
                    required: true,
                    options: [{
                      text: "A",
                      value: "a"
                    }, {
                      text: "A+",
                      value: "aPlus"
                    }, {
                      text: "B",
                      value: "b"
                    }, {
                      text: "B-",
                      value: "bMinus"
                    }, {
                      text: "B+",
                      value: "bPlus"
                    }, {
                      text: "C",
                      value: "c"
                    }, {
                      text: "Нет",
                      value: null,
                      selected: true
                    }]
                  }, {
                    type: "checkbox",
                    label: "Комм. фонд",
                    position: "label-left",
                    name: "field_FONDKOM",
                    checked: false
                  }, {
                    type: "checkbox",
                    label: "жилой. фонд",
                    position: "label-left",
                    name: "field_FONDH",
                    checked: false
                  }, {
                    type: "checkbox",
                    label: "частный фонд",
                    position: "label-left",
                    name: "field_FONDZ",
                    checked: false
                  }, {
                    type: "block",
                    name: 'firstBl',
                  }, {
                    type: "adRes21",
                    label: "Адрес здания",
                    offsetLeft: 0,
                    offset: 0,
                    inputLeft: 0,
                    pform: this.onChange,
                    name: 'adres'
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Год постройки",
                    value: "",
                    numberFormat: "0000",
                    labelWidth: 140,
                    inputWidth: 35,
                    name: "field_GODP",

                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Год реконструкции",
                    value: "",
                    numberFormat: "0000",
                    labelWidth: 140,
                    inputWidth: 35,
                    name: "field_GODR",
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Площадь здания",
                    value: "",
                    labelWidth: 140,
                    inputWidth: 60,
                    name: "field_PLALL",

                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Площадь участка",
                    value: "",
                    labelWidth: 140,
                    inputWidth: 60,
                    name: "field_PLALLZ",

                  }, {
                    type: 'calendar',
                    position: "label-left",
                    label: "Год договора<br>аренды участка",
                    value: "",
                    labelWidth: 140,
                    inputWidth: 120,
                    name: "field_GODAR",
                  }, {
                    type: 'MultyCian',
                    position: "label-left",
                    label: "Парковочный<br>коэффициент",
                    // inputWidth: 440,
                    labelWidth: 140,
                    multi: false,
                    //offsetLeft: 24,
                    name: "field_PARKKOEF",
                    options: [{
                      text: "Не ограничено",
                      value: "Не ограничено"
                    }, {
                      text: "Неизвестно",
                      value: "Неизвестно",
                      selected: true

                    }, {
                      text: "1:50",
                      value: "1:50"
                    }, {
                      text: "1:100",
                      value: "1:100"
                    }, {
                      text: "1:150",
                      value: "1:150"
                    }, {
                      text: "1:200",
                      value: "1:200"
                    }]
                  },

                    {
                      type: "MultyCian",
                      name: "field_VentilationType",
                      label: 'Вентиляция:',
                      // inputWidth: 440,
                      labelWidth: 90,
                      multi: false,
                      options: [{
                        text: "Приточная",
                        value: "forced"
                      }, {
                        text: "Естественная",
                        value: "natural"
                      }, {
                        text: "Нет",
                        value: "no"
                      }]
                    }, {
                      type: "MultyCian",
                      name: "field_ConditioningType",
                      label: 'Кондиционирование:',
                      // inputWidth: 440,
                      labelWidth: 90,
                      multi: false,
                      options: [{
                        text: "Центральное",
                        value: "central"
                      }, {
                        text: "Местное",
                        value: "local"
                      }, {
                        text: "Нет",
                        value: "no"
                      }]
                    }, {
                      type: "MultyCian",
                      name: "field_ExtinguishingSystemType",
                      label: 'Система<br>пожаротушения:',
                      // inputWidth: 440,
                      labelWidth: 90,
                      multi: false,
                      options: [{
                        text: "Сигнализация",
                        value: "alarm"
                      }, {
                        text: "Газовая",
                        value: "gas"
                      }, {
                        text: "Гидрантная",
                        value: "hydrant"
                      }, {
                        text: "Нет",
                        value: "no"
                      }, {
                        text: "П��рошковая",
                        value: "powder"
                      }, {
                        text: "Спринклерная",
                        value: "sprinkler"
                      }]
                    }, {
                      type: "MultyCian",
                      name: "field_StatusType",
                      label: 'Категория:',
                      // inputWidth: 440,
                      labelWidth: 90,
                      multi: false,
                      options: [{
                        text: "Действующее",
                        value: "operational"
                      }, {
                        text: "Проект",
                        value: "project"
                      }, {
                        text: "Строящееся",
                        value: "underConstruction"
                      }]
                    }, {
                      type: "MultyCian",
                      name: "field_AccessType",
                      label: 'Вход:',
                      // inputWidth: 440,
                      labelWidth: 90,
                      multi: false,
                      options: [{
                        text: "Свободный",
                        value: "free"
                      }, {
                        text: "Пропускная система",
                        value: "passSystem"
                      }]
                    }, {
                      type: "MultyCian",
                      name: "field_Infrastructure",
                      label: 'Инфраструктура:',
                      // inputWidth: 440,
                      inputHeight: 12,
                      labelWidth: 90,
                      options: [{
                        text: "Автомойка",
                        value: "HasCarWash"
                      }, {
                        text: "Буфет",
                        value: "HasBuffet"
                      }, {
                        text: "Автосервис",
                        value: "HasCarService"
                      }, {
                        text: "Столовая",
                        value: "HasCanteen"
                      }, {
                        text: "Центральная рецепция",
                        value: "HasCentralReception"
                      }, {
                        text: "Гостиница",
                        value: "HasHotel"
                      }, {
                        text: "Банкомат",
                        value: "HasAtm"
                      }, {
                        text: "Выставочно-складской комплекс",
                        value: "HasExhibitionAndWarehouseComplex"
                      }, {
                        text: "Аптека",
                        value: "HasPharmacy"
                      }, {
                        text: "Отделение банка",
                        value: "HasBankDepartment"
                      }, {
                        text: "Кинотеатр",
                        value: "HasCinema"
                      }, {
                        text: "Кафе",
                        value: "HasCafe"
                      }, {
                        text: "Медицинский центр",
                        value: "HasMedicalCenter"
                      }, {
                        text: "Салон красоты",
                        value: "HasBeautyShop"
                      }, {
                        text: "Фотосалон",
                        value: "HasStudio"
                      }, {
                        text: "Нотариальная контора",
                        value: "HasNotaryOffice"
                      }, {
                        text: "Бассейн",
                        value: "HasPool"
                      }, {
                        text: "Ателье одежды",
                        value: "HasClothesStudio"
                      }, {
                        text: "Складские помещения",
                        value: "HasWarehouse"
                      }, {
                        text: "Парк",
                        value: "HasPark"
                      }, {
                        text: "Ресторан",
                        value: "HasRestaurant"
                      }, {
                        text: "Фитнес-центр",
                        value: "HasFitnessCentre"
                      }, {
                        text: "Супермаркет",
                        value: "HasSupermarket"
                      }, {
                        text: "Минимаркет",
                        value: "HasMinimarket"
                      }, {
                        text: "Торговая зона",
                        value: "HasShoppingArea"
                      }, {
                        text: "Конференц-зал",
                        value: "HasConferenceRoom"
                      }]
                    }

                    , {
                      type: "block",
                      className: 'flex',
                      list: [{
                        type: "combo",
                        position: "label-left",
                        label: "Паркинг наземный",
                        name: "field_PARKNAZ",
                        inputWidth: 120,
                        labelWidth: 140,
                        options: [{
                          text: "Стихийный",
                          value: "Стихийный"
                        }, {
                          text: "Нет",
                          value: "Нет",
                          selected: true

                        }, {
                          text: "Охраняемый",
                          value: "Охраняемый"
                        }]
                      }, {
                        type: "newcolumn"
                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Цена",
                        value: "",
                        labelWidth: 50,
                        inputWidth: 40,
                        name: "field_PARKNAZCENA",

                      }

                      ]
                    }, {
                      type: "block",
                      className: 'flex',
                      list: [{
                        type: "combo",
                        position: "label-left",
                        label: "Паркинг крытый",
                        name: "field_PARKKR",
                        inputWidth: 120,
                        labelWidth: 140,
                        options: [{
                          text: "Нет",
                          value: "Нет",
                          selected: true

                        }, {
                          text: "Подземный",
                          value: "Подземный"
                        }, {
                          text: "Наземный",
                          value: "Наземный"
                        }, {
                          text: "Наземный многоярусный",
                          value: "Наземный многоярусный"
                        }, {
                          text: "Типа бокс",
                          value: "Типа бокс"
                        }]
                      }, {
                        type: "newcolumn"
                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Цена",
                        value: "",
                        labelWidth: 50,
                        inputWidth: 40,
                        name: "field_PARKKRCENA",
                      }]
                    }


                  ]
                }, {
                  type: "container",
                  inputHeight: 52
                }
              ])
              this.addressForm.attachEvent("onChange", this.onChange);
              this.addressForm.setItemValue('adres', item.data.row.address)
              for (let key in item.data.row.building) {
                if (this.addressForm.isItem('field_' + key)) {
                  this.addressForm.setItemValue('field_' + key, item.data.row.building[key]);
                }
              }
              this.edit =  ''
            })

          }
          this.edit =  ''
          this.$store.dispatch('main/globalMessage',null)
          disableForms(this.disableItems, false)
          this.$store.dispatch('main/save_component', null)
        }
      }

    }
  },
  mounted () {
    this.resize()

    window.addEventListener('resize', this.resize);
    // this.$store.dispatch('main/globalMessage','hideMenu')
    if(this.$store.getters['export/items'].length == 0){
      this.$axios.get('/api/rent21/report').then(item=>{
        this.$store.commit('export/items',item.data.rows)
        this.createForms();
      })
    }else{
      this.createForms();
    }

  },
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods:{
    replaceTip(val){
      if(val === 'Помещение свободного назначения'){
        return 'ПСН'
      }else
        return val
    },
    createForms(){
      this.$axios.get('/api/rent21/building/'+this.$route.params.id).then(item=>{
        if(item.data.error && item.data.error === 401){
          window.alert('Вы не авторизованы')
          return
        }
        //console.log(item.data)
        this.$store.dispatch('ob21edit/item',item.data.row)
        console.log('ob', item.data.row)
        this.owners = item.data.row.owners
        if(this.innerWidth >1000){
          /*
                  this.win.dhxTabbar = new window.dhtmlXTabBar({
                    parent: this.$refs.maintab,  // parent container
                    tabs: [ // tabs config
                      {
                        id: "gl", // tab id
                        text: "Основные", // tab text
                        width: null, // numeric for tab width or null for auto, optional
                        index: null, // numeric for tab index or null for last position,opt.
                        active: true, // boolean, make tab active after adding, optional
                        enabled: true, // boolean, false to disable tab on init
                        close: false // boolean, render close button on tab, optional
                      }, {
                        id: "docs", // tab id
                        text: "Документы", // tab text
                        width: null, // numeric for tab width or null for auto, optional
                        index: null, // numeric for tab index or null for last position,opt.
                        active: false, // boolean, make tab active after adding, optional
                        enabled: false, // boolean, false to disable tab on init
                        close: false // boolean, render close button on tab, optional
                      }, {
                        id: "build", // tab id
                        text: "Адреса", // tab text
                        width: null, // numeric for tab width or null for auto, optional
                        index: null, // numeric for tab index or null for last position,opt.
                        active: false, // boolean, make tab active after adding, optional
                        enabled: false, // boolean, false to disable tab on init
                        close: false // boolean, render close button on tab, optional
                      }, {
                        id: "ob21", // tab id
                        text: "Помещения", // tab text
                        width: null, // numeric for tab width or null for auto, optional
                        index: null, // numeric for tab index or null for last position,opt.
                        active: false, // boolean, make tab active after adding, optional
                        enabled: false, // boolean, false to disable tab on init
                        close: false // boolean, render close button on tab, optional
                      }, {
                        id: "history", // tab id
                        text: "История", // tab text
                        width: null, // numeric for tab width or null for auto, optional
                        index: null, // numeric for tab index or null for last position,opt.
                        active: false, // boolean, make tab active after adding, optional
                        enabled: false, // boolean, false to disable tab on init
                        close: false // boolean, render close button on tab, optional
                      }, {
                        id: "Panoram", // tab id
                        text: "Панорама", // tab text
                        width: null, // numeric for tab width or null for auto, optional
                        index: null, // numeric for tab index or null for last position,opt.
                        active: false, // boolean, make tab active after adding, optional
                        enabled: true, // boolean, false to disable tab on init
                        close: false // boolean, render close button on tab, optional
                      }
                    ]            // tabs and other config
                  });
                  this.win.dhxTabbar.layout = this.win.dhxTabbar.tabs('gl').attachLayout({
                    pattern: "4W",
                    cells: [ // optional, cells configuration according to the pattern
                      // you can specify only the cells you want to configure
                      // all params are optional
                      {
                        id: "a", // id of the cell you want to configure
                        text: "Данные здания", // header text
                        collapsed_text: "Text 2", // header text for a collapsed cell
                        header: true, // hide header on init
                        width: 500, // cell init width
                        collapse: false, // collapse on init
                        fix_size: [false, null] // fix cell's size, [width,height]
                      }, {
                        id: "b", // id of the cell you want to configure
                        text: "Собственики    ", // header text
                        //width: 540, // cell init width", // header text
                        width: 200, // cell init width
                        collapsed_text: "Собственики", // header text for a collapsed cell
                        header: true, // hide header on init
                        collapse: false, // collapse on init
                        fix_size: [false, null] // fix cell's size, [width,height]

                      }, {
                        id: "c", // id of the cell you want to configure
                        text: "Помещения", // header text
                        collapsed_text: "Помещения", // header text for a collapsed cell
                        header: true, // hide header on init
                        width: 170, // cell init width
                        collapse: false, // collapse on init
                        fix_size: [false, null],
                        //width: 300, // cell init width

                      }, {
                        id: "d", // id of the cell you want to configure
                        text: "Редактирование помещений",
                        width: 600,
                        collapsed_text: "Редактирование помещений", // header text for a collapsed cell
                        header: true, // hide header on init
                        collapse: false, // collapse on init
                        fix_size: [false, null] // fix cell's size, [width,height]

                      }
                    ]
                  });
                  this.win.dhxTabbar.layout.cells('a').myTabbar = this.win.dhxTabbar.layout.cells('a').attachTabbar({
                    tabs: [{
                      id: "a1", // tab id
                      text: "Основные поля", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: true, // boolean, make tab active after adding, optional
                      enabled: true, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "setings", // tab id
                      text: "Подробнее", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: true, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "Photo", // tab id
                      text: "Фотографии", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: true, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "Video", // tab id
                      text: "Видео", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: true, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "log", // tab id
                      text: "Лог действий", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: true, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }]

                  })
                  this.win.dhxTabbar.layout.cells('a').form = this.win.dhxTabbar.layout.cells('a').myTabbar.tabs('a1').attachForm([
                    {
                      type: "settings",
                      position: "label-left",
                    }, {
                      type: "block",
                      name: "blGL",
                      //inputWidth: 120,
                      offsetLeft: 10,
                      list: [{
                        type: "settings",
                        position: "label-left",
                        //inputWidth: 120,
                        labelWidth: 80,
                      }, {
                        type: 'hidden',
                        name: 'field_UID'
                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Наименование",
                        value: "",
                        inputWidth: 310,
                        name: "field_NAME",
                        required: true,

                      }, {
                        type: "MultyRem",
                        name: "MultyRem",
                        label: "Комментарий",
                        inputWidth: 340,
                        className: "BuildMultyRem"
                      }, {
                        type: "block",
                        //name: 'firstBl',
                        blockOffset: 0,
                        inputWidth: 450,
                        list: [{
                          type: "block",
                          inputWidth: 240,
                          blockOffset: 0,
                          list: [{
                            type: 'combo',
                            position: "label-left",
                            label: "Проверен",
                            value: 0,
                            inputWidth: 140,
                            labelWidth: 80,
                            hidden: true,
                            name: "field_STATUS",
                            options: [{
                              text: "Проверен",
                              value: "Проверен"
                            }, {
                              text: "Непроверен",
                              value: "Непроверен",
                              selected: true
                            }, ]
                          }, {
                            type: 'input',
                            position: "label-left",
                            label: "Этажность",
                            required: true,
                            value: "",
                            inputWidth: 20,
                            labelWidth: 80,
                            name: "field_ETAGALL",
                          }, {
                            type: 'input',
                            position: "label-left",
                            label: "Урл",
                            value: "",
                            hidden: true,
                            inputWidth: 160,
                            labelWidth: 80,
                            name: "field_URL",
                          }]
                        }, {
                          type: 'newcolumn',
                          offset: 10
                        }, {
                          type: "container",
                          name: "firstphoto",
                          label: "",
                          inputWidth: 180,
                          inputHeight: 120
                        }
                        ]

                      }, {
                        type: 'MultyCian',
                        position: "label-left",
                        label: "Тип здания",
                        value: 0,
                        labelWidth: 90,
                        // inputWidth: 440,
                        multi: false,
                        required: true,

                        name: "field_TIPZD",
                        options: arType["Офис"]
                      }, {
                        type: 'MultyCian',
                        position: "label-left",
                        label: "Класс здания",
                        // inputWidth: 440,
                        labelWidth: 80,
                        multi: false,
                        name: "field_KLASS",
                        required: true,
                        options: [{
                          text: "A",
                          value: "a"
                        }, {
                          text: "A+",
                          value: "aPlus"
                        }, {
                          text: "B",
                          value: "b"
                        }, {
                          text: "B-",
                          value: "bMinus"
                        }, {
                          text: "B+",
                          value: "bPlus"
                        }, {
                          text: "C",
                          value: "c"
                        }, {
                          text: "Нет",
                          value: null,
                          selected: true
                        }]
                      }, {
                        type: "checkbox",
                        label: "Комм. фонд",
                        position: "label-left",
                        name: "field_FONDKOM",
                        checked: false
                      }, {
                        type: "checkbox",
                        label: "жилой. фонд",
                        position: "label-left",
                        name: "field_FONDH",
                        checked: false
                      }, {
                        type: "checkbox",
                        label: "частный фонд",
                        position: "label-left",
                        name: "field_FONDZ",
                        checked: false
                      }, {
                        type: "block",
                        name: 'firstBl',
                      }, {
                        type: "adRes21",
                        label: "Адрес здания",
                        offsetLeft: 0,
                        offset: 0,
                        inputLeft: 0,
                        pform: this.onChange,
                        name: 'adres'
                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Год постройки",
                        value: "",
                        numberFormat: "0000",
                        labelWidth: 140,
                        inputWidth: 35,
                        name: "field_GODP",

                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Год реконструкции",
                        value: "",
                        numberFormat: "0000",
                        labelWidth: 140,
                        inputWidth: 35,
                        name: "field_GODR",
                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Площадь здания",
                        value: "",
                        labelWidth: 140,
                        inputWidth: 60,
                        name: "field_PLALL",

                      }, {
                        type: 'input',
                        position: "label-left",
                        label: "Площадь участка",
                        value: "",
                        labelWidth: 140,
                        inputWidth: 60,
                        name: "field_PLALLZ",

                      }, {
                        type: 'calendar',
                        position: "label-left",
                        label: "Год договора<br>аренды участка",
                        value: "",
                        labelWidth: 140,
                        inputWidth: 120,
                        name: "field_GODAR",
                      }, {
                        type: 'MultyCian',
                        position: "label-left",
                        label: "Парковочный<br>коэффициент",
                        // inputWidth: 440,
                        labelWidth: 140,
                        multi: false,
                        //offsetLeft: 24,
                        name: "field_PARKKOEF",
                        options: [{
                          text: "Не ограничено",
                          value: "Не ограничено"
                        }, {
                          text: "Неизвестно",
                          value: "Неизвестно",
                          selected: true

                        }, {
                          text: "1:50",
                          value: "1:50"
                        }, {
                          text: "1:100",
                          value: "1:100"
                        }, {
                          text: "1:150",
                          value: "1:150"
                        }, {
                          text: "1:200",
                          value: "1:200"
                        }]
                      },

                        {
                          type: "MultyCian",
                          name: "field_VentilationType",
                          label: 'Вентиляция:',
                          // inputWidth: 440,
                          labelWidth: 90,
                          multi: false,
                          options: [{
                            text: "Приточная",
                            value: "forced"
                          }, {
                            text: "Естественная",
                            value: "natural"
                          }, {
                            text: "Нет",
                            value: "no"
                          }]
                        }, {
                          type: "MultyCian",
                          name: "field_ConditioningType",
                          label: 'Кондиционирование:',
                          // inputWidth: 440,
                          labelWidth: 90,
                          multi: false,
                          options: [{
                            text: "Центральное",
                            value: "central"
                          }, {
                            text: "Местное",
                            value: "local"
                          }, {
                            text: "Нет",
                            value: "no"
                          }]
                        }, {
                          type: "MultyCian",
                          name: "field_ExtinguishingSystemType",
                          label: 'Система<br>пожаротушения:',
                          // inputWidth: 440,
                          labelWidth: 90,
                          multi: false,
                          options: [{
                            text: "Сигнализация",
                            value: "alarm"
                          }, {
                            text: "Газовая",
                            value: "gas"
                          }, {
                            text: "Гидрантная",
                            value: "hydrant"
                          }, {
                            text: "Нет",
                            value: "no"
                          }, {
                            text: "П��рошковая",
                            value: "powder"
                          }, {
                            text: "Спринклерная",
                            value: "sprinkler"
                          }]
                        }, {
                          type: "MultyCian",
                          name: "field_StatusType",
                          label: 'Категория:',
                          // inputWidth: 440,
                          labelWidth: 90,
                          multi: false,
                          options: [{
                            text: "Действующее",
                            value: "operational"
                          }, {
                            text: "Проект",
                            value: "project"
                          }, {
                            text: "Строящееся",
                            value: "underConstruction"
                          }]
                        }, {
                          type: "MultyCian",
                          name: "field_AccessType",
                          label: 'Вход:',
                          // inputWidth: 440,
                          labelWidth: 90,
                          multi: false,
                          options: [{
                            text: "Свободный",
                            value: "free"
                          }, {
                            text: "Пропускная система",
                            value: "passSystem"
                          }]
                        }, {
                          type: "MultyCian",
                          name: "field_Infrastructure",
                          label: 'Инфраструктура:',
                          // inputWidth: 440,
                          inputHeight: 12,
                          labelWidth: 90,
                          options: [{
                            text: "Автомойка",
                            value: "HasCarWash"
                          }, {
                            text: "Буфет",
                            value: "HasBuffet"
                          }, {
                            text: "Автосервис",
                            value: "HasCarService"
                          }, {
                            text: "Столовая",
                            value: "HasCanteen"
                          }, {
                            text: "Центральная рецепция",
                            value: "HasCentralReception"
                          }, {
                            text: "Гостиница",
                            value: "HasHotel"
                          }, {
                            text: "Банкомат",
                            value: "HasAtm"
                          }, {
                            text: "Выставочно-складской комплекс",
                            value: "HasExhibitionAndWarehouseComplex"
                          }, {
                            text: "Аптека",
                            value: "HasPharmacy"
                          }, {
                            text: "Отделение банка",
                            value: "HasBankDepartment"
                          }, {
                            text: "Кинотеатр",
                            value: "HasCinema"
                          }, {
                            text: "Кафе",
                            value: "HasCafe"
                          }, {
                            text: "Медицинский центр",
                            value: "HasMedicalCenter"
                          }, {
                            text: "Салон красоты",
                            value: "HasBeautyShop"
                          }, {
                            text: "Фотосалон",
                            value: "HasStudio"
                          }, {
                            text: "Нотариальная контора",
                            value: "HasNotaryOffice"
                          }, {
                            text: "Бассейн",
                            value: "HasPool"
                          }, {
                            text: "Ателье одежды",
                            value: "HasClothesStudio"
                          }, {
                            text: "Складские помещения",
                            value: "HasWarehouse"
                          }, {
                            text: "Парк",
                            value: "HasPark"
                          }, {
                            text: "Ресторан",
                            value: "HasRestaurant"
                          }, {
                            text: "Фитнес-центр",
                            value: "HasFitnessCentre"
                          }, {
                            text: "Супермаркет",
                            value: "HasSupermarket"
                          }, {
                            text: "Минимаркет",
                            value: "HasMinimarket"
                          }, {
                            text: "Торговая зона",
                            value: "HasShoppingArea"
                          }, {
                            text: "Конференц-зал",
                            value: "HasConferenceRoom"
                          }]
                        }

                        , {
                          type: "block",
                          list: [{
                            type: "combo",
                            position: "label-left",
                            label: "Паркинг наземный",
                            name: "field_PARKNAZ",
                            inputWidth: 150,
                            labelWidth: 140,
                            options: [{
                              text: "Стихийный",
                              value: "Стихийный"
                            }, {
                              text: "Нет",
                              value: "Нет",
                              selected: true

                            }, {
                              text: "Охраняемый",
                              value: "Охраняемый"
                            }]
                          }, {
                            type: "newcolumn"
                          }, {
                            type: 'input',
                            position: "label-left",
                            label: "Цена",
                            value: "",
                            labelWidth: 50,
                            inputWidth: 40,
                            name: "field_PARKNAZCENA",

                          }

                          ]
                        }, {
                          type: "block",
                          list: [{
                            type: "combo",
                            position: "label-left",
                            label: "Паркинг крытый",
                            name: "field_PARKKR",
                            inputWidth: 150,
                            labelWidth: 140,
                            options: [{
                              text: "Нет",
                              value: "Нет",
                              selected: true

                            }, {
                              text: "Подземный",
                              value: "Подземный"
                            }, {
                              text: "Наземный",
                              value: "Наземный"
                            }, {
                              text: "Наземный многоярусный",
                              value: "Наземный многоярусный"
                            }, {
                              text: "Типа бокс",
                              value: "Типа бокс"
                            }]
                          }, {
                            type: "newcolumn"
                          }, {
                            type: 'input',
                            position: "label-left",
                            label: "Цена",
                            value: "",
                            labelWidth: 50,
                            inputWidth: 40,
                            name: "field_PARKKRCENA",
                          }]
                        }


                      ]
                    }, {
                      type: "container",
                      inputHeight: 52
                    }
                  ]);
                  this.win.dhxTabbar.layout.cells('a').form.attachEvent("onChange", this.onChange);
                  this.win.dhxTabbar.layout.cells('a').form.fdata = this.item
                  this.win.dhxTabbar.layout.cells('d').ToolbarObALL = this.win.dhxTabbar.layout.cells('d').attachToolbar({
                    icons_path: "/img/",
                    items: [
                      {
                        id: "urlOb",
                        type: "text",
                        imgdis: "48/save.gif",
                        img: "48/save.gif",
                        text: "Ссылка на помещение"
                      }, {
                        id: "exportRevolution",
                        type: "button",
                        img: "48/save.gif",
                        text: "<div style='display:flex'><span>Експорт</span>" +
                          "<div class='infoExport cianInd'><i class='far fa-map-marker' aria-hidden='true' style='color:#68c8d8'></i></div>" +
                          "<div class='infoExport rent21Ind'><i class='far fa-map-marker' aria-hidden='true' style='color:blue'></i></div>" +
                          "<div class='infoExport avitoInd' ><i class='far fa-map-marker' aria-hidden='true' style='color:green'></i></div>" +
                          "<div class='infoExport yandexInd' ><i class='far fa-map-marker' aria-hidden='true' style='color:red'></i></div>" +
                          "</div>"
                      }, {
                        id: "findKlient",
                        type: "button",
                        img: "48/page_find.png",
                        text: "<div style='display:flex'><span>Подбор клиентов</span>" +
                          "</div>"
                      }
                    ]
                  });
                  this.win.dhxTabbar.layout.cells('d').myTabbar = this.win.dhxTabbar.layout.cells('d').attachTabbar({
                    tabs: [{
                      id: "a1", // tab id
                      text: "Основные поля", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: true, // boolean, make tab active after adding, optional
                      enabled: true, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "Photo", // tab id
                      text: "Фотографии", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: false, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "Video", // tab id
                      text: "Видео", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: false, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "export", // tab id
                      text: "Публикация", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: false, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "log", // tab id
                      text: "Лог действий", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: true, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }, {
                      id: "pokaz", // tab id
                      text: "Показы", // tab text
                      //                        width: null, // numeric for tab width or null for auto, optional
                      //                        index: null, // numeric for tab index or null for last position,opt.
                      active: false, // boolean, make tab active after adding, optional
                      enabled: true, // boolean, false to disable tab on init
                      close: false // boolean, render close button on tab, optional
                    }]

                  });
                  const n = generateUID();

                  this.win.dhxTabbar.layout.cells('d').formOb = this.win.dhxTabbar.layout.cells('d').myTabbar.tabs('a1').attachForm(
                    [{
                      type: "ob21",
                      name: "obfields"
                    }]);
                  this.win.dhxTabbar.layout.cells('d').formOb.pchange = this.onChange


           */
          if(this.$refs.ob21){
            this.ob21Form = new dhtmlXForm(this.$refs.ob21, [{
              type: "ob21",
              name: "obfields"
            }]);
            this.ob21Form.pchange = this.onChange
          }
          this.addressForm = new dhtmlXForm(this.$refs.address,[
            {
              type: "settings",
              position: "label-left",
            }, {
              type: "block",
              name: "blGL",
              //inputWidth: 120,
              offsetLeft: 10,
              list: [{
                type: "settings",
                position: "label-left",
                //inputWidth: 120,
                labelWidth: 80,
              }, {
                type: 'hidden',
                name: 'field_UID'
              }, {
                type: 'input',
                position: "label-left",
                label: "Наименование",
                value: "",
                inputWidth: 380,
                name: "field_NAME",
                required: true,

              }, {
                type: "MultyRem",
                name: "MultyRem",
                label: "Комментарий",
                inputWidth: 340,
                className: "BuildMultyRem"
              }, {
                type: "block",
                //name: 'firstBl',
                blockOffset: 0,
                inputWidth: 450,
                list: [{
                  type: "block",
                  inputWidth: 240,
                  blockOffset: 0,
                  list: [{
                    type: 'combo',
                    position: "label-left",
                    label: "Проверен",
                    value: 0,
                    inputWidth: 140,
                    labelWidth: 80,
                    hidden: true,
                    name: "field_STATUS",
                    options: [{
                      text: "Проверен",
                      value: "Проверен"
                    }, {
                      text: "Непроверен",
                      value: "Непроверен",
                      selected: true
                    }, ]
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Этажность",
                    required: true,
                    value: "",
                    inputWidth: 20,
                    labelWidth: 80,
                    name: "field_ETAGALL",
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Урл",
                    value: "",
                    hidden: true,
                    inputWidth: 160,
                    labelWidth: 80,
                    name: "field_URL",
                  }]
                }, {
                  type: 'newcolumn',
                  offset: 10
                }, {
                  type: "container",
                  name: "firstphoto",
                  label: "",
                  inputWidth: 180,
                  inputHeight: 120
                }
                ]

              }, {
                type: 'MultyCian',
                position: "label-left",
                label: "Тип здания",
                value: 0,
                labelWidth: 90,
                // inputWidth: 440,
                multi: false,
                required: true,

                name: "field_TIPZD",
                options: arType["Офис"]
              }, {
                type: 'MultyCian',
                position: "label-left",
                label: "Класс здания",
                // inputWidth: 440,
                labelWidth: 80,
                multi: false,
                name: "field_KLASS",
                required: true,
                options: [{
                  text: "A",
                  value: "a"
                }, {
                  text: "A+",
                  value: "aPlus"
                }, {
                  text: "B",
                  value: "b"
                }, {
                  text: "B-",
                  value: "bMinus"
                }, {
                  text: "B+",
                  value: "bPlus"
                }, {
                  text: "C",
                  value: "c"
                }, {
                  text: "Нет",
                  value: null,
                  selected: true
                }]
              }, {
                type: "checkbox",
                label: "Комм. фонд",
                position: "label-left",
                name: "field_FONDKOM",
                checked: false
              }, {
                type: "checkbox",
                label: "жилой. фонд",
                position: "label-left",
                name: "field_FONDH",
                checked: false
              }, {
                type: "checkbox",
                label: "частный фонд",
                position: "label-left",
                name: "field_FONDZ",
                checked: false
              }, {
                type: "block",
                name: 'firstBl',
              }, {
                type: "adRes21",
                label: "Адрес здания",
                offsetLeft: 0,
                offset: 0,
                inputLeft: 0,
                pform: this.onChange,
                name: 'adres'
              }, {
                type: 'input',
                position: "label-left",
                label: "Год постройки",
                value: "",
                numberFormat: "0000",
                labelWidth: 140,
                inputWidth: 35,
                name: "field_GODP",

              }, {
                type: 'input',
                position: "label-left",
                label: "Год реконструкции",
                value: "",
                numberFormat: "0000",
                labelWidth: 140,
                inputWidth: 35,
                name: "field_GODR",
              }, {
                type: 'input',
                position: "label-left",
                label: "Площадь здания",
                value: "",
                labelWidth: 140,
                inputWidth: 60,
                name: "field_PLALL",

              }, {
                type: 'input',
                position: "label-left",
                label: "Площадь участка",
                value: "",
                labelWidth: 140,
                inputWidth: 60,
                name: "field_PLALLZ",

              }, {
                type: 'calendar',
                position: "label-left",
                label: "Год договора<br>аренды участка",
                value: "",
                labelWidth: 140,
                inputWidth: 120,
                name: "field_GODAR",
              }, {
                type: 'MultyCian',
                position: "label-left",
                label: "Парковочный<br>коэффициент",
                // inputWidth: 440,
                labelWidth: 140,
                multi: false,
                //offsetLeft: 24,
                name: "field_PARKKOEF",
                options: [{
                  text: "Не ограничено",
                  value: "Не ограничено"
                }, {
                  text: "Неизвестно",
                  value: "Неизвестно",
                  selected: true

                }, {
                  text: "1:50",
                  value: "1:50"
                }, {
                  text: "1:100",
                  value: "1:100"
                }, {
                  text: "1:150",
                  value: "1:150"
                }, {
                  text: "1:200",
                  value: "1:200"
                }]
              },

                {
                  type: "MultyCian",
                  name: "field_VentilationType",
                  label: 'Вентиляция:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Приточная",
                    value: "forced"
                  }, {
                    text: "Естественная",
                    value: "natural"
                  }, {
                    text: "Нет",
                    value: "no"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_ConditioningType",
                  label: 'Кондиционирование:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Центральное",
                    value: "central"
                  }, {
                    text: "Местное",
                    value: "local"
                  }, {
                    text: "Нет",
                    value: "no"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_ExtinguishingSystemType",
                  label: 'Система<br>пожаротушения:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Сигнализация",
                    value: "alarm"
                  }, {
                    text: "Газовая",
                    value: "gas"
                  }, {
                    text: "Гидрантная",
                    value: "hydrant"
                  }, {
                    text: "Нет",
                    value: "no"
                  }, {
                    text: "П��рошковая",
                    value: "powder"
                  }, {
                    text: "Спринклерная",
                    value: "sprinkler"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_StatusType",
                  label: 'Категория:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Действующее",
                    value: "operational"
                  }, {
                    text: "Проект",
                    value: "project"
                  }, {
                    text: "Строящееся",
                    value: "underConstruction"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_AccessType",
                  label: 'Вход:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Свободный",
                    value: "free"
                  }, {
                    text: "Пропускная система",
                    value: "passSystem"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_Infrastructure",
                  label: 'Инфраструктура:',
                  // inputWidth: 440,
                  inputHeight: 12,
                  labelWidth: 90,
                  options: [{
                    text: "Автомойка",
                    value: "HasCarWash"
                  }, {
                    text: "Буфет",
                    value: "HasBuffet"
                  }, {
                    text: "Автосервис",
                    value: "HasCarService"
                  }, {
                    text: "Столовая",
                    value: "HasCanteen"
                  }, {
                    text: "Центральная рецепция",
                    value: "HasCentralReception"
                  }, {
                    text: "Гостиница",
                    value: "HasHotel"
                  }, {
                    text: "Банкомат",
                    value: "HasAtm"
                  }, {
                    text: "Выставочно-складской комплекс",
                    value: "HasExhibitionAndWarehouseComplex"
                  }, {
                    text: "Аптека",
                    value: "HasPharmacy"
                  }, {
                    text: "Отделение банка",
                    value: "HasBankDepartment"
                  }, {
                    text: "Кинотеатр",
                    value: "HasCinema"
                  }, {
                    text: "Кафе",
                    value: "HasCafe"
                  }, {
                    text: "Медицинский центр",
                    value: "HasMedicalCenter"
                  }, {
                    text: "Салон красоты",
                    value: "HasBeautyShop"
                  }, {
                    text: "Фотосалон",
                    value: "HasStudio"
                  }, {
                    text: "Нотариальная контора",
                    value: "HasNotaryOffice"
                  }, {
                    text: "Бассейн",
                    value: "HasPool"
                  }, {
                    text: "Ателье одежды",
                    value: "HasClothesStudio"
                  }, {
                    text: "Складские помещения",
                    value: "HasWarehouse"
                  }, {
                    text: "Парк",
                    value: "HasPark"
                  }, {
                    text: "Ресторан",
                    value: "HasRestaurant"
                  }, {
                    text: "Фитнес-центр",
                    value: "HasFitnessCentre"
                  }, {
                    text: "Супермаркет",
                    value: "HasSupermarket"
                  }, {
                    text: "Минимаркет",
                    value: "HasMinimarket"
                  }, {
                    text: "Торговая зона",
                    value: "HasShoppingArea"
                  }, {
                    text: "Конференц-зал",
                    value: "HasConferenceRoom"
                  }]
                }

                , {
                  type: "block",
                  className: 'flex',
                  list: [{
                    type: "combo",
                    position: "label-left",
                    label: "Паркинг наземный",
                    name: "field_PARKNAZ",
                    inputWidth: 120,
                    labelWidth: 140,
                    options: [{
                      text: "Стихийный",
                      value: "Стихийный"
                    }, {
                      text: "Нет",
                      value: "Нет",
                      selected: true

                    }, {
                      text: "Охраняемый",
                      value: "Охраняемый"
                    }]
                  }, {
                    type: "newcolumn"
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Цена",
                    value: "",
                    labelWidth: 50,
                    inputWidth: 40,
                    name: "field_PARKNAZCENA",

                  }

                  ]
                }, {
                  type: "block",
                  className: 'flex',
                  list: [{
                    type: "combo",
                    position: "label-left",
                    label: "Паркинг крытый",
                    name: "field_PARKKR",
                    inputWidth: 120,
                    labelWidth: 140,
                    options: [{
                      text: "Нет",
                      value: "Нет",
                      selected: true

                    }, {
                      text: "Подземный",
                      value: "Подземный"
                    }, {
                      text: "Наземный",
                      value: "Наземный"
                    }, {
                      text: "Наземный многоярусный",
                      value: "Наземный многоярусный"
                    }, {
                      text: "Типа бокс",
                      value: "Типа бокс"
                    }]
                  }, {
                    type: "newcolumn"
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Цена",
                    value: "",
                    labelWidth: 50,
                    inputWidth: 40,
                    name: "field_PARKKRCENA",
                  }]
                }


              ]
            }, {
              type: "container",
              inputHeight: 52
            }
          ])
          this.addressForm.attachEvent("onChange", this.onChange);
          this.addressForm.fdata = this.item



        }else{
          this.ob21Form = new dhtmlXForm(this.$refs.ob21, [{
            type: "ob21",
            name: "obfields"
          }]);
          this.ob21Form.pchange = this.onChange
          this.addressForm = new dhtmlXForm(this.$refs.address,[
            {
              type: "settings",
              position: "label-left",
            }, {
              type: "block",
              name: "blGL",
              //inputWidth: 120,
              offsetLeft: 10,
              list: [{
                type: "settings",
                position: "label-left",
                //inputWidth: 120,
                labelWidth: 80,
              }, {
                type: 'hidden',
                name: 'field_UID'
              }, {
                type: 'input',
                position: "label-left",
                label: "Наименование",
                value: "",
                inputWidth: 380,
                name: "field_NAME",
                required: true,

              }, {
                type: "MultyRem",
                name: "MultyRem",
                label: "Комментарий",
                inputWidth: 340,
                className: "BuildMultyRem"
              }, {
                type: "block",
                //name: 'firstBl',
                blockOffset: 0,
                inputWidth: 450,
                list: [{
                  type: "block",
                  inputWidth: 240,
                  blockOffset: 0,
                  list: [{
                    type: 'combo',
                    position: "label-left",
                    label: "Проверен",
                    value: 0,
                    inputWidth: 140,
                    labelWidth: 80,
                    hidden: true,
                    name: "field_STATUS",
                    options: [{
                      text: "Проверен",
                      value: "Проверен"
                    }, {
                      text: "Непроверен",
                      value: "Непроверен",
                      selected: true
                    }, ]
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Этажность",
                    required: true,
                    value: "",
                    inputWidth: 20,
                    labelWidth: 80,
                    name: "field_ETAGALL",
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Урл",
                    value: "",
                    hidden: true,
                    inputWidth: 160,
                    labelWidth: 80,
                    name: "field_URL",
                  }]
                }, {
                  type: 'newcolumn',
                  offset: 10
                }, {
                  type: "container",
                  name: "firstphoto",
                  label: "",
                  inputWidth: 180,
                  inputHeight: 120
                }
                ]

              }, {
                type: 'MultyCian',
                position: "label-left",
                label: "Тип здания",
                value: 0,
                labelWidth: 90,
                // inputWidth: 440,
                multi: false,
                required: true,

                name: "field_TIPZD",
                options: arType["Офис"]
              }, {
                type: 'MultyCian',
                position: "label-left",
                label: "Класс здания",
                // inputWidth: 440,
                labelWidth: 80,
                multi: false,
                name: "field_KLASS",
                required: true,
                options: [{
                  text: "A",
                  value: "a"
                }, {
                  text: "A+",
                  value: "aPlus"
                }, {
                  text: "B",
                  value: "b"
                }, {
                  text: "B-",
                  value: "bMinus"
                }, {
                  text: "B+",
                  value: "bPlus"
                }, {
                  text: "C",
                  value: "c"
                }, {
                  text: "Нет",
                  value: null,
                  selected: true
                }]
              }, {
                type: "checkbox",
                label: "Комм. фонд",
                position: "label-left",
                name: "field_FONDKOM",
                checked: false
              }, {
                type: "checkbox",
                label: "жилой. фонд",
                position: "label-left",
                name: "field_FONDH",
                checked: false
              }, {
                type: "checkbox",
                label: "частный фонд",
                position: "label-left",
                name: "field_FONDZ",
                checked: false
              }, {
                type: "block",
                name: 'firstBl',
              }, {
                type: "adRes21",
                label: "Адрес здания",
                offsetLeft: 0,
                offset: 0,
                inputLeft: 0,
                pform: this.onChange,
                name: 'adres'
              }, {
                type: 'input',
                position: "label-left",
                label: "Год постройки",
                value: "",
                numberFormat: "0000",
                labelWidth: 140,
                inputWidth: 35,
                name: "field_GODP",

              }, {
                type: 'input',
                position: "label-left",
                label: "Год реконструкции",
                value: "",
                numberFormat: "0000",
                labelWidth: 140,
                inputWidth: 35,
                name: "field_GODR",
              }, {
                type: 'input',
                position: "label-left",
                label: "Площадь здания",
                value: "",
                labelWidth: 140,
                inputWidth: 60,
                name: "field_PLALL",

              }, {
                type: 'input',
                position: "label-left",
                label: "Площадь участка",
                value: "",
                labelWidth: 140,
                inputWidth: 60,
                name: "field_PLALLZ",

              }, {
                type: 'calendar',
                position: "label-left",
                label: "Год договора<br>аренды участка",
                value: "",
                labelWidth: 140,
                inputWidth: 120,
                name: "field_GODAR",
              }, {
                type: 'MultyCian',
                position: "label-left",
                label: "Парковочный<br>коэффициент",
                // inputWidth: 440,
                labelWidth: 140,
                multi: false,
                //offsetLeft: 24,
                name: "field_PARKKOEF",
                options: [{
                  text: "Не ограничено",
                  value: "Не ограничено"
                }, {
                  text: "Неизвестно",
                  value: "Неизвестно",
                  selected: true

                }, {
                  text: "1:50",
                  value: "1:50"
                }, {
                  text: "1:100",
                  value: "1:100"
                }, {
                  text: "1:150",
                  value: "1:150"
                }, {
                  text: "1:200",
                  value: "1:200"
                }]
              },

                {
                  type: "MultyCian",
                  name: "field_VentilationType",
                  label: 'Вентиляция:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Приточная",
                    value: "forced"
                  }, {
                    text: "Естественная",
                    value: "natural"
                  }, {
                    text: "Нет",
                    value: "no"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_ConditioningType",
                  label: 'Кондиционирование:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Центральное",
                    value: "central"
                  }, {
                    text: "Местное",
                    value: "local"
                  }, {
                    text: "Нет",
                    value: "no"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_ExtinguishingSystemType",
                  label: 'Система<br>пожаротушения:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Сигнализация",
                    value: "alarm"
                  }, {
                    text: "Газовая",
                    value: "gas"
                  }, {
                    text: "Гидрантная",
                    value: "hydrant"
                  }, {
                    text: "Нет",
                    value: "no"
                  }, {
                    text: "П��рошковая",
                    value: "powder"
                  }, {
                    text: "Спринклерная",
                    value: "sprinkler"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_StatusType",
                  label: 'Категория:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Действующее",
                    value: "operational"
                  }, {
                    text: "Проект",
                    value: "project"
                  }, {
                    text: "Строящееся",
                    value: "underConstruction"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_AccessType",
                  label: 'Вход:',
                  // inputWidth: 440,
                  labelWidth: 90,
                  multi: false,
                  options: [{
                    text: "Свободный",
                    value: "free"
                  }, {
                    text: "Пропускная система",
                    value: "passSystem"
                  }]
                }, {
                  type: "MultyCian",
                  name: "field_Infrastructure",
                  label: 'Инфраструктура:',
                  // inputWidth: 440,
                  inputHeight: 12,
                  labelWidth: 90,
                  options: [{
                    text: "Автомойка",
                    value: "HasCarWash"
                  }, {
                    text: "Буфет",
                    value: "HasBuffet"
                  }, {
                    text: "Автосервис",
                    value: "HasCarService"
                  }, {
                    text: "Столовая",
                    value: "HasCanteen"
                  }, {
                    text: "Центральная рецепция",
                    value: "HasCentralReception"
                  }, {
                    text: "Гостиница",
                    value: "HasHotel"
                  }, {
                    text: "Банкомат",
                    value: "HasAtm"
                  }, {
                    text: "Выставочно-складской комплекс",
                    value: "HasExhibitionAndWarehouseComplex"
                  }, {
                    text: "Аптека",
                    value: "HasPharmacy"
                  }, {
                    text: "Отделение банка",
                    value: "HasBankDepartment"
                  }, {
                    text: "Кинотеатр",
                    value: "HasCinema"
                  }, {
                    text: "Кафе",
                    value: "HasCafe"
                  }, {
                    text: "Медицинский центр",
                    value: "HasMedicalCenter"
                  }, {
                    text: "Салон красоты",
                    value: "HasBeautyShop"
                  }, {
                    text: "Фотосалон",
                    value: "HasStudio"
                  }, {
                    text: "Нотариальная контора",
                    value: "HasNotaryOffice"
                  }, {
                    text: "Бассейн",
                    value: "HasPool"
                  }, {
                    text: "Ателье одежды",
                    value: "HasClothesStudio"
                  }, {
                    text: "Складские помещения",
                    value: "HasWarehouse"
                  }, {
                    text: "Парк",
                    value: "HasPark"
                  }, {
                    text: "Ресторан",
                    value: "HasRestaurant"
                  }, {
                    text: "Фитнес-центр",
                    value: "HasFitnessCentre"
                  }, {
                    text: "Супермаркет",
                    value: "HasSupermarket"
                  }, {
                    text: "Минимаркет",
                    value: "HasMinimarket"
                  }, {
                    text: "Торговая зона",
                    value: "HasShoppingArea"
                  }, {
                    text: "Конференц-зал",
                    value: "HasConferenceRoom"
                  }]
                }

                , {
                  type: "block",
                  list: [{
                    type: "combo",
                    position: "label-left",
                    label: "Паркинг наземный",
                    name: "field_PARKNAZ",
                    inputWidth: 150,
                    labelWidth: 140,
                    options: [{
                      text: "Стихийный",
                      value: "Стихийный"
                    }, {
                      text: "Нет",
                      value: "Нет",
                      selected: true

                    }, {
                      text: "Охраняемый",
                      value: "Охраняемый"
                    }]
                  }, {
                    type: "newcolumn"
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Цена",
                    value: "",
                    labelWidth: 50,
                    inputWidth: 40,
                    name: "field_PARKNAZCENA",

                  }

                  ]
                }, {
                  type: "block",
                  list: [{
                    type: "combo",
                    position: "label-left",
                    label: "Паркинг крытый",
                    name: "field_PARKKR",
                    inputWidth: 150,
                    labelWidth: 140,
                    options: [{
                      text: "Нет",
                      value: "Нет",
                      selected: true

                    }, {
                      text: "Подземный",
                      value: "Подземный"
                    }, {
                      text: "Наземный",
                      value: "Наземный"
                    }, {
                      text: "Наземный многоярусный",
                      value: "Наземный многоярусный"
                    }, {
                      text: "Типа бокс",
                      value: "Типа бокс"
                    }]
                  }, {
                    type: "newcolumn"
                  }, {
                    type: 'input',
                    position: "label-left",
                    label: "Цена",
                    value: "",
                    labelWidth: 50,
                    inputWidth: 40,
                    name: "field_PARKKRCENA",
                  }]
                }


              ]
            }, {
              type: "container",
              inputHeight: 52
            }
          ])
          this.addressForm.attachEvent("onChange", this.onChange);
          this.addressForm.fdata = this.item
        }
        this.$nextTick(()=>{
          this.initForms()
        })
      })

    },
    getExport(val){
      if(this.item && this.item.ob21.find(el => el.UID === val).exports){
        const xOb = this.item.ob21.find(el => el.UID === val).exports
        if(!xOb.avito){
          xOb.avito = {
            Publ: 0
          }
        }
        if(!xOb.cian){
          xOb.cian = {
            Publ: 0
          }
        }
        if(!xOb.cian1){
          xOb.cian1 = {
            Publ: 0
          }
        }
        // console.log('===============',xOb)
        const exportOb = {
          avitopubl: xOb.avito.Publ,
          cianpubl: xOb.cian.Publ,
          cian1publ: xOb.cian1.Publ,
          fields: xOb,
          exportOb: xOb,
          uid: val
        }
        return exportOb
      }else{
        return {
          avitopubl: '0',
          cianpubl: '0',
          cian1publ: '0',
          fields: {},
          exportOb: { },
          uid: val

        }
      }
    },
    showExport(){
      const p = {
        comp:() => import('../export/formExport'),
        pfield: this.uidOb,
        field: this.item.building.UID,
        value: this.activeExport,
        spr: ''
      }
      this.$store.dispatch('main/setVcomponent', p)
    },
    reload(load){
      if(load){
        this.$axios.get('/api/rent21/building/'+this.$route.params.id).then(item=> {
          if (item.data.error && item.data.error === 401) {
            window.alert('Вы не авторизованы')
            return
          }
          console.log(item.data)
          this.$store.dispatch('ob21edit/item', item.data.row)
          this.$nextTick(()=>{
            this.initForms()
          })
          console.log('ob', item.data.row)
        })
      }else{
        this.initForms(true)
      }
    },
    resize(){
      if(this.$refs.main){
        const h = window.innerHeight - this.$refs.main.getBoundingClientRect().top;
        const w = window.innerWidth - this.$refs.main.getBoundingClientRect().left;
        this.$refs.main.style.height = (h- 20) + 'px';
        if(this.$refs.mainaddress) this.$refs.mainaddress.style.height = (h- 60) + 'px';
        if(this.$refs.mainob21) this.$refs.mainob21.style.height = (h- 60) + 'px';
        if(this.$refs.floor) this.$refs.floor.style.height = (h- 60) + 'px';
      }
    },
    initForms(ob21){
      if(this.uidOb ==='' && this.item.ob21[0]){
        this.uidOb = this.item.ob21[0].UID
      }
      this.floors = []
      // this.owners = []
      const tempAr = []
      this.item.ob21.forEach(item=>{
        if(!this.floors.find(el => el.ETAG === item.ETAG)){
          item.ETAGSORT = item.ETAG*1
          this.floors.push({ETAG: item.ETAG,ETAGSORT:item.ETAGSORT,ob21:[]})
        }
/*
        if(item.owner){
          if(tempAr.indexOf(item.owner.UID)=== -1){
            this.owners.push(item.owner)
          }
          tempAr.push(item.owner.UID)
        }

 */
        this.floors.find(el => el.ETAG === item.ETAG).ob21.push(item)
      })
      this.floors = window.sort_by_key(this.floors,'ETAGSORT')
      if(this.innerWidth >1000) {
        if(!ob21){
          this.addressForm.setItemValue('adres', this.item.address)
          for (let key in this.item.building) {
            if (this.addressForm.isItem('field_' + key)) {
              this.addressForm.setItemValue('field_' + key, this.item.building[key]);
            }
          }
        }
        if(this.item.ob21.length > 0 && this.ob21Form){
          // console.log('============================',this.item.ob21.find(el => el.UID === this.uidOb))
          this.ob21Form.setItemValue('obfields',{pchange:this.onChange,data:this.item.ob21.find(el => el.UID === this.uidOb)});
        }else {
          this.edit = 'Noob21'
        }
      }else{
        if(this.ob21Form){
          this.ob21Form.setItemValue('obfields',{pchange:this.onChange,data:this.item.ob21.find(el => el.UID === this.uidOb)});
        }
        this.addressForm.setItemValue('adres', this.item.address)
        for (let key in this.item.building) {
          if (this.addressForm.isItem('field_' + key)) {
            this.addressForm.setItemValue('field_' + key, this.item.building[key]);
          }
        }

      }
    },
    onChange(name, value, state){
      if(name.indexOf('field_') !== -1){
        this.edit = 'build'
      }else
        this.edit = name

      switch (name) {
        case 'ob21':
          let ob = null
          ob = this.ob21Form.getFormData().obfields
          delete ob.form
          this.item.ob21[this.item.ob21.findIndex(el => el.UID === this.uidOb)] = ob
          this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
          break
        case 'address':
            this.item.address =  this.addressForm.getFormData().adres.data;
            this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
          break
        default:
            name = name.replace('field_','')
            if(state !== undefined && typeof state === 'boolean'){
              this.item.building[name] = state
            }else{
              this.item.building[name] = value
            }
            disableForms(this.disableItems, true);
            this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
      }
    }
  }
}
</script>

<style scoped>
.active{
  border-bottom: 1px dotted #000F1A;
}
.active_red{
  border-bottom: 2px solid #e5194d !important;
}

.tabBt{
  padding: 2px;
  margin-left: 6px;
  cursor: pointer;
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
  margin: 12px;
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

.scroll21::-webkit-scrollbar {
  width: 4px;
}

.scroll21::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: #f9f9fd;
}

.scroll21::-webkit-scrollbar-thumb {
  background-color: #356184;
  background-image: -webkit-gradient(linear, 0 0, 0 100%,
  color-stop(.5, rgba(255, 255, 255, .25)),
  color-stop(.5, transparent), to(transparent));
}

.modalDivLocal {
  position: absolute;
  width: inherit;
  opacity: 0.3;
  z-index: 4000;
  background-color: black;
  height: -webkit-fill-available;
}

</style>
