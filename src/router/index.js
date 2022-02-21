import { createRouter, createWebHashHistory } from 'vue-router';

import mainRouter from './mainRouter';

const routes = [...mainRouter];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => {
    console.log(to, from, savedPosition);
    if (to.fullPath.match('newpage')) {
      return { top: 0 };
    }
    return {
      // top: 500,
    };
  },
});

export default router;
