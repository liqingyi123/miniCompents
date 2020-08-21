// component/freeForm/freeForm.js
Component({
  properties: {
    showFreeForm: {
      type: Boolean,
      value: false
    }
  },
  data: {
    inputValue: ''
  },
  methods: {
    close: function(){
      this.setData({showFreeForm: false,inputValue: ''});
    },
    keyInput: function(e){
      this.setData({inputValue: e.detail.value});
    },
    itemClick: function(){
      this.triggerEvent('freeform', {
        inputValue: this.data.inputValue
      }, {})
    }
  }
})
