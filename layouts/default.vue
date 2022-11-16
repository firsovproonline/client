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
    <div class="page-wrapper compact-wrapper">
      <div class="page-main-header">
        <div class="main-header-right row m-0">
          <div class="main-header-left">
            <div class="logo-wrapper"><a href="index.html"><img class="img-fluid" src="" alt=""></a></div>
            <div class="dark-logo-wrapper"><a href="index.html"><img class="img-fluid" src="" alt=""></a></div>
            <div class="toggle-sidebar"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-center status_toggle middle" id="sidebar-toggle" checked="true"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg></div>
          </div>
        </div>
      </div>

      <div class="page-body-wrapper null">
        <header v-if="width>=1000" class="main-nav">
          <usercard/>
        </header>
        <div class="page-body" :style="width<1001 ? 'margin-left:0px':''">
          <div class="custom-container">
            <div class="container-fluid">
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
  mounted() {
    document.body.classList.add('landing-wrraper');
    this.resize();
    window.addEventListener('resize', this.resize);
    this.$axios.get('https://rent21.ru:4439/apiv2/user/listname').then((item) => {
      this.$store.commit('main/setusers', item.data);
    });

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

</style>
