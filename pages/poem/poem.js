// pages/poem/poem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //一开始 和 输入内容为空时，自动对焦!
    auto_focus: true,

    // 单选框数据
    num_list: [
      { value: 5, title: '五言', check: true },
      { value: 7, title: '七言', check: false },
    ],
    position_list: [
      { value: 'head', title: '藏头', check: true },
      { value: 'tail', title: '藏尾', check: false }
    ],

    // 制作古诗所需的参数
    text: '',
    num: 5,
    position: 'head',

    //后端返回的数据
    poem: '',
    line_array_list: [],
  },

  // 自定义函数
  // 想生成的诗句内容
  f_input_text: function(e) {
    // console.log(e)
    this.setData({
      text: e.detail.value
    })
  },

  // 诗句字数单选框发生改变
  f_bindchange_1: function(e) {
    // console.log(e)
    this.setData({
      num: e.detail.value
    })
  },

  // 藏的位置单选框发生改变
  f_bindchange_2: function (e) {
    console.log(e)
    this.setData({
      position: e.detail.value
    })
  },

  // 输入内容为空，光标自动定位到要输入的位置！
  f_null_of_text: function() {
    if(this.data.text.length == 0) {
      wx.showToast({
        title: '输入内容不能为空！',
        icon: 'none',
        duration: 1000
      })
      this.setData({
        auto_focus: false
      })
      // 说明输入内容为空
      return true;
    }
    this.setData({
      auto_focus: true
    })
    return false;
  },

  // 提交，制作诗句
  f_poem_create: function(e) {
    // 输入内容不为空在进行下一步
    if(!this.f_null_of_text()){
      var data = this.data;
      var that = this;
      // console.log(data.input+'\t'+data.num)
      wx.request({
        url: 'https://www.520cyb.cn/mini/mini_tool_kit/poem/poem_create.php',
        data: {
          text: data.text,
          num: data.num,
          position: data.position
        },
        success(res) {
          console.log(res)
          // flag 用于判断搜索结果是否为空、是否有效,只要 length 不全为 0 就是有效的
          var flag = 0;
          var new_poem = '';

          for (var i = 0; i < res.data.length; i++) {
            // console.log(res.data[i]['0']['0'])   
            if (res.data[i].length != 0) {
              flag = 1;
            }
            new_poem += (res.data[i]['0']['0'] + '\n')
          }

          // 搜索结果 是否有效，进行不同的操作
          if(flag == 0) {
            wx.showToast({
              title: '搜索结果为空，请换个句子！',
              icon: 'none'
            })
          }else {
            that.setData({
              poem: new_poem,
              line_array_list: res.data
            })
          }
        }
      })
    }
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