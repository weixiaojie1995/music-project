<template>
  <div id="app">
    <Head></Head>
    <Foot></Foot>
    <router-view></router-view>
  </div>
</template>

<script>
import Foot from './components/footer'
import Head from './components/header'

export default {
  name: 'App',
  components: {
    Foot,Head
    
  }
}
</script>

<style>

</style>
