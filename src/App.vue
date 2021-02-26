<template>
  <div id="app">
    <Head v-if="showHead"></Head>
    <Foot v-if="showHead"></Foot>
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
  },
  data(){
    return{
      url:window.location.href,
      showHead : null
    }
  },
  watch:{
    url(){
      window.location.href.indexOf("login")<0 ? this.showHead = true : this.showHead = false
    }
  },
  created(){
    window.location.href.indexOf("login")<0 ? this.showHead = true : this.showHead = false
  }
}
</script>

<style>

</style>
