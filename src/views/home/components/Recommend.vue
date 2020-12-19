<template>
    <div>
      <div class="recommend-title">特惠门票</div>
      <div class="recommend-title-select">
        <div class="change-recommend" @click="handleclick1" :style="changestyle1">当季景点门票</div>
        <div class="change-recommend" @click="handleclick2" :style="changestyle2">特惠门票</div>
      </div>
      <div class="recommend-content">
          <router-link class="recommend-content-block" v-for="item of handlelist[page]" :key="item.id" tag="div" :to="'/detail/'+item.id">
            <ul>
              <li>
                <img class="recommend-content-img" :src="item.imgUrl"/>
              </li>
              <li class="recommend-content-title ">{{item.imgTitle}}</li>
              <li class="recommend-content-text recomemnd-content-option">{{item.imgContent}}</li>
              <li class="recommend-content-price recomemnd-content-option">{{item.price}}</li>
            </ul>
          </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
      changestyle1: {
        background: '#17c0c8'
      },
      changestyle2: {
        background: ''
      },
      page: 0
    }
  },
  methods: {
    handleclick1 () {
      this.changestyle1.background = '#17c0c8'
      this.changestyle2.background = ''
      this.page = 0
    },
    handleclick2 () {
      this.changestyle1.background = ''
      this.changestyle2.background = '#17c0c8'
      this.page = 1
    }
  },
  computed: {
    handlelist () {
      const handlelist = []
      this.list.forEach((item, index) => {
        var page = Math.floor(index / 4)
        if (!handlelist[page]) {
          handlelist[page] = []
        }
        handlelist[page].push(item)
      })
      return handlelist
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/mixins.styl'
  .recommend-title
    height: 30px
    width: 360px
    margin: 26px 0px 0px 6px
    font-size: 18px
    font-weight: bold
  .recommend-title-select
    display: flex
    height: 42px
    width: 100%
    line-height: 42px
    margin-bottom: 6px
    .change-recommend
      padding: 0 10px
      margin : 0 0 0 15px
      border: #8080805c solid thin
      border-radius: 5px
    .change-recommend-active
      backgroud: #17c0c8
  .recommend-content
    height: 340px
    width: 100%
    .recommend-content-block
      display: inline-block
      height: 167px
      width: 167.6px
      padding-left: 13px
      overflow: hidden
      min-width: 0
      flex: 1
      .recommend-content-img
        height: 106px
        width: 162.6px
        border: solid transparent
        border-radius: 6px
        margin-bottom: 3px
      .recommend-content-title
        height: 18px
      .recommend-content-text
        height: 13px
        margin-bottom: 5px
        ellipsis()
        color: #555555
        font-size: 13px
      .recommend-content-price
        height: 19px
        font-size: 18px
        color: orange
  .bgcolor
    background-color: blue
</style>
