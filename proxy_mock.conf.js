const PROXY_CONFIG = [

  {
      context: ["/noticias"],
      target: "http://localhost:3000/",
      secure: false,
      changeOrigin: false,
      logLevel:"debug"
  }
]

module.exports = PROXY_CONFIG;

