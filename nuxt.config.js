module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Golang中文社区 - 和地鼠们分享你的知识、经验和见解',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'golang123 - 一个专业的Go语言技术社区，帮助你寻找答案，分享知识。' },
      { name: 'keywords', content: "golang,go,go语言,golang社区,go社区,golang中国,go中国,golang中文社区,go中文社区,go语言中文网,golang123,社区"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/styles/common.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#80bd01' },
  performance: {
    prefetch: false
  },
  render: {
    resourceHints: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios', 'mint-ui']
  },
  plugins: [
    { src: '~plugins/mintui.js', ssr: true }
  ]
}
