<template>
    <div class="area" ref="wrapper">
      <div class="content">
        <div class="list list-title">
          <h1>热门城市</h1>
        </div>
        <ul>
          <li class="list-city">北京</li>
          <li class="list-city">上海</li>
          <li class="list-city">三亚</li>
          <li class="list-city">丽江</li>
          <li class="list-city">杭州</li>
          <li class="list-city"></li>
        </ul>
        <div class="list-title">字母排序</div>
        <ul>
          <li class="first-name" v-for="(item, index) of firstLetter" :key="index">{{item}}</li>
        </ul>
        <div v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="list-title">{{key}}</div>
          <div class="list-city" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
        <div class="clearfloat"></div>
      </div>
    </div>
</template>

<script>
// import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    letterindex: String
  },
  computed: {
    firstLetter () {
      const letterlist = []
      while (letterlist.length < 26) {
        letterlist.push(String.fromCharCode(letterlist.length + 65))
      }
      return letterlist
    }
  },
  watch: {
    letterindex () {
      const element = this.$refs[this.letterindex][0]
      console.log(this.letterindex)
      console.log(element)
    }
  }
  // mounted () {
  //   this.$nextTick(() => {
  //     this.scroll = new BScroll(this.$refs.wrapper)
  //     setTimeout(this.scroll.refresh(), 1000)
  //     console.log(this.scroll)
  //   })
  // }
}
</script>

<style lang="stylus" scoped>
  .area
    position: absolute
    top: 0
    left: 0
    right: 0
    overflow: hidden
    .clearfloat
      height: 0
      clear: both
    .list
      margin-top: 1.79rem
      overflow: hidden
    .list-title
      border-bottom: solid #eaeaea
      background: #eaeaea
      height: 0.2rem
      line-height: 0.2rem
      overflow: hidden
      width: 100%
      padding: .25rem .3rem
      font-size: 12px
    .cities-list
      height: 0.9rem
      width: 2.74rem
      float: left
    .list-city
      height: 0.9rem
      width: 2.74rem
      float: left
      line-height: .9rem
      text-align: center
      border-bottom: .002rem solid #eaeaea
      border-right: 0.02rem solid #eaeaea
    .first-name
      height: 0.9rem
      width: 1.63rem
      float: left
      line-height: .9rem
      text-align: center
      border-bottom: .002rem solid #eaeaea
      border-right: 0.02rem solid #eaeaea
</style>
