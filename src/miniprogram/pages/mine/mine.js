// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentNav:0
  },

  switchNav(data){
    let dataset=data['currentTarget']['dataset'];
    let index=dataset['navindex'];
    this.setData({
      currentNav:index
    });
  }
})