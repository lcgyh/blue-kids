// components/swiper/swiper.js.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls: {
      type: Array,
      value: []
    },
    indicatorDots: {
      type: Boolean,
      value: true,
    },
    autoplay: {
      type: Boolean,
      value: true,
    },
    interval: {
      type: Number,
      value: 5000
    },
    duration: {
      type: Number,
      value: 1000
    },
    circular: {
      type: Boolean,
      value: true,
    },
    currentSwiper: {
      type: Number,
      value: 0
    },
    previousMargin: {
      type: Number,
      value: 0
    },
    nextMargin: {
      type: Number,
      value: 30
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemBand:function(e){
      console.log(e)
      const goodsId = e.currentTarget.dataset.goodsid
      this.triggerEvent('goGoodsInfo', { goodsId: goodsId});
    }
  }
})
