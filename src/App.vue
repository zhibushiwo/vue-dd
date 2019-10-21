<template>
  <div id="app">
     <Layout v-if="GetLoginState!=0" />
     <Login v-else />
  </div>
</template>
<script>
import Layout from '@/layout/'
import Login from '@/views/login'
import {mapGetters } from 'vuex'
export default {
  name:"app",
  components:{
    Layout,Login
  },
  computed: {
    ...mapGetters(["GetLoginState"])
  }
}
</script>
<style lang="scss">
#app{
  height: 100%;
  font-size: $font-size;
}
</style>
