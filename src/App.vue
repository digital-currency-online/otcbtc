<template>
  <div id="app">
    <top-navbar></top-navbar>
    <router-view/>
  </div>
</template>

<script>
import TopNavbar from '@/components/topNavbar'

export default {
  name: 'App',
  components: {
    'top-navbar': TopNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
