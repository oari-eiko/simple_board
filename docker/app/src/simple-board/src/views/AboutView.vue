<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>Route: {{getThisRoute}}</h4>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <hr>
    <h2>count-val: {{this.$store.state.count}}</h2>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="increment">
      count up
    </button>
    <hr>
    <!-- go to home button -->
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="goToRoot">
      Go Root
    </button>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     count: this.$store.state.count
  //   }
  // },
  name: 'AboutView',
  computed: {
    getThisRoute() {
      return this.$route.fullPath
    },
  },
  methods: {
    goToRoot() {
      this.$router.push('/')
    },
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>
