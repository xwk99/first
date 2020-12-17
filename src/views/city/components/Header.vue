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
    text-align: center
    color: white
    position: fixed
    top: 0
    right: 0
    left: 0
    z-index: 2
  .back-header
    position: fixed
    top: .26rem
    left: .1rem
    color white
    z-index: 9
</style>
