// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(ElementUI);
Vue.use(mavonEditor);

// router.beforeEach(({name},from,next) => {
//   if(localStorage.getItem('token')){
//     if(name === 'login'){
//       next('/');
//     }else {
//       next();
//     }
//   }else {
//     if(name === 'login'){
//       next();
//     }else {
//       next({name:'login'});
//     }
//   }
// });

// axios.interceptors.request.use(
//   config => {
//     if(localStorage.token){
//       config.headers.Authorization = `token ${localStorage.token}`
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       console.log('axios:' + error.response.status);
//       switch (error.response.status) {
//         case 401:
//           // 返回 401 清除token信息并跳转到登录页面
//           store.commit('LOG_OUT');
//           router.replace({
//             path: 'login',
//             query: {redirect: router.currentRoute.fullPath}
//           });
//       }
//     }
//     return Promise.reject(error.response.data);   // 返回接口返回的错误信息
//   });




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})