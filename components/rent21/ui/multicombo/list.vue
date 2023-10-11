<template>
  <div class="main">
    <div class="header">
      <form autocomplete="off" onSubmit="return false">
        <input v-model="filter"  id="filter" name="filter"  class="form-control"  autocomplete="false" placeholder="фильтр" />
      </form>
    </div>
    <div class="body">
      <chitem v-for="(item, key) in listItems" :key="key" :item="item" :index="key" :values="values" />
    </div>
    <div class="footer">
      <button @click="save" type="button" class="btn btn-pill btn-primary btn-air-primary btn-sm">Сохранить</button>
      <button @click="close" type="button" class="btn btn-pill btn-secondary btn-air-secondary btn-sm">Отменить</button>
    </div>
  </div>
</template>

<script>
import chitem from "~/components/rent21/ui/multicombo/chitem";
export default {
  name: "list",
  components: {chitem},
  data: () => ({
    filter : '',
    listItems: []
  }),
  watch:{
    filter(val){
      this.listItems =  this.items.filter(item=> item.name.indexOf(val)!== -1)
    }
  },
  mounted() {
    this.listItems = this.items
  },
  computed: {
    items(){
      return this.$store.getters['main/combospr']
    },
    values(){
      return this.$store.getters['main/combovalue']
    }
  },
  methods:{
    close(){
      this.$store.dispatch('main/setVcomponent', {
        comp: null,
        field: null,
        spr: null
      })
    },
    save(){
      const ar = []
      this.listItems.filter(item=>
        item.ch === true
      ).forEach(item=>{
        ar.push(item.id)
      })
      this.$store.dispatch('main/setglobalevent', {
        operation: 'setFieldItem',
        field:  this.$store.getters['main/combofield'],
        pfield:  this.$store.getters['main/combofieldp'],
        value: ar,
        itemkey: null
      })
      this.close();
    }
  },
}
</script>

<style lang="scss" scoped>
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
