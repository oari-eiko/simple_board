<template>
  <div id="Top" class="flex flex-col">
    <!-- 登録湯ユーザー -->
    <div class="my-3 mx-5">
      <p class="font-bold">USER LIST</p>
      <table class="w-full mx-auto">
        <thead class="bg-gray-400">
          <tr>
            <th class="border border-white">ID</th>
            <th class="border border-white">NAME</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.id" class="bg-gray-300">
          <tr>
            <td class="border border-white">{{user.id}}</td>
            <td class="border border-white">{{user.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ログインリンク -->
    <div class="my-3">
      <router-link to="/login">
        <button class="btn bg-gray-300 py-2 px-5 my-2 font-bold rounded w-1/3">
          Log In
        </button>
      </router-link>  
    </div>

    <!-- サインアップ -->
    <div class="my-3">
      <router-link to="/signup">
        <button class="btn bg-gray-300 py-2 px-5 my-2 font-bold rounde w-1/3">
          Sign Up
        </button>
      </router-link>  
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'TopView',
  data() {
    return {
      users: [],
    }
  },
  mounted() {
    axios.get('http://localhost:8080/user/')
    .then(response => { this.users = response.data; })
    .catch(error => console.log(error));
  },
}
</script>