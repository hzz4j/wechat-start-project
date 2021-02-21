// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer(newVal,oldVal,path){
        const idx = ('0'+newVal).slice(-2);
        this.setData({idx})
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    month: 0,
    year: 2020,
    idx: 0,
    _months: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月',
    '十二月']
  },

  attached(){
    const date = new Date();
    const year = date.getFullYear();
    const month = this.data._months[date.getMonth()];
    this.setData({year,month});
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
