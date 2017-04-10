export default {
  // 改变是否登录状态，参数结构写法
  setLogin ({commit}, platform) {
    commit('SET_LOGIN', platform);
  },
  // 改变是否正在加载状态
  setLoading ({commit}, platform) {
    commit('SET_LOADING', platform);
  }
};
