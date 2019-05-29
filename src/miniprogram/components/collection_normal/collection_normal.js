
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    listData:{
      type:null,
      value:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    operateMenu:{
      showID:null,
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    displayOperateMenu(data){
      let dataset=data['currentTarget']['dataset'];
      if(dataset['id']=='null'){
        this.setData({
          'operateMenu.showID':null
        });
        return;
      }
      let id=dataset['id'];
      let currentID=this['data']['operateMenu']['showID'];
      if(id==currentID){
        this.setData({
          'operateMenu.showID':null
        });
        return;
      }
      this.setData({
        'operateMenu.showID':id
      });
    }
  }
})
