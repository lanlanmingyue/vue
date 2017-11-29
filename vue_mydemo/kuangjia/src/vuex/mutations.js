export default {
  // 使用常量替代Mutation事件类型：写法：[常量名](state){ // mutate state  }
  // 设置是否登录
  SET_LOGIN (state, platform) {
    state.isLogin = platform;
  },
  // 设置是否在加载
  SET_LOADING (state, platform) {
    state.isLoading = platform;
  },
	ADD(state) {
			state.count += 1;
		},
	REDUCE(state) {
			state.count -= 1;
		}
  
};
