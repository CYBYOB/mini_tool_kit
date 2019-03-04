// pages/barrage_canvas/barrage_canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 生成弹幕所需的参数
    // text: '',
    // font_size: -1,
    // rolling_speed: -1,
    // font_color: -1,
    // bg_color: -1,
    // rolling_direction: '',

    text: '',
    font_size: 50,
    rolling_speed: 50,
    font_color_index: 0,
    bg_color_index: 0,
    rolling_direction: 'left',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      text: options.text,
      font_size: options.font_size,
      rolling_speed: options.rolling_speed,
      font_color_index: options.font_color_index,
      bg_color_index: options.bg_color_index,
      rolling_direction: options.rolling_direction,
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
    console.log('onShow:')
    console.log(this.data)

    const ctx = wx.createCanvasContext('my_canvas');

    ctx.setFillStyle('black')
    ctx.rotate(90 * Math.PI / 180)
    ctx.setFontSize(50)
    ctx.fillText('请输入弹幕内容~',100 ,-200)
    ctx.setTextAlign('center');
    ctx.font = '500px bolder';
    
    
    
    ctx.draw()
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