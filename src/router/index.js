import { createRouter, createWebHashHistory } from 'vue-router';

import mainRouter from './mainRouter';

const routes = [...mainRouter];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
