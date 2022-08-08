<template>
  <MyHeader/>

  <div>
    <p v-if="msg.length > 0">
      {{msg}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear">Reset</button>
    <p>{{user}}</p>
    <hr>
    <p v-bind:title="counterMsg">{{counter}}</p>
  </div>
</template>

<script>
// ライブラリ読み込み
import axios from 'axios'
// コンポーネントの読み込み
import MyHeader from './components/MyHeader.vue'

// メイン処理
export default {
  components: {
    MyHeader
  },
  data () {
    return {
      msg: 'my world',
      user: '',
      counter: 0,
      counterMsg: '',
    }
  },
  methods: {
    clear() { this.msg = '' }
  },
  mounted () {
    axios.get('http://localhost:8080/api/user/')
    .then(res => console.log(res.data))
    .catch(error => console.log(error));

    setInterval(() => {
      this.counter++;
      this.counterMsg = this.msg + this.counter
    }, 1000);

  },
}
</script>
