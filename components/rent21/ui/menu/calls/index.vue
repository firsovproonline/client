<template>
  <li v-if="user && (user.isAdmin || user.isRieltor)" class="dropdown">
    <router-link to="/calls"  :class="active ? 'nav-link menu-title active':'nav-link menu-title'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      <span>Звонки</span>
      <div class="according-menu">
        <i class="fa fa-angle-right"></i>
      </div>
    </router-link>
    <ul v-if="flagOpen" class="nav-submenu menu-content nav-submenuShow" style="">
    </ul>
  </li>
</template>

<script>
export default {
  name: 'menuCalls',
  data:() => ({
    flagOpen: false,
    active: false
  }),
  watch: {
    $route(to, from) {
      if(to.path.indexOf('calls')!==-1){
        this.active = true
        this.flagOpen = true
      }
      else{
        this.active = false
        this.flagOpen = false
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters['main/user']
    }
  },
  mounted () {
    if(this.$router.currentRoute.path.indexOf('calls')!==-1){
      this.active = true
      this.flagOpen = true
    }
  }
}
</script>

<style scoped>
.active{
  background-color: #0d67e9;
}
</style>
