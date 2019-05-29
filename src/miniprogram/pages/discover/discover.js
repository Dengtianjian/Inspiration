// pages/discover/discover.js

const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:{
      ishow:false,
      current:null,
      currentText:"全部",
      list:[
        {
          text:"图标设计"
        },
        {
          text:"网页设计"
        },
        {
          text:"移动应用界面/主题"
        },
        {
          text:"电脑软件界面/主题"
        },
        {
          text:"游戏界面"
        },
        {
          text:"动效设计"
        },
        {
          text:"字体设计"
        },
        {
          text:"插画设计"
        },
        {
          text:"壁纸设计"
        },
        {
          text:"信息图"
        },
        {
          text:"其他设计"
        }
      ]
    },
    sort:{
      ishow:false,
      modeText:"正序",
      mode:1,
      list:[
        {
          text:"正序",
          mode:1
        },
        {
          text:"倒序",
          mode:2
        }
      ]
    }
  },
  displayTypeWin(data){
    let dataset=data['currentTarget']['dataset'];
    let ishow=dataset['ishow']=="false"?false:true;
    this.setData({
      'type.ishow':ishow
    });
  },
  changeType(data){
    let dataset=data['currentTarget']['dataset'];
    let text=dataset['text'];
    this.setData({
      'type.currentText':text,
      'type.ishow':false
    });
  },
  displaySortWin(data){
    let dataset=data['currentTarget']['dataset'];
    let displaymode=Number(dataset['displaymode']);
    if(displaymode){
      this.setData({
        'sort.ishow':true
      });
    }else{
      this.setData({
        'sort.ishow':false
      });
    }

    if(dataset['modetext']){
      this.setData({
        'sort.modeText':dataset['modetext'],
        'sort.mode':dataset['mode']
      });
    }
  }
})