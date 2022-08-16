// import { createApp } from 'vue'
import { createStore } from 'vuex'

// 新しいストアインスタンスを作成します
export const store = createStore({
  state () {
    return {
      userId: '',   // ユーザーID
    }
  },
  getters: {
    // ログインしているかどうか（userIdが空かどうか）
    loggedIn (state) {
      return Boolean(state.userId.trim());
    }
  },
  mutations: {
    // ユーザーIDをセット
    setUserId (state, userId) {
      state.userId = userId;
    }
  }
})