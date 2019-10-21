<template>
  <div class="login">
    <div class="loginBox">
      <div class="boxHead">钉钉</div>
      <div class="loginBody">
        <div class="loginForm">
          <el-tabs v-model="loginType">
            <el-tab-pane label="密码登录" name="psw">
              <div class="avatar">
                <img :src="avatar" />
                <el-input v-model="userName" placeholder="请输入用户名"></el-input>
                <el-input v-model="password" placeholder="请输入密码"></el-input>
              </div>
            </el-tab-pane>
            <el-tab-pane label="扫描登陆" name="bar"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="loginTool">
            <div>自动登陆</div>
            <div class="register">新用户注册</div>
        </div>
      </div>
      <div class="loginFoot"></div>
    </div>
  </div>
</template>

<script>
import avatar from "@/assets/avatar.jpg";
export default {
  name: "",
  data() {
    return {
      loginType: "psw",
      avatar,
        userName:"",
        password:""
    };
  },
  components: {}
};
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginBox {
    width: 300px;
    height: 440px;
    border: 1px solid #ccc;
    box-shadow: -2px 0 64px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    .boxHead {
      height: 40px;
      line-height: 40px;
      padding-left: 5px;
      font-size: $font-size-lg;
      background: $theme-color;
      color: #fff;
    }
    .loginFoot {
      height: 50px;
      background: #eee;
    }
    .loginBody {
      flex: 1;
      padding: 15px 25px;

      .loginForm {
          height: 300px;
          overflow: hidden;
          text-align: center;
        .avatar {
          img {
            @include round(100px);
          }
        }
        ::v-deep.el-input__inner{
            border: none;
            border-bottom: 1px solid #ccc;
        }
      }
    }
    .loginTool{
        display: flex;
        justify-content: space-between;
        color: #ddd;
        font-size: $font-size-sm;
        .register{
            cursor: pointer;
        }
    }
  }
}
</style>
