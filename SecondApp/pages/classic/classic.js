import {ClassicModel} from '../../model/ClassicModel';
import {LikeModel} from '../../model/LikeModel';  //'../../model/LikeModel';
const classicModel = new ClassicModel();
const likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: {},
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatestRequest((res) => {
      console.log(res);
      const {fav_nums,like_status} = res;
      this.setData({
        classic: res,
        likeCount: fav_nums,
        likeStatus:like_status
      })
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
   * 处理用户点赞
   */
  onLike(event){
    console.log(event);
    const behavior = event.detail.behavior;
    const { id,type} = this.data.classic;
    likeModel.like(behavior,id,type);
    this._getlikeStatus(id,type);
  },
  onNext(event){
    this._updateClassic("next");
  },

  onPrevious(event){
    this._updateClassic("previous");
  },

  _updateClassic(nextOrPrevious){
    const index = this.data.classic.index
    classicModel.getClassicRequest(index,nextOrPrevious,res => {
      this._getlikeStatus(res.id,res.type)
      this.setData({
        classic:res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLastest(res.index)
      })
    })
  },

  _getlikeStatus(artID,category){
    likeModel.getClassicLikeStatus(artID,category,res => {
        this.setData({
          likeStatus:res.like_status,
          likeCount: res.fav_nums
        })
    })
  }
})