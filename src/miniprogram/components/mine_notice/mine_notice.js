// components/mine_notice/mine_notice.js

const app = getApp();

Component({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight: "100%",
    noticeDetailsWin: {
      id: null,
      icon: "/resource/notice_default.png",
      dateline: "",
      title: "",
      content: ""
    },
    noticeList: {
      1: {
        id: 1,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/2/3/7/4/194732.png?imageMogr2/auto-orient/crop/!223x223a3a1/thumbnail/148x148",
        title: "设计中的5大渐变趋势，以及如何有效地使用",
        description: "你可能已经注意到，在17、18年的时候，渐变在印刷和web设计中的使用的越来越多了。"
      },
      2: {
        id: 2,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      3: {
        id: 3,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      4: {
        id: 4,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      5: {
        id: 5,
        status: 1,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      6: {
        id: 6,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      7: {
        id: 7,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      8: {
        id: 8,
        status: 1,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      9: {
        id: 9,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      10: {
        id: 10,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      },
      11: {
        id: 11,
        status: 0,
        icon: "https://imgavater.ui.cn/avatar/4/1/8/6/36814.png?imageMogr2/auto-orient/crop/!957x957a0a0/thumbnail/148x148",
        title: "金融产品体验设计思考",
        description: "互联网金融产品是一个复杂并具有一定门槛的产品。"
      }
    }
  },
  methods: {
    showDetails(data) {
      let dataset = data['currentTarget']['dataset'];
      if (dataset['id'] == "keepShow") {
        return;
      };
      this.setData({
        'noticeDetailsWin.icon': "/resource/notice_default.png",
        'noticeDetailsWin.dateline': new Date().getTime(),
        'noticeDetailsWin.title': "This is title" + dataset['id'],
        'noticeDetailsWin.content': "Content wo!"
      });
      this.setData({
        'noticeDetailsWin.id': dataset['id']
      });
      var that=this;
      var query = wx.createSelectorQuery();
      query.select(".mine_container").boundingClientRect();
      query.exec((res)=>{
        that.setData({
          screenHeight:res[0]['height']+"px"
        });
      })
    },
    hiddenDetails() {
      this.setData({
        'noticeDetailsWin.id': null
      });
      this.setData({
        'noticeDetailsWin.icon': "/resource/notice_default.png",
        'noticeDetailsWin.dateline': null,
        'noticeDetailsWin.title': null,
        'noticeDetailsWin.content': null
      });
    }
  }
})