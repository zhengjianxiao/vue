import Vue from 'vue'
import Router from 'vue-router'
import home from 'view/home'
import catgrory from 'view/catgrory'
import shopcar from 'view/shopcar'
import profile from 'view/profile'
Vue.use(Router)
const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    meta : {
      title: 'Home'
    }
  },
  {
    path: '/catgrory',
    component: catgrory,
    meta : {
      title: 'Catgrory'
    }
  },
  {
    path: '/shopcar',
    component: shopcar,
    meta : {
      title: 'Shopcar'
    }
  },
  {
    path: '/profile',
    component: profile,
    meta : {
      title: 'Profile'
    }
  }

]
const router = new Router({
  routes,
  mode : "history"
});

router.beforeEach((to , from , next) => {
  console.log(to)
  document.title = to.matched[0].meta.title
  next();
})

export default router;
