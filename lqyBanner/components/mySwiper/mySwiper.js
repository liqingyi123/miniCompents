// components/mySwiper/mySwiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    interval: {//间隔时长,单位毫秒
      type: [Number,String],
      value: 2500
    },
    autoplay: {//是否自动播放
      type: Boolean,
      value: true
    },
    previousMargin: {//前边距，可用于露出前一项的一小部分,单位rpx
      type: [Number,String],
      value: 90
    },
    nextMargin: {//后边距，可用于露出前一项的一小部分,单位rpx
      type: [Number,String],
      value: 90
    },
    indicatorDots: {//是否显示面板指示点
      type: Boolean,
      value: true
    },
    duration: {//动画时长,单位毫秒
      type: [Number,String],
      value: 500
    },
    circular: {//是否采用衔接滑动
      type: Boolean,
      value: true
    },
    renderData: {//banner数据源
      type: Array,
      value: []
    },
    radius: {//圆角,单位rpx
      type: [Number,String],
      value: 10
    },
    width: {//宽度
      type: String,
      value: '100%'
    },
    height: {//高度
      type: [Number,String],
      value: 300
    },
    boxShadow: {
      type: String,
      value: '0px 0px 30rpx rgba(0, 0,0,.2)'
    },
    bannerMode: {//banner显示模式
      //scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
      //aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来，即可以完整地将图片显示出来。	
      //aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
      //widthFix 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
      //heightFix 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
      type: String,
      value: 'scaleToFill'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    index : 0,
    swiperIndex : 0,
    lists : []
  },
  /**
   * 组件的方法列表
   */
  methods: {
	  swiperChange: function (e) {
      const that = this;
      that.setData({
        swiperIndex: e.detail.current,
      })
    },
    itemClick: function(){
      //获得当前点击的banner下标index和数据对象item，如果需要用到的话请解除注释
      // let index = this.data.swiperIndex;
      // let item = this.data.lists[index];

      this.triggerEvent('itemclick', {index:this.data.swiperIndex}, {})
    }
  },
  attached: function(){//数据监听器
    let list = this.data.renderData;
    //取数json数组种的img或pic字段、path和url并生成新的字段用于以不变应万变渲染图片和目标地址
    list.forEach((item,index) => {
      item.show = item.pic || item.img || item;
      item.go = item.url || item.path || '';
    });
    this.setData({
      lists : list
    })
  }
})
