const app = getApp()
const getPhoneInfo = require('../../utils/getPhoneInfo.js')

Page({
  data: {
    headerTitle: "美食Bang-深圳",
    buttonTitle: "美食Bang优选",
    title: "都市后台",
    swiperContent: [
      "../../image/swiper1.png",
      "../../image/swiper2.png",
      "../../image/swiper3.png"
    ],
    backgroundImage: "../../image/background.jpg",
    content: [{
        "img": "../../image/good.jpg",
        "numberOfPeople": "20",
        "title": "益禾堂",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      },
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      },
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      },
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      },
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      },
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      }, 
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      }, 
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      }, 
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      }, 
      {
        "img": "../../image/good.jpg",
        "numberOfPeople": "60",
        "title": "COCO",
        "appid": "wxb11f14b08a38ba44",
        "km": "20.86"
      },
    ]
  },
  enter: function(res) {
    wx.navigateToMiniProgram({
      appId: res.currentTarget.dataset.appid
    })
  },
  getRequestInfo: function (res) {
    // console.log(res)
    this.setData({})
  },
  onLoad: function() {
    this.getRequestInfo()
    getPhoneInfo.info().then((res) => {})
    wx.setNavigationBarTitle({
      title: this.data.headerTitle
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#1DC796',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  }
})