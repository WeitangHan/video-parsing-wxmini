const request = require('../../utils/request.js');
const app = getApp();
Page({
  data: {
    PageCur: 'resolution'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '短视频去水印工具',
      path: '/pages/index/index',
      imageUrl: 'https://pic.baike.soso.com/ugc/baikepic2/0/20221115113034-1069139043_jpeg_589_589_30351.jpg/0' // 图片 URL
    }
  },
    // 绑定分享朋友圈
    onShareTimeline() {
      return {
        title: '短视频去水印工具',
        path: '/pages/index/index',
        imageUrl: 'https://pic.baike.soso.com/ugc/baikepic2/0/20221115113034-1069139043_jpeg_589_589_30351.jpg/0', // 图片 URL
      }
    }
})