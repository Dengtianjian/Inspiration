Page({
  data: {
    list: [
      {
        type: "image",
        content: "http://127.0.0.1:83/uc_server/avatar.php?uid=1&size=small"
      }
    ],
    imageWin: {
      list: [],
    }
  },
  addNew(data) {
    let dataset = data["currentTarget"]["dataset"];
    let index = dataset["index"];
    let location = Number(dataset["location"]);
    console.log(dataset);
    let list = this["data"]["list"];
    let newObj = {
      type: "image",
      content: "http://127.0.0.1:83/data/attachment/common/c8/common_2_icon.png"
    };
    if (location) {
      list.splice(index + 1, 0, newObj);
    } else {
      list.splice(index, 0, newObj);
    }
    this.setData({
      list
    });
  },
  chooseImage() {
    var that = this;
    wx.chooseImage({
      success(data) {
        let imageList = that["data"]["imageWin"]["list"];
        imageList.push(...data["tempFilePaths"]);
        that.setData({
          'imageWin.list': imageList
        });
      }
    })
  },
  saveImage() {
    let list = this["data"]["list"];
    let imageList = this["data"]["imageWin"]["list"];
    imageList.forEach(element => {
      list.push({
        type: "image",
        content: element
      })
    });
    this.setData({
      list,
      'imageWin.list': []
    });
  }
});