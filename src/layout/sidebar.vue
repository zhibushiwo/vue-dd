<template>
  <div class="sidebar">
    <div class="avatar-wrap">
      <img src="../assets/avatar.jpg"  class="avatar"/>
    </div>
    <div class="iconMain">
      
      <router-link to="/message" class="link">
        <i class="iconfont icon-icon_message"></i>
        消息
      </router-link>
       <router-link to="/ding"  class="link">
        <i class="iconfont icon-icon_synergy "></i>
        Ding
      </router-link>
       <router-link to="/work"  class="link">
        <i class="iconfont icon-icon_dingtalk_line "></i>
        工作
      </router-link>
       <router-link to="/contack"  class="link">
        <i class="iconfont icon-icon_namecard "></i>
        联系人
      </router-link>
    </div>
    <div class="iconSub">
      <i class="iconfont icon-icon_message"></i>
      <i class="iconfont icon-icon_synergy"></i>
      <i class="iconfont icon-icon_dingtalk_line"></i>
      <i class="iconfont icon-icon_namecard"></i>
    </div>
  </div>
</template>

<script>
import menuRoutes from '@/router.js'
export default {
    name:"",
    data() {
      return {
        menu:menuRoutes
      }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
.sidebar{
  width: $side-bar-width;
  height: 100%;
  background: $theme-color;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  padding-top: 10px;
  .avatar{
    @include round(70px);
    border: 2px solid #fff;
  }

  .iconMain{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .iconfont{
      font-size: 40px;
      &.actived{
        color: #fff;
      }
    }
  }
  .iconSub{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .iconfont{
      font-size: 25px;
    }
  }
}
</style>
