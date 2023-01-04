<template>
  <div class="row rowCart" style="display: flex">
    <div v-if="innerWidth <1000" class="rowCol" style="padding-right: 12px">
      <div ref="address"  ></div>
    </div>
    <div v-if="innerWidth <1000" class="rowCol" style="padding-right: 12px">
      <div ref="ob21"  ></div>
    </div>
    <div v-if="innerWidth > 1000">
      <div class="rowCol" style="display: flex;width: 98%; overflow: hidden" ref="main">
        <div style="border-right: 1px solid;">
          <div style="display: flex;padding: 5px">
            <div :class="activeAddress == 'main' ? 'tabBt active':'tabBt'" @click="activeAddress = 'main'">Основные поля</div>
            <div :class="activeAddress == 'photo' ? 'tabBt active':'tabBt'" @click="activeAddress = 'photo'" >Фото</div>
          </div>
          <div ref="mainaddress" style="overflow: auto;width: 400px;overflow-x: hidden;background-color: white">
            <div v-show="activeAddress==='main'" ref="address" ></div>
          </div>
        </div>

        <div style="border-right: 1px solid;flex: 1 auto;">
          <div style="display: flex;padding: 5px">
            <div :class="activeFloor == 'sobst' ? 'tabBt active':'tabBt'" @click="activeFloor = 'sobst'">Собственники</div>
            <div :class="activeFloor == 'floor' ? 'tabBt active':'tabBt'" @click="activeFloor = 'floor'" >Помещения</div>
          </div>
          <div ref="floor" style="overflow: auto;overflow-x: hidden;background-color: white">
            <div v-show="activeFloor==='floor'">
              <div v-for="(item, index) in floors" :key="index" style="padding-left: 11px">
                <div>Этаж {{item.ETAG}}</div>
                <div v-for="(itemOb, index) in item.ob21" :key="index">
                  <div :class="uidOb === itemOb.UID?'active':''" @click="uidOb=itemOb.UID" style="display: flex;padding-left: 12px;cursor: pointer">
                    <div style="display: flex;align-items: center;max-width: 170px;min-width: 170px">
                      <div style="width: 100px;overflow: hidden;white-space:nowrap">{{itemOb.TIP}}</div>
                      <div style="margin-left: 3px">{{itemOb.OPP}}</div>
                      <div style="margin-left: 3px">{{itemOb.PLALL}}</div>
                    </div>
                    <div style="display: flex;margin-left: 15px;align-items: center;">
                      <i class="fa-map-marker fa"  aria-hidden="true"
                         style="color:#68c8d8;font-size:14px;margin-left:-3px;"></i>
                      <i class="fa-map-marker fa"  aria-hidden="true"
                         style="color:blue;font-size:14px;margin-left:3px;"></i>
                      <i class="fa-map-marker fa" aria-hidden="true"
                         style="color:green;font-size:14px;margin-left:3px;"></i>
                      <i class="fa-map-marker far" aria-hidden="true"
                         style="color:red;font-size:14px;margin-left:3px;"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="activeFloor==='sobst'">
              <div v-for="(item, index) in owners" :key="index"
                   :class="activeOwner === item.UID? 'active_red':''"
                   style="padding-left: 11px;border-bottom: 1px solid">
                <div>{{item.NAME}}</div>
                <div>
                  <div v-for="(item1, index) in item.contacts" :key="index" style="padding-left: 11px">
                    <div>{{item1.FIRSTNAME}}</div>
                    <div v-for="(phone, index) in item1.PHONE" :key="index" style="display: flex;padding-left: 11px">
                      <div>{{phone.VAL}}</div>
                      <div>{{phone.REM}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div style="display: flex;padding: 5px">
            <div :class="activeOb21 == 'main' ? 'tabBt active':'tabBt'" @click="activeOb21 = 'main'">Основные поля</div>
            <div :class="activeOb21 == 'photo' ? 'tabBt active':'tabBt'" @click="activeOb21 = 'photo'" >Фото</div>
            <div :class="activeOb21 == 'export' ? 'tabBt active':'tabBt'" @click="showExport" style="margin-left: 8px;display: flex">
              <div>Экспорт</div>
              <indicator :item="activeExport" />
            </div>
          </div>
          <div ref="mainob21" style="padding-right: 6px; overflow: auto;width: 400px;overflow-x: hidden;background-color: white">
            <div v-show="activeOb21==='main'"  ref="ob21"  ></div>
            <div v-show="activeOb21==='photo'"  ref="ob21Photo"  >
              <ListPhoto :uid="uidOb" />
            </div>
          </div>

        </div>
      </div>
      <!--
      <div class="rowCol" ref="maintab" style="height: 800px;width: 98%;padding: 40px">obEdit</div>
      -->
    </div>
  </div>
</template>

<script>
import ListPhoto from '@/components/rent21/ui/photo/list'
import Indicator from '@/components/rent21/ui/export/indicator'
export default {
  name: 'obEdit',
  components: { Indicator, ListPhoto },
  data: () => ({
    win: {},
    disableItems: [],
    ob21Form: null,
    addressForm: null,
    activeOb21: 'main',
    activeAddress: 'main',
    activeFloor:'floor',
    uidOb: '',
    floors: [],
    owners: []
  }),
  computed:{
    activeExport(){
      if(this.item && this.uidOb != ''
      && this.item.export.find(el => el.uid === this.uidOb)){
        return this.item.export.find(el => el.uid === this.uidOb)
      }else{
        return {}
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
        console.log(val)
        if(val === 'save'){
          const ob = {}
          ob.address = this.item.address
          ob.building = this.item.building
          ob.ob21 = this.item.ob21[this.item.ob21.findIndex(el => el.UID === this.uidOb)]
          console.log({building :ob.building.UID,address :ob.address.UID,
            ob21:this.item.ob21[this.item.ob21.findIndex(el => el.UID === this.uidOb)].UID})
          this.$axios.put('/api/rent21/ob',ob).then(item=>{
            console.log(item.data)
            this.$store.dispatch('main/globalMessage',null)
            disableForms(this.disableItems, false)
            this.$store.dispatch('main/save_component', null)

          })
        }else{
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
    this.$store.dispatch('main/globalMessage','hideMenu')
    this.$axios.get('/api/rent21/building/'+this.$route.params.id).then(item=>{
      if(item.data.error && item.data.error === 401){
        window.alert('Вы не авторизованы')
        return
      }
      console.log(item.data)
      this.$store.dispatch('ob21edit/item',item.data.row)
      console.log('ob', item.data.row)
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
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods:{
    showExport(){
      const p = {
        comp:() => import('../export/formExport'),
        pfield: '',
        field: this.activeExport,
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
        this.$refs.mainaddress.style.height = (h- 60) + 'px';
        this.$refs.mainob21.style.height = (h- 60) + 'px';
        this.$refs.floor.style.height = (h- 60) + 'px';
      }
    },
    initForms(ob21){
      if(this.uidOb ===''){
        this.uidOb = this.item.ob21[0].UID
      }
      this.floors = []
      this.owners = []
      const tempAr = []
      this.item.ob21.forEach(item=>{
        if(!this.floors.find(el => el.ETAG === item.ETAG)){
          this.floors.push({ETAG: item.ETAG,ob21:[]})
        }
        if(item.owner){
          if(tempAr.indexOf(item.owner.UID)=== -1){
            this.owners.push(item.owner)
          }
          tempAr.push(item.owner.UID)
        }
        this.floors.find(el => el.ETAG === item.ETAG).ob21.push(item)
      })
      this.floors = window.sort_by_key(this.floors,'ETAG')
      console.log('this.floors',this.floors)
      console.log('this.owners',this.owners)
      if(this.innerWidth >1000) {
/*
        for (let key in this.item.building) {
          if (this.win.dhxTabbar.layout.cells('a').form.isItem('field_' + key)) {
            this.win.dhxTabbar.layout.cells('a').form.setItemValue('field_' + key, this.item.building[key]);
          }
        }
        const lat = this.item.address.LAT
        const lng = this.item.address.LNG
        this.win.dhxTabbar.layout.cells('a').form.setItemValue('adres', this.item.address)
        this.win.dhxTabbar.layout.cells('d').formOb.setItemValue('obfields',{pchange:this.onChange,data:this.item.fields});
*/
        if(!ob21){
          this.addressForm.setItemValue('adres', this.item.address)
          for (let key in this.item.building) {
            if (this.addressForm.isItem('field_' + key)) {
              this.addressForm.setItemValue('field_' + key, this.item.building[key]);
            }
          }
        }
        this.ob21Form.setItemValue('obfields',{pchange:this.onChange,data:this.item.ob21.find(el => el.UID === this.uidOb)});
      }else{
        this.ob21Form.setItemValue('obfields',{pchange:this.onChange,data:this.item.ob21.find(el => el.UID === this.uidOb)});
        this.addressForm.setItemValue('adres', this.item.address)
        for (let key in this.item.building) {
          if (this.addressForm.isItem('field_' + key)) {
            this.addressForm.setItemValue('field_' + key, this.item.building[key]);
          }
        }

      }
    },
    onChange(name, value, state){
      console.log('onChange',name, value, state)

      switch (name) {
        case 'ob21':
          let ob = null
          if(this.innerWidth >1000){
            ob = this.ob21Form.getFormData().obfields
//            ob = this.win.dhxTabbar.layout.cells('d').formOb.getFormData().obfields
//            this.disableItems = [this.win.dhxTabbar.layout.cells('a').cell, this.win.dhxTabbar.layout.cells('b').cell, this.win.dhxTabbar.layout.cells('c').cell]
//            disableForms(this.disableItems, true);
          }else{
            ob = this.ob21Form.getFormData().obfields
          }
          delete ob.form
          this.item.ob21[this.item.ob21.findIndex(el => el.UID === this.uidOb)] = ob
          this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
          break
        case 'address':
          if(this.innerWidth >1000){
            this.item.address =  this.addressForm.getFormData().adres.data;
            //this.item.address = this.win.dhxTabbar.layout.cells('a').form.getFormData().adres.data;
            //this.disableItems = [this.win.dhxTabbar.layout.cells('b').cell, this.win.dhxTabbar.layout.cells('c').cell, this.win.dhxTabbar.layout.cells('d').cell]
            //disableForms(this.disableItems, true);
            this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
          }else{
            this.item.address =  this.addressForm.getFormData().adres.data;
          }
          break
        default:
          if(this.innerWidth >1000){
            name = name.replace('field_','')
            console.log('state',state)
            if(state !== undefined && typeof state === 'boolean'){
              this.item.building[name] = state
            }else{
              this.item.building[name] = value
            }


            disableForms(this.disableItems, true);
            this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
          }else{
            name = name.replace('field_','')
            console.log('state',state)
            if(state !== undefined && typeof state === 'boolean'){
              console.log('+++++++++++++++++++++++++++')
              this.item.building[name] = state
            }else{
              console.log('---------------------------')
              this.item.building[name] = value
            }
            this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
          }
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

</style>
