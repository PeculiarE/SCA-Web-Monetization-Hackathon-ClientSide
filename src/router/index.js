import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/general/HomePage.vue'),
    meta: { guestUser: true },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/general/SignUp.vue'),
    meta: { guestUser: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/general/Login.vue'),
    meta: { guestUser: true },
  },
  {
    path: '/schools',
    name: 'AllSchools',
    component: () => import('../views/general/AllSchools.vue'),
  },
  {
    path: '/user/dashboard',
    name: 'Dashboard',
    component: () => import('../views/school_owner/Dashboard.vue'),
    meta: { requiresApplyAuthTest: true },
  },
  {
    path: '/user/add-school',
    name: 'AddSchool',
    component: () => import('../views/school_owner/AddSchool.vue'),
    meta: { requiresApplyAuthTest: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresApplyAuthTest)) {
    // await store.dispatch('userApplyPage');
    if (store.getters.loggedInStatus) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guestUser)) {
    if (store.getters.loggedInStatus) {
      next('/user/dashboard');
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
