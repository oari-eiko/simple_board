<template>
  <div id="board">
    <!-- ログインリンク -->
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
