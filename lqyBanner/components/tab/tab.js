let rpx,that,windowWidth,scrollLeft,$;
Component({
  properties: {
    style: {//样式-背景颜色，字体大小，字体粗细，字体
      type: String,
      value: ""
    },
    height: {//总体高度
      type: Number,
      value: 80
    },
    align: {//排列布局-居中，靠左，靠右
      type: String,
      value: 'center'
    },
    underLine: {//是否显示选中下标
      type: Boolean,
      value: true
    },
    itemWidth: {//每一项的宽度
      type: Number,
      value: 150
    },
    //颜色预置了【red,gray(紫色),orange,green,blue,white,black】
    defaultColor: {//默认没选中时的颜色
      type: String,
      value: 'black'
    },
    checkColor: {//选中时的颜色
      type: String,
      value: 'red'
    },
    tabList: {//导航栏中有哪些数据
      type: Array,
      value: []
    }
  },
  data: {
    scrollLeft: 0,//向左滚动的距离
    nowChecked: 0,//当前选中的下标

    menuChecked: 0, //当前选择的分类下标
    menuScrollLeft: 0,
    menuChange: false,
    menuCheckedWidth: 75,
  },
  methods: {
    // 分类菜单改变时
    menuChange: function (e) {
      let index = e.currentTarget.dataset.index,
          nowChecked = this.data.nowChecked;
      this.setData({nowChecked: index});
      if (index == nowChecked) return;
      //设置滚动
      scrollLeft = e.target.offsetLeft + (that.data.itemWidth / 4) - (windowWidth / 2)
      this.setData({scrollLeft});
      this.triggerEvent('tabclick',{index}, {});
    },
  },
  attached: function(){
    that = this;
    wx.getSystemInfo({
      success: (res) => {
        rpx = res.windowWidth / 750;
        windowWidth = rpx * 750;
      },
    });
    $ = wx.createSelectorQuery();
  }
})
