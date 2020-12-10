<template>
  <div class="header">
      <div class="header-left">
          <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-center">
           <span class="iconfont back-icon">&#xe632;</span>
           输入城市/景点/游玩主题</div>
      <div class="header-right">
          城市
          <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/variable.styl'
    .header
        line-height: .86rem
        display: flex
        background: $bgcolor
        color: white
        .header-left
            width: .54rem
            padding-left: 0.1rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-center
            flex: 1
            margin-top: .12rem
            padding-left: .2rem
            line-height: .64rem
            height: .64rem
            background: white
            border-radius: .1rem
            color: gray
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            .arrow-icon
                margin-left: -.04rem
                font-size: .2rem
</style>
