<template>
  <div class="sidebar">
    <div class="avatar-wrap">

    </div>
     <i
        class="iconfont  icon-icon_namecard "
      />
  </div>
</template>

<script>
export default {
    name:"",
    data() {
      return {

      }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
.sidebar{
  width:$side-bar-width;
  background-color: $dingding-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  height: 100%;

  .iconfont{
    font-size: 18px;
    color: #fff;
  }
  .avatar-wrap{
    @include round(70px);
    border:2px solid #fff;
  }
}
</style>
