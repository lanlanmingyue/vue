//编写所有的ａｘｉｏｓ处理和ａｘｉｏｓ封装
import axios from 'axios'

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                console.log('03--Api--ok');
                resolve(response.data);
            })
            .catch((error) => {
              console.log(error)
               reject(error)
            })
    })
}

export default {
  // 获取我的页面的后台数据
  mineBaseMsgApi() {
     console.log('进入api.js-02')
    return fetch('/api/getBoardList');
  },
  usersApi() {
     console.log('进入api.js-users')
    return fetch('/api/users');
  }
}