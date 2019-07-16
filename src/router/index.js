import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'
import home from '@/components/home'
import productxq from '@/components/product/productxq'
import Exmain from '@/components/product/Exhibition/Exmain'
import Wkmain from '@/components/product/Works/Wkmain'
import Wkjingxuan from '@/components/product/Works/Wkjingxuan'
import Wkzhekou from '@/components/product/Works/Wkzhekou'
import Wkgongsi from '@/components/product/Works/Wkgongsi'
import Wkhuodong from '@/components/product/Works/Wkhuodong'
import search from '@/components/home/search'
import navPages from '@/components/nav/navPages'
import Pictures from '@/components/nav/Pictures'
Vue.use(VueRouter)
const router = new VueRouter({

  routes: [{
      path: '/home',
      component: productxq
      // ,children:[
      //   {
      //     path:"/productxq",
      //     component:home
      //   }
      // ]
    },
    {
      path: '/navPages',
      component: navPages
    },
    {
      path: '/',
      component: home
    },
    {
      path: '/Pictures',
      component: Pictures
    },
    {
      path: '/jianjie',
      component: Exmain
    },
    {
      path: '/jianjie/jingpin:id',
      name: 'jingpin',
      component: Exmain
    },
    {
      path: '/jianjie/Wkmain',
      component: Wkmain
    }, {
      path: '/zuopinjingxuan',
      component: Wkjingxuan
    }, {
      path: '/jingpinzhekou',
      component: Wkzhekou,

    }, {
      path: '/gongsijianjie',
      component: Wkgongsi
    }, {
      path: '/youhuihuodong',
      component: Wkhuodong
    }, {
      path: '/search',
      component: search
    }
  ],
 //mode: 'history'

})

;
router.afterEach((to, from) => {
  // ...
  window.scroll(0, 0);
})
export default router;
