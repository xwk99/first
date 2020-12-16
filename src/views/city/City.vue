<template>
   <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :citylist="citylist"></city-list>
    <city-alphabet></city-alphabet>
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
      citylist: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('index-city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      console.log(res.data.data.citylist)
      this.citylist = res.data.data.citylist
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
