<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "this is Blog Page",
    };
  },
  name: `Blog`,
};
</script>
