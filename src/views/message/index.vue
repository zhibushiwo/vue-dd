<template>
  <div class="message">
    <Histroy class="history" />
    <Main class="main" />
  </div>
</template>

<script>
import Main from './components/main'
import Histroy from './components/history'
export default {
  components:{
    Main,Histroy
  }
}
</script>

<style lang="scss" scoped>
  .message{
    height: 100%;
    display: flex;
    .history{
      width: $aside-width;
      overflow: auto;
      height: 100%;
    }
    .main{
      flex: 1;
      background-color: $main-bg-color;
      height: 100%;
    }
  }
</style>>

