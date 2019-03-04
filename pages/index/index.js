// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_list: [{
        id: 1,
        title: '古诗生成（1 0）'
      },
      {
        id: 2,
        title: '撩`语库（1 0）'
      },
      {
        id: 3,
        title: '手持弹幕(0 0)'
      },
      {
        id: 4,
        title: '模拟来电(1 0)'
      },
      {
        id: 5,
        title: '历史上的今天(1 0)'
      },
      {
        id: 6,
        title: '手机号码归属地查询(1 0)'
      },
      {
        id: 7,
        title: '简繁火星文转换(1 0)'
      },
      {
        id: 8,
        title: 'QQ号测吉凶(1 0)'
      },
    ]
  },


  // 自定义函数
  f_navigate_to_page: function(e) {
    // console.log(e)
    // 根据 id 选择不同的 page  <==  page_name
    var page_name = '';
    switch (e.target.id) {
      case '1':
        page_name = 'poem'; break;
      case '2':
        page_name = 'love'; break;
      case '3':
        page_name = 'barrage'; break;
      case '4':
        page_name = 'analog_telephone'; break;
      case '5':
        page_name = 'today_in_history'; break;
      case '6':
        page_name = 'phone_query'; break;
      case '7':
        page_name = 'text_conversion'; break;
      case '8':
        page_name = 'qq_test'; break;
      default:
        break;
    }

    //跳转到相关的页面 
    wx.navigateTo({
      url: '../' + page_name + '/' + page_name,
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})