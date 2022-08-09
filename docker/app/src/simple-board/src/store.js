// import { createApp } from 'vue'
import { createStore } from 'vuex'

// 新しいストアインスタンスを作成します
export const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})