import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: route => 'TwNode Vue Client',
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue'),
    meta: {
      title: route => 'TwNode Search',
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: route => 'TwNode Vue Login',
      hideForAuth: true
    }
  },
  {
    path: '/:username',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      title: route => `Perfil de ${route.params.username}`,
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title(to)
  })
})

router.beforeEach((to, from, next) =>{
  axios.get('http://localhost:3000', { withCredentials: true })
  .then(response => {
    if(response.data.code === 403 && response.data.success === 'Already Logged'){
      if(to.matched.some(record => record.meta.hideForAuth))
        next({path: '/'});
      else if(to.matched.some(record => record.meta.requiresAuth))
        next();
    }else{
      next();
    }    
    
    if(response.data.code === 403 && response.data.success === 'Must be logged'){
      if(to.matched.some(record => record.meta.hideForAuth))
        next();
      else if(to.matched.some(record => record.meta.requiresAuth))
        next({path: '/login'});
    }else
      next();
  })
  .catch(err => {
    console.log(err);
  })
})

export default router
