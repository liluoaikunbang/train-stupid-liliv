import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component:()=>import("../views/Layout.vue"),
    redirect:"/index", // 重定向到指定链接
    //嵌套路由
    children:[
      {
        path:"/index",
        name:"index",
        component:()=>import("../views/pages/Index.vue")
      },
      {
        path:"/existed",
        name:"lili_existed",
        component:()=>import("../views/pages/LiLiExisted.vue")
      },
      {
        path:"/purchased",
        name:"lili_purchased",
        component:()=>import("../views/pages/LiLiPurchased.vue")
      },
      {
        path:"/trained",
        name:"lili_trained",
        component:()=>import("../views/pages/LiLiTrained.vue")
      },
      {
        path:"/sold",
        name:"lili_sold",
        component:()=>import("../views/pages/LiLiSold.vue")
      },
      {
        path:"/help",
        name:"help",
        component:()=>import("../views/pages/Help.vue")
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
