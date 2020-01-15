// pages/user/user.js
const app = getApp()
const WXAPI = require('../../utils/request')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '我的', //导航栏 中间的标题
    },
    height: app.globalData.statusBarHeight * 2 + 20, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }  else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //查询该用户的订单信息
  getUserOrder:function(){
    const _this =this
    WXAPI.getOrderlist().then(function(res){
      if (res.code=='0'){
        const resData = res.data || []
        _this.setData({
          orderList: resData,
        })


      }else{

      }
    })
  },
  //前往订单页
  goOrderPage:function(e){
    console.log(e)
    const odStatus = e.currentTarget.dataset.odstatus
    wx.navigateTo({
      url: `../order/order?odStatus=${odStatus}`
    })
  },

  //前往门店页面
  goStorePage: function () {
    wx.navigateTo({
      url: `../storeinfo/storeinfo`
    })
  },

  //调收货地址  
  getWxAddress: function () {
    const _this = this
    wx.chooseAddress({
      success(res) {
        
      }
    })
  },


  //联系客服
  connectUs:function(){
    wx.navigateTo({
      url: `../contactus/contactus`
    })
  },
  //前往关于我们页面
  goAboutUsPage: function () {
    wx.navigateTo({
      url: `../aboutus/aboutus`
    })
  },

  bindcontact:function(e){
    console.log(e)
  }


})
