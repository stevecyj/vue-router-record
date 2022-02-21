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
      {
        path: 'dynamicRouter/:id',
        component: () =>
          import(/* webpackChunkName: "DynamicRouter" */ '../views/DynamicRouter.vue'),
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: () =>
          import(/* webpackChunkName: "DynamicRouter" */ '../views/DynamicRouterByProps.vue'),
        props: (route) => {
          console.log('route', route);
          return {
            id: route.params.id,
          };
        },
      },
      {
        path: 'routerNavigation',
        component: () =>
          import(/* webpackChunkName: "RouterNavigation" */ '../views/RouterNavigation.vue'),
      },
      {
        path: 'namedView',
        name: 'NamedView',
        component: () => import(/* webpackChunkName: "namedView" */ '../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import(/* webpackChunkName: "left" */ '../views/componentC.vue'),
              right: () => import(/* webpackChunkName: "right" */ '../views/componentA.vue'),
            },
          },
          {
            path: 'a2b',
            components: {
              left: () => import(/* webpackChunkName: "left" */ '../views/componentA.vue'),
              right: () => import(/* webpackChunkName: "right" */ '../views/componentB.vue'),
            },
          },
        ],
      },
    ],
  },
];
