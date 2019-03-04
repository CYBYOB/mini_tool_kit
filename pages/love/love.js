// pages/love/love.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 查询所用的参数
    input_text: '',

    // 查询结果
    love_list: []
  },

  // 自定义函数
  f_input_text: function(e) {
    this.setData({
      input_text: e.detail.value
    })
  },


  f_confirm: function(e) {
    // 解决小程序数据异步更新问题
    var that = this;

    if(this.data.input_text.length == 0) {
      wx.showToast({
        title: '聊天关键词不能为空！',
        icon: 'none',
      })
      return;
    }

    // 输入聊天关键词不为空，可进行如下操作！
    wx.request({
      url: 'https://www.520cyb.cn/mini/mini_tool_kit/love/love.php',
      data: {
        input_text: this.data.input_text,
      },
      success(res) {
        console.log(res)
        console.log(res.data)
        //搜索结果为空 
        if(res.data.length == 0) {
          wx.showToast({
            title: '搜索为空，请换个关键词组',
            icon: 'none'
          })
        }
        
        that.setData({
          love_list: res.data
        })
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