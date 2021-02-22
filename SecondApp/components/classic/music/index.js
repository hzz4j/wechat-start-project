import {classcicBehavior} from '../classic-behavior';
const audioMgr = wx.getBackgroundAudioManager();
Component({
  behaviors: [classcicBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    pausePlayerImg: "./images/player@pause.png",
    playPlayerImg: "./images/player@play.png",
    musicTagImg: "./images/music@tag.png",
    playing: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(event){
      this.setData({
        playing: true
      })

      audioMgr.src = this.properties.src;
      audioMgr.title = this.properties.title;

    },

    onPause(event){
      this.setData({
        playing: false
      })
      audioMgr.pause();
    }
  }
})
