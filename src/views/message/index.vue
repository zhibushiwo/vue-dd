<template>
  <div class="message">
      <span class="text">hello world</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .text{
    display: inline-block;
    font-size: $font-size;
    background: chocolate;
    @include round(100px);
  }
</style>>

