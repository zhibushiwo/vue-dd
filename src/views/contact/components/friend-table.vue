<template>
  <ul class="table-wrap">
    <li class="friends" v-for="(item,index) in friends" :key="index">
      <div class="avatar">
        <img :src="item.avatar" />
      </div>
      <div class="info">
        <div class="userName">{{item.userName}}</div>
        <div class="desc" v-if="item.desc">{{item.desc}}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    friends: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.table-wrap {
  padding: 15px;
  .friends {
    display: flex;
    height: 60px;
    padding: 10px 0;
    align-items: center;
    .avatar {
      margin-right: 10px;
      img {
        @include round(40px);
      }
    }
    .info{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        .desc{
            font-size: $font-size-sm;
            color: #ddd;
        }
    }
  }
}
</style>
