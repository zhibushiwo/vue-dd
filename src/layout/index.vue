<template>
  <div class="layout">
      <SideBar />
      <LayoutHead />
      <router-view />
  </div>
</template>

<script>
import LayoutHead from './head'
import SideBar from './sidebar'
export default {
    name:"layout",
    data() {
      return {

      }
    },
    components: {
        LayoutHead,SideBar
    }
}
</script>

<style scoped lang="scss">
.layout{
    height: 100%;
}
</style>
