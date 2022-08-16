<template>

  <!-- ヘッダー -->
  <MyHeader/>

  <!-- メインコンテンツ -->
  <div class="container mx-auto">
    <router-view/>
  </div>

</template>

<script>
// コンポーネント読み込み
import MyHeader from '@/components/MyHeader.vue';
export default {
  components: {
    MyHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
