import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import store from '@/store'

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
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
    meta: {
      title: route => 'TwNode Vue SignUp',
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

router.beforeEach(async (to, from, next) =>{
  const user = localStorage.getItem('user');
  //Si el localStorage user no existe es xq no se ha logueado
  if(user === null){
    //Si la url a la que intenta entrar se debe ocultar si ya esta logueado
    //En este caso se debe mostrar, asi que pasa limpia next
    if(to.matched.some(record => record.meta.hideForAuth))
      next();
    //Si la url a la que se intenta entrar, necesita loguear, se redirecciona al login
    else if(to.matched.some(record => record.meta.requiresAuth))
      next({path: '/login'});
  }else{
    //Si la url a la que intenta entrar se debe ocultar si ya esta logueado, se redirecciona a la raiz
    if(to.matched.some(record => record.meta.hideForAuth))
      next({path: '/'});
    //Si la url a la que se intenta entrar, necesita loguear, se deja pasar
    else if(to.matched.some(record => record.meta.requiresAuth))
      next();
  }
})

export default router
