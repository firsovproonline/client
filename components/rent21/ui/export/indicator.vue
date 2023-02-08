<template>
  <div class="main">
    <svg :style="bgCian"
         xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    </svg>
    <svg :style="bgCian1"
         xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    </svg>
    <svg style="color:blue" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    </svg>
    <div :title="messageAvito" style="padding-top: 6px">
      <svg :style="bgAvito" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      </svg>
    </div>
    <svg style="color:red;fill-opacity: 0.2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'indicator',
  props:{
    item: {},
    uid:''
  },
  watch:{
    'item.uid'(val){
      //console.log('ind',this.item)
    }
  },
  computed:{
    bgAvito(){
      if(this.avito){
        if(this.avito.find(item => item.ad_id == this.uid)){
          if(this.avito.find(item => item.ad_id == this.uid).avito_status){
            if(this.avito.find(item => item.ad_id == this.uid).avito_status == 'removed')
              return 'color:green;fill: #ddccdd;cursor:pointer'
            else
              return 'color:green;fill: green;fill-opacity: 0.4;'

          }else{
            return 'color:green;fill: red;fill-opacity: 0.4;cursor:pointer'

          }
        }else{
          if(this.item.avitopubl== 1){
            return 'color:green;fill: #000000;fill-opacity: 0.4;'

          }else
            return 'color:green;fill-opacity: 0.4;'
        }
      }else{
        return 'color:green;'
      }

    },
    messageAvito(){
      if(this.avito){
        if(this.avito.find(item => item.ad_id == this.uid)){
          if(this.avito.find(item => item.ad_id == this.uid).avito_status
            && this.avito.find(item => item.ad_id == this.uid).avito_status === 'active'
          ){
            return ''
          }else{
            let m ='';
            this.avito.find(item => item.ad_id == this.uid).messages.forEach(item=>{
              m = m+item.title + '\n'
            })
            return m

          }
        }else{
          return 'нет подтверждения'
        }
      }else{
        return ''
      }
    },
    bgCian1(){
      if(this.cian1 && this.item){
        if(this.item.cian1publ==1){
          if(this.cian1[this.uid]) {
            return 'color:#68c8d8;fill: #68c8d8'
          }else{
            return 'color:#68c8d8;fill: #68c8d8;fill-opacity: 0.4'
          }
        }else{
          return 'color:#68c8d8;'
        }
      }else{
        return 'color:#68c8d8;'
      }
    },

    bgCian(){
      if(this.cian && this.item){
        if(this.item.cianpubl==1){
          if(this.cian[this.uid]) {
            return 'color:#68c8d8;fill: #68c8d8'
          }else{
            return 'color:#68c8d8;fill: #68c8d8;fill-opacity: 0.4'
          }
        }else{
          return 'color:#68c8d8;'
        }
      }else{
        return 'color:#68c8d8;'
      }
    },
    avito(){
      return this.$store.getters['export/report'].avito
    },
    cian(){
      return this.$store.getters['export/report'].Cian
    },
    cian1(){
      return this.$store.getters['export/report'].Cian1
    }

  }
}
</script>

<style scoped>
  .main{
    display: flex;
    align-items:center;
    padding-left: 6px;
  }
  i{
    margin-left: 4px;
  }
</style>
