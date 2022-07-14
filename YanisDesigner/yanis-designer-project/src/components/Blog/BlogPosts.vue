<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content }}</p>
    <div class="row">
      <div class="author-left">
        <span class="post-author">{{ author }}</span>
      </div>
      <div class="name-right">
        <span class="post-category">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: `post`,
};
</script>

<style lang="scss" scoped>
.post-box {
  text-align: left;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 15px #ddd;
  position: relative;
  margin-bottom: 20px;
  .post-views {
    position: absolute;
    top: 5px;
    right: 10px;
    background-color: green;
    border-radius: 3px;
    padding: 3px;
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .post-title {
    color: black;
    font-size: 25px;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: lightslategray;
    font-size: 15px;
  }
  .post-content {
    line-height: 1.7;
    color: dimgrey;
  }
  .author-left {
    text-align: left;
  }
  .post-author {
    background-color: #607d8b;
    color: white;
    padding: 6px 10px;
    border-radius: 3px;
  }
  .name-right {
    text-align: right;
  }
  .post-category {
    background-color: rgb(215, 23, 119);
    color: white;
    padding: 6px 10px;
    border-radius: 3px;
    text-align: center;
  }
}
</style>
