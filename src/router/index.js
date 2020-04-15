import Vue from 'vue'
import Router from 'vue-router'
import PrincipalSheet from '@/pages/homePage/principalSheet'
import Sheetchildren from '@/pages/homePage/sheetchildren'

Vue.use(Router)

export default new Router({
  routes: [
    // 默认主页面
    {
      path: '/',
      redirect: 'PrincipalSheet'
    },
    {
      path: '/principalSheet',
      name: 'PrincipalSheet',
      component: PrincipalSheet
    },
    {
      path: '/sheetchildren',
      name: 'Sheetchildren',
      component: Sheetchildren
    }
  ]
})
