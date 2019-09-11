<template>
  <div class="layout">
      <SideBar />
      <LayoutHead />
      <router-view/>
  </div>
</template>

<script>
import SideBar from './sidebar'
import LayoutHead from './head'

export default {
    components:{
        SideBar,LayoutHead
    }
}
</script>

<style lang="scss" scoped>
.layout{
    width: 100%;
    height: 100%;
}
</style>>
