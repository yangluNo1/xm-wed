import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home'
import productxq from '@/components/product/productxq'
import Exmain from '@/components/product/Exhibition/Exmain'
import Wkmain from '@/components/product/Works/Wkmain'


Vue.use(VueRouter)

  export default new VueRouter({
  
    routes: [
      {
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
        path: '/',
        component: home
      },
      {
        path: '/jianjie',
        component: Exmain
      },
      {
        path: '/jianjie/jingpin',
        component: Exmain
      },
      {
        path: '/jianjie/Wkmain',
        component: Wkmain
      }
    ],
    mode:'history'
    
  }
  )

