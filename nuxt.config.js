export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'server',
//  generate: {
//    dir: 'C:\\OpenServer\\domains\\rieltor.firsovpro.online\\test\\',
//    subFolders: false,
//  },
//  router: {
//    base: '/',
//  },
  server: {
    port: 3022, // default: 3000
    host: '0.0.0.0'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rieltor.firsovpro.online',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [

      { src: '/js/jquery.min.js',
      },
      {
        src: 'https://api-maps.yandex.ru/2.1/?apikey=fdb945b0-aaa5-4b5d-a837-383abb24dfc4&lang=ru_RU',
      },
      {
        src: '/js/dhtmlx/dhtmlx.js',
      },
      {
        src: '/js/dhtmlx/dhtmlxgrid.js',
      },

      {
        src: '/js/inputmask/inputmask.js',
      },
      {
        src: '/js/inputmask/inputmask.extensions.js',
      },
      {
        src: '/js/inputmask/jquery.inputmask.js',
        async: false,
      },
      {
        src: '/js/inputmask/inputmask.numeric.extensions.js',
        async: false,
      },


      {
        src: '/js/prototipe.js',
        async: false,
      },
      {
        src: '/js/adres21.js',
        async: false,
      },
      {
        src: '/js/ob21.js',
        async: false,
      },



    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/js/dhtmlx/dhtmlx.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/css/skyblue/dhtmlx.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/css/main.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/font/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/theme/index.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/v-mask', mode: 'client'},
    {src: '~/plugins/v-calendar', mode: 'client'},
    { src: '@/plugins/api', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  styleResources: {
    sass: [],
    scss: [
      '@/theme/mixins/*.scss',
      '@/theme/vars/*.scss',
    ],
    less: [],
    stylus: [],
  },
  serverMiddleware: {
    '/api': '~/api'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      '/plugins',
    ],
    babel: {
      compact: true,
    },
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: "empty",

        net: 'empty'
      }
    },

    extractCSS: true,
  },
};
