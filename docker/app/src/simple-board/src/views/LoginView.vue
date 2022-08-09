<template>
  <div id="login" class="my-4">
    
    <!-- ログインフォーム -->
    <form class="w-full max-w-sm mx-auto">
      <div class="flex mx-5 flex-col md:flex-wrap">
        <!-- ユーザーネーム -->
        <div class="border-b border-teal-500 py-1 my-2 text-left">
          <input class="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Username">        
        </div>
        <!-- パスワード -->
        <div class="border-b border-teal-500 py-1 my-2 text-left">
          <input class="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none" type="password" placeholder="Password">        
        </div>
        <!-- ボタン -->
        <div class="text-center my-4">
          <button class="w-1/2 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 font-bold text-white py-2 px-4 rounded" type="button">
            Log In
          </button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  
}
</script>