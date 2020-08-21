let _this
let luckDrawBtn;
Page({
  data: {
    list: [//奖励列表 weight权重与id配合使用，id从0开始
      {title: '特等奖',subTitle: '苏州全款4室1厅住宅*1',pic: './timg.jpg',weight:1,id:0},
      {title: '一等奖',subTitle: '全款五菱神车*1',pic: './timg.jpg',weight:2,id:1},
      {title: '二等奖',subTitle: '全年帮还花呗',pic: './timg.jpg',weight:3,id:2},
      {title: '三等奖',subTitle: '现金8888元',pic: './timg.jpg',weight:4,id:3},
      {title: '四等奖',subTitle: '现金888元',pic: './timg.jpg',weight:5,id:4},
      {title: '五等奖',subTitle: '现金88元',pic: './timg.jpg',weight:6,id:5},
      {title: '六等奖',subTitle: '现金8元',pic: './timg.jpg',weight:7,id:6},
      {title: '幸运奖',subTitle: '通用优惠券1000元',pic: './timg.jpg',weight:8,id:7},
      {title: '支持奖',subTitle: '通用优惠券100元',pic: './timg.jpg',weight:9,id:8},
      {title: '鼓励奖',subTitle: '通用优惠券10元',pic: './timg.jpg',weight:10,id:9},
      {title: '安慰奖',subTitle: '通用优惠券1元',pic: './timg.jpg',weight:15,id:10},
      {title: '谢谢参与',subTitle: '',pic: './timg.jpg',weight:20,id:11}
    ],
    startBtn: {
      text: '随机抽奖',
      subTitle: '100葫芦/次'
    }
  },
  onLoad: function(){
    _this = this
  },
  onReady: function(){
    luckDrawBtn = _this.selectComponent("#luckDraw");
  },
  //指定抽某一个奖项
  go: function(e){
    luckDrawBtn.setRes(null,e.currentTarget.dataset.num)
  },
  //抽奖组件回调
  luckdraw: function(e){
    let item = e.detail.luckdraw
    wx.showModal({
      title: '恭喜中奖',
      content: `恭喜抽中【${item.info.title}】-${item.info.subTitle},请等待奖品发放！`,
      showCancel: false
    })
  }
})