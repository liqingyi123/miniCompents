let _this
let chooseIndex = 0//当前选中的奖项
let relSize//有效奖项个数
let size//规格
let indexList = []//存放奖项下标映射
let isRonate = false//是否正处于抽奖状态
Component({
  properties: {
    size: {//N宫格   3-8 4-12 5-16 6-20
      type: Number,
      value: 3
    },
    list: {//奖项列表
      type: Array,
      value: []
      /**
       * weight:权重
       * id:奖项id(从0开始)，与权重配合使用-即指定概率
       * title:奖项名称
       * subTitle:奖项副标题
       * pic:奖项图片
       */
    },
    bodyWidth: {//整体宽度
      type: String,
      value: '100vw'
    },
    itemHeight: {//子项高度 默认和宽度一致
      type: Number,
      value: 0
    },
    chooseColor: {//选中时的遮罩颜色
      type: String,
      value: '#000'
    },
    startBtn: {
      type: Object,
      value: {
        /**
         * bgColor:抽奖按钮背景色
         * color:抽奖按钮主体文字颜色
         * subColor:抽奖按钮副标题文字颜色
         * radius:抽奖按钮圆角
         * text:抽奖按钮主体文字
         * subTitle:抽奖按钮副标题文字
         */
      }
    }
  },
  data: {
    allList: []
  },
  methods: {
    render: function(){
      size = this.data.size
      relSize = (size - 1) * 4
      let allList = []
      let renderT = 0,
          renderR = size - 1,
          renderB = size * 3 - 2 - 1,
          renderL = size * 3 - 2 + (size - 3);
      //创建抽奖转盘列表
      for (let i = 0; i < size * size; i++) {
        allList.push({index: i})
      }
      //判断哪些是真实有效的列表项
      allList.forEach((item,index) => {
        item.isChoose = false
        let isRelItem = index + 1 < size + 2 || index + 1 > (size * size - size - 1) || (index + 1) % size == 1 || (index + 1) % size == 0
        item.isRelItem = isRelItem
        //第二行开始顺时针取边上的
        let nowL = index + 1
        if (nowL > size) {
          // console.log(`${nowL}%${size}=${nowL%size}`)
          //先取右边除第一行外的最后一个
          if (nowL % size == 0) {
            item.relIndex = renderR + 1
            item.info = _this.data.list[renderR + 1]
            renderR += 1
          }
          //再取下边除最后一个的其他
          if (nowL > (size * (size - 1)) && nowL < size * size){
            //需要反向设置
            item.relIndex = renderB
            item.info = _this.data.list[renderB]
            renderB -= 1
          }
          //取左边除第一个和最后一个的其他
          if (nowL % size == 1 && nowL != size * (size - 1) + 1) {
            item.relIndex = renderL
            item.info = _this.data.list[renderL]
            renderL -= 1
          }
        }else{
          item.relIndex = renderT
          item.info = _this.data.list[renderT]
          renderT += 1
        }
        //将奖品信息装入有效的抽奖项
        if(isRelItem){
          item.info = _this.data.list[item.relIndex]
        }
      })
      this.setData({allList},()=>{
        let findItem
        indexList = []
        for (let i = 0; i < relSize; i++) {
          findItem = allList.find(item => item.relIndex == i)
          indexList.push(findItem.index)
        }
      })
    },
    setRes: function(e,awards){
      //默认为基于权重生成随机数，如果指定了awards则固定获得第awards+1个奖项
      if (!awards) {
        awards = this.weightRandom();
      }else{
        awards = Number(awards)
      }
      this.ronate(awards,2,res=>{
        _this.triggerEvent('luckdraw', {luckdraw: res,awards}, {})
      })
    },
    //基于权重生成随机数，可指定值
    weightRandom: function(awards){
      let randomConfig = this.data.list;
      let randomList = [];
      for (let i in randomConfig) {
          for (let j = 0; j < randomConfig[i].weight; j++) {
              randomList.push(randomConfig[i].id);
          }
      }
      let randomValue = randomList[Math.floor(Math.random() * randomList.length)];
      //一直生成，直到生成希望的为止
      // if (awards != 0) {
      //     while (randomValue == curVal ) {
      //         randomValue  = randomList[Math.floor(Math.random() * randomList.length)];
      //     }
      // }
      return randomValue;
    },
    //最终停留奖项的下标，转圈次数，回调
    ronate: function(jumpNum,quanNum,result){
      //如果正在抽奖则不可重复抽奖，需要等上一次抽奖完成
      if (isRonate) return;
      let jumpnum = 0
      isRonate = true
      _this.setData({
        ['allList[0].isChoose']:true
      })
      //若不是第一次抽奖，上一次抽中的奖项重置
      if (chooseIndex != 0) {
        _this.setData({
          ['allList['+indexList[chooseIndex]+'].isChoose']:false
        },()=>{
          chooseIndex = 0
        })
      }
      let step = 150;
      let myFunction = function(){
        clearInterval(timer);
        _this.setData({
          ['allList['+indexList[chooseIndex]+'].isChoose']:false
        })
        chooseIndex ++
        jumpnum ++
        if (size == 3) {
          if (jumpNum < relSize / 2) {
            step = step + jumpnum * 2
          }else{
            step = step + jumpnum
          }
        } else if(size == 4) {
          if (jumpNum < relSize / 2) {
            step = step + jumpnum
          }else{
            step = step + jumpnum * 0.5
          }
        }else{
          if (jumpNum < relSize / 2) {
            step = step + jumpnum * 0.5
          }else{
            step = step + jumpnum * 0.25
          }
        }
        if (chooseIndex == relSize) {
          chooseIndex = 0
        }
        _this.setData({
          ['allList['+indexList[chooseIndex]+'].isChoose']:true
        })
        if (jumpnum == jumpNum + (quanNum * relSize)) {
          clearInterval(timer)
          isRonate = false
          let resItem = _this.data.allList[indexList[chooseIndex]]
          result(resItem)
        }else{
          timer = setInterval(myFunction, step);
        }
      }
      let timer = setInterval(myFunction, step);
    }
  },
  attached: function(){
    _this = this
    this.render()
  }
})
