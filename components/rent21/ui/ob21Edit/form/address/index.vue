<template>
  <div  class="mainForm formWidth">
    <div v-if="!edit" class="modalDivLocal formWidth" ></div>
    <div style="display: flex;border-bottom: 1px solid #ffffff;" class="formWidth">
      <div :class="active == 'main' ? 'tabBt active':'tabBt'"
           @click="active = 'main'">Основные поля</div>
      <div v-if="showPhoto" :class="active == 'photo' ? 'tabBt active':'tabBt'"
           @click="active = 'photo'" >Фото</div>
    </div>
    <div ref="main" class="overflow" >
      <div v-show="active==='main'" ref="form" ></div>
      <div v-show="showPhoto && active==='photo'" >
        <ListPhoto v-if="item && item.building && item.building.UID" :uid="item.building.UID"/>
      </div>
    </div>
  </div>
</template>

<script>
import ListPhoto from '@/components/rent21/ui/photo/list'
export default {
  name: 'formAddress',
  components: { ListPhoto },
  props:{
    item: null,
  },
  data: () => ({
    form: null,
    active: 'main',
    edit: true,
    showPhoto: true
  }),
  computed:{
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    },
    innerWidth(){
      return window.innerWidth
    }
  },
  watch:{
    globalMessage(val){
      switch (val) {
        case 'addressPhotoHide':
          this.showPhoto = false
          break
        case 'addressPhotoShow':
        case 'reload':
          this.showPhoto = true
          break
        case 'addressHide':
          this.edit = false
          break
        case 'addressShow':
        case 'reload':
          this.edit = true
          break
      }
    },
    item(val){
      if(this.form) this.form.unload()
      this.form = new dhtmlXForm(this.$refs.form,[
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
      console.log('formAddress',val)
      this.form.attachEvent("onChange", this.onChange);
      this.form.setItemValue('adres', val.address )
      for (let key in val.building) {
        if (this.form.isItem('field_' + key)) {
          this.form.setItemValue('field_' + key, val.building[key]);
        }
      }
    }
  },
  mounted () {
    this.resize()
    window.addEventListener('resize', this.resize);
  },
  methods:{
    onChange(name, value, state){
      console.log(name, value, state)

      if(name ==='address'){
        const db = this.form.getFormData().adres.data
        console.log('address',db)
        for(let key in this.item.address){
          delete(this.item.address[key])
        }
        for(let key in db){
          this.item.address[key] = db[key]
        }
      }else{
        name = name.replace('field_','')
        if(state !== undefined && typeof state === 'boolean'){
          this.item.building[name] = state
        }else{
          this.item.building[name] = value
        }
      }
      this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save')).then(()=>{
        this.$nextTick(()=>{
          this.$store.dispatch('main/globalMessage','saveItem|address')
          this.$nextTick(()=>{
            this.$store.dispatch('main/globalMessage','ownersHide')
            this.$nextTick(()=>{
              this.$store.dispatch('main/globalMessage','roomHide')
              this.$nextTick(()=>{
                this.$store.dispatch('main/globalMessage','floorsHide')
              })
            })
          })
        })

      })

    },
    resize(){
      if(this.$refs.main){
        const h = window.innerHeight - this.$refs.main.getBoundingClientRect().top;
        const w = window.innerWidth - this.$refs.main.getBoundingClientRect().left;
        this.$refs.main.style.height = (h- 10) + 'px';

      }
    },
  }
}
</script>

<style scoped>
.overflow{
  overflow-y: auto;
  overflow-x: hidden;
}

.overflow::-webkit-scrollbar {
  width: 4px;
}

.overflow::-webkit-scrollbar-track {
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: #f9f9fd;
}

.overflow::-webkit-scrollbar-thumb {
  background-color: #356184;
  background-image: -webkit-gradient(linear, 0 0, 0 100%,
  color-stop(.5, rgba(255, 255, 255, .25)),
  color-stop(.5, transparent), to(transparent));
}

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
  .formWidth{
    max-width: 380px;
    min-width: 380px;
  }
  .mainForm{
    border-right: 1px solid;
    padding-right: 0px;
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
