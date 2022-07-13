<template>
  <h1>{{ pageName }}</h1>
  <p>{{ pageDescription }}</p>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Researching Page",
      pageDescription: "This Is Researching Page",
    };
  },
  name: `Research`,
};
</script>
