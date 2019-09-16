<template>
  <div class="chat-item">
      <div class="avatar-wrap">
          <img :src="avatarUrl">
      </div>
      <div class="content-wrap">
          <div class="contacts">
              {{contacts}}
          </div>
          <div class="contactContent">
              {{contactContent}}
          </div>
      </div>
      <div class="time">
          {{time}}
      </div>
  </div>
</template>

<script>
import imgUrl from '@/assets/avatar.jpg'
export default {
    props:{
        avatarUrl:{
            type:String,
            default:imgUrl
        },
        contacts:{
            type:String,
            default:"河马"
        },
        contactContent:{
            type:String,
            default:"hello worldXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        },
        time:{
            type:String,
            default:"10:05"
        }
    }
}
</script>

<style lang="scss" scoped>
.chat-item{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 60px;
    padding:10px;
    .avatar-wrap{

        img{
            @include round(40px);
        }
    }
    .content-wrap{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1;
        padding-left: 10px;
        @include text-ellipsis;
        .contacts{
            @include text-ellipsis;
        }
        .contactContent{
            color: #bbb;
            @include text-ellipsis;
        }
    }
    .time{
        color: #ccc;
    }
}
</style>