const imgHost = "https://wuse-public.oss-cn-beijing.aliyuncs.com/wechatapp";
App({
  getTopPage()  {
    let pages =  getCurrentPages()
    return pages[pages.length -  1]
  },
  globalData: {
    imgHost: imgHost
  }
})