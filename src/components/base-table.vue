<template>
    <div class="base-table">

    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
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
