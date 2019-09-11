<template>
  <div class="sidebar">
    <div class="avatar-wrap">
      <img src="../assets/avatar.jpg"  class="avatar"/>
    </div>
    <ul class="iconMain">
      <router-link
       v-for="(item,index) in menuRoutes" 
      :key="index"
      class="link"
      tag="li"
      :to="item.path"
      active-class="link-active"
      >
      <i class="iconfont" :class="item.meta.icon"></i>
      <span>{{item.meta.title}}</span>
      </router-link>
    </ul>
    <div class="iconSub">
      <i class="iconfont icon-icon_message"></i>
      <i class="iconfont icon-icon_synergy"></i>
      <i class="iconfont icon-icon_dingtalk_line"></i>
      <i class="iconfont icon-icon_namecard"></i>
    </div>
  </div>
</template>

<script>
import {menuRoutes} from '@/router.js'
export default {
    name:"",
    data() {
      return {
        menuRoutes
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
  .link{
    color: #78c2ff;
    &-active{
      color: #fff;
    }
  }
  .iconMain{
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    .link{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;
      .iconfont{
        font-size: 40px;
      }
    }
    
  }
  .iconSub{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #78c2ff;
    font-size: 25px;
    .iconfont{
      font-size: 25px;
      margin-bottom: 7px;
    }
  }
}
</style>
