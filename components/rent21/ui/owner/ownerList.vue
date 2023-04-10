<template>
  <div class="ownerList">
    <modal
      v-show="flagModal"
      :show="flagModal"
      :scrollable="true"
      body-id="modalBody" header-id="modalHeader"
      @close="showBig"

    >
      <template #header>
        {{titleModal}}
      </template>
      <template #body>
          <ownerEdit :item="item" />
      </template>
    </modal>

    <div class="main" v-for="(item,key) in items" :key="key">
      <div style="flex: auto;">
        <div class="labelDiv">
          <div class="label">Имя</div>
          <div class="value">{{item.NAME}}</div>
        </div>
        <div class="labelDiv">
          <div class="label">Сайт</div>
          <div class="value">{{item.SITE}}</div>
        </div>
        <div class="labelDiv">
          <div class="label">Email</div>
          <div class="value">{{item.EMAIL}}</div>
        </div>
        <div class="labelDiv">
          <div class="label">Комиссия</div>
          <div class="value">{{item.KOMIS}}</div>
        </div>
        <div class="labelDiv">
          <div class="label">Комис Пр.</div>
          <div class="value">{{item.KOMISSALE}}</div>
        </div>
        <div class="labelDiv" style="align-items: flex-start;">
          <div class="label" style="margin-top: 4px">Конт.</div>
          <div class="value">
            <div v-for="(item1, index) in item.contacts" :key="index" >
              <div>{{item1.LASTNAME}} {{item1.FIRSTNAME}}</div>
              <div v-for="(phone, index) in item1.PHONE" :key="index" style="display: flex;padding-left: 11px">
                <div>{{phone.VAL}}</div>
                <div style="margin-left: 6px">{{phone.REM}}</div>
              </div>
            </div>

          </div>
        </div>
        <hr>
      </div>
      <div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
        <div @click="showBig(key)" style="cursor: pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import OwnerEdit from '@/components/rent21/ui/owner/edit'
export default {
  name: 'ownerList',
  components: { OwnerEdit },
  props:{
    items: []
  },
  data: () => ({
    flagModal: false,
    titleModal: 'Собственик',
    form: null,
    item: {}
  }),
  watch:{
    items(val){
      console.log('owner', val)
    }
  },
  mounted () {
    /*
    this.form = new dhtmlXForm(this.$refs.editDiv,[{
      type: "settings",
      inputHeight: 25,
      position: "label-left"
    }, {
      type: 'hidden',
      name: 'UID',
      value: generateUID(),
      userdata: {
        flabel: 'UID'
      }
    }, {
      type: 'block',
      offsetLeft: 0,
      offset: 0,
      list: [{
        type: "input",
        name: "NAME",
        label: "Наименование",
        inputWidth: 440,
        userdata: {
          flabel: 'NAME'
        }
      }, {
        type: "input",
        labelWidth: 92,
        name: "SITE",
        label: "Сайт",
        inputWidth: 440,
        userdata: {
          flabel: 'SITE'
        }
      }, {
        type: "input",
        name: "EMAIL",
        label: "Email",
        labelWidth: 92,
        inputWidth: 440,
        userdata: {
          flabel: 'EMAIL'
        }
      }, {
        type: 'block',
        blockOffset: 0,
        list: [{
          type: "input",
          name: "KOMIS",
          label: "Ком. аренды *",
          labelWidth: 92,
          inputWidth: 30,
          userdata: {
            flabel: 'KOMIS'
          }
        }, {
          type: 'newcolumn',
        }, {
          type: "input",
          name: "KOMISREM",
          label: "% комментарий",
          labelWidth: 110,
          inputWidth: 298,
          offsetLeft: 8,
          userdata: {
            flabel: 'KOMISREM'
          }
        }

        ]
      }, {
        type: 'block',
        blockOffset: 0,
        list: [{
          type: "input",
          name: "KOMISSALE",
          label: "Ком. продажи *",
          labelWidth: 92,
          inputWidth: 30,
          userdata: {
            flabel: 'KOMISSALE'
          }
        }, {
          type: 'newcolumn',
        }, {
          type: "input",
          name: "KOMISREMSALE",
          label: "% комментарий",
          labelWidth: 110,
          inputWidth: 298,
          offsetLeft: 8,
          userdata: {
            flabel: 'KOMISREMSALE'
          }
        }

        ]
      },


        {
          type: "block",
          blockOffset: 0,
          name: "editKONT",
          hidden: false,
          list: [{
            type: "button",
            name: 'addKont',
            value: 'Добавить контакт',
            className: 'bright_'
          }, {
            type: 'block',
            name: "insertKont",
            blockOffset: 0,
          }]
        }
      ]
    }]);
    this.form.attachEvent("onButtonClick", function(name) {
      console.log(name)
      if (name == 'addKont') {
        var uid_ = generateUID();
        var puid_ = generateUID();
        this.addItem('insertKont', {
          type: "koNt21",
          label: "Контакт",
          inputWidth: 450,
          fsform: this,
          userdata: {
            flabel: 'koNt21',
            puid: this.getFormData().UID
          },
          value: [{
            UID: uid_,
            PUID: '',
            TITLE: 'UID',
            VAL: uid_,
            TIP: 'koNt21'
          }, {
            UID: uid_,
            PUID: '',
            TITLE: 'FIRSTNAME',
            VAL: 'Новый контакт',
            TIP: 'koNt21'
          }, {
            UID: uid_,
            PUID: puid_,
            TITLE: 'PHONE',
            VAL: '',
            TIP: 'koNt21'
          }, {
            UID: uid_,
            PUID: puid_,
            TITLE: 'PHONEREM',
            VAL: '',
            TIP: 'koNt21'
          }]
        });

      }
    });

     */

  },
  methods:{
    showBig(id){
      this.flagModal = !this.flagModal
      if(this.flagModal){
        this.item = this.items[id]
      }
/*
      if(this.flagModal){
        console.log(this.items[id])
        for(let field in this.items[id]){
          if (this.form.isItem(field)) {
            this.form.setItemValue(field, this.items[id][field])
          }
          if(field === 'contacts'){
            this.items[id][field].forEach(kont =>{
              this.form.addItem('insertKont', {
                type: "koNt21",
                label: "Контакт",
                inputWidth: 450,
                userdata: {
                  flabel: 'koNt21'
                },
                value: kont,
                fsform: this.form
              });

            })
          }
        }
        // this.form.set
      }

 */
    },
  }
}
</script>

<style lang="scss" >

  .main{
    display: flex;
    padding: 8px;
    .labelDiv{
      display: flex;
      align-items: center;
      .value{
        flex: auto;
      }
      .label{
        color: #0c5460;
        font-size: 12px;
        width: 70px;
      }
    }
  }
</style>
