import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/film'
import Hezu from '@/views/hezu'
import Shaixuan from '@/views/shaixuan'
import Shangxia from '@/views/shangxia'
import Weizhi from '@/views/weizhi'
import Zujin from '@/views/zujin'
import Detail from '@/views/detail'
import Hezutail from '@/views/hezutail'
import Facetail from '@/views/facetail'
import Featuretail from '@/views/featuretail'
import Leasetypetail from '@/views/leasetypetail'
import Tagtail from '@/views/tagtail'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/film',
      component: Film
    },
    {
      path: '/hezu',
      component: Hezu
    },
    {
      name: 'hezutail',
      path: '/hezutail/:value',
      component: Hezutail
    }, 
    {
      name: 'facetail',
      path: '/facetail/:value',
      component: Facetail
    },
    {
      name: 'featuretail',
      path: '/featuretail/:value',
      component: Featuretail
    },
    {
      name: 'tagtail',
      path: '/tagtail/:value',
      component: Tagtail
    },
    {
      name: 'leasetypetail',
      path: '/leasetypetail/:value',
      component: Leasetypetail
    },
    {
      path: '/shaixuan',
      component: Shaixuan
    },
    {
      name: 'mydetail',
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '/shangxia',
      component: Shangxia
    },
    {
      path: '/weizhi',
      component: Weizhi
    },
    {
      path: '/zujin',
      component: Zujin
    },
    {
      path: '/',
      redirect: '/film'
    }
  ]
})

export default router
