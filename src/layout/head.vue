<template>
  <div class="head">
    <div class="left"></div>
    <div class="right">
      <ChatHead :avatar="user.avatar" :userName="user.userName" :userDetail="user.userDetail"  v-if="$route.name==='message'" />
    </div>
  </div>
</template>

<script>
import imgUrl from "@/assets/avatar.jpg";
import ChatHead from "@/components/chat-header.vue";
export default {
  name: "",
  data() {
    return {};
  },
  mounted(){
    console.log(this.$route)
  },
  components: {
    ChatHead
  },
  computed: {
    user() {
      return {
        avatar: imgUrl,
        userName: "河马",
        userDetail: "河马(非洲大草原霸主--load of africa)"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.head {
  position: absolute;
  top: 0;
  right: 0;
  left: $side-bar-width;
  height: $layout-head-height;
  border-bottom: 1px solid #ddd;
  
  display: flex;
  .left{
    width: $aside-width;
    border-right: 1px solid #ddd;
  }
  .right{
    flex: 1;
    padding: 5px 15px;
  }
}

</style>
