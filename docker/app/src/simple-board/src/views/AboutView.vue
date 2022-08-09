<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>Route: {{getThisRoute}}</h4>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  computed: {
    getThisRoute() {
      return this.$route.fullPath
    }
  }
}
</script>
