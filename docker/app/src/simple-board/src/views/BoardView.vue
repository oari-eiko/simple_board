<template>
  <div id="board">
    <!-- ログインリンク -->
    <div>
      <router-link to="/login">
        <button class="btn bg-gray-200 py-2 px-4 my-2 font-bold rounded">
          Log In
        </button>
      </router-link>  
    </div>

    <!-- サインアップ -->
    <div>
      <router-link to="/signup">
        <button class="btn bg-gray-200 py-2 px-4 my-2 font-bold rounded">
          Sign Up
        </button>
      </router-link>  
    </div>
    
    <p>This is Board Page</p>
    <MainBoard/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBoard from '@/components/MainBoard.vue'

export default {
  name: 'BoardView',
  components: {
    MainBoard,
  }
}
</script>
