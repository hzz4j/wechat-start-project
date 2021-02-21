// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike:{
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeImg: 'images/like.png',
    dislikeImg: "images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event){
        console.log(event)
      }
  }
})