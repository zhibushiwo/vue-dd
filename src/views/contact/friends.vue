<template>
  <div class="friends">
    <div class="header">
      <div class="title">
        <div class="icon">
          <i class="iconfont icon-icon_meeting_fill" style="color:skyblue"></i>
        </div>
        <div>我的好友</div>
      </div>
      <div class="addNew">
        <el-tooltip class="item" effect="dark" content="添加好友" placement="right-end">
          <i class="iconfont icon-icon_add" style="color:skyblue"></i>
        </el-tooltip>
      </div>
    </div>
    <FriendTable :friends="friends" />
  </div>
</template>

<script>
import FriendTable from "./components/friend-table";
import avatar from "@/assets/avatar.jpg";
export default {
  data() {
    return {
      friends: [
        {
          avatar: avatar,
          userName: "河马"
        },
        {
          avatar: avatar,
          userName: "河马"
        },
        {
          avatar: avatar,
          userName: "河马"
        }
      ]
    };
  },
  components: {
    FriendTable
  }
};
</script>

<style lang="scss" scoped>
.friends {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $font-size-lg;
    border-bottom: 1px solid $border-color;
    padding: 5px 15px;
    .title {
      display: flex;
      align-items: center;

      .icon {
        margin-right: 15px;
      }
      .iconfont {
        font-size: 40px;
      }
    }
    .addNew {
      .iconfont {
        font-size: 30px;
      }
    }
  }
}
</style>