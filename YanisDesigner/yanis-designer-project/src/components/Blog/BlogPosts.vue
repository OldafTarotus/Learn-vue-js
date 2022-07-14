<template>
  <div class="post-box">
    <span class="post-views">10</span>
    <h3 class="post-title">Blog Post Title</h3>
    <span class="post-date">07/13-2022</span>
    <p class="post-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      expedita minima aspernatur, quisquam optio fugiat earum consequuntur ex
      magni esse laborum deleniti! Fugiat, porro. Corporis quibusdam nisi
      repellat cumque maxime?
    </p>
    <div class="row">
      <div class="author-left">
        <span class="post-author">Post Author</span>
      </div>
      <div class="name-right">
        <span class="post-category">Category Name</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
