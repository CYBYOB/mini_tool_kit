// pages/text_conversion/text_conversion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio_list: [
      { value: 0, name: '简体', check: false },
      { value: 1, name: '繁体', check: false },
      { value: 2, name: '火星文', check: true },
    ],

    // 对 api 请求所需提交的参数
    radio_value: 2,
    text: '',
    // 查询所得结果
    result: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },


  // 自定义函数
  // 单选框发生改变
  f_radio_change: function(e) {
    // console.log(e.detail.value)
    this.setData({
      radio_value: e.detail.value
    })
  },

  // 原始文字
  f_text_input: function(e) {
    this.setData({
      text: e.detail.value
    })
  },

  // 点击了提交按钮
  f_comfirm: function(e){
    // console.log(this.data.radio_value,this.data.text)
    // 输入内容为空
    if(this.data.text.length == 0){
      wx.showToast({
        title: '输入内容不能为空',
        icon: 'none'
      })
      return;
    }
    
    // 输入原始文字不为空，可以进行如下操作
    var that = this;
    wx.request({
      url: 'https://www.520cyb.cn/mini/mini_tool_kit/ju_he/text_conversion.php',
      data: {
        radio_value: this.data.radio_value,
        text: this.data.text
      },
      success(res) {
        console.log(res)
        console.log(res.data)
        if (res.data.error_code != 0) {
          that.setData({
            result: res.data.reason
          })
        } else {
          that.setData({
            result: res.data.outstr
          })
        }
      }
    })
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