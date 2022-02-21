import Home from '../views/Home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/newpage',
    name: 'NewPage',
    component: () => import(/* webpackChunkName: "newpage" */ '../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import(/* webpackChunkName: "a" */ '../views/componentA.vue'),
      },
      {
        path: 'b',
        component: () => import(/* webpackChunkName: "b" */ '../views/componentB.vue'),
      },
    ],
  },
];
