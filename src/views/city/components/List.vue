<template>
    <div>
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
      <div class="list-title">A</div>
      <div ref="wrapper">
        <div>
          <div class="list-city" v-for="(item, index) of citylist" :key="index">
            {{item.cityFirstName}}
          </div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    citylist: Array
  },
  computed: {
    firstLetter () {
      const letterlist = []
      while (letterlist.length < 26) {
        letterlist.push(String.fromCharCode(letterlist.length + 65))
      }
      console.log(letterlist)
      return letterlist
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
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
    width: 1.45rem
    float: left
    line-height: .9rem
    text-align: center
    border-bottom: .002rem solid #eaeaea
    border-right: 0.02rem solid #eaeaea
  .test
    height: 100px

</style>
