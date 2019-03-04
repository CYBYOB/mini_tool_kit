// pages/analog_telephone/analog_telephone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type_list: [{
        value: 0,
        title: '普通电话',
        check: true
      },
      {
        value: 1,
        title: '视频电话',
        check: false
      },
    ],
    music_list: [
      '小米来电铃声', '苹果来电铃声'
    ],

    // 制造模拟来电需要的参数
    type_index: 0,
    // 来电显示 名称和 备注
    caller: '',
    note: '',
    // 来电铃声
    music_index: 0,
    delay: 0,
  },

  // 自定义函数

  // 模拟来电类型选择
  f_type_change: function(e) {
    // console.log(e)
    this.setData({
      type_index: e.detail.value
    })
  },

  // 来电者 caller 名字的变更
  f_caller_change: function(e) {
    // console.log(e)
    this.setData({
      caller: e.detail.value
    })
  },

  // 来电备注 note 名字的变更
  f_note_change: function(e) {
    // console.log(e)
    this.setData({
      note: e.detail.value
    })
  },

  // 来电铃声的变更
  f_music_change: function(e) {
    this.setData({
      music_index: e.detail.value
    })
  },

  // 模拟来电的推迟时间
  f_delay_change: function(e) {
    this.setData({
      delay: e.detail.value
    })
  },

  // 预览 制作的效果
  f_preview: function(e) {
    // 因为传参过多，节约代码量
    var d = this.data

    wx.navigateTo({
      url: '../analog_telephone_preview/analog_telephone_preview?type_index=' + d.type_index + '&caller=' +       d.caller + '&note=' + d.note + '&music_index=' + d.music_index + '&delay=' + d.delay
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
    const audio = wx.createAudioContext('my_audio');
    // audio.play()
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
    console.log('kkkk')
  }
})