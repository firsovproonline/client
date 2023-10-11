<template>
  <div>
    <div class="main">
      <div v-if="title!=''" class="title" :style="labelWidth ? labelWidth : ''" >{{title}}</div>
      <div class="value">
        {{val}}
      </div>
      <div class="triangle-up" style="margin-left: 6px" @click="tagleShowCombo()"></div>
    </div>
    <input v-model="item[field]" @input="change1" />
    <div v-if="showCombo && items.length > 0" class="selectDiv" :style="comboWidth">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="item"
        :value="item.id"
        @click="clickItem"
      >
        {{item.name}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "comboNoSpr",
  props:{
    title: '',
    change: null,
    labelWidth: null,
    spr: null,
    item: null,
    field:null
  },
  data () {
    return {
      showCombo: false,
      spr_ready: false,
      items: [],
      value: null,
      interval: null
    }
  },
  watch:{
    spr(){
      console.log('ffff')
    }
  },
  computed:{
    val(){
      if(this.items.find(aitem => aitem.id == this.item[this.field])){
        return this.items.find(aitem => aitem.id == this.item[this.field]).name
      }else
        return '';
    },
    comboWidth(){
      return 'width:'+ this.$el.offsetWidth + 'px !important'
    },
  },
  methods:{
    setstart(){
      console.log('1')
      if(this.items && this.spr_ready && this.field && this.item[this.field] ){
        clearInterval(this.interval);
        if(this.items.find(aitem => aitem.id == this.item[this.field]).name){
          this.val = this.items.find(aitem => aitem.id == this.item[this.field]).name
        }else{
          this.val = 'нет в справочнике'
        }
      }
    },
    change1(){
      console.log('+++++++++++++')
    },
    tagleShowCombo(){
      this.showCombo = ! this.showCombo
    },
    clickItem(el){
      console.log(el.target.getAttribute('value'))
      this.change(el.target.getAttribute('value'))
      this.$nextTick(()=>{
        this.tagleShowCombo()
      })
    }
  },
  mounted() {
    if(this.$scopedSlots && this.$scopedSlots.default){
      console.log(this.$scopedSlots.default())
      this.$scopedSlots.default().forEach(item =>{
        if(item.tag === 'option'){
          this.items.push({id:item.data.attrs.value, name:item.children[0].text})
          // this.spr.push({id:item.data.attrs.value, name:item.children[0].text})

        }
      })
    }else{

    }
  },
}
</script>

<style lang="scss" scoped>

.selectDiv{
  border: 1px solid;
  position: absolute;
  z-index: 300;
  width: 95%;
  max-height: 240px;
  width: 120px;
  overflow: auto;
  background-color: #ffffff;
  padding-left: 4px;
  .item{
    padding: 4px;
    cursor: pointer;
  }
  .item:hover{
    background-color: #f5f7fb;
  }
}

.main{
  height: 32px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  .title{
    margin-bottom: 0px;
    width: 140px;
    margin-left: 0px;
  }
  .value{
    flex: auto;
    border-bottom: 1px dotted;
    white-space: nowrap;
    overflow: hidden;
  }

  .triangle-up {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #000000;
    cursor: pointer;
  }

  .triangle-down {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #000000;
    cursor: pointer;
  }
}
</style>

