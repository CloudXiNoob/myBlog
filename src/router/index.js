import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/admin/Login'
import Admin from '@/admin/admin'
const adminArticle=resolve=>require(['@/admin/adminArticle'],resolve);
const adminArticleList=resolve=>require(['@/admin/adminArticleList'],resolve);

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: './',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      redirect: {name:adminArticle},
      children:[
        {path:'adminArticle',name:'adminArticle',component:adminArticle},
        {path:'adminArticleList',name:'adminArticleList',component:adminArticleList},
      ]
    }
  ]
})
