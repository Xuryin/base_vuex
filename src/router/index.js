import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import A from '@/components/a'
import B from '@/components/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'a',
          name: 'a',
          component: A
        },
        {
          path: 'b',
          name: 'b',
          component: B
        }
      ]
    }
  ]
})
