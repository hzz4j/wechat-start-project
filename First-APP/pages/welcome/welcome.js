Page({
  onTapFunc: function() {
    wx.switchTab({
      url: '/pages/posts/posts'
    })
  },

  onUnload: function(){
    console.log("unload");
  },
  onHide: function(){
    console.log("onHide");
  }
})