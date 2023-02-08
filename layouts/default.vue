<template>
  <div>
    <!-- Прелоадер -->
    <div
      class="preloader"
      style="display: none"
    >
      <div>
        <svg
          class="preloader__image"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
          />
        </svg>
      </div>
    </div>
    <div v-if="vComponent" :class="ifmetro ? 'rpanel-big' : ifInfo ?'lpanel':'rpanel'">
      <component :is="vComponent" v-if="vComponent" />
    </div>
    <div class="page-wrapper compact-wrapper">

      <div class="page-main-header">
        <div class="main-header-right row m-0" style="width: auto">
          <div class="main-header-left">
            <div @click="showNav = ! showNav" class="toggle-sidebar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-center status_toggle middle" id="sidebar-toggle" checked="true"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg></div>
            <a href="/api/auth/yandex">Login with Yandex</a>
            <div class="logo-wrapper"><a href="index.html"><img class="img-fluid" src="" alt=""></a></div>
            <div class="dark-logo-wrapper"><a href="index.html"><img class="img-fluid" src="" alt=""></a></div>
          </div>
        </div>
        <component :is="save_component" v-if="save_component" style="margin-left: 12px" />
      </div>

      <div class="page-body-wrapper null">
        <header v-if="width>=1000 && showNav" class="main-nav">
          <usercard/>
          <nav>
            <div class="main-navbar">
              <div class="left-arrow disabled" id="left-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></div>
              <div id="mainnav">
                <ul class="nav-menu custom-scrollbar">
                  <li class="sidebar-main-title">
                    <div>
                      <h6>General             </h6>
                    </div>
                  </li>
                  <li class="dropdown">
                    <router-link class="nav-link menu-title" to="/impressions">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      <span>Клиенты</span>
                      <div class="according-menu">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </router-link>
                    <ul class="nav-submenu menu-content" style="display: none;">
                      <li><a href="index.html">Default</a></li>
                      <li><a href="dashboard-02.html">Ecommerce</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <router-link class="nav-link menu-title" to="/calls">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      <span>Звонки</span>
                      <div class="according-menu">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </router-link>
                    <ul class="nav-submenu menu-content" style="display: none;">
                      <li><a href="index.html">Default</a></li>
                      <li><a href="dashboard-02.html">Ecommerce</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <router-link class="nav-link menu-title" to="/realestate">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      <span>Недвижимость</span>
                      <div class="according-menu">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </router-link>
                    <router-link class="nav-link menu-title" to="/report">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                      <span>Экспорт</span>
                      <div class="according-menu">
                        <i class="fa fa-angle-right"></i>
                      </div>
                    </router-link>
                    <ul class="nav-submenu menu-content nav-submenuShow" style="">
                      <li><router-link to="/report/avito">Avito</router-link></li>
                      <li><router-link to="/report/cian">Cian</router-link></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="right-arrow" id="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
            </div>
          </nav>
        </header>
        <div class="page-body" :style="width<1001 || !showNav ? 'margin-left:0px;overflow-x:hidden':'overflow-x:hidden'">
          <div class="custom-container">
            <div class="container-fluid">
              <div v-if="vComponent" class="modalDiv"></div>
              <Nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerDiv from '~/components/headerDiv'
