// pages/barrage/barrage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bg_color_list: [
      '黑', '白', '红', '绿'
    ],
    font_color_list: [
      '白', '黑', '红', '绿'
    ],
    // 0 表示 “自左向右”？？！
    rolling_direction_list: [
      { value: 'left', title: '自左向右', check: true },
      { value: 'right', title: '自右向左', check: false },
    ],

    

    // 生成弹幕所需的参数
    text: '请输入弹幕的内容',
    font_size: 50,
    rolling_speed: 50,
    font_color_index: 0,
    bg_color_index: 0,
    rolling_direction: 'left',
    
  },

  // 自定义函数
  // 输入的弹幕内容，只有 一输出就不断更新text的值
  f_text_input: function(e) {
    // console.log('f_text_input 输入内容:'+e.detail.value)
    this.setData({
      text: e.detail.value
    })
  },

  // 设置字体大小
  f_font_size_change: function(e) {
    // console.log(e)
    this.setData({
      font_size: e.detail.value
    })
  },

  // 设置滚动速度
  f_rolling_speed_change: function (e) {
    // console.log(e)
    this.setData({
      rolling_speed: e.detail.value
    })
  },

  // 设置字体颜色
  f_font_color_change: function (e) {
    // console.log(e)
    this.setData({
      font_color_index: e.detail.value
    })
  },

  // 设置背景颜色
  f_bg_color_change: function (e) {
    // console.log(e)
    this.setData({
      bg_color_index: e.detail.value
    })
  },

  // 设置滚动方向
  f_rolling_direction_change: function(e) {
    console.log(e)
    this.setData({
      rolling_direction: e.detail.value
    })
  },

  f_text_confirm: function(e) {
    if(this.data.text.length == 0) {
      wx.showToast({
        title: '弹幕内容不能为空！',
        icon: 'none',
      })
      return;
    }
    // 输入的弹幕内容不为空了，可以进行下面的操作了
    var d = this.data;
    wx.navigateTo({
      url: '../barrage_canvas/barrage_canvas?text=' + d.text + '&font_size=' + d.font_size + '&rolling_speed=' + d.rolling_speed + '&font_color_index=' + d.font_color_index + '&bg_color_index=' + d.bg_color_index + '&rolling_direction=' + d.rolling_direction
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