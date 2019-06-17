import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl'

Vue.use(VueRouter); // 全局注册
Vue.use(VueResource);

let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass: 'active'
});

router.map({  // 定于路由路径
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});

router.start(app, '#app'); // 启动路由挂载在#app下
router.go('/goods'); // 默认跳转路由

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {App},
//   template: '<App/>'
// })

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
// import App from './App';
// import goods from 'components/goods/goods';
// import ratings from 'components/ratings/ratings';
// import seller from 'components/seller/seller';
//
// import 'common/stylus/index.styl';
//
// Vue.use(VueRouter);
// Vue.use(VueResource);
//
// let app = Vue.extend(App);
//
// let router = new VueRouter({
// 	linkActiveClass: 'active'
// });
//
// router.map({
// 	'/goods': {
// 		component: goods
// 	},
// 	'/ratings': {
// 		component: ratings
// 	},
// 	'seller': {
// 		component: seller
// 	}
// });
//
// router.start(app, '#app');
// router.go('/goods');