import usercard from '~/components/usercard'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
  comments:{headerDiv, usercard},
  data: () => ({
    showLeftPanel: false,
    showRightPanel: true,
    showNav: true,
    width: 1100
  }),
  methods:{
    resize(){
      this.width = window.innerWidth;
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.resize);
  },
  watch:{
    globalMessage(val){
      if(val==='hideMenu'){
        this.showNav = false
      }
      if(val==='showMenu'){
        this.showNav = true
      }
    }
  },
  computed:{
    globalMessage(){
      return this.$store.getters['main/globalMessage'];
    },
    vComponent() {
      return this.$store.getters['main/vcomponent']
    },
    ifInfo(){
      if(this.vComponent){
        if(this.vComponent.toString().indexOf('infoBuild') > -1){
          return true
        }else
          return false
      }else
        return false
    },
    ifmetro(){
      if(this.vComponent){
        if(this.vComponent.toString().indexOf('metromap') > -1){
          return true
        }else
          return false
      }else
        return false
    },
    save_component() {
      return this.$store.getters['main/save_component']
    },
  },
  mounted() {
    document.body.classList.add('landing-wrraper');
    this.resize();
    window.addEventListener('resize', this.resize);
    this.$axios.get('https://rent21.ru:4439/apiv2/user/listname').then((item) => {
      this.$store.commit('main/setusers', item.data);
    });
    this.$axios.get('/api/test').then((item) => {
      console.log(item.data)
    });

    this.$store.dispatch('main/load');
    this.$store.dispatch('export/load');

    /*
    window.onload = function () {
      document.body.classList.add('loaded_hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 100);
    }

     */
  },
};
</script>

<style lang="css">
.nav-submenuShow{
  display: block !important;
}
.modalDiv{
  position: absolute;
  width: 100%;
  opacity: 0.3;
  z-index: 4000;
  background-color: black;
  height: -webkit-fill-available;
}

.row{
  justify-content: center;
}

.container-fluid {
  width: 100%;
  padding-right: 0px !important;
  padding-left: 0px !important;
  margin-right: auto;
  margin-left: auto;
}
.landing-wrraper .custom-container {
  max-width: 100%;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 0px;
}


@media (max-width: 1470px){
  .landing-wrraper .custom-container {
    max-width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    margin-left: 0px;
  }

}

.vfc-single-input{
  width: 88px;
  padding: 2px;
  border: 1px solid #1c222b;
}
.rpanel-big{
  top: 0px;
  position: fixed;
  background-color: #f5f7fb;
  width: 390px;
  z-index: 5000;
  left: calc(100% - 390px);
  height: 100vh;
  border-left: 1px solid;
  display: block;
  overflow: hidden;
}

@media screen and (max-device-width: 990px) {
  .rpanel-big{
    width: 100%;
    z-index: 5000;
    left: 0;
  }
}


@media screen and (min-device-width: 1200px) {
  .rpanel-big{
    width: 50%;
    z-index: 5000;
    left: calc(50%);
  }
}

@media screen and (max-width: 991px) {
  .leftMenu {
    display: none;
  }

  .header-bmenu{
    display: flex !important;
  }
  .blogin{
    display: none !important;
  }
  .row-list-title {
    display: none;
  }
  .card-pagination {
    display: none;
  }
}

.preloader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  /* фоновый цвет */
  background: -webkit-linear-gradient(0deg, rgb(251, 255, 254), rgb(245, 247, 251));
  background: -moz-linear-gradient(0deg, rgb(251, 255, 254), rgb(245, 247, 251));
  background: linear-gradient(0deg, rgb(251, 255, 254), rgb(245, 247, 251));
  z-index: 1001;
}

.preloader__image {
  position: relative;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  margin-top: -35px;
  margin-left: -35px;
  text-align: center;
  animation: preloader-rotate 2s infinite linear;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}

.loaded_hiding .preloader {
  transition: 0.3s opacity;
  opacity: 0;
}

.loaded .preloader {
  display: none;
}

.rpanel {
  top: 0px;
  position: fixed;
  background-color: #f5f7fb;
  width: 390px;
  z-index: 5000;
  left: calc(100% - 390px);
  height: 100vh;
  border-left: 1px solid;
  display: block;
}

.lpanel {
  top: 0px;
  position: fixed;
  background-color: #f5f7fb;
  width: 390px;
  z-index: 5000;
  left: 0px;
  height: 100vh;
  border-right: 1px solid;
  display: block;
}
@media (max-width: 600px) {
  .row {
    --bs-gutter-x: 0;
  }
}
@media (max-width: 600px) {
  .rpanel{
    width: 100%;
    z-index: 5000;
    left: 0;
  }
}
</style>
