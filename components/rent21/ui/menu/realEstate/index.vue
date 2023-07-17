<template>
  <li class="dropdown">
    <router-link @click="open1"  class="nav-link menu-title" to="/realestate">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      <span>Недвижимость</span>
      <div class="according-menu">
        <i class="fa fa-angle-right"></i>
      </div>
    </router-link>
    <ul v-if="flagOpen" class="nav-submenu menu-content nav-submenuShow" style="">
      <li><router-link to="/realestate">Коммерческая</router-link></li>
      <li><router-link to="/realestate">Жилая</router-link></li>
      <li><router-link to="/realestate">Загородная</router-link></li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'menuRealEstate',
  data: () => ({
    flagOpen: false
  }),
  methods:{
    open1(){
      console.log('==================')
      this.flagOpen = ! this.flagOpen
    }
  }
}
</script>

<style scoped>

</style>
