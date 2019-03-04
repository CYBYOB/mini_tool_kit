// pages/qq_test/qq_test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 请求 api 所需的参数
    qq: '',
    // 查询结果
    result: {},
  },


  // 自定义函数
  // 用户输入的 QQ 号码
  f_text_input: function(e) {
    this.setData({
      qq: e.detail.value
    })
  },
  // 提交数据，向申请的 API 发起请求
  f_comfirm: function(e) {
    // 解决数据异步更新问题
    var that = this;

    if (this.data.qq.length == 0) {
      wx.showToast({
        title: '输入的QQ不能为空！',
        icon: 'none'
      })
      return;
    }

    // qq的输入不为空，可以进行如下操作
    wx.request({
      url: 'https://www.520cyb.cn/mini/mini_tool_kit/ju_he/qq.php',
      data: {
        qq: this.data.qq
      },
      success(res) {
        console.log(res)
        console.log(res.data)
        if (res.data.error_code != 0) {
          wx.showToast({
            title: res.data.reason,
            icon: 'none'
          })
        } else {
          that.setData({
            result: res.data.result.data
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