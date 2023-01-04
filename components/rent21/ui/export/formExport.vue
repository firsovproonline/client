<template>
  <div class="main">
    <div class="header" style="display: flex">
      <div :class="activeTab == 'Rent21' ? 'hitem active':'hitem'" @click="activeTab='Rent21'">
        Rent21
        <input type="checkbox">
      </div>
      <div :class="activeTab == 'Cian' ? 'hitem active':'hitem'" @click="activeTab='Cian'">
        Cian
        <input type="checkbox">
      </div>
      <div :class="activeTab == 'Cian1' ? 'hitem active':'hitem'" @click="activeTab='Cian1'">
        Cian1
        <input type="checkbox">
      </div>
      <div :class="activeTab == 'Avito' ? 'hitem active':'hitem'" @click="activeTab='Avito'">
        Avito
        <input type="checkbox">
      </div>
      <div :class="activeTab == 'Yandex' ? 'hitem active':'hitem'" @click="activeTab='Yandex'">
        Yandex
        <input type="checkbox">
      </div>
    </div>
    <div class="body" style="padding-right: 18px">
      <div ref="body" style="overflow: auto"> </div>
      <ExportPhoto style="margin-left: 20px" />
    </div>
    <div class="footer">
      <button type="button" class="btn btn-pill btn-primary btn-air-primary btn-sm">Сохранить</button>
      <button type="button" class="btn btn-pill btn-secondary btn-air-secondary btn-sm">Отменить</button>
    </div>
  </div>
</template>

