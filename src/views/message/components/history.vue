<template>
  <div class="history">
    <ChatItem />
    <ChatItem />
    <ChatItem />
    <ChatItem />
  </div>
</template>

<script>
import ChatItem from '@/components/chat-item.vue'
export default {
  data(){
    return {
      contactHistory:[]
    }
  },
  components:{
    ChatItem
  }
}
</script>

<style lang="scss" scoped>
.history{
    border-right: 1px solid #ddd;
}
</style>