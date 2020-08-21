// component/mask/mask.js
Component({
  properties: {
    btnTitle: {//按钮文字及遮罩标题
      type: String,
      value: '活动规则'
    },
    displayNumber: {//是否显示项前数字
      type: Boolean,
      value: true
    },
    infoList: {//项列表
      type: Array,
      value: []
    }
  },
  data: {
    showActiveInfo: false,//控制活动规则遮罩是否显示
  },
  methods: {
    //打开/关闭活动规则遮罩
    showActiveInfo(){
      this.setData({
        showActiveInfo: !this.data.showActiveInfo
      });
    },
    //阻止父子标签之间的冒泡事件
    doNone(){},
  }
})
