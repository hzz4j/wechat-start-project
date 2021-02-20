
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res:Object
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

    onTap(event){
      const pid = this.properties.res.postId;
      this.triggerEvent("post",{
        pid
      })
    }
  },

})
