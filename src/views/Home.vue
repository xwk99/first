<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperlist"></home-swiper>
    <home-icons :list="iconlist"></home-icons>
    <home-recommend :list="recommendlist"></home-recommend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './home/components/header'
import HomeSwiper from './home/components/swiper'
import HomeIcons from './home/components/Icons'
import HomeRecommend from './home/components/Recommend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data () {
    return {
      swiperlist: [],
      iconlist: [],
      recommendlist: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      // console.log(res.data.data.recommendlist)
      this.swiperlist = res.data.data.swiperList
      this.iconlist = res.data.data.iconList
      this.recommendlist = res.data.data.recommendlist
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
