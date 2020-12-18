<template>
    <div>
      <div class="recommend-title">特惠门票</div>
      <div class="recommend-title-select">
        <router-link to='' class="change-recommend" @click.native="handleclick">当季景点门票</router-link>
        <router-link to='' class="change-recommend" @click.native="handleclick" :class="changeclass">特惠门票</router-link>
        <router-view/>
      </div>
      <div class="recommend-content">
          <div class="recommend-content-block" v-for="item of list" :key="item.id">
            <ul>
              <li>
                <img class="recommend-content-img" :src="item.imgUrl"/>
              </li>
              <router-link tag="li" :to="'/detail/'+item.id" class="recommend-content-title ">{{item.imgTitle}}</router-link>
              <li class="recommend-content-text recomemnd-content-option">{{item.imgContent}}</li>
              <li class="recommend-content-price recomemnd-content-option">{{item.price}}</li>
            </ul>
          </div>
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
      changeclass: []
    }
  },
  methods: {
    handleclick () {
      console.log(this.$el)
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
    height: 42px
    width: 100%
    line-height: 42px
    margin-bottom: 6px
    .change-recommend
      padding: 12px 10px
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
