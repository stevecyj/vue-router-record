<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" href="#" class="list-group-item list-group-item-action">
          元件 A
        </router-link>
        <router-link to="/newpage/b" href="#" class="list-group-item list-group-item-action">
          元件 B </router-link
        ><router-link
          to="/newpage/namedView/c2a"
          href="#"
          class="list-group-item list-group-item-action"
        >
          命名視圖 c2a </router-link
        ><router-link
          to="/newpage/namedView/a2b"
          href="#"
          class="list-group-item list-group-item-action"
        >
          命名視圖 a2b
        </router-link>
        <router-link
          to="/newpage/dynamicRouter/d74c3705677f9dfb"
          href="#"
          class="list-group-item list-group-item-action"
        >
          動態路由($route)
        </router-link>
        <router-link
          to="/newpage/dynamicRouterByProps/d74c3705677f9dfb"
          href="#"
          class="list-group-item list-group-item-action"
        >
          動態路由(props)
        </router-link>
        <router-link
          to="/newpage/routerNavigation"
          href="#"
          class="list-group-item list-group-item-action"
        >
          Router Navigation
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
