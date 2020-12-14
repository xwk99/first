<template>
  <div>
    <router-link to="/">
      <span class="iconfont back-header">&#xe624;</span>
    </router-link>
    <div class="header">
        城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/variable.styl'
  .header
    height: .86rem
    background: $bgcolor
    line-height: .86rem
    overflow: hidden
    text-align: center
    color: white
  .back-header
    position: absolute
    top: 13px
    left: 5px
    color white
</style>
