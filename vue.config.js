module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_base.scss";`
      }
    }
  }
}
