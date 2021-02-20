
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
    /**
     * 跳转到详情页面
     */
    onJumpToDetail(event){
      console.log(event.currentTarget.dataset.postId);
      wx.navigateTo({
        url: `./post-detail/post-detail?pid=${event.currentTarget.dataset.postId}`,
      })
    }
  },

})