<script>
import ExportPhoto from '@/components/rent21/ui/photo/export'
export default {
  name: 'formExport',
  components: { ExportPhoto },
  props:{
  },
  data: () => ({
    ob21Form: null,
    flagSubV: false,
    activeTab: ''
  }),
  computed:{
    value(){
      return this.$store.getters['main/combovalue']
    }
  },
  watch:{
    activeTab(val){
      let exportOB = {};

      switch (val) {
        case 'Avito':
          if(this.value && this.value.fields && this.value.fields.avito){
            exportOB = this.value.fields.avito
          }
          break
        case 'Cian':
          if(this.value && this.value.fields && this.value.fields.cian){
            exportOB = this.value.fields.cian
          }
          break
        case 'Cian1':
          if(this.value && this.value.fields && this.value.fields.cian1){
            exportOB = this.value.fields.cian1
          }
          break
        case 'Rent21':
          if(this.value && this.value.fields && this.value.fields.rent21){
            exportOB = this.value.fields.rent21
          }
          break
        case 'Yandex':
          if(this.value && this.value.fields && this.value.fields.Yandex){
            exportOB = this.value.fields.Yandex
          }
          break

      }
      console.log('+++++++++++++++++',exportOB)

      if (val == 'Avito') {
        //Заголовок обьявления:
        let input = this.ob21Form.getInput('TITLE');
        $(input).attr("maxlength", 50);
        $(input).css('width','100%')
        this.ob21Form.setItemLabel('TITLE', "Заголовок обьявления: 50 символов");
        this.ob21Form.showItem('АdditionalObjectTypes');
      }
      else {
        this.ob21Form.hideItem('АdditionalObjectTypes');
        let input = this.ob21Form.getInput('TITLE');
        $(input).attr("maxlength", 250);
        $(input).css('width','100%')
        this.ob21Form.setItemLabel('TITLE', "Заголовок обьявления:");
      }
      if (val == 'Yandex') {
        this.ob21Form.showItem('commercial-type');
        this.ob21Form.showItem('commercial-building-type');
        this.ob21Form.showItem('purpose');
      }
      else {
        this.ob21Form.hideItem('commercial-type');
        this.ob21Form.hideItem('commercial-building-type');
        this.ob21Form.hideItem('purpose');
      }
    }
  },
  mounted () {

    this.ob21Form = new dhtmlXForm(this.$refs.body, [
      {
        type: "block",
        name: "BLUrl",
        blockOffset: 0,
        hidden: true,
        list: [{
          type: 'label',
          label: "Урл - Изменение урла для обьявления",
          offsetLeft: 20
        }, {
          offsetLeft: 22,
          offsetTop: 12,
          type: 'input',
          name: 'URLRENT',
          label: 'Урл обьявления:',
          position: 'label-left',
          labelWidth: 110,
          //inputWidth: 340,
          value: ""
        }, {
          offsetLeft: 22,
          offsetTop: 12,
          type: 'select',
          name: 'KATALOG',
          label: 'Каталог:',
          position: 'label-left',
          labelWidth: 110,
          //inputWidth: 240,
          options: [{
            text: "",
            value: "",
            selected: true
          }, {
            text: "Бизнес Центры Москвы",
            value: "Бизнес Центры Москвы"
          }, {
            text: "Складские комплексы",
            value: "Складские комплексы"
          }, {
            text: "Торговые центры Москвы",
            value: "Торговые центры Москвы"
          }]
        }]
      }, {
        type: "block",
        name: "blAddr",
        blockOffset: 0,
        hidden: true,
        list: [{
          type: 'label',
          label: "Адрес - Изменение адреса здания для обьявления",
          offsetLeft: 20
        }, {
          type: "input",
          name: "YADRES",
          label: "",
          value: "",
          tooltip: "Введите адрес",
          required: true,
          info: true,
          offsetLeft: 18,
          //inputWidth: 450,

        }, {
          type: 'block',
          //label: "Адрес - Изменение адреса здания для обьявления",
          blockOffset: 0,
          list: [{
            type: "container",
            name: "ymap",
            position: 'label-top',
            //label: "Адрес - Изменение адреса здания для обьявления",
            //inputWidth: 210,
            inputHeight: 140,
            offsetLeft: 22,
            offsetTop: 12,
          }, {
            type: 'newcolumn'
          }, {
            type: "input",
            position: 'label-left',
            offsetLeft: 12,
            readonly: true,
            inputWidth: 160,
            labelWidth: 50,
            label: 'Город',
            name: "GOROD",
            value: "",

          }, {
            type: "input",
            offsetLeft: 12,
            position: 'label-left',
            readonly: true,
            inputWidth: 160,
            labelWidth: 50,
            label: 'Округ',
            name: "RAJON",
            value: "",
          }, {
            type: "input",
            offsetLeft: 12,

            position: 'label-left',
            readonly: true,
            inputWidth: 160,
            labelWidth: 50,
            label: 'Район',
            name: "OKRUG",
            value: "",
          },

            {
              type: "input",
              offsetLeft: 12,

              position: 'label-left',
              readonly: true,
              inputWidth: 160,
              labelWidth: 50,
              label: 'Улица',
              name: "ULITCA",
              value: "",
            }, {
              offsetLeft: 12,

              type: "input",
              position: 'label-left',
              readonly: true,
              inputWidth: 160,
              labelWidth: 50,
              label: 'Дом',
              name: "DOM",
              value: "",
            }, {
              type: "hidden",
              name: "NALOGNAME",
              value: "",

            }


          ]
        }

          , {
            type: "hidden",
            name: "LAT",
            value: 0,

          }, {
            type: "hidden",
            name: "LNG",
            value: 0,

          }
        ]
      }, {
        name: 'auction',
        type: "input",
        value: 0,
        offsetLeft: 22,
        offsetTop: 12,
        label: "Аукцион",
        disabled: true,
        width: 40
      }, {
        name: 'IsOccupied',
        type: "checkbox",
        checked: false,
        value: 1,
        offsetLeft: 22,
        offsetTop: 12,
        label: "Помещение занято"
      }

      , {
        name: 'NOTW',
        type: "checkbox",
        checked: false,
        value: 1,
        offsetLeft: 22,
        offsetTop: 12,
        label: "Без водных знаков"
      }, {
        name: 'VIP',
        type: "checkbox",
        checked: false,
        value: 1,
        offsetLeft: 22,
        offsetTop: 12,
        label: "Вип обьявление"
      }, {
        name: 'WEEKEND',
        type: "checkbox",
        checked: false,
        value: 1,
        offsetLeft: 22,
        offsetTop: 12,
        hidden: this.flagSubV,
        label: "Выходного дня"
      },



      {
        name: 'VIDEO',
        type: "input",
        value: "",
        //inputWidth: '100%',
        offsetLeft: 22,
        offsetTop: 12,
        label: "Видео"
      },

      {
        offsetLeft: 22,
        offsetTop: 12,
        type: "MultyCian",
        name: "АdditionalObjectTypes",
        position: "label-left",
        label: "Вид объекта",
        labelWidth: 160,
        //inputWidth: 450,
        value: "",
        multi: true,
        options: []
      },


      //showАdditionalObjectTypes
      {
        offsetLeft: 22,
        offsetTop: 12,
        type: 'input',
        name: 'TITLE',
        label: 'Заголовок обьявления:',
        position: 'label-top',
        labelWidth: 290,
        labelAlign: 'top',
        maxLength: 50,
        //inputWidth: 450,
        value: ""
      }, {
        offsetLeft: 22,
        offsetTop: 12,
        type: "MultyCian",
        name: "commercial-type",
        position: "label-left",
        label: "Категория",
        labelWidth: 160,
        //inputWidth: 450,
        value: "",
        multi: false,
        options: [{
          text: "автосервис",
          value: "auto repair"
        }, {
          text: "готовый бизнес",
          value: "business"
        }, {
          text: "помещения свободного назначения",
          value: "free purpose"
        }, {
          text: "гостиница",
          value: "hotel"
        }, {
          text: "земли коммерческого назначения",
          value: "land"
        }, {
          text: "производственное помещение",
          value: "manufacturing"
        }, {
          text: "офисные помещения",
          value: "office"
        }, {
          text: "общепит",
          value: "public catering"
        }, {
          text: "торговые помещения",
          value: "retail"
        }, {
          text: "склад",
          value: "warehouse"
        }]

      }, {
        offsetLeft: 22,
        offsetTop: 12,
        type: "MultyCian",
        name: "commercial-building-type",
        position: "label-left",
        label: "Тип здания",
        labelWidth: 160,
        //inputWidth: 450,
        value: "",
        multi: false,
        options: [{
          text: "бизнес-центр",
          value: "business center"
        }, {
          text: "отдельно стоящее здание",
          value: "detached building"
        }, {
          text: "встроенное помещение",
          value: "residential building"
        }, {
          text: "торговый центр",
          value: "shopping center"
        }, {
          text: "складской комплекс",
          value: "warehouse"
        }]
      } //purpose
      , {
        offsetLeft: 22,
        offsetTop: 12,
        type: "MultyCian",
        name: "purpose",
        position: "label-left",
        label: "Рекомендуемое назначение",
        labelWidth: 160,
        //inputWidth: 450,
        value: "",
        multi: true,
        options: [{
          text: "помещение для банка",
          value: "помещение для банка"
        }, {
          text: "салон красоты",
          value: "салон красоты"
        }, {
          text: "продуктовый магазин",
          value: "продуктовый магазин"
        }, {
          text: "медицинский центр",
          value: "медицинский центр"
        }, {
          text: "шоу-рум",
          value: "шоу-рум"
        }, {
          text: "турагентство",
          value: "турагентство"
        }]
      }

      , {
        offsetLeft: 22,
        offsetTop: 12,
        type: 'input',
        name: 'Description',
        label: 'Текст обьявления:',
        position: 'label-top',
        labelWidth: 190,
        labelAlign: 'top',
        inputHeight: 224,
        //inputWidth: 450,
        rows: 40,
        value: ""
      }
    ]);
    this.activeTab ='Rent21'
  }
}
</script>

<style lang="scss" scoped>
.active{
  border-bottom: 2px dotted red;
}
.main{
  padding: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  .header{
    width: 100%;
    margin-bottom: 12px;
    .hitem{
      margin-right: 8px;
      cursor: pointer;
    }
  }
  .body{
    flex: 1 1 auto;
    overflow: auto;
    width: 100%;
  }
  .footer{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

}
</style>
