<template>
  <div>
    <div v-show="!newAddress" ref="map" class="main">
      <YmapFind ref="YmapFind" />
    </div>
    <div v-show="newAddress" style="display: flex">
      <div>
        <div class="title">Здание</div>
        <div class="newAddress">
          <div ref="newAddress" style="border-right: 1px solid" ></div>
        </div>
      </div>
      <div style="padding-left: 8px">
        <div class="title">Собственик</div>
        <div style="display: flex;padding-top: 31px">
          <input type="text" v-mask="'+7 (###) ###-##-##'" style="width: 140px" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import YmapFind from '@/components/rent21/ui/ymapRent/filter'
export default {
  name: "ymapRent",
  components: { YmapFind },
  data: () => ({
    myMap: {},
    newCord: [],
    newAddress: null,
    addressForm: null
  }),
  props:{
    Mapready: null
  },
  computed:{
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    }
  },
  watch:{
    globalMessage(val){
      if(val){
        console.log(val)
        this.$store.dispatch('main/globalMessage',null)
        this.$store.dispatch('main/save_component', null)
        this.newAddress = null
      }
    },
    newAddress(val){
      if(val){
        if(this.addressForm)this.addressForm.unload()
        this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save'))
        this.addressForm = new dhtmlXForm(this.$refs.newAddress,[
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
        this.newAddress.LAT = this.newCord[1]
        this.newAddress.LNG = this.newCord[0]
        this.newAddress.METRO = []
        this.addressForm.setItemValue('adres', this.newAddress)
        this.addressForm.disableItem('adres')
        console.log(this.addressForm)
        // this.newCord
      }
    }
  },
  mounted() {
    this.resize();
    window.ymaps.ready(()=> {
      this.myMap = new window.ymaps.Map(this.$refs.map, {
        center: [55.76, 37.64],
        zoom: 13,
        // controls: []
      });
      this.myMap.events.add('contextmenu',  (e)=> {
        this.newCord = e.get('coords')
      });
      let myContextMenu = new ContextMenu(this.myMap,(e)=>{
        const myGeocoder = window.ymaps.geocode(this.newCord).then((res)=>{
          const outOb = {}
          res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.Address.Components.forEach(item=>{
            outOb[item.kind] = item.name
          })
          if(!outOb.house){
            window.dhtmlx.message({
              type: "error",
              text: "Вы не выбрали на карте здание",
              expire: 0
            });
          }else{
            this.$axios.post('/api/rent21/building/find',outOb).then(item=>{
              if(item.data.row[0].length !== 0){
                window.dhtmlx.message({
                  type: "error",
                  text: "На данном адресе есть уже записи",
                  expire: 0
                });
              }else{
                window.open(
                  '/realestate/new?lat='+this.newCord[1]+'&lng='+this.newCord[0],
                  '_blank' // <- This is what makes it open in a new window.
                );
              }
            })
          }
        })
      });



      this.myMap.controls.getContainer().appendChild(this.$refs.YmapFind.$el)
      if(this.Mapready)this.Mapready(this.myMap)
      this.$axios.post('/api/rent21/map').then(items=>{
        // console.log(items)
        const clusterer = new window.ymaps.Clusterer();
        items.data.rows.forEach(item=>{
//          if(item.building && item.building.length > 1){
//            console.log(item.building.length)
//          }
//console.log(items.data.temp[item.build_uid])
          var myPlacemark = new ymaps.GeoObject({
            geometry: {
              type: "Point",
              coordinates: [item.lng, item.lat]
            },
            properties: {
              id: item.build_uid,
              fdata: item,

              name: 'data[key].fields.ULITCA',
              metaDataProperty: {
                description: 'data[key].fields.DOM'
              },
            }
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'data:image/svg+xml,' + this.generateChart(items.data.temp[item.build_uid].countOb), //'/img/charge.jpg',
            iconImageSize: [42, 42],
            //iconImageOffset: [-3, -42],
            //balloonContentBodyLayout: myBalloonContentBodyLayout,
            //balloonContentLayout: myBalloonContentLayout,
            //iconContentLayout: myIconContentLayout,
            // Выставляем тянущийся макет иконки, чтобы вместился вложенный макет myIconContentLayout.
            preset: 'twirl#nightStretchyIcon'
          });
          myPlacemark.events.add('click', this.clickPlacemark);
          clusterer.add(myPlacemark);
        })
        this.myMap.geoObjects.add(clusterer);
      })
    });
    window.addEventListener('resize', this.resize);
  },
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  methods:{
    clickPlacemark(e){
      const data = e.get('target').properties.get('fdata');
      console.log(data)
      this.$axios.get('/api/rent21/building/'+data.build_uid).then(build=>{
        console.log(build)
      })
      window.open(
          '/realestate/'+data.build_uid,
          '_blank' // <- This is what makes it open in a new window.
        );
    },
    generateChart(data) {
      var s = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10,10 H90 L50,70"/></svg>';
      var slices = [];
      var div = $('<div>'); //style="transform: rotate(-90deg)"
      const svgEl = $('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 2 2" ></svg>').appendTo(div)[0]; // document.querySelector('svg');
      var color = ['Coral', 'CornflowerBlue', 'green', 'blue', 'red']
      var idcolor = 0;
      var max = 0;

      for (var key in data) {
        if (data[key] != 0) {
          max = max + data[key];
        }
      }
      if (max == 0) {
        slices.push({
          percent: 1,
          color: color[4]
        })

      }
      else {
        for (var key in data) {
          if (data[key] != 0) {
            slices.push({
              percent: 1 / (max / data[key]),
              color: color[idcolor]
            })
          }
          idcolor++;
        }

      }
      /*
                          const slices = [{
                              percent: 0.1,
                              color: 'Coral'
                          }, {
                              percent: 0.7,
                              color: 'CornflowerBlue'
                          }, {
                              percent: 0.2,
                              color: '#00ab6b'
                          }, ];
      */
      let cumulativePercent = 0;

      function getCoordinatesForPercent(percent) {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
      }

      slices.forEach(slice => {
        // destructuring assignment sets the two variables at once
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

        // each slice starts where the last slice ended, so keep a cumulative percent
        cumulativePercent += slice.percent;

        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

        // if the slice is more than 50%, take the large arc (the long way around)
        const largeArcFlag = slice.percent > .5 ? 1 : 0;

        // create an array and join it just for code readability
        const pathData = [
          `M ${startX} ${startY}`, // Move
          `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
          `L 0 0`, // Line
        ].join(' ');

        // create a <path> and append it to the <svg> element
        var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', pathData);
        pathEl.setAttribute('fill', slice.color);
        svgEl.appendChild(pathEl);
      });
      var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      pathEl.setAttribute('x', '-0.5');
      pathEl.setAttribute('y', '0.3');
      pathEl.setAttribute('style', 'font-size:  1px;color:#ffffff');
      if (max < 10) pathEl.setAttribute('x', '-0.2');

      pathEl.innerHTML = max;
      svgEl.appendChild(pathEl);
      return encodeURIComponent(div.html())
    },
    resize(){
      const h = window.innerHeight - this.$refs.map.getBoundingClientRect().top;
      const w = window.innerWidth - this.$refs.map.getBoundingClientRect().left;
      this.$refs.map.style.height = (h- 10) + 'px';
      // this.$refs.map.style.width = (w -70) + 'px';
      // console.log(this.$refs.map.left)
    }

  },
}
</script>

<style scoped>
.main{
  min-height: 300px;
  width: 100%;
}

.newAddress{
  max-width: 400px;
}
</style>
