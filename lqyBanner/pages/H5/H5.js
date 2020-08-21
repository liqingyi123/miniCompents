Page({
  data: {},
  onLoad: function (options) {
    if (options.webUrl) {
      this.setData({
        webUrl: options.webUrl
      })
    }
  }
})