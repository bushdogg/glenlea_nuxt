module.exports = {
  target: 'static',
  /*
  ** Headers of the page
  */
  router: {
    base: '/',
    linkExactActiveClass: 'active'
  },

  head: {
    title: 'Glenlea Tennis Club',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Glenlea Tennis Club' },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://glenleatennisclub.com.au",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Glenlea Tennis Club, Adelaide Tennis Club, Competition, Coaching, Hitting",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Glenlea Tennis Club, an Adelaide tennis club with a proud history. Glenlea is one of the largest tennis clubs in Adelaide & is near Glenelg. Offers competition tennis, coaching, social tennis & hitting for all standards.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://glenleatennisclub.com.au/img/facebook-1200-630.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css', crossorigin: 'anonymous' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/now-ui-kit.scss',
    '~/assets/sass/demo.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/globalDirectives.js', ssr: false },
    { src: '~/plugins/element-ui.js' },
    { src: '~/plugins/now-ui-kit' }
  ],
    /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],
  axios: {
    // DEV
    // baseURL: 'http://website.test/api'

    //PROD
    baseURL: 'https://glenleatennisclub.com.au/backend/api'
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
