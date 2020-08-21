// component/progress/progress.js
Component({
  behaviors: [],
  /**
   * 组件的属性列表
   */
  properties: {
    percent: {//百分比
      type: [Number, String],
      value: 0
    },
    strokeWidth: {//进度条宽度
      type: [Number, String],
      value: 25
    },
    activeLineColor: {//渐变的前景色
      type: Array,
      value: ['#00FFD8','#71FF79','#FFFF00','#FF6E02','#FF4202']
    },
    activeColor: {//前景色
      type: [String, Array],
      value: '#00FFD8,#71FF79,#FFFF00,#FF6E02,#FF4202'
    },
    backgroundColor: {//背景色
      type: String,
      value: '#FFF1E7'
    },
    radius: {//圆角
      type: [Number, String],
      value: 15
    },
    borderStyle: {//边框
      type: String,
      value: 'none'
    },
    width: {
      type: String,
      value: '100%'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached: function () {
    let activeColor = this.data.activeColor;
    if (!!~activeColor.indexOf(',')) {
      this.setData({
        activeLineColor: activeColor.split(',')
      })
    }
  }
})
