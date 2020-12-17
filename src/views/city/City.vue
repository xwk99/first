<template>
   <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :letterindex="letterindex"></city-list>
    <city-alphabet @change="handlechange"></city-alphabet>
   </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      letterindex: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('index-city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      console.log(res.data.data.cities)
      this.cities = res.data.data.cities
    },
    handlechange (letter) {
      this.letterindex = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
