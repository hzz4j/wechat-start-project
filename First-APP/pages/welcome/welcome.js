Page({
  onTapFunc: function() {
   wx.navigateTo({
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