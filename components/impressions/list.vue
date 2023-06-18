<template>
  <div class="col-xl-6 box-col-12 des-xl-100 top-dealer-sec" style="min-width: 100%;" >
    <div class="card" ref="cardGrid" style="height: 600px">
      <div class="card-header pb-0" style="display: flex;padding-right: 15px;">
        <div class="header-top d-sm-flex justify-content-between align-items-center" style="width: 100%;
        padding: 6px;background: -webkit-linear-gradient(#e2efff, #d3e7ff);
        margin-right: 15px;
        border-top: 1px solid #a4bed4;
        border-left: 1px solid #a4bed4;
        border-right: 1px solid #a4bed4;

        ">
          <div style="white-space: nowrap">Клиенты {{count}} записей всего, отображенно {{items.length}}</div>
          <div>
            <vSelect style="width: 328px;margin-left: 8px"
              v-model="filter.order"
              :reduce="(option) => option.id"
              :options="[
      { label: 'Сначала новые звонки', id: 'calldate' },
      { label: 'Сначала новые по добавлению', id: 'createdAt' },
    ]"
            />
          </div>
          <div class="center-content" style="flex: 1 auto;width: 100%">
          </div>
          <div style="display: flex">
            <div @click="reload">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div @click="clearfilter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-square"><rect data-v-dc22fefc="" x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line data-v-dc22fefc="" x1="9" y1="9" x2="15" y2="15"></line><line data-v-dc22fefc="" x1="15" y1="9" x2="9" y2="15"></line></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="gridHeader card-body" style="padding-bottom: 0px;padding-top: 0px;max-height: 120px;height: 130px;padding-right: 16px;">
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width: 70px;min-width: 70px">
          <div>ID</div>
          <div><input v-model="filter.id" v-mask="'######'" type="text" style="width: 100%"></div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width: 105px;min-width: 105px">
          <div>Дата заведения клиента</div>
          <div>
            <FunctionalCalendar v-model="filter.createdatein"  :date-format="'yyyy-mm-dd'" :isAutoCloseable="true"  :is-modal='true' :is-date-picker='true' ></FunctionalCalendar>
          </div>
          <div>
            <FunctionalCalendar v-model="filter.createdateout"  :date-format="'yyyy-mm-dd'" :isAutoCloseable="true"  :is-modal='true' :is-date-picker='true' ></FunctionalCalendar>
          </div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width: 100%">
          <div>Наименование</div>
          <div><input v-model="filter.title" type="text" style="width: 100%"></div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width:70px;min-width: 70px">
          <div>Пл</div>
          <div>
            <div><input v-model="filter.plin" v-mask="'####'" type="text" style="width: 100%"></div>
            <div><input v-model="filter.plout" v-mask="'####'" type="text" style="width: 100%;margin-top: 2px"></div>
          </div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width:190px;min-width: 190px">
          <div>Принял</div>
          <div>
            <div><input v-model="filter.src_number" type="text" style="width: 100%"></div>
          </div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width: 105px;min-width: 105px">
          <div>Дата последнего звонка</div>
          <div>
            <FunctionalCalendar v-model="filter.datein"  :date-format="'yyyy-mm-dd'" :isAutoCloseable="true"  :is-modal='true' :is-date-picker='true' ></FunctionalCalendar>
          </div>
          <div style="margin-top: 2px">
            <FunctionalCalendar v-model="filter.dateout" :date-format="'yyyy-mm-dd'" :isAutoCloseable="true" :is-modal='true' :is-date-picker='true' ></FunctionalCalendar>
          </div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width:190px;min-width: 190px">
          <div>Ответственный</div>
          <div>
            <div>
              <vSelect
                v-model="filter.user"
                :clearable="false"
                :reduce="(option) => option.id"
                :options="usersCombo"
              />
            </div>
          </div>
        </div>
        <div class="vdiv"></div>

      </div>

      <div class="card-body" style="padding-top: 0px;overflow: hidden;">
        <div style="overflow: auto;margin-bottom: 20px;
        height: 100%;
      scroll-margin-right: 20px;
      font-size: 12px;overflow-y: scroll" @scroll="scroll" ref="scroll">
          <div v-for="(value, index) in items" :key="index"  style="display: flex" class="gridRow">
            <div class="gridCol" style="width: 70px;min-width: 70px">{{value.id}}</div>
            <div class="gridCol" style="width: 106px;min-width: 106px" v-html="value.createdAt.replace('T','<br>').replace('.000Z','')"  />
            <div class="gridCol" style="width: 100%;min-width: 130px" >
              <router-link :title="value.fields.REM" :to="'/impressions/'+value.id" >{{value.title}}</router-link>
              <div>{{labelCategory(value.category)}}</div>
              <div>{{value.fields.STATUS}}</div>
            </div>
            <div class="gridCol" style="width:70px;min-width: 70px" >{{value.plin}} - {{value.plout}}</div>
            <div class="gridCol" style="width:190px;min-width: 190px" >{{value.src_number}}</div>
            <div class="gridCol" style="width: 105px;min-width: 105px" >{{getDateTime(value.calldate)}}</div>
            <div class="gridCol" style="width:177px;min-width: 177px" >{{emailtouser(value.fields.USER)}}</div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'list',
  components: { FunctionalCalendar, vSelect },
  data: () => ({
    flagscroll : true,
  }),
  computed:{
    usersCombo(){
      const L = []
      const E = []
      L.push({label:'Все', id:'all'})

      this.users.forEach(item=>{
        if(item.title && item.title != '' && E.indexOf(item.email)==-1){
          L.push({label:item.title, id:item.email})
          E.push(item.email)
        }
      })
      return L
    },
    users(){
      return this.$store.getters['main/users']
    },
    count(){
      return this.$store.getters['impressions/count']
    },
    filter(){
      return this.$store.getters['impressions/filter']
    },
    items(){
      return this.$store.getters['impressions/items']
    },
  },
  mounted () {

    this.$refs.cardGrid.style.height = (window.innerHeight - 100) +'px';
    console.log(this.$refs.cardGrid.offsetParent.offsetTop)
    if(this.items.length===0){
      this.$axios.post('/api/impressions/list',this.filter).then((item) => {
        if(item.data.error && item.data.error === 401){
          window.alert('Вы не авторизованы')
          window.location.href = '/api/auth/yandex'

          return
        }

        window.console.log('impressions',item.data);
        this.$store.dispatch('impressions/items', item.data.rows)
        this.$store.dispatch('impressions/count', item.data.count)
      });
    }else{
      this.$refs.scroll.scrollTop = this.$store.getters['impressions/filter'].scroll;
    }
  },
  methods:{
    clearfilter(){
      this.$store.dispatch('impressions/filter', {
        user: 'all',
        order: 'calldate',
        phone: '',
        id: '',
        offset: 0,
        limit: 50,
        scroll: 0,
        plin: '',
        plout: '',
        datein: { },
        dateout: { },
        createdatein: { },
        createdateout: { },
        title:'',
        src_number: ''
      });
      this.$nextTick(()=>{
        this.reload()
      })
    },
    emailtouser(val){
      if(this.users.find(o => o.email === val)){
        return this.users.find(o => o.email === val).title;
      }else{
        return ''
      }
    },
    labelCategory(val){
      switch (val){
        case 'officeRent':
          return 'Офис в аренду'
          break
        case 'freeAppointmentObjectRent':
          return 'ПСН в аренду'
          break
        case 'buildingRent':
          return 'Здание в аренду'
          break
        case 'flatRent':
          return 'Квартира в аренду'
          break
        case 'shoppingAreaRent':
          return 'Магазин в аренду'
          break
        case 'warehouseRent':
          return 'Склад в аренду'
          break
        case 'industryRent':
          return 'Производство в аренду'
          break
        case 'garageRent':
          return 'Гараж в аренду'
          break
        case 'houseRent':
          return 'Дом/дача в аренду'
          break
        case 'officeSale':
          return 'Офис покупка'
          break
        case 'freeAppointmentObjectSale':
          return 'ПСН покупка'
          break
        case 'buildingSale':
          return 'Здание покупка'
          break
        case 'flatSale':
          return 'Квартира покупка'
          break
        case 'shoppingAreaSale':
          return 'Магазин покупка'
          break
        case 'warehouseSale':
          return 'Склад покупка'
          break
        case 'newBuildingFlatSale':
          return 'Квартира новостройка покупка'
          break
        case 'businessSale':
          return 'Готовый бизнес покупка'
          break
        case 'industrySale':
          return 'Производство покупка'
          break
        case 'garageSale':
          return 'Гараж покупка'
          break
        case 'houseSale':
          return 'Дом/дача покупка'
          break
        default:
          return ''
      }
    },
    getDateTime(val){
      return new Date(new Date(val*1000)
      .getTime() + (3*60*60*1000)).toISOString()
      .replace('T',' ').replace('.000Z','')
    },
    reload(){
      this.$axios.post('/api/impressions/list',this.filter).then((item) => {
        this.$store.dispatch('impressions/items', item.data.rows)
        this.$store.dispatch('impressions/count', item.data.count)
        window.console.log(item.data);
      });
    },

    scroll({ target: { scrollTop, clientHeight, scrollHeight }}) {
      if (this.flagscroll && scrollHeight - scrollTop <= 1000) {
        this.flagscroll = false
        this.$axios.post('/api/impressions/list',this.filter).then((item) => {
          this.filter.offset = this.items.length
          item.data.rows.forEach( l =>{
            this.items.push(l)
          })
          this.$store.dispatch('impressions/count', item.data.count)
          this.flagscroll = true
          this.filter.scroll = scrollTop
        });
      }
    }

  }

}
</script>

<style lang="scss" scoped >
.gridRow{
  border-bottom: 1px dotted #0c5460;
  .gridCol{
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    border-right: 1px solid;
  }
}
svg{
  width: 42px;
  height: 42px;
  cursor: pointer;
}
.gridHeader{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  align-items: stretch;
  height: 190px;
  .vdiv{
    width: 1px;
    background-color: #a4bed4;
    cursor: col-resize;
  }
  .tddiv{
    border-top: 1px solid;
    padding: 2px 8px 2px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
  .tdHeader{
    height1: 50px;
    border: 1px solid;
    border-width: 1px 1px 1px 1px;
    border-color: #a4bed4 #a4bed4 #a4bed4 #e7f1ff;
    background: -webkit-linear-gradient(#e2efff,#d3e7ff);
    font-family: Tahoma,Helvetica;
    font-size: 12px;
    color: black;
    text-align: center;
    padding-top: 8px;
    padding-bottom: 6px;
  }
  .vfc-single-input{
    width: 88px;
    padding: 2px;
    border: 1px solid #1c222b;
  }
}
</style>
