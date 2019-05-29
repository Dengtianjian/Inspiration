// pages/profile/profile.js

const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPorfile:[
      {
        title:"Username",
        value:"Administrator"
      },
      {
        title:"Nickname",
        value:"哈哈哈哈哈哈"
      },
      {
        title:"Age",
        value:"20"
      },
      {
        title:"Sex",
        value:"Female"
      },
      {
        title:"Birthday",
        value:"1999-02-24"
      },
      {
        title:"Personal website",
        value:"https://www.rabbitmonth.com"
      },
      {
        title:"Github",
        value:"https://www.github.com"
      },
      {
        title:"Weibo",
        value:"https://www.weibo.com"
      }
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app["globalData"]["userInfo"]){
      wx.reLaunch({
        url:"../login/login"
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

  }
})