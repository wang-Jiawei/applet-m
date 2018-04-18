
let serverPath = 'http://www.abc.com/api/'
export function post(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverPath + url, // 拼接完整的url
      data: data,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res.data) // 把返回的数据传出去
      },
      fail(ret) {
        reject(ret) // 把错误信息传出去
      }
    })
  })
}