<template>
  <div class="contact">
      <div class="navBar">
       <ContactNav v-for="(item,index) in navs" :key="index"  :iconType = item.iconType  :iconColor = item.iconColor :title = item.title :to=item.to />
      </div>
      <div class="router-content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import ContactNav from './components/nav'
export default {
  components:{
    ContactNav
  },
  created(){
    console.log(process.env.VUE_APP_TITLE,process.env.NODE_ENV)
  },
  data(){
    return {
      navs:[
        {
          iconType:"icon-icon_meeting_fill",
          iconColor:"skyblue",
          title:"我的好友",
          to:"/contact/friends"
        },
        {
          iconType:"icon-icon_newapplication_",
          iconColor:"green",
          title:"新的好友",
          to:"/contact/newfriends"
        },
        {
          iconType:"icon-icon_meeting_fill",
          iconColor:"crimson",
          title:"我的群组",
          to:"/contact/groups"
        },
        {
          iconType:"icon-icon_boss_fill",
          iconColor:"orange",
          title:"特别关注",
          to:"/contact/speical"
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
  .router-content{
    flex: 1;
  }
}
</style>