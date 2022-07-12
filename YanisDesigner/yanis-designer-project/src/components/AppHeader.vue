<template>
  <div class="header">
    <div class="logo">Oldaf Vue Project</div>
    <ul class="nav">
      <router-link to="/" exact>
        <a>Home</a>
      </router-link>
      |
      <router-link to="/about" replace>
        <a>About</a>
      </router-link>
      |
      <router-link to="/help">
        <a>help</a>
      </router-link>
      |
      <router-link to="/products">
        <a>Product</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
