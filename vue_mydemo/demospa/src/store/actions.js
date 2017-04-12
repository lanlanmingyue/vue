// src/store/actions.js

import * as types from './mutation-types'
import api from './../fetch/api';


export default {
  // 改变是否正在加载状态
  setLoading ({commit}, platform) {
    commit('SET_LOADING', platform);
  },
  addTotalTime({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  deletePlan({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  },
  userSignin({commit}, user) {
            commit(types.USER_SIGNIN, user)
        },
  userSignout({commit}) {
            commit(types.USER_SIGNOUT)
        },
  getMineBaseApi({commit}) {
    console.log('进入action01');
    api.mineBaseMsgApi()
    .then(res => {
        console.log('action中调用封装后的axios成功')
        commit(types.GET_BASE_API, res)
    })
  }
};
