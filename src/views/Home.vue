<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    test
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './home/components/header'
import HomeSwiper from './home/components/swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
