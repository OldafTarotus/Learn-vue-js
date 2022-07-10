<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Hiho />
  </div>
</template>

<script>
// @ is an alias to /src
import Hiho from "@/components/WelcomeMessage.vue";

export default {
  name: `about`,
  components: {
    Hiho,
  },
};
</script>
