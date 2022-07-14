<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              v-bind:key="post.id"
              v-bind:views="post.views"
              v-bind:title="post.title"
              v-bind:date="post.date"
              v-bind:content="post.content"
              v-bind:author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "../components/Blog/BlogPosts.vue";
import BlogSidebar from "../components/Blog/BlogSidebar.vue";
import JsonPosts from "../json/MOCK_DATA.json";
export default {
  data: function () {
    return {
      pageName: "Blog",
      pageDescription: "this is Blog Page",
      posts: JsonPosts,
    };
  },
  name: `Blog`,
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>
