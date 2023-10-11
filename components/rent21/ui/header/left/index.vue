<template>
  <div class="main-header-left">
    <div v-if="showBack" @click="clickBack" class="toggle-sidebar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    </div>
    <div @click="showNav = ! showNav" class="toggle-sidebar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-center status_toggle middle" id="sidebar-toggle" checked="true"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg></div>
    <a v-if="!user" href="/api/auth/yandex">Авторизоваться</a>
    <a v-if="user && user.username" href="/api/logout" >{{user.username}} выйти</a>
    <div class="logo-wrapper"><a href="index.html"><img class="img-fluid" src="" alt=""></a></div>
    <div class="dark-logo-wrapper"><a href="index.html"><img class="img-fluid" src="" alt=""></a></div>
  </div>

</template>

<script>
export default {
  name: 'headerLeft',
  data: () => ({
    showNav: true,
    showBack: false
  }),
  methods:{
    clickBack(){
      this.$store.dispatch('main/globalMessage','showBack|false')
      this.$router.back()
    }
  },
  watch:{
    globalMessage(val){
      if(!val) return
      if(val.split('|')[0]==='showBack'){
        if(val.split('|')[1] ==='true'){
          this.showBack = true
        }else{
          this.showBack = false
        }
      }
    },
    showNav(val){
      this.$store.dispatch('main/globalMessage','showNav|'+val)
    }
  },
  computed: {
    user () {
      return this.$store.getters['main/user']
    },
    globalMessage () {
      return this.$store.getters['main/globalMessage'];
    },
  }
}
</script>

<style scoped>

</style>
