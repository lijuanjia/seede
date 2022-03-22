import Vue from 'vue'
import Router from 'vue-router'
import main from '@/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'seede/index',
      component: main,
      children:[
        {
          path:'seede/index',
          name:'index',
          component:main
        }
      ]
    }
  ]
})
