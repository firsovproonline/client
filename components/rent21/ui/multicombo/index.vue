<template>
  <div class="main">
    <div>
      <div class="label" @click="showList">{{title}}</div>
      <div v-if="field==='METRO1'" style="margin-top: 12px" class="label" @click="showMetro">Карта</div>
    </div>
    <div class="body">
      <div style="display: flex;flex-wrap: wrap;max-height: 50px;
      overflow: hidden;">
        <div v-for="(item, key) in value.split('|')" :key="key" :item="item"  >
          <div style="display: flex">
            <div>{{item}}</div>
            <div v-if="key < value.split('|').length -1" style="width: 6px">|</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemCombo from "~/components/rent21/ui/multicombo/item";

///     this.$store.dispatch('main/setVcomponent', () => import('./headerTable'))

export default {
  name: "multicombo",
  components: {itemCombo},
  props:{
    pfield: null,
    spr: null,
    value: null,
    type: null,
    title: '',
    field: null,
    itemkey: null
  },
  data: () => ({
    vtext: ''
  }),
  watch:{
    value(val){
      console.log('ggggggggggggggg',val)
    }
  },
  methods:{
    showList(){
      const p = {
        comp:() => import('./list'),
        pfield: this.pfield,
        field: this.field,
        value: this.value,
        spr: this.$store.getters['main/spr'][this.spr]
      }
      this.$store.dispatch('main/setVcomponent', p)
    },
    showMetro(){
      const p = {
        comp:() => import('@/components/metromap'),
        field: this.field,
        value: this.value,
        spr: this.$store.getters['main/spr'][this.spr]
      }
      this.$store.dispatch('main/setVcomponent', p)
    },

  }
}
</script>

<style lang="scss" scoped>
  .main{
    display: flex;
    .item{
      margin-left: 4px;
      border-bottom: 1px #1c222b dotted;
      white-space: nowrap;
    }
    .label{
      min-width: 110px;
      color: #1c222b;
      font-weight: bold;
      cursor: pointer;
      text-decoration: underline;
    }
    .body{
      flex: 1 1 auto;

    }
  }
</style>
