<template>
  <div class="mainDiv formWidth">
    <div v-if="!edit" class="modalDivLocal formWidth" ></div>
    <div style="display: flex;border-bottom: 1px solid #ffffff;" class="formWidth">
      <div style="padding: 2px;padding-bottom: 3px">Помещения в здании</div>
    </div>
    <div ref="main" class="overflow" style="padding-top: 8px">
      <div v-for="(item, index) in items" :key="index" style="padding-left: 11px" >
        <div>Этаж {{item.ETAG}}</div>
        <div v-for="(itemOb, index) in item.ob21" :key="index">
          <div :class="uidOb === itemOb.UID?'active':''" @click="uidOb=itemOb.UID" style="display: flex;padding-left: 12px;cursor: pointer">
            <div style="display: flex;align-items: center;max-width: 170px;min-width: 170px">
              <div style="width: 100px;overflow: hidden;white-space:normal">{{replaceTip(itemOb.TIP)}}</div>
              <div style="margin-left: 3px">{{itemOb.OPP}}</div>
              <div style="margin-left: 3px">{{itemOb.PLALL}}</div>
            </div>
            <indicator v-if="1==1" :uid="itemOb.UID" :item="getExport(itemOb.UID)" />
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
import Indicator from '@/components/rent21/ui/export/indicator'

export default {
  components: {  Indicator },
  name: 'floors',
  props:{
    items: null
  },
  data: () => ({
    uidOb: null,
    floors: [],
    edit: true,
    ob21: null
  }),
  computed:{
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    },
    innerWidth(){
      return window.innerWidth
    }
  },
  mounted () {
    this.resize()
    window.addEventListener('resize', this.resize);
  },
  watch:{
    globalMessage(val){
      if(!val) return
      switch (val.split('|')[0]) {
        case 'floorsHide':
          this.edit = false
          break
        case 'floorsShow':
        case 'reload':
          this.edit = true
          break

      }
    },
    uidOb(val){
      this.$store.dispatch('main/globalMessage','selectRoom|'+val)
    },
    items(val){
      this.ob21 = []
      val.forEach(item=>{
        item.ob21.forEach(ob21=>{
          this.ob21.push(ob21)
        })
      })
    }
  },
  methods:{
    getExport(val){
      if(this.ob21 && this.ob21.find(el => el.UID === val) && this.ob21.find(el => el.UID === val).exports){
        const xOb = this.ob21.find(el => el.UID === val).exports
        if(!xOb.avito){
          xOb.avito = {
            Publ: 0
          }
        }
        if(!xOb.cian){
          xOb.cian = {
            Publ: 0
          }
        }
        if(!xOb.cian1){
          xOb.cian1 = {
            Publ: 0
          }
        }
        // console.log('===============',xOb)
        const exportOb = {
          avitopubl: xOb.avito.Publ,
          cianpubl: xOb.cian.Publ,
          cian1publ: xOb.cian1.Publ,
          fields: xOb,
          exportOb: xOb,
          uid: val
        }
        return exportOb
      }else{
        return {
          avitopubl: '0',
          cianpubl: '0',
          cian1publ: '0',
          fields: {},
          exportOb: { },
          uid: val

        }
      }
    },
    replaceTip(val){
      if(val === 'Помещение свободного назначения'){
        return 'ПСН'
      }else
        return val
    },
    resize(){
      if(this.$refs.main){
        const h = window.innerHeight - this.$refs.main.getBoundingClientRect().top;
        const w = window.innerWidth - this.$refs.main.getBoundingClientRect().left;
        this.$refs.main.style.height = (h- 10) + 'px';
      }
    },
  }
}
</script>

<style scoped>
.active{
  border-bottom: 1px dotted #000F1A;
}
.active_red{
  border-bottom: 2px solid #e5194d !important;
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
</style>
