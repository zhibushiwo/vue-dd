<template>
  <div class="nav" @click="toNav">
    <div class="icon">
      <i class="iconfont" :class="iconType" :style="{color:iconColor}"></i>
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: ["iconType", "iconColor", "title", "to"],
  methods: {
    toNav() {
      if( !this.to) return false;
      if (this.$route.path !==  this.to) this.$router.push({ path: this.to });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 75px;
  display: flex;
  align-items: center;
  font-size: $font-size-lg;
  border-bottom: 1px solid $border-color-light;
  padding: 0 15px;
  cursor: pointer;
  .icon {
    margin-right: 15px;
    .iconfont {
      font-size: 40px;
    }
  }
}
</style>