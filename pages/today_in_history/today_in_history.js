// pages/today_in_history/today_in_history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 月日 选择
    month_day: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    ],

    // 请求所需的月、日 参数
    month_index: 0,
    day_index: 0,

    // 查询结果列表
    result_list: [],
  },

  // 自定义函数
  // 选定 月日
  f_month_day_change: function(e) {
    // console.log(e)
    console.log(e.detail.value['0'])
    this.setData({
      month_index: e.detail.value['0'],
      day_index: e.detail.value['1'],
    })
  },

  // 提交
  f: function(e) {
    // 解决小程序 数据异步更新问题
    var that = this;

    console.log('您点击了提交按钮')
    wx.request({
      url: 'https://www.520cyb.cn/mini/mini_tool_kit/today_in_history/today_in_history.php',
      data: {
        month_index: this.data.month_index,
        day_index: this.data.day_index
      },
      success(res) {
        console.log(res)
        console.log(res.data.result.length)
        if(res.data.result.length == 0) {
          wx.showToast({
            title: '查询为空，填写的日期可能不合法',
            icon: 'none'
          }) 
        } else {
          that.setData({
            result_list: res.data.result
          })
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})