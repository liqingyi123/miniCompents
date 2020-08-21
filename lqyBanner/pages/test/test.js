Page({
  data: {
    tabList: [
      {title: "导航1"},
      {title: "导航2"},
      {title: "导航3"},
      {title: "导航4"},
      {title: "导航5"},
      {title: "导航6"},
      {title: "导航7"},
      {title: "导航8"},
      {title: "导航9"},
      {title: "导航10"},
      {title: "导航11"},
      {title: "导航12"}
    ],
    lists: [{
        pic: "http://img10.360buyimg.com/imgzone/jfs/t1/100969/18/8660/252621/5e05ce93Ed9a312b4/e882fd8c748ca392.gif",
        url: "http://www.baidu.com"
      },
      {
        img: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
        url: "http://www.baidu.com"
      },
      {
        img: "https://img.alicdn.com/tfs/TB1MDHfBhD1gK0jSZFyXXciOVXa-520-280.jpg_q90_.webp"
      }
    ],
    infolist: [//活动规则列表
      "【新人专享】商品，注册72小时内的新用户可以购买一次。",
      "【直播间专享】商品，仅限指定直播间观众购买一次。",
      "【三星以上专享】商品，仅限三星以上星级用户，每个商品限购一次。",
      "【全民专享】商品，所有用户可购买一次。",
      "免单商品必须在活动结束前完成付款，活动结束付款不可提现。",
      "确认收货后，返到微信零钱钱包。"
    ],
    nowList: [
      {
        title:"夏季连衣裙",
        img: "https://wuse-public.oss-cn-beijing.aliyuncs.com/wechat/wuse/freeSheet/banner.jpg",
        star: 1,
        allnum: 500,
        bnum: 300,
        time: "04-16 14:00",
        type: 0,
        back: "返999元+音波737",
        quan: "10元券",
        qmoney: 23,
        ymoney: "30元佣"
      },
      {
        title:"夏季连衣裙",
        img: "https://wuse-public.oss-cn-beijing.aliyuncs.com/wechat/wuse/freeSheet/banner.jpg",
        star: 1,
        allnum: 500,
        bnum: 500,
        time: "04-16 14:00",
        type: 0,
        back: "返999元+音波737",
        quan: "10元券",
        qmoney: 23,
        ymoney: "30元佣"
      },
      {
        title:"夏季连衣裙",
        img: "https://wuse-public.oss-cn-beijing.aliyuncs.com/wechat/wuse/freeSheet/banner.jpg",
        star: 2,
        allnum: 500,
        bnum: 300,
        time: "04-22 18:00",
        type: 2,
        back: "返999元+音波737",
        quan: "10元券",
        qmoney: 23,
        ymoney: "30元佣"
      }
    ],
    nextList: [
      {
        title:"夏季连衣裙222",
        img: "https://wuse-public.oss-cn-beijing.aliyuncs.com/wechat/wuse/freeSheet/banner.jpg",
        star: 2,
        allnum: 500,
        bnum: 300,
        time: "04-16 18:00",
        type: 1,
        back: "返999元+音波737",
        quan: "10元券",
        qmoney: 23,
        ymoney: "30元佣"
      },{
        title:"夏季连衣裙222",
        img: "https://wuse-public.oss-cn-beijing.aliyuncs.com/wechat/wuse/freeSheet/banner.jpg",
        star: 3,
        allnum: 500,
        bnum: 300,
        time: "04-16 18:00",
        type: 4,
        back: "返999元+音波737",
        quan: "10元券",
        qmoney: 23,
        ymoney: "30元佣"
      }
    ],
    showFreeForm: false,
    showGZH: false,
    webUrl: "https://www.weblqy.top/webPageOfLQY/test/halfUpgrade/index.html",
    userId: '',//用户id
    nickName: '',//昵称
    role: '',//角色
    uHead: '',//头像
  },
  onLoad(){
    let wxUser = {
      "uid":35800,
      "role":2,
      "weixin":"",
      "mcode":35800,
      "avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEL2RDOpaJkzhpvFv4WCL352DWpicW5aWB75XPKgXwnJcxaEoN6aCaIWibmY0zkaic2ib0n8UnkB4BhFyQ/132",
      "nickName":"ጿ ኈ ዽ",
      "roleName":"消费者",
      "mobile":0
    };
    wx.setStorageSync('wxUser',wxUser);
  },
  onShow: function () {
    this.setData({
      userId: wx.getStorageSync('wxUser').uid || '',//用户id
      nickName: wx.getStorageSync('wxUser').nickName || '',//昵称
      role: wx.getStorageSync('wxUser').role || '',//角色
      uHead: wx.getStorageSync('wxUser').avatarUrl || ''//头像
    });
    this.setData({
      webUrl: `${this.data.webUrl}?userId=${this.data.userId}&nickName=${this.data.nickName}&role=${this.data.role}&uHead=${this.data.uHead}` 
    });
  },
  showGZH: function(){
    this.setData({
      showGZH: !this.data.showGZH
    });
  },
  show(){
    this.setData({showFreeForm: true});
  },
  getNum: function(e){
    let num = e.detail.inputValue;
    console.log(num)
  },
  bannerClick: function(e){
    let itemIndex = e.detail.index;
    //print your function,例如
    wx.showToast({
      title: `当前下标:${itemIndex}`,
    })
  },
  goBuy: function(e){
    let swiperIndex = e.detail.index;
    let item = e.detail.item;
    let canBuy = item.canBuy;
    console.log(canBuy)
    //print your function,例如
    if (canBuy == 1) {
      wx.showToast({
        title: `当前下标:${swiperIndex}`,
        icon: 'none'
      })
    } else if(canBuy == 2) {
      wx.showToast({
        title: `此商品已被抢光`,
        icon: 'none'
      })
    } else{
      wx.showToast({
        title: `${item.time}开抢`,
        icon: 'none'
      })
    }
  }
})