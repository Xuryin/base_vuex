<template>
  <div>
    这个就是a页面
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters, mapActions, mapMutations, store} from 'vuex'

  export default {
    data () {
      return {
        title: '这个是a页面的标题'
      }
    },
    methods: {
      ...mapMutations({
        setTitle: 'SET_TITLE'
      })
    },
    mounted() {
       this.setTitle(this.title)
    }
  }
</script>

<style>

</style>
