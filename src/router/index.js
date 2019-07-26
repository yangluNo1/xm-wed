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
import errors from '@/components/Error'
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
      ,meta:{
        title:'卡卡全球旅拍',
        content:'卡卡全球旅拍'
      }
    },
    {
      path: '/navPages',
      component: navPages,
      meta:{
          title:'婚礼策划',
          content:'婚礼策划'
      }
    },
    {
      path: '/',
      component: home,
      meta:{
        title:'首页',
        content:'首页'
      }
    },
    {
      path: '/Pictures',
      component: Pictures,
      meta:{
        title:'精选美图',
        title:'精选美图'
      }
    },
    {
      path: '/jianjie',
      component: Exmain,
      meta:{
        title:''
      }
    },
    {
      path: '/jianjie/jingpin:id',
      name: 'jingpin',
      component: Exmain,
      meta:{
        title:'商品简介',
        keepAlive:true
      }
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
      component: search,
      meta:{
        title:'商品搜索'
      }
    },{
      path:'*',
      component:errors,
      meta:{
        title:"404网页错误",
        content:'404网页错误'
      }
    }
  ],
 mode: 'history'

})
router.afterEach((to, from) => {
  // ...
  window.scroll(0, 0);
})
router.beforeEach((to, from, next) => {
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title =to.meta.title+'-卡卡全球旅拍';
  }
  next()
  // if(this.router.params==null){
  //   this.router.path='*';
  // }
});
export default router;
