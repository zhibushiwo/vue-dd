<template>
  <div class="nav">
    <div class="icon">
      <i class="iconfont" :class="iconType" :style="{color:iconColor}"></i>
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: ["iconType", "iconColor", "title"]
};
</script>

<style lang="scss" scoped>
.nav {
    height: 70px;
    display: flex;
    align-items: center;
    font-size: $font-size-lg ;
    border-bottom: 1px solid $border-color-light;
    padding: 0 15px;
    .icon{
        margin-right: 15px;
        .iconfont{
            font-size: 40px;
        }
    }
}
</style>