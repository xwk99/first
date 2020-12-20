<template>
   <div>
       <div v-for="(item, index) of list" :key="index">
           <div class="first-title">{{item.title}}</div>
           <div v-if="item.content" class="second-title">
               <detail-list :list="item.content"></detail-list>
           </div>
       </div>
   </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    .first-title
        font-size: .4rem
        padding-top: .32rem
        padding-left: .16rem
    .second-title >>> .first-title
        font-size: .32rem
    .second-title
        padding-left: .16rem
</style>
