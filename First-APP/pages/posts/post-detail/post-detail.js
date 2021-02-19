import {local_database as postList} from "../../../data/post-data";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:{},
    collected: false,
    isPlaying: false,
    _pid: null,
    _posts_collected:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)  //  {pid: "3"}
    const postId = options.pid;

    this.data._pid = postId;

    //  查找出对应id的文章
    let post = postList.find(post => post.postId == postId)


    //  从缓存中寻找该文章是否被收藏
    const postsCollected = wx.getStorageSync('posts_collected');
    if(postsCollected){
      this.data._posts_collected = postsCollected;
    }
    const collected = postsCollected[this.data._pid];
    this.setData({
      post,
      collected
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 收藏文章
   */
  onCollect(){
    //  收藏哪篇文章
    //  数据结构 多篇文章被收藏{id: true | false}
    const key = "posts_collected";
    let postCollected = this.data._posts_collected
    const collected = !this.data.collected;

    postCollected[this.data._pid] = collected
    this.setData({
      collected
    })
    wx.setStorageSync(key,postCollected);

    let msg = collected ? "收藏成功":"取消收藏";
    wx.showToast({
      title: msg,
      duration: 2000  //  显示时间
    })
  },

  /**
   * 分享
   */
  onShare(event){
    wx.showActionSheet({
      itemList: ["分享到QQ","分享到微信"],
    })
  },
  /**
   * 音乐播放
   */
  onMusicStart(){
    const music = this.data.post.music;
    const manager = wx.getBackgroundAudioManager();
    //  音乐链接
    manager.src = music.url;
    //  音乐标题
    manager.title = music.title;
    //  音乐图片
    manager.coverImgUrl = music.coverImg

    this.setData({
      isPlaying: true
    })
  },
  /**
   * 停止音乐
   */
  onMusicStop(){
    const manager = wx.getBackgroundAudioManager();
    manager.stop();
    this.setData({
      isPlaying: false
    })
  }
})