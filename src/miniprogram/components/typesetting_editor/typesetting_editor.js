// components/typesetting_editor/typesetting_editor.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    elementType: {
      show: false
    },
    newItem: {
      index: null,
      location: null
    },
    elementList: [],
    imageWin: {
      show: false,
      list: [],
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    displaySelectTypeWin(data) {
      let dataset = data["currentTarget"]["dataset"];
      let show = Number(dataset["show"]);
      let index = dataset["index"];
      let location = Number(dataset["location"]);
      if (show) {
        this.setData({
          'elementType.show': true,
          'newItem.index': index,
          'newItem.location': location,
        })
      } else {
        this.setData({
          'elementType.show': false,
          'newItem.index': null,
          'newItem.location': null,
        })
      }
    },
    addTextarea(data) {
      let newTextarea = {
        type: "textarea",
        content: ""
      }
      let elementList = this["data"]["elementList"];
      let newItem = this["data"]["newItem"];
      if (newItem["location"]) {
        elementList.splice(newItem["index"] + 1, 0, newTextarea);
      } else {
        elementList.splice(newItem["index"], 0, newTextarea);
      }
      this.setData({
        elementList,
        'elementType.show': false,
        'newItem.index': null,
        'newItem.location': null
      });
    },
    inputTextarea(data) {
      let dataset = data["currentTarget"]["dataset"];
      let index = dataset["index"];
      let value = data["detail"]["value"];
      let content = `elementList[${index}].content`;
      this.setData({
        [content]: value
      })
    },
    chooseImage() {
      var that = this;
      wx.chooseImage({
        success(data) {
          let elementList = that["data"]["elementList"];
          let fileTemp = data["tempFilePaths"];
          fileTemp.forEach((ele, index) => {
            fileTemp[index] = {
              type: "image",
              content: ele
            }
          });
          let newItem = that["data"]["newItem"];
          if (newItem["location"]) {
            elementList.splice(newItem["index"] + 1, 0, ...fileTemp);
          } else {
            elementList.splice(newItem["index"], 0, ...fileTemp);
          }
          that.setData({
            elementList,
            'elementType.show': false,
            'newItem.index': null,
            'newItem.location': null
          });
        }
      })
    },
    changeImage(data){
      let dataset=data['currentTarget']['dataset'];
      var index=dataset['index'];

      var that=this;
      wx.chooseImage({
        count:1,
        success(data){
          let tempFilePaths=data['tempFilePaths'][0];
          let changePath=`elementList[${index}].content`;
          that.setData({
            [changePath]:tempFilePaths
          })
        }
      })
    },
    deleteElement(data){
      let dataset=data['currentTarget']['dataset'];
      let index=dataset['index'];

      let elementList=this["data"]["elementList"];
      elementList.splice(index,1);
      this.setData({
        elementList
      });
    },
    previeImage(data){
      let dataset=data['currentTarget']['dataset'];
      let src=dataset['src'];

      let elementList=this["data"]["elementList"];
      let imageList=[];
      elementList.forEach(ele=>{
        if(ele["type"]=="image"){
          imageList.push(ele["content"]);
        }
      });

      wx.previewImage({
        urls:imageList,
        current:src
      });
    },
    transport(data){
      let dataset=data["currentTarget"]["dataset"];
      let mode=dataset["mode"];
      this.triggerEvent("transport",{
        mode,
        list:this["data"]["elementList"]
      });
    }
  }
})
