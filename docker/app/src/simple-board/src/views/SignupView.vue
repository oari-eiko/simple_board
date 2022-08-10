<template>
  <div id="login" class="my-4">
    
    <!-- ログインフォーム -->
    <form class="w-full max-w-sm mx-auto">
      <div class="flex mx-5 flex-col md:flex-wrap">
        <!-- ユーザーネーム -->
        <div class="border-b border-pink-500 py-1 my-2 text-left">
          <input v-model="username" class="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Username">        
        </div>
        <!-- パスワード -->
        <div class="border-b border-pink-500 py-1 my-2 text-left">
          <input v-model="password" class="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none" type="password" placeholder="Password">        
        </div>
        <!-- ボタン -->
        <div class="text-center my-4">
          <button @click="signup" class="w-1/2 bg-pink-500 hover:bg-pink-700 border-pink-500 hover:border-pink-700 font-bold text-white py-2 px-4 rounded" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        username: '',
        password: '',
        postResponse: {},
    }
  },
  methods: {
    // サインアップ処理
    signup () {
      if (this.username!=='' && this.password!=='') {
        axios.post('http://localhost:8080/user/', {
          name: this.username,
          password: this.password,
          created_at: '2022-08-10 16:34:10',         // 一旦固定値
          updated_at: '2022-08-10 16:34:10',         // 一旦固定値
        })
        .then(response => {
          this.postResponse = response;
          this.$router.push('/login')
        })
        .catch(error => console.log(error));  
      }
    },
  },
}
</script>