<template>
  <div class="chatMain">
      <Msg v-for="(item,index) in msgData"  :key="index"  :content= item.content :time = item.time :isSend= item.isSend  class="msg-item"  />
  </div>
</template>

<script>
import Msg from '@/components/msg-item.vue'
export default {
  data(){
    return {
      msgData:[
        {
          content:"hello worldxxxxx",
          time:"14:14",
          isSend:0
        },
        {
          content:"hello worldxxxxx",
          time:"14:14",
          isSend:0
        },
        {
          content:"hello worldxxxx",
          time:"14:14",
          isSend:1
        },
        {
          content:"hello worldxxxxxxxxxxxxxxxxx",
          time:"14:14",
          isSend:0
        },
        {
          content:"hello worldxxxxxxxxxxxxxxxxx",
          time:"14:14",
          isSend:1
        },
        {
          content:"hello worldxxxxxx",
          time:"14:14",
          isSend:0
        }
      ]
    }
  },
  components:{
    Msg
  }
}
</script>

<style lang="scss" scoped>
.chatMain{
  padding: 10px;
  .msg-item{
    margin: 30px 5px;
  }
}
</style>