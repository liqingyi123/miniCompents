// components/test1/test1.js
let app = getApp()
Component({
  properties: {

  },
  data: {

  },
  methods: {
    showhb: function(){
      console.log(app.getTopPage())
      // app.getTopPage().setData({ // 更新父组件数据
      //   showhb: true,
      //   showt1:false
      // })
    }
  }
})
