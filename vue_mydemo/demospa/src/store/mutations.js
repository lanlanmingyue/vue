// src/store/mutations.js
import Vue from 'vue'
import * as types from './mutation-types'

export default {
  // 设置是否登录
  [types.USER_SIGNIN](state, user) {
  sessionStorage.setItem('user', JSON.stringify(user))
   Object.assign(state.userInfo, user)//浅拷贝、对象属性的合并,改变state
          },
  // 设置是否退出
  [types.USER_SIGNOUT](state) {
    sessionStorage.removeItem('user')
    console.log(state);
    //Object.keys(state).forEach(k => Vue.delete(state, k))
     /*
            此行解释为： 获取对象的所有属性后，遍历这些属性，并删除
            */
  },
  // 设置是否在加载
  [types.SET_LOADING] (state, platform) {
    state.isLoading = platform;
  },
    // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来我们可以做登入直接读取昵称和头像
    const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
    
    state.list.push(
      Object.assign({ name: '二哲', avatar: avatar }, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1);
  }
,
      
  [types.GET_BASE_API](state, res) {
    console.log('进入mutation11');
    console.log(res.data.msg);
    state.getMineBaseMsg = { ...state.getMineBaseMsg, msg: res.data.msg }
    console.log('进入mutations修改state成功');
    console.log(state.getMineBaseMsg)
  }
};
