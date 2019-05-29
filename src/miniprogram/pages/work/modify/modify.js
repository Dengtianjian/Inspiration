// pages/work/modify/modify.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  editorOperate(data){
    data=data['detail'];
    console.log(JSON.stringify(data["list"]));
  }
})