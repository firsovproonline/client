<template>
  <div class="ownerList formWidth" style="border-right: 1px solid">
    <modal
      v-show="flagModal"
      :show="flagModal"
      :scrollable="true"
      body-id="modalBody" header-id="modalHeader"
      @close="cancelItem"

    >
      <template #header>
        {{titleModal}}
      </template>
      <template #body>
          <ownerEdit :item="item" />
      </template>
      <template #footer>
        <div style="display: flex;text-align: center;align-items: flex-end;justify-content: flex-end;">
          <div
            class="buttonDiv"
            @click="saveItem"
          >
            Сохранить
          </div>

          <div
            class="buttonDiv"
            @click="cancelItem"
          >
            Закрыть
          </div>
        </div>
      </template>
    </modal>
    <div v-if="edit === false" class="modalDivLocal formWidth" ></div>
    <div style="display: flex;border-bottom: 1px solid #ffffff;" class="formWidth">
      <div style="padding: 0px;padding-bottom: 0px;padding-left:8px;flex: 1 auto">Собственики</div>
      <div style="cursor: pointer;padding-right: 12px" title="Новый собственник" @click="addOwner">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
      </div>

    </div>
    <div ref="main" class="overflow" style="padding-top: 8px">
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
        <div style="cursor: pointer" title="Новое помещение" @click="addOb(item)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
        <div @click="showBig(key)" style="cursor: pointer" title="Редактировать">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
        </div>
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
    item: {},
    edit: true
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
        case 'ownersHide':
        //case 'saveItem|address':
          this.edit = false
          break
        case 'ownersShow':
        case 'reload':
          this.edit = true
          break
      }
    },
    items(val){

    }
  },
  methods:{
    saveItem(){
      this.$axios.put('/api/rent21/ob',{owner:this.item}).then(items=>{
        this.flagModal = !this.flagModal
        this.$store.dispatch('main/globalMessage','saveOwners')
        console.log(items)
      })
//      console.log(this.item)
    },
    cancelItem(){
      console.log('cancel')
      this.$store.dispatch('main/globalMessage','reload')
      this.flagModal = !this.flagModal
    },
    addOwner(){
      const UID = this.$api.generateUID();
      this.items.push({
        EMAIL: '',
        KOMIS: 50,
        KOMISREM: '',
        KOMISREMSALE: '',
        KOMISSALE: '',
        SITE: '',
        NAME: '',
        UID: UID,
        contacts: []
      })
      this.showBig(this.items.findIndex(item => item.UID == UID))
      this.$store.dispatch('main/globalMessage','editItem|owners')

    },
    addOb(item){
      this.$store.dispatch('main/setitem',item)
      this.$store.dispatch('main/globalMessage','addOb21')
    },
    showBig(id){
      this.flagModal = !this.flagModal
      if(this.flagModal){
        this.item = this.items[id]
      }
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

  .mainDiv{
    border-right: 1px solid;
  }

  .formWidth{
    min-width: 310px;
    max-width: 310px;

  }

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
  .modalDivLocal {
    position: absolute;
    width: inherit;
    opacity: 0.3;
    z-index: 4000;
    background-color: black;
    height: -webkit-fill-available;
  }
</style>
