// pages/phone_query/phone_query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // joke_name: '',


    // 请求所需的参数
    phone: '',

    // 查询结果 ==》 对象
    result_list: {},
    flag:0
  },


  // 自定义函数
  // 根据用户的输入不断更新 电话号码的值
  f_phone_input: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 用户点击了 提交 按钮，对 申请的api 发起请求
  f_phone_query: function(e) {
    var that = this;
    // console.log(app.globalData.pre_website)

    wx.request({
      url: 'https://www.520cyb.cn/mini/mini_tool_kit/phone_query/phone_query.php',

      // url: 'http://dialog.mxitie.com//api/joke/textsearch?text=%E5%BC%80',
      // url: 'https://www.520cyb.cn/mini/mini_tool_kit/phone_query/test_url.php',
      data: {
        phone: this.data.phone
      },
      success(res) {
        console.log(res)


        
        // console.log(res.data[0].joke_name)
        // that.setData({
        //   joke_name: res.data[0].joke_name
        // })



        if (res.data.error_code !=0 ) {
          wx.showToast({
            title: '请检查输入的手机号！',
            icon: 'none'
          })
        } else {
          that.setData({
            // 让查询结果进行显示  ==》 flag
            flag: 1,
            result_list: res.data.result,
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