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

  attached(){
    this._restoreStatus();
    this._monitorStatusChange();
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
    },

    _restoreStatus(){
      console.log("paused->",audioMgr.paused)
      if(audioMgr.paused){
        this.setData({
          playing:false
        })
        return;
      }

      if(audioMgr.src === this.properties.src){
        this.setData({
          playing:true
        })
      }
    },
    _monitorStatusChange(){
      audioMgr.onPause(() => this._restoreStatus());
      audioMgr.onStop(() => this._restoreStatus());
      audioMgr.onEnded(() => this._restoreStatus());
      audioMgr.onPlay(() => this._restoreStatus());
    }
  }
})
