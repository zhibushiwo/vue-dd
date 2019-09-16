<template>
  <div class="main">
      <Msg v-for="item in msgData"  :key="/>
  </div>
</template>

<script>
import Msg from '@/components/msg-item.vue'
export default {
  data(){
    return {
      msgData:[
        {
          content:"hello world",
          time:"14:14",
          isSend:0
        },
        {
          content:"hello world",
          time:"14:14",
          isSend:0
        },
        {
          content:"hello world",
          time:"14:14",
          isSend:1
        },
        {
          content:"hello world",
          time:"14:14",
          isSend:0
        },
        {
          content:"hello world",
          time:"14:14",
          isSend:1
        },
        {
          content:"hello world",
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

</style>