<template>
  <div class="header_page">
    <span>{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      title: 'title'
    })
  }
}
</script>

<style>
 .header_page {
   height: 3rem;
   width: 100%;
   background-color: #666666;
 }

  span {
    color: #ffffff;
    line-height: 3rem;
  }
</style>
