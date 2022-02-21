<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'NewPage' }" class="nav-link">New Page</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'NamedView' }" class="nav-link">Named View Page</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container" style="height: 300vh">
    <router-view />
  </div>
  <router-link to="/newpage/routerNavigation">/newPage/routerNavigation</router-link>
</template>

<style lang="scss">
body {
  padding-top: 80px;
}
</style>
