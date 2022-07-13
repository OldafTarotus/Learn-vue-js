<template>
  <div class="header">
    <div class="container">
      <div class="logo">Oldaf Vue Project</div>
      <ul class="text-right">
        <router-link to="/" exact>
          <a>Home</a>
        </router-link>
        |
        <router-link to="/about" replace>
          <a>About</a>
        </router-link>
        |
        <router-link to="/Products">
          <a>Product</a>
        </router-link>
        |
        <router-link to="/Blog">
          <a>Blog</a>
        </router-link>
        |
        <router-link to="/Help">
          <a>Help</a>
        </router-link>
        |
        <router-link to="/Research">
          <a>Research</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
}
.logo {
  font-size: 20px;
  width: 200px;
  float: left;
  padding: 20px;
}
a {
  text-decoration: none;
  color: white;
  display: inline-block;
  margin: 0 auto;
}
</style>
