import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/subscribers',
      name: 'subscribers.index',
      component: () => import('../views/SubscribersView.vue')
    },
    {
      path: '/subscribers/create',
      name: 'subscribers.create',
      component: () => import('../views/SubscriberCreateView.vue')
    },
    {
      path: '/subscribers/:id',
      name: 'subscribers.edit',
      component: () => import('../views/SubscriberEditView.vue')
    },
    {
      path: '/subscribers/:id/fields',
      name: 'subscribers.fields.index',
      component: () => import('../views/SubscriberFieldsView.vue')
    },
    {
      path: '/fields',
      name: 'fields.index',
      component: () => import('../views/FieldsView.vue')
    },
    {
      path: '/fields/create',
      name: 'fields.create',
      component: () => import('../views/FieldCreateView.vue')
    },
    {
      path: '/fields/:id',
      name: 'fields.edit',
      component: () => import('../views/FieldEditView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  if (!authStore.isLoggedIn && to.path !== '/login') {
    return '/login';
  }
});

export default router;
