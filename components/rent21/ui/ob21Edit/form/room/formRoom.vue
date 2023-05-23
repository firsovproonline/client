<template>
  <div  class="mainForm formWidth">
    <div v-if="!edit" class="modalDivLocal formWidth" ></div>
    <div style="display: flex;border-bottom: 1px solid #ffffff;" class="formWidth">
      <div :class="active == 'main' ? 'tabBt active':'tabBt'"
           @click="active = 'main'">Основные поля</div>
      <div :class="active == 'photo' ? 'tabBt active':'tabBt'"
           @click="active = 'photo'" >Фото</div>
    </div>
    <div ref="main" class="overflow" >
      <div v-show="active==='main'" ref="form" ></div>
      <div v-show="active==='photo'" >
        <ListPhoto v-if="item && item.UID" :uid="item.UID"/>
      </div>
    </div>
  </div>
</template>

<script>
import ListPhoto from '@/components/rent21/ui/photo/list'
export default {
  name: 'formRoom',
  components: { ListPhoto },
  props:{
    item: null,
  },
  data: () => ({
    form: null,
    edit: true,
    active: 'main'
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
        case 'roomHide':
          this.edit = false
          break
        case 'roomShow':
        case 'reload':
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
      console.log(ob)
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
