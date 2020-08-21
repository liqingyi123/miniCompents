// components/freeSheetList/freeSheetList.js
Component({
  properties: {
    renderData: {//数据源
      type: Array,
      value: []
    },
    listType: {//列表类型 today今日 feture预告
      type: String,
      value: 'today'
    }
  },
  data: {
    lists : []
  },
  methods: {
    itemClick: function(e){
      //获得当前点击的banner下标index和数据对象item，如果需要用到的话请解除注释
      let index = e.currentTarget.dataset.index;
      let item = e.currentTarget.dataset.item;
      this.triggerEvent('itemclick', {
        index: index,
        item: item
      }, {})
    }
  },
  attached: function(){//数据监听器
    let list = this.data.renderData;
    let nowtime = new Date();
    //取数json数组种的img或pic字段、path和url并生成新的字段用于以不变应万变渲染图片和目标地址
    list.forEach((item,index) => {
      // 处理限购
      if(item.star == 3){
        item.xg = "1";
      }else if(item.star == 2){
        item.xg = "3";
      }else{
        item.xg = "无数";
      }

      //处理用户类型
      if(item.type == 0){
        item.usertype = "新用户";
      }else if(item.type == 1){
        item.usertype = "直播间";
      }else if(item.type == 2){
        item.usertype = "三星及以上";
      }else{
        item.usertype = "全民";
      }

      let oldTime = new Date(`2020-${item.time}`);
      //处理是否可买
      // canBuy 1可买 2已抢光 3预告未开抢 4今日未开抢
      if(this.data.listType == "feture"){//是否是下期预告商品
        item.canBuy = 3;
      }else{
        if(nowtime - oldTime > 0) {//是否到达抢购时间
          if(item.allnum - item.bnum > 0){
            item.canBuy = 1;
          }else{
            item.canBuy = 2;
          }
        }else {
          item.canBuy = 4;
        }
      }
    });
    this.setData({
      lists : list
    })
  }
})
