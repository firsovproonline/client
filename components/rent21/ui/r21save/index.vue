<template>
  <div class="main">
    <div @click="save">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
    </div>
    <div @click="cancel">
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>

    </div>
    <div style="width: 100%"></div>
  </div>
</template>

<script>
export default {
  name: 'r21save',
  data: () => ({
    SaveValue: 'save',
  }),
  computed:{
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    }
  },
  watch:{
    globalMessage(val){
      if(!val) return
      if(val.indexOf('saveItem')!==-1){
        if(val.split('|').length===2)
          this.SaveValue = 'save|'+val.split('|')[1]
        if(val.split('|').length===3)
          this.SaveValue = 'save|'+val.split('|')[1]+'|'+val.split('|')[2]
      }
    }
  },
  methods:{
    save(){
      this.$store.dispatch('main/globalMessage',this.SaveValue)

    },
    cancel(){
      this.$store.dispatch('main/globalMessage','cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    svg{
      width: 42px !important;
      height: 42px !important;
      cursor: pointer;

    }
    svg:hover{
      color: #0a6aa1;
    }
  }
</style>
