<template>
  <button type="button" @click="getRoute">getRoute</button>
  <button type="button" @click="push">Push</button>
  <button type="button" @click="replace">Replace</button>
  <button type="button" @click="go">Go</button>

  <hr />
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄
    push() {
      // this.$router.push('/newpage/dynamicRouter/d74c3705677f9dfb');
      this.$router.push({
        name: 'About',
      });
    },

    // 沒有歷史紀錄
    replace() {
      this.$router.replace({
        name: 'About',
      });
    },

    // 操作歷史紀錄
    go() {
      this.$router.go(-1);
    },

    getRoute() {
      // console.log('this.$route', this.$route);

      console.log('this.$router', this.$router);
    },

    addRoute() {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import(/* webpackChunkName: "about" */ './About.vue'),
      });
    },
  },
};
</script>
