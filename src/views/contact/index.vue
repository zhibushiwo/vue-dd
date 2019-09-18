<template>
  <div class="contact">
      <div class="navBar">
       <ContactNav v-for="(item,index) in navs" :key="index"  :iconType = item.iconType  :iconColor = item.iconColor :title = item.title />

      </div>
      <div class="content">

      </div>
  </div>
</template>

<script>
import ContactNav from './components/nav'
export default {
  components:{
    ContactNav
  },
  data(){
    return {
      navs:[
        {
          iconType:"icon-icon_meeting_fill",
          iconColor:"skyblue",
          title:"我的好友",
        },
        {
          iconType:"icon-icon_newapplication_",
          iconColor:"green",
          title:"新的好友",
        },
        {
          iconType:"icon-icon_meeting_fill",
          iconColor:"crimson",
          title:"我的群组",
        },
        {
          iconType:"icon-icon_boss_fill",
          iconColor:"orange",
          title:"特别关注",
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.contact{
  display: flex;
  .navBar{
    width: $aside-width;
    border-right: 1px solid #ddd;
  }
}
</style>