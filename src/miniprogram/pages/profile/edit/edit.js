// pages/profile/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPorfileForm:{
      avatarURL:"/resource/default_avatar.png",
      bgImage:"http://img.uigreat.com/FjMoWAVyM71c3x1j7wKVwGkXTs0q",
      username:"",
      nickname:"",
      sex:null,
      birthday:"2019-01-01"
    }
  },

  chooseAvatar(){
    var that=this;
    wx.chooseImage({
      count:1,
      success(res){
        let tempFiles=res['tempFiles'];
        let avatarImage=tempFiles[0];
        if(avatarImage['size']>2097152){
          wx.showToast({
            title: 'choose image file too big!',
            icon: 'none',
            duration: 3000
          });
          return;
        }
        that.setData({
          'userPorfileForm.avatarURL':avatarImage['path']
        });
      },
      fail(){
        wx.showToast({
          title: 'choose image file fail!',
          icon: 'none',
          duration: 2000
        });
      }
    })
  },
  chooseBGImage(){
    var that=this;
    wx.chooseImage({
      count:1,
      success(res){
        let tempFiles=res['tempFiles'];
        let bgImage=tempFiles[0];
        if(bgImage['size']>4194304){
          wx.showToast({
            title: 'choose image file too big!',
            icon: 'none',
            duration: 3000
          });
          return;
        }
        that.setData({
          'userPorfileForm.bgImage':bgImage['path']
        });
      }
    })
  }
})