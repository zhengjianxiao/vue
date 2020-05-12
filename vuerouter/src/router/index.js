import Router from 'vue-router'
import vue from 'vue'
// import home from '../components/home'
// import test from '../components/test'
// import about from '../components/about'
// import user from '../components/user'

const home = () => import('../components/home')
const test = () => import('../components/test')
const about = () => import('../components/about')
const user = () => import('../components/user')
const news = () => import('../components/new')
const message = () => import('../components/message')
vue.use(Router)
const routes = [{
  path: '/', 
  redirect: '/home'
},
{
  path: '/home', 
  component: home,
  meta:{
    title: 'Home'
  },
  children: [
    // {
    //   path: '/', 
    //   redirect: 'news'
    // },
    {
    path: 'news',
    component: news
  },
  {
    path: 'message',
    component: message
  }
]
},
{
  path: '/test', 
  component: test,
  meta:{
    title: 'test'
  },
},
{
  path: '/about', 
  component: about,
  meta:{
    title: 'about'
  },
},
{
  path: '/user/:userId', 
  component: user,
  meta:{
    title: 'user'
  },
}


]

const router = new Router({
  routes,
  mode: "history"
})


router.beforeEach((to , from , next) => {
  next();
  document.title = to.matched[0].meta.title;
  //console.log(to)
})


export default router