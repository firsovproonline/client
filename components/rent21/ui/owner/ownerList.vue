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
      <template #footer>
        <div style="display: flex;text-align: center;align-items: flex-end;justify-content: flex-end;">
          <div
            class="buttonDiv"
            @click="flagModal = !flagModal"
          >
            Сохранить
          </div>

          <div
            class="buttonDiv"
            @click="flagModal = !flagModal"
          >
            Закрыть
          </div>
        </div>
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
        <div style="cursor: pointer" title="Новое помещение" @click="addOb(item)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
        <div @click="showBig(key)" style="cursor: pointer" title="Редактировать">
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
  methods:{
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
</style>
