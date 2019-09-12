<template>
  <div class="chat-item">
      <div class="avatar-wrap">
          <img :src="avatarUrl">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        avatarUrl:{
            type:String,
            default:""
        },
        
    }
}
</script>

<style lang="scss" scoped>
.chat-item{
    display: flex;
}
</style>