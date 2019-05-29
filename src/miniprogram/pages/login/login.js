// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null
  },

  login(){
    let url=`http://127.0.0.1:666/api/user/login`;
    var that=this;
    wx.request({
      url,
      data:{
        username:this["data"]["username"],
        password:this["data"]["password"]
      },
      method:"post",
      success(data){
        data=data["data"];
        if(data["code"]){
          wx.showToast({
            title:`🎉登录成功，欢迎回来：${that["data"]["username"]}!👏`,
            icon:"none",
            mask:true,
            duration: 2500
          });
        }else{
          wx.showToast({
            title:`🔥登录失败，请重试!❌`,
            icon:"none",
            mask:true,
            duration: 2500
          });
        }
      }
    })
  },
  bindData(data){
    let dataset=data["currentTarget"]["dataset"];
    let detail=data["detail"];
    let dataname=dataset["dataname"];
    this.setData({
      [dataname]:detail["value"]
    });
  }
});