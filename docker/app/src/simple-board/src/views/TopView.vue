<template>
  <div id="Top" class="flex justify-center my-5">
    <!-- ログインリンク -->
    <div class="w-1/3">
      <router-link to="/login">
        <button class="btn bg-gray-300 py-2 px-5 my-2 font-bold rounded">
          Log In
        </button>
      </router-link>  
    </div>

    <!-- サインアップ -->
    <div class="w-1/3">
      <router-link to="/signup">
        <button class="btn bg-gray-300 py-2 px-5 my-2 font-bold rounded">
          Sign Up
        </button>
      </router-link>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'TopView',
}
</script>