<template>
  <div class="col-xl-6 box-col-12 des-xl-100 top-dealer-sec" style="min-width: 100%;" >
    <div class="card" style="height: 600px">
      <div class="card-header pb-0" style="display: flex;padding-right: 15px;">
        <div class="header-top d-sm-flex justify-content-between align-items-center" style="width: 100%;
        padding: 6px;background: -webkit-linear-gradient(#e2efff, #d3e7ff);
        margin-right: 15px;
        border-top: 1px solid #a4bed4;
        border-left: 1px solid #a4bed4;
        border-right: 1px solid #a4bed4;

        ">
          <div style="white-space: nowrap">Звонки {{count}} записей всего, отображенно {{items.length}}</div>
          <div class="center-content" style="flex: 1 auto;width: 100%">
          </div>
          <div style="display: flex">
            <div @click="reload">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-square"><rect data-v-dc22fefc="" x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line data-v-dc22fefc="" x1="9" y1="9" x2="15" y2="15"></line><line data-v-dc22fefc="" x1="15" y1="9" x2="9" y2="15"></line></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="gridHeader card-body" style="padding-bottom: 0px;padding-top: 0px;max-height: 80px;height: 80px;padding-right: 16px;">
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width: 70px;min-width: 70px">
          <div>ID</div>
          <div><input v-model="filter.id" v-mask="'######'" type="text" style="width: 100%"></div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width: 105px;min-width: 105px">
          <div>Дата звонка</div>
          <div><input type="text" style="width: 100%"></div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width:110px;min-width: 110px">
          <div>Телефон</div>
          <div><input v-model="filter.phone" type="text" style="width: 100%"></div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width: 50%">
          <div>Клиент</div>
          <div><input type="text" style="width: 100%"></div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width: 50%">
          <div>Собственник</div>
          <div><input type="text" style="width: 100%"></div>
        </div>
        <div class="vdiv"></div>
        <div class="tddiv tdHeader" style="width:130px;min-width: 130px">
          <div>Принял</div>
          <div><input type="text" style="width: 100%"></div>
        </div>
        <div class="vdiv"></div>

      </div>

      <div class="card-body" style="padding-top: 0px;overflow: hidden;" >
        <div style="overflow: auto;margin-bottom: 20px;
        height: 100%;
      scroll-margin-right: 20px;
      font-size: 12px;overflow-y: scroll" @scroll="scroll" ref="scroll">
          <div v-for="(item,index) in items" :key="index" style="display: flex" class="gridRow">
            <div class="gridCol" style="width:71px;min-width: 71px">{{item.id}}</div>
            <div class="gridCol" style="width:106px;min-width: 106px">{{getCALLDATE(item.start_time)}}</div>
            <div class="gridCol" style="width:110px;min-width: 110px" >{{item.client_number}}</div>
            <div v-if="item.impression" class="gridCol" style="width: 50%;white-space: nowrap;overflow: hidden">
              <router-link :to="'/impressions/'+item.impression_id" >{{item.impression}}</router-link>
            </div>
            <div v-else class="gridCol" style="width: 50%;white-space: nowrap;overflow: hidden">Создать клиена</div>
            <div class="gridCol" style="width: 50%;white-space: nowrap;overflow: hidden">{{item.client_name}}</div>
            <div class="gridCol" style="width:118px;min-width: 118px" >{{item.title}}</div>
          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
import Item from '~/components/recentcalls/item'
export default {
  name: 'recentcalls',
  components: { Item },
  data: () => ({
    flagscroll : true,
    count: 0,
    filter: {
      phone: '',
      id: '',
      offset: 0,
      limit: 50
    }
  }),
  computed:{
    items(){
      return this.$store.getters['main/items']
    },
  },
  mounted () {
    if(this.items.length===0){
      this.$axios.post('/api/recentcalls/list',this.filter).then((item) => {
        if(item.data.error && item.data.error === 401){
          window.alert('Вы не авторизованы')
          window.location.href = '/api/auth/yandex'

          return
        }
        window.console.log(item.data);
        this.$store.dispatch('main/items', item.data.rows)
        this.count = item.data.count;
      });
    }
  },
  methods:{
    getCALLDATE(val){
      return new Date(new Date(val*1000)
        .getTime() + (3*60*60*1000)).toISOString()
        .replace('T',' ').replace('.000Z','')
    },

    reload(){
      this.$axios.post('/api/recentcalls/list',this.filter).then((item) => {
        this.$store.dispatch('main/items', item.data.rows)
        window.console.log(item.data);
      });
    },
    scroll({ target: { scrollTop, clientHeight, scrollHeight }}) {
        if (this.flagscroll && scrollHeight - scrollTop <= 1000) {
          this.flagscroll = false
          this.$axios.post('/api/recentcalls/list',this.filter).then((item) => {
            this.filter.offset = this.items.length
            item.data.rows.forEach( l =>{
              this.items.push(l)
            })
            this.count = item.data.count;
            this.flagscroll = true
          });
        }
    }

    }

}
</script>

<style lang="scss" scoped>
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
}</style>
