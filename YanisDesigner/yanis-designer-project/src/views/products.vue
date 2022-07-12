<template>
  <div class="product-service">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Products",
      pageDescription: "This is Product Page",
    };
  },
  name: `products`,
};
</script>
