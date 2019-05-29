// components/search/search.js

const app=getApp();

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
    keyword:"",
    history:{
      ishow:false,
      keywords:[
        {
          keyword:"Book",
          link:""
        },
        {
          keyword:"This is a loog keywordThis is a loog keywordThis is a loog keyword",
          link:""
        },
        {
          keyword:"app design",
          link:""
        },
        {
          keyword:"Ant design pro",
          link:""
        },
        {
          keyword:"Alipay",
          link:""
        },
        {
          keyword:"Alibaba",
          link:""
        },
        {
          keyword:"Tencent",
          link:""
        },
        {
          keyword:"Google",
          link:""
        }
      ]
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    search(data){
      let dataset=data['currentTarget']['dataset'];
      let keyword=dataset['keyword'];
      this.setData({
        keyword
      });
    },
    showHistory(){
      // this.setData({
      //   'history.ishow':false
      // });
    },
    hiddenHistory(){
      // this.setData({
      //   'history.ishow':false
      // });
    },
    deleteHistory(data){
      let dataset=data['currentTarget']['dataset'];
      let index=dataset['index'];
      let historyKeywords=this['data']['history']['keywords'];
      historyKeywords.splice(index,1);
      this.setData({
        'history.keywords':historyKeywords,
        'history.ishow':true
      });
    }
  }
})
