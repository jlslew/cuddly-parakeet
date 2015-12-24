exports.config = {
  modules: [
    "copy",
    "server",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "bower",
    "less"
  ],
  bower: {
    copy: {
      strategy: "vendorRoot",
      mainOverrides: {
        uikit: ["css/uikit.gradient.css", "js/uikit.js", {fonts: "../../fonts"}]
      }
    }
  },
  less: {
    sourceMap: false
  }
}
