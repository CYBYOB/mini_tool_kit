// pages/analog_telephone_preview/analog_telephone_preview.js

Page({
  // 方便其他函数调用
  /**
   * 页面的初始数据
   */
  data: {
    music_src: '',

    // 从上一个页面接收到的参数
    type_index: '0',
    caller: '初始显示',
    note: '初始备注',
    music_index: '0',
    delay: '0'
  },


  // 自定义函数
  // my_show 显示页面并自动播放 来电铃声
  my_show: function(e) {
    // 根据传来的参数选择 来电铃声
    var music_name = '';
    switch (this.data.music_index) {
      case '0':
        music_name = 'mi';
        break;
      case '1':
        music_name = 'iphone';
        break;
      default:
        console.log('music_index错误！');
        break;
    }

    console.log(music_name)
    // 设置音频路径
    this.setData({
      music_src: 'https://www.520cyb.cn/mini/mini_tool_kit/analog_telephone/' + music_name + '.mp3'
    })

    // onShow;只有一进入该页面，就自动播放，直到用户点击了 拒绝 或 接受
    const audio = wx.createAudioContext('my_audio', this)
    audio.play();
  },

  // 拒绝来电
  f_refuse: function(e) {
    console.log('您点击了拒绝')
    const audio = wx.createAudioContext('my_audio')
    audio.pause()
  },

  // 接受来电
  f_accept: function(e) {
    console.log('您点击了接受')
    const audio = wx.createAudioContext('my_audio')
    audio.play()
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options)
    this.setData({
      type_index: options.type_index,
      caller: options.caller,
      note: options.note,
      music_index: options.music_index,
      delay: options.delay
    })
    setTimeout(this.my_show, 1000 * 60 * parseInt(this.data.delay))
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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