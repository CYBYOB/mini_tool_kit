// pages/webpage/webpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 生成网址 https://www.520cyb.cn/xxx
    result_url: '',
    // 网址 对应 二维码
    qr_url: ''
  },

  // 自定义函数
  // 用户点击了上传图片按钮
  f_image_ouload: function (e) {
    let that = this;
    wx.chooseImage({
      count: 1,
      success: function(res) {
        const temp_paths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://www.520cyb.cn/mini/mini_tool_kit/webpage/3d/1/webpage_upload.php',
          // url: 'https://www.520cyb.cn/mini/mini_tool_kit/webpage/3d/1/qr_code_generate.php',
          filePath: temp_paths[0],
          name: 'file',
          success(res) {
            let data = JSON.parse(res.data);
            if(data.code != 0){
              wx.showToast({
                title: '发生了异常，请稍后重试！',
                icon: 'none'
              })
            } else {
              // 上传照片成功
              console.log(data)
              console.log(data.url)
              that.setData({
                result_url: data.url,
                qr_url: 'http://mobile.qq.com/qrcode?url=' + data.url
              })
            }
          }
        })
      },
    })
  },

  // 复制生成的网址
  f_clip_url: function(e) {
    wx.setClipboardData({
      data: this.data.result_url,
      success(res) {
        wx.showToast({
          title: '复制成功！',
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