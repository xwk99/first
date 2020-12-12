<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './home/components/header'
import HomeSwiper from './home/components/swiper'
import HomeIcons from './home/components/Icons'
import HomeRecommend from './home/components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>
