<template>
    <div>
      <div class="recommend-title">特惠门票</div>
      <div class="recommend-title-select">
        <router-link to='' class="change-recommend" @click.native="handleclick">当季景点门票</router-link>
        <router-link to='' class="change-recommend" @click.native="handleclick">特惠门票</router-link>
        <router-view/>
      </div>
      <div class="recommend-content">
          <div class="recommend-content-block" v-for="item of recommendlist" :key="item.id">
            <ul>
              <li>
                <img class="recommend-content-img" :src="item.imgUrl"/>
              </li>
              <li class="recommend-content-title ">{{item.imgTitle}}</li>
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
  data () {
    return {
      recommendlist: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1805/ad/ad507355a167f587a3.img.jpg_256x160_dbb6cb75.jpg',
        imgTitle: '重庆长江索道',
        imgContent: '万里长江的一条空中走廊，俯瞰滚滚长江',
        price: '¥30'
      }, {
        id: '002',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1911/84/8493e4b6e0787877a3.img.jpg_256x160_27a611e7.jpg',
        imgTitle: '重庆两江夜游',
        imgContent: '不览夜景，未到重庆',
        price: '¥70'
      }, {
        id: '003',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_256x160_df668e50.jpg',
        imgTitle: '武隆天生三桥风景区',
        imgContent: '变形金刚大战黄金甲',
        price: '¥91'
      }, {
        id: '004',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1910/a7/a7863ded4e64b6faa3.img.jpg_256x160_3717c847.jpg',
        imgTitle: '洪崖洞',
        imgContent: '老重庆的真实写照，极具巴渝传统特色',
        price: '¥8'
      }]
    }
  },
  methods: {
    handleclick () {
      alert('未完成')
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
</style>
