<template>
  <div>
    <v-header></v-header>
    <router-link to="/a">显示a页面</router-link>
    <router-link to="/b">显示b页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import vHeader from './Header.vue'
import {mapGetters} from 'vuex'
  export default {
    data () {
      return {}
    },
    components: {
      vHeader
    },
    computed: {
      ...mapGetters({

      })
    }
  }

</script>

<style>

</style>
