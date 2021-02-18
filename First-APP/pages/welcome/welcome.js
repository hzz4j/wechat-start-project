Page({
  onTapFunc: function() {
    wx.redirectTo({
      url: '../posts/posts'
    })
  },

  onUnload: function(){
    console.log("unload");
  },
  onHide: function(){
    console.log("onHide");
  }
})