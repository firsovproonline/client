<template>
  <li v-if="user && (user.isAdmin || user.isRieltor)" class="dropdown">
    <router-link to="/setings"  :class="active ? 'nav-link menu-title active':'nav-link menu-title'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      <span>Настройки</span>
      <div class="according-menu">
        <i class="fa fa-angle-right"></i>
      </div>
    </router-link>
    <ul v-if="(user && (user.isAdmin || user.isRieltor)) && flagOpen" class="nav-submenu menu-content nav-submenuShow" style="">
      <li v-if="user.isAdmin"><router-link to="/setings/db" :class="db?'activeLink':''">База</router-link></li>
      <li v-if="user.isAdmin"><router-link to="/setings/feeds" :class="feeds?'activeLink':''">Фиды</router-link></li>
      <li v-if="user.isAdmin"><router-link to="/setings/users" :class="users?'activeLink':''">Пользователи</router-link></li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'menuSetings',
  data:() => ({
    flagOpen: false,
    active: false,
    db: false,
    feeds: false,
    users: false
  }),
  watch: {
    $route(to, from) {
      if(to.path.indexOf('setings')!==-1){
        this.active = true
        this.flagOpen = true
        if(to.path.indexOf('/db')!==-1)
          this.db = true
        else
          this.db = false
        if(to.path.indexOf('/feeds')!==-1)
          this.feeds = true
        else
          this.feeds = false
        if(to.path.indexOf('/users')!==-1)
          this.users = true
        else
          this.users = false
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
    if(this.$router.currentRoute.path.indexOf('setings')!==-1){
      this.active = true
      this.flagOpen = true
      if(this.$router.currentRoute.path.indexOf('/db')!==-1)
        this.db = true
      else
        this.db = false
      if(this.$router.currentRoute.path.indexOf('/feeds')!==-1)
        this.feeds = true
      else
        this.feeds = false
      if(this.$router.currentRoute.path.indexOf('/users')!==-1)
        this.users = true
      else
        this.users = false

    }
  }
}
</script>

<style scoped>
.active{
  background-color: #0d67e9;
}
</style>
