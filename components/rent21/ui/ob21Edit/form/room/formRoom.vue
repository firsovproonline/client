<template>
  <div  class="mainForm formWidth">
    <div v-if="!edit" class="modalDivLocal formWidth" ></div>
    <div style="display: flex;border-bottom: 1px solid #ffffff;" class="formWidth">
      <div :class="active == 'main' ? 'tabBt active':'tabBt'"
           @click="active = 'main'">Основные поля</div>
      <div v-if="showPhoto" :class="active == 'photo' ? 'tabBt active':'tabBt'"
           @click="active = 'photo'" >Фото</div>
      <div v-if="showPhoto" :class="active == 'export' ? 'tabBt active':'tabBt'" @click="showExport" style="margin-left: 8px;display: flex">
        <div>Экспорт</div>
        <indicator v-if="item" style="margin-top: -4px" :uid="item.UID" :item="getExport" />
      </div>
    </div>
    <div ref="main" class="overflow" >
      <div v-show="active==='main'" ref="form" ></div>
      <div v-show="showPhoto && active==='photo'" >
        <ListPhoto v-if="item && item.UID" :uid="item.UID"/>
      </div>
    </div>
  </div>
</template>

<script>
import ListPhoto from '@/components/rent21/ui/photo/list'
import Indicator from '@/components/rent21/ui/export/indicator'


export default {
  name: 'formRoom',
  components: { Indicator, ListPhoto },
  props:{
    item: null,
    address: null
  },
  data: () => ({
    form: null,
    edit: true,
    active: 'main',
    showPhoto: true
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
      if(!val) return
      switch (val.split('|')[0]) {
        case 'reload':
          this.showPhoto = true
          this.edit = true
          break
        case 'roomPhotoHide':
          this.showPhoto = false
          break
        case 'roomPhotoShow':
          this.showPhoto = true
          break
        case 'roomHide':
          this.edit = false
          break
        case 'roomShow':
          this.edit = true
          break
      }
    },
    item(val){
      if(this.form) this.form.unload()
      this.form = new dhtmlXForm(this.$refs.form, [{
        type: "ob21",
        name: "obfields"
      }]);
      this.form.setItemValue('obfields',{pchange:this.onChange,data:val});

    }
  },
  methods:{
    getExport(){
      if(this.item){
        const xOb = this.item.exports
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

    showExport(){
      console.log('------------------------',this.item)
      if(!this.item.exports){
        this.item.exports = {
          rent21:{
            UID: this.item.UID,
            Publ: 0,
            Description: this.item.CIANREM
          },
          Yandex:{
            UID: this.item.UID,
            Publ: 0,
            Description: this.item.CIANREM
          },
          avito:{
            UID: this.item.UID,
            Publ: 0,
            Description: this.item.CIANREM
          },
          cian:{
            UID: this.item.UID,
            Publ: 0,
            Description: this.item.CIANREM
          },
          cian1:{
            UID: this.item.UID,
            Publ: 0,
            Description: this.item.CIANREM
          },
        }
      }
      const p = {
        comp:() => import('../../../export/formExport'),
        pfield: this.item.UID,
        field: this.item.building,
        value: this.item.exports,
        spr: this.address,
        height: '600px'
      }
      this.$store.dispatch('main/setVcomponent', p)
      this.$nextTick(()=>{
        this.$store.dispatch('main/globalMessage','widthRform|300px')
        this.$nextTick(()=>{
          this.$store.dispatch('main/globalMessage','widthRform|600px')
        })
      })


    },
    resize(){
      if(this.$refs.main){
        const h = window.innerHeight - this.$refs.main.getBoundingClientRect().top;
        const w = window.innerWidth - this.$refs.main.getBoundingClientRect().left;
        this.$refs.main.style.height = (h- 10) + 'px';

      }
    },
    onChange(name, value, state){
      let ob = null
      ob = this.form.getFormData().obfields
      for(let key in ob){
        this.item[key] = ob[key]
      }
      //console.log(ob,this.item)
//      delete ob.form
//      if(this.addOb21)
//        this.addOb21.fields = ob
//      else
//        this.item.ob21[this.item.ob21.findIndex(el => el.UID === this.uidOb)] = ob
      this.$store.dispatch('main/save_component', () => import('@/components/rent21/ui/r21save')).then(()=>{
        this.$nextTick(()=>{
          this.$store.dispatch('main/globalMessage',null)
          this.$nextTick(()=>{
            this.$store.dispatch('main/globalMessage','saveItem|ob21|'+ob.UID)
            // скрываем табы ненужные
            this.$nextTick(()=>{
              this.$store.dispatch('main/globalMessage','addressHide')
              this.$nextTick(()=>{
                this.$store.dispatch('main/globalMessage','floorsHide')
                this.$nextTick(()=>{
                  this.$store.dispatch('main/globalMessage','ownersHide')
                  this.$nextTick(()=>{
                    this.$store.dispatch('main/globalMessage','roomPhotoHide')
                  })
                })

              })
            })
          })
        })
      })

    }
  },
  mounted () {
    this.resize()
    window.addEventListener('resize', this.resize);
  },
}
</script>

<style scoped>
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

.active{
  border-bottom: 1px dotted #000F1A;
}
.active_red{
  border-bottom: 2px solid #e5194d !important;
}

.tabBt{
  padding: 2px;
  margin-left: 6px;
  cursor: pointer;
}
.formWidth{
  max-width: 400px;
  min-width: 400px;
}
.mainForm{
  border-right: 1px solid;
  padding-right: 0px;
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
