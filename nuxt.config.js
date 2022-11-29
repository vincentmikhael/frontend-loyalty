export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Arras Membership',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',rel: 'stylesheet'},
    {href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',rel: 'stylesheet'},
  {href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap',rel: 'stylesheet'},
{href: 'https://fonts.googleapis.com', rel: 'preconnect'},
{href: 'https://fonts.gstatic.com', rel: 'preconnect'}],
script: [
  {src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", type: "text/javascript"}
]
  },
  target: "static",
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/apexCharts.js',
      ssr: false
    },
    {
      src: '~/plugins/axios'
    },
    {
      src: '~/plugins/vuex-persist'
    },
    {
      src: '~/plugins/vue-smooth-scroll'
    },
    { src: "~/plugins/vue2-editor", mode: 'client' },
    {src: "~/plugins/simple-alert",mode: 'client'}
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['cookie-universal-nuxt', { alias: 'cookies' }],
    '@nuxtjs/toast',
    "vue2-editor/nuxt"
  ],
toast: {
      position: 'bottom-right',
      duration: 3000
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.arrasmember.com/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {

  },
  middleware: 'auth'
}
